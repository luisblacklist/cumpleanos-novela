// ═══════════════════════════════════════════════════
//  CAPÍTULO 6 — ÁRBOL 6 — "La reconciliación"
//  Edita SOLO este archivo para cambiar el título, la foto,
//  el fondo, los personajes y el diálogo de este recuerdo.
// ═══════════════════════════════════════════════════
window.ARBOLES = window.ARBOLES || [];
window.ARBOLES[5] = {
  titulo: "La reconciliación",
  fecha: "",
  foto: "fotos/arbol6.jpg",
  fondoEscena: "fondos/parque.jpg",
  musica: "musica/tension.mp3",

  personajes: [
    { id: "jugadora", nombre: "", sprite: "personajes/jugadora.png" },
    { id: "luis", nombre: "Luis", sprite: "personajes/luis.png" }
  ],

  dialogo: [
    { enEscena: ["jugadora", "luis"], hablante: null, sonido: "sonidos/lluvia.mp3", texto: "(Empieza a llover justo cuando salen de la escuela. Ninguno de los dos tiene paraguas, así que se refugian bajo el techo de una parada de autobús.)" },
    { hablante: "luis", texto: "Mi tía consiguió una mejor oferta de trabajo en otra ciudad. Todavía no aceptó nada, pero lo está pensando en serio." },
    { hablante: "luis", texto: "No te lo dije porque no quería que las cosas cambiaran entre nosotros por algo que ni siquiera es seguro. Y la verdad, tenía miedo de decirlo en voz alta y que se volviera más real." },
    { musica: "musica/calma.mp3", hablante: "jugadora", texto: "Preferiría saberlo, aunque no sea seguro. Aunque sea feo. Prefiero eso a enterarme a medias en un pasillo." },
    { hablante: "luis", texto: "Tienes razón. Perdón. La próxima te lo cuento aunque no sepa cómo termina." },
    {
      hablante: "jugadora",
      texto: "¿Qué le responde?",
      opciones: [
        {
          texto: `"Está bien. Y pase lo que pase con la mudanza, prefiero saberlo a tiempo."`,
          reaccion: { hablante: "luis", texto: "Trato hecho. Ahora ven aquí, que nos estamos empapando los dos como tontos." }
        },
        {
          texto: `"No prometo no ponerme rara de nuevo. Pero prometo decírtelo si me pasa, en vez de desaparecer."`,
          reaccion: { hablante: "luis", texto: "Me parece justo. Al menos eres sincera." }
        }
      ]
    },
    { hablante: null, texto: "(Se quedan bajo el techo de la parada, esperando que pare la lluvia, un poco más cerca de lo que estaban hace una semana.)" },
    { hablante: "luis", texto: "¿Sabes qué es raro? No sé si me voy a quedar en esta ciudad el próximo año. Pero de todo lo incierto, contigo es lo único de lo que no tengo dudas." },
    { hablante: "jugadora", texto: "Eso sonó mucho más profundo de lo que esperaba de alguien que hace un rato hablaba de algodón de azúcar." },
    { hablante: "luis", texto: "Puedo tener las dos cosas. Soy un hombre de rango amplio." }
  ],

  mensaje: `Escribe aquí tu mensaje para este recuerdo...`
};
