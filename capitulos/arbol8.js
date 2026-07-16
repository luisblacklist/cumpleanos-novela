// ═══════════════════════════════════════════════════
//  CAPÍTULO 8 — ÁRBOL 8 — "Nuestro bosque de verdad"
//  Este último capítulo rompe la ficción a propósito: acá le
//  hablas tú, de verdad, sin personajes de por medio.
//  {NOMBRE} se reemplaza automáticamente por lo que pongas en
//  NOMBRE_PAREJA dentro de index.html (su nombre real).
//  Edita SOLO este archivo para cambiar el mensaje final.
// ═══════════════════════════════════════════════════
window.ARBOLES = window.ARBOLES || [];
window.ARBOLES[7] = {
  titulo: "Nuestro bosque de verdad",
  fecha: "",
  foto: "fotos/arbol8.jpg",
  fondoEscena: "fondos/bosque_noche.jpg",
  musica: "musica/romance.mp3",

  personajes: [],

  dialogo: [
    {
      enEscena: [],
      hablante: null,
      texto: "(Esta última parte ya no es de la novela. Ahora soy yo hablándote directamente.)"
    },

    {
      hablante: null,
      texto: "Hola, {NOMBRE}. Si llegaste hasta aquí, antes que nada quiero darte las gracias por jugar esta pequeña novela que hice para ti."
    },

    {
      hablante: null,
      texto: "Todo lo que hemos vivido juntos es algo que jamás podría comparar con nada. Cada recuerdo contigo tiene un lugar muy especial en mi corazón."
    },

    {
      hablante: null,
      texto: "Tu risa, tu forma de ser, tu manera de alegrarme incluso cuando no estás haciendo nada... eres una persona única. Y por eso te admiro tanto."
    },

    {
      hablante: null,
      texto: "Te admiro porque cuando te propones algo haces todo lo posible por conseguirlo. Nunca te rindes fácilmente y siempre sigues adelante. Esa fuerza que tienes es una de las cosas que más amo de ti."
    },

    {
      hablante: null,
      texto: "Hoy cumples 18 años. Ya eres toda una adulta... aunque para mí siempre vas a seguir siendo mi niña. Solo que ahora una niña que cada día me hace sentir más orgulloso."
    },

    {
      hablante: null,
      texto: "Nunca dejes que nadie apague esa chispa que tienes. Yo sé perfectamente lo mucho que vales y estoy completamente seguro de que vas a llegar muy lejos."
    },

    {
      hablante: null,
      texto: "Y si algún día sientes que las cosas no salen como esperabas, quiero que recuerdes algo: siempre voy a creer en ti, incluso cuando tú misma dudes."
    },

    {
      hablante: null,
      texto: "Perdón si esta novela no quedó perfecta. Hice todo lo que pude para regalarte algo diferente, algo que pudieras recordar cada vez que quisieras."
    },

    {
      hablante: null,
      texto: "Gracias por aparecer en mi vida. Gracias por hacerme sonreír todos los días. Gracias por quererme como lo haces."
    },

    {
      hablante: null,
      texto: "Te amo muchísimo, {NOMBRE}. Y espero que dentro de muchos años podamos mirar atrás y recordar este día con una sonrisa."
    },

    {
      hablante: null,
      texto: "Feliz cumpleaños, mi amor. ❤️ (15/07/2026)"
    },

    {
      hablante: null,
      texto: "¿Qué le contestás a esto?",
      opciones: [
        {
          texto: "Yo también te amo. ❤️",
          reaccion: {
            hablante: null,
            texto: "Entonces prometo seguir esforzándome cada día para hacerte tan feliz como tú me haces a mí."
          }
        },
        {
          texto: "¿Y mi algodón de azúcar?",
          reaccion: {
            hablante: null,
            texto: "Jajaja. Trato hecho. Te debo ese... y muchísimos más."
          }
        }
      ]
    },

    {
      hablante: null,
      texto: "Fin de la novela... pero espero que esta sea solo la primera página de una historia muchísimo más grande que seguiremos escribiendo juntos."
    }
  ],

  mensaje: `Gracias por jugar esta pequeña historia. La hice pensando en ti, porque eres una persona muy importante para mí. Te amo. ❤️`
};