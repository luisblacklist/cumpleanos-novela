// ═══════════════════════════════════════════════════
//  MOTOR DEL JUEGO — "Nuestro Bosque"
//  Este archivo NO hace falta tocarlo para escribir los
//  capítulos. Para eso están los archivos en /capitulos/
//  (arbol1.js, arbol2.js...) y NOMBRE_PAREJA aquí abajo en
//  index.html. Esto de aquí es el motor: arma el bosque,
//  el sistema de diálogo/personajes, el menú tipo RPG, la
//  intro con video y la música.
// ═══════════════════════════════════════════════════

const NOMBRE_PAREJA = window.NOMBRE_PAREJA || "Mi Amor";

// Los capítulos (arbol1.js ... arbol8.js) ya se cargaron antes que
// este archivo y fueron llenando window.ARBOLES. Aquí los tomamos.
const arboles = window.ARBOLES || [];

// ---- Ícono de cada árbol: usa tu imagen iconos/arbolN.png ----
function iconoArbol(indice, tituloAlt) {
  const numero = indice + 1;
  return `<img class="arbol-imagen" src="iconos/arbol${numero}.png" alt="${tituloAlt}" draggable="false">`;
}

// ---- Construir el bosque ----
const bosque = document.getElementById('bosque');
arboles.forEach((a, i) => {
  const btn = document.createElement('button');
  btn.className = 'arbol-btn';
  btn.setAttribute('aria-label', 'Abrir recuerdo: ' + a.titulo);
  btn.innerHTML = `
    <span class="arbol-numero">${i + 1}</span>
    ${iconoArbol(i, a.titulo)}
    <span class="arbol-titulo">${a.titulo}</span>
  `;
  btn.addEventListener('click', () => { reproducirClick(); abrirEscena(a, i); });
  bosque.appendChild(btn);
});

// ---- Escena tipo novela visual ----
const escena = document.getElementById('escena');
const escenaFondo = document.getElementById('escenaFondo');
const escenaPersonajes = document.getElementById('escenaPersonajes');
const escenaHablante = document.getElementById('escenaHablante');
const escenaEyebrow = document.getElementById('escenaEyebrow');
const escenaTitulo = document.getElementById('escenaTitulo');
const escenaTexto = document.getElementById('escenaTexto');
const escenaProgreso = document.getElementById('escenaProgreso');
const escenaContinuar = document.getElementById('escenaContinuar');
const escenaOpciones = document.getElementById('escenaOpciones');
const escenaCerrar = document.getElementById('escenaCerrar');

const VELOCIDAD_TIPEO = 26; // milisegundos por letra; súbelo para que vaya más lento

// Convierte el "mensaje" de un árbol en varias líneas de diálogo.
// - Si dejaste líneas en blanco entre párrafos, cada párrafo es una línea.
// - Si no, lo divide solo por oraciones para que no sea un bloque enorme.
function partirEnLineas(mensaje) {
  const porParrafo = mensaje.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
  if (porParrafo.length > 1) return porParrafo;

  const oraciones = mensaje.match(/[^.!?]+[.!?]+(\s+|$)/g);
  if (!oraciones || oraciones.length <= 1) return [mensaje.trim()];

  const lineas = [];
  let actual = '';
  oraciones.forEach(o => {
    actual += o;
    if (actual.trim().length > 70) {
      lineas.push(actual.trim());
      actual = '';
    }
  });
  if (actual.trim()) lineas.push(actual.trim());
  return lineas;
}

// Convierte "dialogo" (si existe) o si no "mensaje" en una lista
// de líneas homogénea: { texto, hablante, fondo, enEscena }
//  - hablante: id del personaje que habla, o null si es narración.
//  - fondo: opcional. Si no se pone, se mantiene el fondo anterior.
//           Puede ser una ruta de imagen, o "negro" para pantalla
//           negra (útil para sueños / momentos de despertar).
//  - enEscena: opcional, lista de ids de personajes visibles desde
//              esa línea en adelante. Si no se pone, se mantiene
//              el grupo anterior (no cambia quién se ve).
//  - musica: opcional, ruta a una canción (ej. "musica/festival.mp3").
//            Igual que el fondo, es "pegajosa": una vez que una línea
//            la define, sigue sonando hasta que otra línea la cambie.
//  - sonido: opcional, ruta a un efecto de sonido corto (ej.
//            "sonidos/timbre.mp3"). A diferencia de fondo/musica, NO
//            es pegajoso: suena una sola vez, justo cuando aparece
//            esa línea (sirve para timbres, puertas, lluvia empezando,
//            fuegos artificiales, etc.).
function prepararDialogo(arbol) {
  if (Array.isArray(arbol.dialogo) && arbol.dialogo.length) {
    return arbol.dialogo.map(linea => {
      if (typeof linea === 'string') return { texto: linea, hablante: null };
      return {
        texto: linea.texto || '',
        hablante: linea.hablante || null,
        fondo: linea.fondo,       // puede quedar undefined a propósito
        musica: linea.musica,     // puede quedar undefined a propósito
        sonido: linea.sonido,     // puede quedar undefined a propósito
        enEscena: linea.enEscena, // puede quedar undefined a propósito
        opciones: linea.opciones  // puede quedar undefined; ver más abajo cómo se usa
      };
    });
  }
  return partirEnLineas(arbol.mensaje).map(texto => ({ texto, hablante: null }));
}

// Crea el elemento visual de un personaje (sprite o silueta de relleno
// si la imagen todavía no existe / no se ha agregado). El orden en
// pantalla lo decide el flex del contenedor, no "lado".
function crearPersonajeEl(p) {
  const el = document.createElement('div');
  el.className = 'escena-personaje';
  el.dataset.id = p.id;

  if (p.sprite) {
    const prueba = new Image();
    prueba.onload = () => { el.style.backgroundImage = `url('${p.sprite}')`; };
    prueba.onerror = () => {
      el.classList.add('sin-sprite');
      el.textContent = (p.nombre || p.id || '?').trim().charAt(0).toUpperCase() || '?';
    };
    prueba.src = p.sprite;
  } else {
    el.classList.add('sin-sprite');
    el.textContent = (p.nombre || p.id || '?').trim().charAt(0).toUpperCase() || '?';
  }
  return el;
}

let lineasActuales = [];
let personajesActuales = null;
let indiceLinea = 0;
let tipeoTimer = null;
let escribiendo = false;
let mostrandoOpciones = false; // true mientras se esperan que toque un botón de opción

// Estado "pegajoso" dentro de una escena: una vez que una línea define
// el fondo o quiénes están visibles, se mantiene igual hasta que otra
// línea lo cambie explícitamente.
let fondoActualEscena = null;      // ruta de imagen, "negro", o null
let modoGrupalPersonajes = false;  // true si algún "dialogo" usa enEscena
let personajesVisibles = [];       // ids visibles en este momento
let musicaActualEscena = null;     // ruta de la canción actual dentro de la escena, o null
let musicaPersonalizadaEnEscena = false; // true si este capítulo cambió la música del bosque

function abrirEscena(arbol, indiceArbol) {
  lineasActuales = prepararDialogo(arbol);
  personajesActuales = Array.isArray(arbol.personajes) ? arbol.personajes : null;
  indiceLinea = 0;
  mostrandoOpciones = false;
  escenaOpciones.classList.remove('visible');
  escenaOpciones.innerHTML = '';

  // ¿Este capítulo controla quién se ve línea a línea (enEscena), o
  // simplemente muestra siempre a todos los personajes (modo simple)?
  modoGrupalPersonajes = lineasActuales.some(l => Array.isArray(l.enEscena));
  personajesVisibles = modoGrupalPersonajes
    ? []
    : (personajesActuales ? personajesActuales.map(p => p.id) : []);

  // sprites de personajes (si el capítulo tiene NPCs)
  escenaPersonajes.innerHTML = '';
  if (personajesActuales) {
    personajesActuales.forEach(p => escenaPersonajes.appendChild(crearPersonajeEl(p)));
  }

  escenaEyebrow.textContent = 'Capítulo ' + (indiceArbol + 1) + (arbol.fecha ? ' · ' + arbol.fecha : '');
  escenaTitulo.textContent = arbol.titulo;

  // fondo inicial: usa "fondoEscena" si el capítulo lo define (fondo de
  // escena completo, ej. un aula), si no la foto del recuerdo, si no
  // un degradado. Las líneas de "dialogo" pueden cambiarlo después.
  fondoActualEscena = arbol.fondoEscena || arbol.foto || null;
  aplicarFondoEscena(fondoActualEscena);

  // música inicial: usa "musica" si el capítulo lo define; si no,
  // sigue sonando la instrumental del bosque sin interrupciones.
  // Las líneas de "dialogo" pueden cambiarla después (ver mostrarLinea).
  musicaActualEscena = arbol.musica || null;
  musicaPersonalizadaEnEscena = false;
  if (musicaActualEscena) {
    reproducirPistaRuta(musicaActualEscena);
    musicaPersonalizadaEnEscena = true;
  }

  // puntitos de progreso, uno por línea de diálogo
  escenaProgreso.innerHTML = '';
  lineasActuales.forEach(() => {
    const p = document.createElement('span');
    escenaProgreso.appendChild(p);
  });

  escena.classList.add('abierta');
  document.body.style.overflow = 'hidden';
  mostrarLinea();
}

// Aplica un fondo a la escena: ruta de imagen, "negro" (pantalla
// negra, para sueños/despertares), o null/no-existe (degradado).
function aplicarFondoEscena(fondo) {
  if (fondo === 'negro') {
    escenaFondo.classList.remove('sin-foto');
    escenaFondo.classList.add('negro');
    escenaFondo.style.backgroundImage = '';
    return;
  }
  escenaFondo.classList.remove('negro');
  if (!fondo) {
    escenaFondo.classList.add('sin-foto');
    escenaFondo.style.backgroundImage = '';
    return;
  }
  const imgPrueba = new Image();
  imgPrueba.onload = () => {
    escenaFondo.classList.remove('sin-foto');
    escenaFondo.style.backgroundImage = `url('${fondo}')`;
  };
  imgPrueba.onerror = () => {
    escenaFondo.classList.add('sin-foto');
    escenaFondo.style.backgroundImage = '';
  };
  imgPrueba.src = fondo;
}

function mostrarLinea() {
  const puntos = escenaProgreso.children;
  for (let i = 0; i < puntos.length; i++) {
    puntos[i].classList.toggle('hecho', i < indiceLinea);
    puntos[i].classList.toggle('actual', i === indiceLinea);
  }

  const linea = lineasActuales[indiceLinea];
  // {NOMBRE} en cualquier texto se reemplaza por NOMBRE_PAREJA (la
  // editas una sola vez en index.html, es su nombre real, distinto
  // del nombre de jugadora que ella escribe al iniciar la partida)
  const texto = (linea.texto || '').replace(/\{NOMBRE\}/g, NOMBRE_PAREJA);

  // fondo pegajoso: si esta línea trae uno nuevo, se cambia; si no, sigue el anterior
  if (linea.fondo !== undefined && linea.fondo !== fondoActualEscena) {
    fondoActualEscena = linea.fondo;
    aplicarFondoEscena(fondoActualEscena);
  }

  // música pegajosa: igual que el fondo, si esta línea trae una nueva se cambia
  if (linea.musica !== undefined && linea.musica !== musicaActualEscena) {
    musicaActualEscena = linea.musica;
    reproducirPistaRuta(musicaActualEscena);
    musicaPersonalizadaEnEscena = true;
  }

  // efecto de sonido puntual: NO es pegajoso, suena una sola vez cada
  // vez que esta línea aparece (timbre, puerta, lluvia empezando...)
  if (linea.sonido) {
    reproducirEfecto(linea.sonido, 0.6);
  }

  // quiénes están visibles: igual, pegajoso salvo que esta línea lo cambie
  if (modoGrupalPersonajes && Array.isArray(linea.enEscena)) {
    personajesVisibles = linea.enEscena;
  }
  escenaPersonajes.querySelectorAll('.escena-personaje').forEach(el => {
    el.classList.toggle('oculto', !personajesVisibles.includes(el.dataset.id));
  });

  // nombre del hablante (si la línea tiene uno) arriba del texto.
  // El personaje con id "jugadora" es siempre la protagonista: usa el
  // nombre que la persona escribió al empezar la partida, no un
  // nombre fijo escrito en el capítulo.
  let nombreHablante = '';
  if (linea.hablante && personajesActuales) {
    const p = personajesActuales.find(x => x.id === linea.hablante);
    if (p) nombreHablante = (p.id === 'jugadora') ? nombreJugadora : (p.nombre || '');
  }
  escenaHablante.textContent = nombreHablante;
  escenaHablante.classList.toggle('visible', !!nombreHablante);

  // resalta al personaje que habla y atenúa a los demás
  escenaPersonajes.querySelectorAll('.escena-personaje').forEach(el => {
    el.classList.toggle('activo', !!linea.hablante && el.dataset.id === linea.hablante);
  });

  escenaTexto.textContent = '';
  escenaContinuar.classList.remove('visible');
  escribiendo = true;

  let i = 0;
  clearInterval(tipeoTimer);
  tipeoTimer = setInterval(() => {
    i++;
    escenaTexto.textContent = texto.slice(0, i);
    if (i >= texto.length) {
      clearInterval(tipeoTimer);
      finalizarTipeo(linea);
    }
  }, VELOCIDAD_TIPEO);
}

// Se llama una sola vez que el texto terminó de "escribirse" (ya sea
// solo o porque el toque lo completó de golpe). Si la línea trae
// "opciones", en vez del típico "toca para continuar" se muestran los
// botones para elegir; si no, sigue el flujo normal.
function finalizarTipeo(linea) {
  escribiendo = false;
  if (Array.isArray(linea.opciones) && linea.opciones.length) {
    mostrarOpciones(linea);
    return;
  }
  escenaContinuar.classList.add('visible');
  escenaContinuar.textContent = (indiceLinea === lineasActuales.length - 1)
    ? 'toca para cerrar este capítulo ▸'
    : 'toca para continuar ▸';
}

// Dibuja un botón por cada opción de la línea actual. mientras se
// muestran, el clic en cualquier parte de la escena NO avanza el
// diálogo: hay que tocar una opción para seguir (ver avanzar()).
function mostrarOpciones(linea) {
  mostrandoOpciones = true;
  escenaOpciones.innerHTML = '';
  linea.opciones.forEach(op => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'escena-opcion-btn';
    btn.textContent = op.texto;
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // que no dispare también el avanzar() de la escena
      reproducirClick();
      elegirOpcion(op);
    });
    escenaOpciones.appendChild(btn);
  });
  escenaOpciones.classList.add('visible');
}

// Al elegir: se cierran los botones y, si la opción trae "reaccion"
// (una línea, o varias), se insertan justo después de la línea actual
// para que se vean antes de seguir con el resto del capítulo.
function elegirOpcion(op) {
  mostrandoOpciones = false;
  escenaOpciones.classList.remove('visible');
  escenaOpciones.innerHTML = '';

  const reaccion = Array.isArray(op.reaccion) ? op.reaccion : (op.reaccion ? [op.reaccion] : []);
  if (reaccion.length) {
    lineasActuales.splice(indiceLinea + 1, 0, ...reaccion);
    sincronizarProgreso();
  }
  indiceLinea++;
  mostrarLinea();
}

// Si una opción insertó líneas nuevas, agrega los puntitos de progreso
// que faltan para que sigan calzando con lineasActuales.length.
function sincronizarProgreso() {
  for (let i = escenaProgreso.children.length; i < lineasActuales.length; i++) {
    escenaProgreso.appendChild(document.createElement('span'));
  }
}

function avanzar() {
  if (mostrandoOpciones) return; // hay que tocar un botón de opción, no cualquier parte
  reproducirClick();
  if (escribiendo) {
    // si aún está "escribiendo", el primer toque completa la línea de una vez
    clearInterval(tipeoTimer);
    const linea = lineasActuales[indiceLinea];
    escenaTexto.textContent = (linea.texto || '').replace(/\{NOMBRE\}/g, NOMBRE_PAREJA);
    finalizarTipeo(linea);
    return;
  }
  if (indiceLinea < lineasActuales.length - 1) {
    indiceLinea++;
    mostrarLinea();
  } else {
    cerrarEscena();
  }
}

function cerrarEscena() {
  clearInterval(tipeoTimer);
  mostrandoOpciones = false;
  escenaOpciones.classList.remove('visible');
  escena.classList.remove('abierta');
  document.body.style.overflow = '';

  // si este capítulo puso su propia música, al cerrar volvemos a la
  // instrumental del bosque (si el capítulo no tocó la música, no
  // hace falta hacer nada: la instrumental nunca dejó de sonar).
  if (musicaPersonalizadaEnEscena) {
    reproducirPista(musicaInstrumental, 0.55);
    musicaPersonalizadaEnEscena = false;
  }
}

escena.addEventListener('click', (e) => {
  if (e.target === escenaCerrar) return; // el botón cerrar tiene su propio handler
  avanzar();
});
escenaCerrar.addEventListener('click', (e) => {
  e.stopPropagation();
  cerrarEscena();
});
document.addEventListener('keydown', (e) => {
  if (!escena.classList.contains('abierta')) return;
  if (e.key === 'Escape') cerrarEscena();
  if (e.key === 'Enter' || e.key === ' ') avanzar();
});

// ---- Menú RPG: navegación, nombre del jugador + iniciar música ----
const musicaIntro = document.getElementById('musicaIntro');
const musicaInstrumental = document.getElementById('musicaInstrumental');
const musicaEscena = document.getElementById('musicaEscena');
const musicaToggle = document.getElementById('musicaToggle');
const rpgPantalla = document.getElementById('rpgPantalla');
const rpgMenuPrincipal = document.getElementById('rpgMenuPrincipal');
const rpgPantallaNombre = document.getElementById('rpgPantallaNombre');
const rpgPantallaCreditos = document.getElementById('rpgPantallaCreditos');
const rpgPantallaIntro = document.getElementById('rpgPantallaIntro');
const rpgIntroVideo = document.getElementById('rpgIntroVideo');
const rpgIntroIniciar = document.getElementById('rpgIntroIniciar');
const rpgIntroVolver = document.getElementById('rpgIntroVolver');
const rpgMenu = document.getElementById('rpgMenu');
const rpgInputNombre = document.getElementById('rpgInputNombre');
const rpgConfirmarNombre = document.getElementById('rpgConfirmarNombre');
const rpgVolverDesdeNombre = document.getElementById('rpgVolverDesdeNombre');
const rpgVolverDesdeCreditos = document.getElementById('rpgVolverDesdeCreditos');
const heroTitulo = document.getElementById('heroTitulo');
const hud = document.getElementById('hud');
const hudNombre = document.getElementById('hudNombre');

// segundos que tarda en aparecer el botón "Iniciar" en la intro
const ESPERA_BOTON_INICIAR = 10000;
let temporizadorIntro = null;
let audioActivo = null; // pista que controla el botoncito ♪ en cada momento

// Cambia la música que suena, pausando la anterior (si había otra)
function reproducirPista(audio, volumen = 0.55) {
  if (audioActivo && audioActivo !== audio) audioActivo.pause();
  audioActivo = audio;
  audio.volume = volumen;
  audio.currentTime = 0;
  audio.play().catch(() => {
    // si el navegador bloquea el autoplay, se puede reanudar con el botón ♪
    musicaToggle.classList.add('pausado');
  });
  musicaToggle.classList.remove('pausado');
}

// Igual que reproducirPista, pero recibe directamente una ruta de
// archivo (ej. "musica/festival.mp3") y la pone en el <audio> de
// escena reutilizable, en vez de necesitar un <audio> fijo en el HTML.
// Así cada capítulo puede usar su propia canción sin tener que agregar
// una etiqueta <audio> nueva por cada una.
function reproducirPistaRuta(ruta, volumen = 0.5) {
  if (!ruta) return;
  if (musicaEscena.getAttribute('src') !== ruta) {
    musicaEscena.setAttribute('src', ruta);
  }
  reproducirPista(musicaEscena, volumen);
}

// ---- Efectos de sonido cortos (click, timbre, puerta, lluvia...) ----
// A diferencia de la música, estos NO se controlan con el botón ♪ ni se
// pausan entre sí: cada uno es un sonidito de una sola vez que no
// interrumpe lo que esté sonando de fondo. Si el archivo no existe
// todavía, simplemente no suena nada (no rompe el juego).
function reproducirEfecto(ruta, volumen = 0.6) {
  if (!ruta) return;
  try {
    const efecto = new Audio(ruta);
    efecto.volume = volumen;
    efecto.play().catch(() => {});
  } catch (err) { /* navegador sin soporte de audio: se ignora */ }
}

// El clic/toque genérico de la interfaz. Guarda tu sonido como
// "sonidos/click.mp3" (o cambia la ruta aquí si preferís otro nombre).
function reproducirClick() {
  reproducirEfecto('sonidos/click.mp3', 0.35);
}

function mostrarPantallaRPG(id) {
  rpgPantallaIntro.classList.remove('activa');
  document.querySelectorAll('.rpg-escena-interna').forEach(el => el.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
  if (id === 'rpgPantallaNombre') {
    setTimeout(() => rpgInputNombre.focus(), 150);
  }
}

// -- navegación del menú principal (mouse + teclado) --
const itemsMenu = Array.from(rpgMenu.querySelectorAll('li'));
let indiceMenu = 0;

function actualizarSeleccion() {
  itemsMenu.forEach((li, i) => li.classList.toggle('seleccionado', i === indiceMenu));
}

function activarOpcion(li) {
  if (!li || li.classList.contains('deshabilitado')) return;
  const accion = li.dataset.accion;
  if (accion === 'nueva') mostrarPantallaRPG('rpgPantallaNombre');
  if (accion === 'creditos') mostrarPantallaRPG('rpgPantallaCreditos');
}

itemsMenu.forEach((li, i) => {
  li.addEventListener('mouseenter', () => { indiceMenu = i; actualizarSeleccion(); });
  li.addEventListener('click', () => activarOpcion(li));
});

document.addEventListener('keydown', (e) => {
  if (rpgPantalla.classList.contains('oculta')) return;
  if (!rpgMenuPrincipal.classList.contains('activa')) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    do { indiceMenu = (indiceMenu + 1) % itemsMenu.length; }
    while (itemsMenu[indiceMenu].classList.contains('deshabilitado'));
    actualizarSeleccion();
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    do { indiceMenu = (indiceMenu - 1 + itemsMenu.length) % itemsMenu.length; }
    while (itemsMenu[indiceMenu].classList.contains('deshabilitado'));
    actualizarSeleccion();
  }
  if (e.key === 'Enter') activarOpcion(itemsMenu[indiceMenu]);
});

rpgVolverDesdeNombre.addEventListener('click', () => mostrarPantallaRPG('rpgMenuPrincipal'));
rpgVolverDesdeCreditos.addEventListener('click', () => mostrarPantallaRPG('rpgMenuPrincipal'));

// -- confirmar nombre: pasa a la pantalla de introducción --
let nombreJugadora = 'Aventurera';

function mostrarIntro() {
  nombreJugadora = rpgInputNombre.value.trim() || 'Aventurera';

  document.querySelectorAll('.rpg-escena-interna').forEach(el => el.classList.remove('activa'));
  rpgPantallaIntro.classList.add('activa');

  // arranca el video de fondo en loop
  rpgIntroVideo.currentTime = 0;
  rpgIntroVideo.play().catch(() => {}); // si el navegador lo bloquea, igual se ve el fondo oscuro

  // arranca la música de la intro (Mundo1Voce)
  reproducirPista(musicaIntro, 0.6);

  // el botón "Iniciar" aparece recién a los 10 segundos
  rpgIntroIniciar.classList.remove('visible');
  clearTimeout(temporizadorIntro);
  temporizadorIntro = setTimeout(() => {
    rpgIntroIniciar.classList.add('visible');
  }, ESPERA_BOTON_INICIAR);
}

// -- botón "Iniciar": cierra la intro y empieza la partida --
function comenzarPartida() {
  rpgIntroVideo.pause();

  heroTitulo.innerHTML = `${escaparHTML(nombreJugadora)}, bienvenida a <em>nuestro bosque</em>`;
  hudNombre.textContent = nombreJugadora;
  hud.classList.add('visible');

  rpgPantalla.classList.add('oculta');
  rpgPantallaIntro.classList.remove('activa');

  // arranca la música instrumental (Mundo1Instrumental) para explorar
  reproducirPista(musicaInstrumental, 0.55);
}

function escaparHTML(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

rpgConfirmarNombre.addEventListener('click', mostrarIntro);
rpgInputNombre.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') mostrarIntro();
});

rpgIntroIniciar.addEventListener('click', () => {
  if (!rpgIntroIniciar.classList.contains('visible')) return; // aún no le toca aparecer
  comenzarPartida();
});

rpgIntroVolver.addEventListener('click', () => {
  clearTimeout(temporizadorIntro);
  rpgIntroVideo.pause();
  musicaIntro.pause();
  audioActivo = null;
  musicaToggle.classList.add('pausado');
  mostrarPantallaRPG('rpgMenuPrincipal');
});

musicaToggle.addEventListener('click', () => {
  if (!audioActivo) return;
  if (audioActivo.paused) {
    audioActivo.play().catch(() => {});
    musicaToggle.classList.remove('pausado');
  } else {
    audioActivo.pause();
    musicaToggle.classList.add('pausado');
  }
});

// ---- Luciérnagas de fondo ----
const contLuciernagas = document.getElementById('luciernagas');
const totalLuciernagas = window.innerWidth < 600 ? 14 : 26;
for (let i = 0; i < totalLuciernagas; i++) {
  const l = document.createElement('div');
  l.className = 'luciernaga';
  l.style.left = Math.random() * 100 + 'vw';
  l.style.top = Math.random() * 100 + 'vh';
  l.style.animationDelay = (Math.random() * 6) + 's, ' + (Math.random() * 3) + 's';
  l.style.animationDuration = (7 + Math.random() * 6) + 's, ' + (2.4 + Math.random() * 2) + 's';
  contLuciernagas.appendChild(l);
}
