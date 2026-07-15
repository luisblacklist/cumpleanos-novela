// ═══════════════════════════════════════════════════
//  CAPÍTULO 1 — ÁRBOL 1
//  Edita SOLO este archivo para cambiar el título, la foto,
//  el fondo, los personajes y el diálogo de este recuerdo.
//  No hace falta tocar motor.js ni estilo.css para nada de esto.
// ═══════════════════════════════════════════════════
//
//  CÓMO FUNCIONAN LAS LÍNEAS DE "dialogo" AQUÍ ABAJO:
//   - hablante: el "id" de quién habla (de la lista "personajes").
//               Si no habla nadie (narración), se deja en null.
//   - fondo: opcional. Cambia el fondo de la escena desde esa línea
//            en adelante. Puede ser una ruta de imagen (ej.
//            "fondos/aula1.jpg") o la palabra "negro" para una
//            pantalla negra (ideal para sueños / despertares).
//            Si no se pone, sigue el fondo anterior.
//   - enEscena: opcional. Lista de ids de quiénes se ven parados
//               en la escena desde esa línea en adelante (ej.
//               ["jugadora","diana"]). Si no se pone, se mantiene
//               el mismo grupo que ya estaba.
//
window.ARBOLES = window.ARBOLES || [];
window.ARBOLES[0] = {
  titulo: "Bienvenida",
  fecha: "",
  foto: "fotos/arbol1.jpg",

  // Fondo por defecto de la escena (se puede pisar por línea con "fondo")
  fondoEscena: "fondos/aula1.jpg",

  // Elenco de este capítulo. Falta la foto de casi todos — mientras
  // no se agregue el "sprite" de cada uno, se ve una silueta con su
  // inicial (no rompe nada, es solo para ir probando el capítulo).
  personajes: [
    { id: "jugadora", nombre: "", sprite: "personajes/jugadora.png" },
    { id: "profesor_leonidas", nombre: "Profesor Leonidas", sprite: "personajes/profesor_leonidas.png" },
    { id: "elizabeth", nombre: "Elizabeth", sprite: "personajes/elizabeth.png" },
    { id: "diana", nombre: "Diana", sprite: "personajes/diana.png" },
    { id: "sukehiro", nombre: "Sukehiro", sprite: "personajes/sukehiro.png" }
  ],

  dialogo: [
    // ---- La jugadora se está quedando dormida en clase ----
    { fondo: "negro", enEscena: [], hablante: null, texto: "—Señorita... señorita..." },
    { hablante: "jugadora", texto: "Hmmm... ¿quién me está llamando?" },
    { hablante: null, texto: "Otra vez esa voz... —Señorita, señorita..." },

    // ---- Despierta de golpe, ya en el aula ----
    {
      fondo: "fondos/aula1.jpg",
      enEscena: ["jugadora", "profesor_leonidas"],
      hablante: null,
      texto: "(La jugadora despierta de golpe.)"
    },
    { hablante: "profesor_leonidas", texto: "¿Acaso busca reprobar la asignatura, señorita? Más le vale levantarse." },
    { hablante: "jugadora", texto: "Lo siento, profesor Leonidas... no pude dormir anoche." },
    { hablante: "profesor_leonidas", texto: "Que no vuelva a suceder." },
    { sonido: "sonidos/timbre.mp3", hablante: null, texto: "(Suena el timbre.)" },
    { hablante: "profesor_leonidas", texto: "Bien, ya terminó mi hora. Mañana espero que entreguen la tarea." },

    // ---- El profesor se va, se acercan Elizabeth y Diana ----
    {
      enEscena: ["jugadora", "elizabeth", "diana"],
      hablante: "elizabeth",
      texto: "Chicas, la babosa se despertó de su sueño... ¡jajaja!"
    },
    { hablante: "diana", texto: "Ewww." },
    { hablante: "jugadora", texto: "(...baba en toda la silla... Dios, qué vergüenza...)" },

    // ---- Aparece Sukehiro ----
    {
      enEscena: ["jugadora", "elizabeth", "diana", "sukehiro"],
      hablante: "sukehiro",
      texto: "¿Eh? ¿Aquí no es el baño...?"
    },
    { hablante: "diana", texto: "Es Sukehiro." },
    { hablante: "elizabeth", texto: "¡Hola, Sukehiro!" },
    { hablante: "sukehiro", texto: "¿Y tú quién eres?" },
    { hablante: "diana", texto: "¿Qué? ¿Cómo no vas a conocer a Elizabeth?" },
    { hablante: "elizabeth", texto: "Da igual, Diana. Por ser Sukehiro, se lo dejo pasar." },

    // ---- La jugadora escapa avergonzada ----
    {
      enEscena: ["elizabeth", "diana", "sukehiro"],
      hablante: null,
      sonido: "sonidos/puerta.mp3",
      texto: "(La jugadora sale del aula a toda prisa.)"
    },
    { hablante: "sukehiro", texto: "Hmm..." }
  ],

  // Se deja "mensaje" solo por compatibilidad; como este capítulo ya
  // tiene "dialogo" arriba, este mensaje no se usa para nada.
  mensaje: `Escribe aquí tu mensaje para este recuerdo...`
};
