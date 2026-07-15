// ═══════════════════════════════════════════════════
//  CAPÍTULO 5 — ÁRBOL 5 — "El malentendido"
//  Edita SOLO este archivo para cambiar el título, la foto,
//  el fondo, los personajes y el diálogo de este recuerdo.
// ═══════════════════════════════════════════════════
window.ARBOLES = window.ARBOLES || [];
window.ARBOLES[4] = {
  titulo: "El malentendido",
  fecha: "",
  foto: "fotos/arbol5.jpg",
  fondoEscena: "fondos/pasillo.jpg",
  musica: "musica/tension.mp3",

  personajes: [
    { id: "jugadora", nombre: "", sprite: "personajes/jugadora.png" },
    { id: "diana", nombre: "Diana", sprite: "personajes/diana.png" },
    { id: "elizabeth", nombre: "Elizabeth", sprite: "personajes/elizabeth.png" },
    { id: "luis", nombre: "Luis", sprite: "personajes/luis.png" }
  ],

  dialogo: [
    { enEscena: ["jugadora", "diana", "elizabeth"], hablante: null, texto: "(Un mes después. Las cosas entre la jugadora y Luis iban cada vez mejor... hasta ese miércoles.)" },
    { hablante: null, texto: "(Al pasar por el pasillo, la jugadora alcanza a escuchar a Luis hablando por teléfono, apurado, en voz baja.)" },
    { hablante: null, texto: "—...pero si conseguís el trabajo allá, ¿nos vamos a mudar otra vez? No, no le dije nada a nadie todavía..." },
    { sonido: "sonidos/telefono_colgar.mp3", hablante: null, texto: "(Luis corta la llamada al verla y guarda el teléfono rápido, como si lo hubieran descubierto haciendo algo malo.)" },
    { hablante: "luis", texto: "Ah... hola. No te vi." },
    {
      hablante: "jugadora",
      texto: "¿Cómo reacciona la jugadora?",
      opciones: [
        {
          texto: `"¿Te vas a mudar otra vez? ¿Ibas a contármelo en algún momento?"`,
          reaccion: { hablante: "luis", texto: "No... todavía no es seguro, ni yo mismo sé bien qué va a pasar. Por eso no dije nada." }
        },
        {
          texto: "(No pregunta nada. Solo asiente y sigue caminando, con un nudo raro en el estómago.)",
          reaccion: { hablante: null, texto: "(Luis se queda parado en el pasillo, sin saber si seguirla o dejarla ir.)" }
        }
      ]
    },
    { hablante: null, texto: "(El resto del día, la jugadora apenas le dirige la palabra. No es enojo, exactamente. Es más bien miedo a acostumbrarse a algo que podría desaparecer.)" },

    { enEscena: ["jugadora", "luis"], hablante: null, texto: "(Esa tarde, a la salida, Luis la espera cerca del portón.)" },
    { hablante: "luis", texto: "¿Todo bien? Te noté rara todo el día." },
    {
      hablante: "jugadora",
      texto: "¿Qué le dice?",
      opciones: [
        {
          texto: `"Todo bien. ¿Por qué lo preguntas?"`,
          reaccion: { hablante: "luis", texto: "No sé, tenía la sensación de que estabas evitándome." }
        },
        {
          texto: `"Te escuché por teléfono. ¿Te vas a ir de nuevo y pensabas decírmelo cómo, justo antes de irte?"`,
          reaccion: { hablante: "luis", texto: "No es tan simple como sonó. Perdón, debí habértelo dicho antes de que lo escucharas así." }
        }
      ]
    },
    { hablante: null, texto: "(Silencio incómodo. El cielo se pone gris, como anunciando lluvia.)" }
  ],

  mensaje: `Escribe aquí tu mensaje para este recuerdo...`
};
