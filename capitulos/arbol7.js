// ═══════════════════════════════════════════════════
//  CAPÍTULO 7 — ÁRBOL 7 — "La confesión"
//  Edita SOLO este archivo para cambiar el título, la foto,
//  el fondo, los personajes y el diálogo de este recuerdo.
// ═══════════════════════════════════════════════════
window.ARBOLES = window.ARBOLES || [];
window.ARBOLES[6] = {
  titulo: "La confesión",
  fecha: "",
  foto: "fotos/arbol7.jpg",
  fondoEscena: "fondos/bosque_atardecer.jpg",
  musica: "musica/romance.mp3",

  personajes: [
    { id: "jugadora", nombre: "", sprite: "personajes/jugadora.png" },
    { id: "luis", nombre: "Luis", sprite: "personajes/luis.png" }
  ],

dialogo: [
  { enEscena: ["jugadora", "luis"], hablante: null, texto: "(Semanas después, Luis le pide que lo acompañe a un lugar \"importante\" al salir de clases.)" },

  { hablante: null, texto: "(La lleva al pequeño bosque donde se encuentra el enorme árbol que tantas veces visitaron juntos. El ambiente es extrañamente silencioso.)" },

  { hablante: "luis", texto: "Gracias por venir." },

  { hablante: "jugadora", texto: "Me preocupaste... ¿Qué pasa?" },

  { hablante: "luis", texto: "Mi tía tomó una decisión." },

  { hablante: "luis", texto: "Aceptó el trabajo en la otra ciudad." },

  { hablante: "jugadora", texto: "..." },

  { hablante: "luis", texto: "Nos iremos en unos días." },

  { hablante: null, texto: "(Ella siente que todo a su alrededor deja de importar. Apenas puede creer lo que acaba de escuchar.)" },

  { hablante: "jugadora", texto: "...No." },

  { hablante: "jugadora", texto: "No... eso no puede estar pasando." },

  { hablante: "luis", texto: "Ojalá pudiera decirte que es una broma." },

  { hablante: "jugadora", texto: "Pero... todavía nos quedaban tantos momentos..." },

  { hablante: "luis", texto: "Lo sé." },

  { hablante: "luis", texto: "Créeme... si pudiera decidir por mí mismo, nunca me iría." },

  { hablante: "luis", texto: "Desde el primer día que me senté a tu lado, dejé de sentirme como el chico nuevo." },

  { hablante: "luis", texto: "Gracias a ti, este lugar empezó a sentirse como un hogar." },

  { hablante: "luis", texto: "Nunca voy a olvidar nuestras conversaciones..." },

  { hablante: "luis", texto: "Las veces que caminamos juntos después de clases..." },

  { hablante: "luis", texto: "Las tonterías de las que nos reíamos sin motivo..." },

  { hablante: "luis", texto: "Estar contigo ha sido la mejor experiencia que he vivido en toda mi vida." },

  { hablante: null, texto: "(Ella intenta responder, pero las lágrimas comienzan a aparecer antes que las palabras.)" },

  {
    hablante: "jugadora",
    texto: "¿Qué hace?",
    opciones: [
      {
        texto: `"Lo besa antes de que sea demasiado tarde."`,
        reaccion: {
          hablante: null,
          texto: "(Da un paso al frente y lo besa. No quiere que el último recuerdo entre los dos sea simplemente una despedida.)"
        }
      },
      {
        texto: `"No puede contener las lágrimas."`,
        reaccion: {
          hablante: "jugadora",
          texto: "Qué cruel puede llegar a ser la vida... Justo cuando encontré a alguien que hacía felices mis días... tiene que arrebatármelo."
        }
      }
    ]
  },

  { hablante: "luis", texto: "Hay una razón por la que quise traerte aquí hoy." },

  { hablante: "luis", texto: "No quería irme cargando un arrepentimiento para el resto de mi vida." },

  { hablante: "jugadora", texto: "...¿Un arrepentimiento?" },

  { hablante: "luis", texto: "Sí." },

  { hablante: "luis", texto: "El arrepentimiento de nunca haberte dicho lo que siento por ti." },

  { hablante: "luis", texto: "Me gustas." },

  { hablante: "luis", texto: "Muchísimo." },

  { hablante: "luis", texto: "Y aunque la distancia nos separe..." },

  { hablante: "luis", texto: "Quiero saber si existe una posibilidad para nosotros." },

  { hablante: "luis", texto: "¿Quieres ser mi novia?" },

  {
    hablante: "jugadora",
    texto: "¿Qué le responde?",
    opciones: [
      {
        texto: `"Sí... No importa cuántos kilómetros nos separen."`,
        reaccion: {
          hablante: "luis",
          texto: "Te prometo que volveré. Y cuando lo haga... volveremos a caminar juntos bajo este árbol."
        }
      },
      {
        texto: `"Claro que sí. Te esperaré el tiempo que haga falta."`,
        reaccion: {
          hablante: "luis",
          texto: "Gracias... Acabas de darme una razón para esperar con ilusión el día en que pueda regresar."
        }
      }
    ]
  },

  { hablante: null, texto: "(Se abrazan durante un largo rato bajo el árbol. Ninguno quiere soltar al otro.)" },

  { hablante: null, texto: "(El sol comienza a ocultarse mientras ambos guardan ese momento en su corazón, con la esperanza de que algún día la distancia deje de existir.)" },

  { hablante: null, texto: "(Porque algunas promesas nacen justo en el instante de una despedida.)" }
],

  mensaje: `Algunas personas llegan a nuestra vida cuando menos lo esperamos. A veces basta un solo momento de valentía para cambiarlo todo. Nunca tengas miedo de decir lo que sientes; los recuerdos más valiosos suelen comenzar con una simple confesión.`
};