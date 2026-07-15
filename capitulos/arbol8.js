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
  fondoEscena: "fondos/bosque_atardecer.jpg",
  musica: "musica/romance.mp3",

  // Sin personajes en escena: esta parte la digo yo, no un personaje.
  personajes: [],

  dialogo: [
    { enEscena: [], hablante: null, texto: "(Esta última parte no es del colegio. Es mía, hablándote directamente.)" },
    { hablante: null, texto: "Hola, {NOMBRE}. Sí, lo de la clase y la baba en el árbol 1 me lo inventé. Luis, la mudanza, las fracciones, todo. Pero lo de quererte no lo inventé." },
    { hablante: null, texto: "Hice este bosque de árboles falsos para regalarte algo real: contarte, a mi manera, todo lo que significas para mí." },
    { hablante: null, texto: "Feliz cumpleaños. Gracias por ser real de una forma que ningún capítulo inventado podría igualar." },
    {
      hablante: null,
      texto: "¿Qué le contestás a esto?",
      opciones: [
        {
          texto: "Te amo.",
          reaccion: { hablante: null, texto: "Yo también te amo." }
        },
        {
          texto: "¿Cuándo me invitas el algodón de azúcar de verdad?",
          reaccion: { hablante: null, texto: "Cuando quieras. Ya reservé el puesto." }
        }
      ]
    },
    { hablante: null, texto: "Fin del árbol 8. Pero la historia nuestra, la de verdad, sigue." }
  ],

  mensaje: `Escribe aquí tu mensaje para este recuerdo...`
};
