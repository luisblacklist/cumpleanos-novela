// ═══════════════════════════════════════════════════
//  CAPÍTULO 3 — ÁRBOL 3 — "Se sienta cerca"
//  Edita SOLO este archivo para cambiar el título, la foto,
//  el fondo, los personajes y el diálogo de este recuerdo.
// ═══════════════════════════════════════════════════
window.ARBOLES = window.ARBOLES || [];
window.ARBOLES[2] = {
  titulo: "Se sienta cerca",
  fecha: "",
  foto: "fotos/arbol3.jpg",
  fondoEscena: "fondos/biblioteca.jpg",
  musica: "musica/cotidiano.mp3",

  personajes: [
    { id: "jugadora", nombre: "", sprite: "personajes/jugadora.png" },
    { id: "luis", nombre: "Luis", sprite: "personajes/luis.png" },
    { id: "diana", nombre: "Diana", sprite: "personajes/diana.png" },
    { id: "elizabeth", nombre: "Elizabeth", sprite: "personajes/elizabeth.png" }
  ],

  dialogo: [
    { enEscena: ["jugadora", "luis"], hablante: null, texto: "(Pasaron dos semanas. Luis ya se sentaba con ellas casi todos los días, aunque seguía siendo el nuevo para el resto del curso.)" },
    { hablante: "luis", texto: "¿Me prestas tu cuaderno un segundo? Todavía no entiendo bien esto de las fracciones." },
    { hablante: "jugadora", texto: "Toma. Pero no esperes demasiado, tampoco soy ninguna genia con los números." },
    { hablante: "luis", texto: "Con que me expliques mejor que el profesor, ya me conformo." },
    { hablante: null, texto: "(Se quedan un rato en silencio, cada uno con la vista en su propio cuaderno.)" },
    { hablante: "luis", texto: "Oye... gracias por lo del primer día. No solo por el lugar, sino por no hacerme sentir tan bicho raro." },
    { hablante: "jugadora", texto: "No hiciste falta de mucho esfuerzo de mi parte. Ya venías con cara de perdido." },
    { hablante: "luis", texto: "Se nota tanto, ¿eh?" },

    { enEscena: ["jugadora", "luis", "diana", "elizabeth"], hablante: null, texto: "(Diana y Elizabeth se acercan a la mesa con la excusa de devolver un libro.)" },
    { hablante: "diana", texto: "Qué estudiosos ustedes dos. Todo el día aquí." },
    { hablante: "elizabeth", texto: "Diana, eso no es un cumplido si lo dices con esa cara." },
    { enEscena: ["jugadora", "diana", "elizabeth"], hablante: null, texto: "(Luis se levanta un momento a devolver un libro al estante. Diana aprovecha.)" },
    {
      hablante: "diana",
      texto: "Dime la verdad: ¿te cae bien Luis o te cae bien Luis?",
      opciones: [
        {
          texto: `"Me cae bien. Como cualquier compañero nuevo, nada más."`,
          reaccion: { hablante: "diana", texto: "Ajá. Y por eso llevas media hora explicándole fracciones con esa paciencia infinita." }
        },
        {
          texto: `"No sé todavía. Puede que un poco más que 'compañero nuevo'."`,
          reaccion: { hablante: "elizabeth", texto: "Al fin alguien sincera en este grupo." }
        }
      ]
    },
    { enEscena: ["jugadora", "luis", "diana", "elizabeth"], hablante: null, texto: "(Luis vuelve con otro libro bajo el brazo, sin sospechar nada.)" },
    { hablante: "luis", texto: "¿De qué hablaban?" },
    { hablante: null, texto: "—De nada —dijeron las tres casi al mismo tiempo, un poco demasiado rápido." },
    { hablante: "luis", texto: "Está bien, no insisto. ¿Seguimos con las fracciones o ya te cansé por hoy?" }
  ],

  mensaje: `Escribe aquí tu mensaje para este recuerdo...`
};
