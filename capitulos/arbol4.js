// ═══════════════════════════════════════════════════
//  CAPÍTULO 4 — ÁRBOL 4 — "El festival"
//  Edita SOLO este archivo para cambiar el título, la foto,
//  el fondo, los personajes y el diálogo de este recuerdo.
// ═══════════════════════════════════════════════════
window.ARBOLES = window.ARBOLES || [];
window.ARBOLES[3] = {
  titulo: "El festival",
  fecha: "",
  foto: "fotos/arbol4.jpg",
  fondoEscena: "fondos/festival.jpg",
  musica: "musica/festival.mp3",

  personajes: [
    { id: "jugadora", nombre: "", sprite: "personajes/jugadora.png" },
    { id: "luis", nombre: "Luis", sprite: "personajes/luis.png" },
    { id: "elizabeth", nombre: "Elizabeth", sprite: "personajes/elizabeth.png" },
    { id: "diana", nombre: "Diana", sprite: "personajes/diana.png" }
  ],

  dialogo: [
    { enEscena: ["jugadora", "elizabeth", "diana", "luis"], hablante: null, texto: "(Llegó el festival de la escuela. Luces, música y olor a comida por todos lados.)" },
    { hablante: "elizabeth", texto: "Vamos a los juegos. Diana, ve a buscar a Sukehiro antes de que se pierda literalmente." },
    { hablante: "diana", texto: "Otra vez yo con la niñera de Sukehiro..." },
    { enEscena: ["jugadora", "luis"], hablante: null, texto: "(Elizabeth y Diana se pierden entre la gente, y sin planearlo, la jugadora y Luis quedan solos.)" },
    { hablante: "luis", texto: "¿Has probado la comida de ese puesto? Huele bien, pero no me animo a ir solo, seguro pido mal y me miran raro." },
    { hablante: "jugadora", texto: "Vamos juntos. Si piden mal los dos, al menos no es tan vergonzoso." },
    { hablante: null, texto: "(Caminan entre los puestos, comparando qué tan raras suenan algunas combinaciones de comida.)" },

    { hablante: "luis", texto: "¿Sabes? Este es de los primeros lugares donde no siento que tengo que explicar quién soy todo el rato." },
    {
      hablante: "jugadora",
      texto: "¿Qué le responde?",
      opciones: [
        {
          texto: `"Eso es porque ya no eres 'el nuevo'. Ya eres de los nuestros."`,
          reaccion: { hablante: "luis", texto: "No sabes lo bien que se siente escuchar eso." }
        },
        {
          texto: `"Bueno, técnicamente sigues siendo el nuevo. Pero un nuevo aceptable."`,
          reaccion: { hablante: "luis", texto: "Con 'aceptable' me alcanza por ahora." }
        }
      ]
    },
    { musica: "musica/calma.mp3", sonido: "sonidos/fuegos.mp3", hablante: null, texto: "(Se sientan bajo el árbol más grande del patio, justo cuando empiezan a sonar los primeros fuegos artificiales.)" },
    { hablante: "luis", texto: "Cuando me tuve que mudar, pensé que iba a ser un desastre. No conocía a nadie, no sabía ni dónde quedaba el baño el primer día." },
    { hablante: "jugadora", texto: "Eso último sigue siendo verdad para Sukehiro, y lleva dos años." },
    { hablante: "luis", texto: "Jaja, cierto. Pero en serio, gracias por hacerlo más fácil de lo que pudo haber sido." },
    {
      hablante: "jugadora",
      texto: "¿Qué hace la jugadora?",
      opciones: [
        {
          texto: "(Se queda callada un momento y después le apoya el hombro contra el suyo, mirando los fuegos.)",
          reaccion: { hablante: null, texto: "(Luis no dice nada, pero tampoco se aparta.)" }
        },
        {
          texto: `"No te pongas sentimental que se te va a quemar el algodón de azúcar."`,
          reaccion: { hablante: "luis", texto: "Tienes razón, prioridades." }
        }
      ]
    },
    { hablante: null, texto: "(Los fuegos artificiales iluminan el cielo, y por un rato ninguno de los dos dice nada más. No hace falta.)" }
  ],

  mensaje: `Escribe aquí tu mensaje para este recuerdo...`
};
