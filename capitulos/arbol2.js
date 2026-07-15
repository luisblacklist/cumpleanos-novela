// ═══════════════════════════════════════════════════
//  CAPÍTULO 2 — ÁRBOL 2 — "El chico nuevo"
//  Edita SOLO este archivo para cambiar el título, la foto,
//  el fondo, los personajes y el diálogo de este recuerdo.
//  No hace falta tocar motor.js ni estilo.css para nada de esto.
//
//  Esta historia (árboles 2 al 8) es ficción inventada para el
//  regalo, con Luis como interés romántico. Cambiá lo que quieras:
//  nombres, chistes, lugares, para que se parezca más a ustedes.
// ═══════════════════════════════════════════════════
window.ARBOLES = window.ARBOLES || [];
window.ARBOLES[1] = {
  titulo: "El chico nuevo",
  fecha: "",
  foto: "fotos/arbol2.jpg",
  fondoEscena: "fondos/patio.jpg",
  musica: "musica/cotidiano.mp3",

  personajes: [
    { id: "jugadora", nombre: "", sprite: "personajes/jugadora.png" },
    { id: "elizabeth", nombre: "Elizabeth", sprite: "personajes/elizabeth.png" },
    { id: "diana", nombre: "Diana", sprite: "personajes/diana.png" },
    { id: "luis", nombre: "Luis", sprite: "personajes/luis.png" },
    { id: "profesor_leonidas", nombre: "Profesor Leónidas", sprite: "personajes/profesor_leonidas.png" },
    { id: "sukehiro", nombre: "Sukehiro", sprite: "personajes/sukehiro.png" }
  ],

  dialogo: [
    { enEscena: ["jugadora", "elizabeth", "diana"], hablante: null, texto: "(Es lunes. Recién empieza el recreo y el sol pega fuerte en el patio.)" },
    { hablante: "elizabeth", texto: "¿Ya se enteraron? Dicen que hoy entra un alumno nuevo, a mitad de año y todo." },
    { hablante: "diana", texto: "Qué raro cambiarse de escuela en octubre. Algo habrá pasado." },
    { hablante: "elizabeth", texto: "A lo mejor lo expulsaron de la otra." },
    { hablante: "diana", texto: "O a lo mejor es más normal de lo que pensás y se mudó de ciudad, sin más." },
    { sonido: "sonidos/timbre.mp3", hablante: null, texto: "(Suena el timbre antes de que puedan seguir especulando. Vuelven a clase.)" },

    { fondo: "fondos/aula1.jpg", enEscena: ["jugadora", "elizabeth", "diana", "profesor_leonidas"], hablante: "profesor_leonidas", texto: "Antes de empezar: se suma un alumno nuevo. Vengan a saludar como corresponde." },
    { enEscena: ["jugadora", "elizabeth", "diana", "profesor_leonidas", "luis"], hablante: "profesor_leonidas", texto: "Preséntate." },
    { hablante: "luis", texto: "Hola. Soy Luis. Me acabo de mudar, así que todavía no conozco a nadie ni sé dónde queda nada." },
    { hablante: "profesor_leonidas", texto: "Bien. Hay un lugar libre atrás, junto a la ventana. Siéntate ahí." },
    { hablante: null, texto: "(El único lugar libre está justo al lado de la jugadora.)" },

    { hablante: "luis", texto: "Hola. ¿Te molesta si me siento acá?" },
    {
      hablante: "jugadora",
      texto: "¿Qué le responde?",
      opciones: [
        {
          texto: `"Para nada. Bienvenido, supongo."`,
          reaccion: { hablante: "luis", texto: "Gracias. \"Supongo\" me da confianza total." }
        },
        {
          texto: `"No, tranquilo. ¿Necesitas que te muestre algo de la escuela después?"`,
          reaccion: { hablante: "luis", texto: "La verdad, sí. Estoy un poco perdido con todo esto." }
        }
      ]
    },
    { hablante: "luis", texto: "Perdón si molesto con preguntas todo el día. Cambiar de escuela a mitad de año no estaba en mis planes." },
    { hablante: "jugadora", texto: "No es molestia. A todos nos tocó ser el nuevo alguna vez." },

    { enEscena: ["jugadora", "elizabeth", "diana", "luis"], hablante: null, texto: "(Al terminar la clase, Elizabeth y Diana se acercan, nada disimuladas.)" },
    { hablante: "elizabeth", texto: "Así que tú eres el misterioso alumno nuevo." },
    { hablante: "diana", texto: "Se llama Luis, tiene el nombre en el cuaderno, Elizabeth, no hace falta el numerito de misterio." },
    { hablante: "luis", texto: "Un gusto. Y sí, ya sé, cambiarse de escuela en octubre es raro. Larga historia." },

    { enEscena: ["elizabeth", "diana", "luis", "sukehiro"], hablante: "sukehiro", texto: "¿Alguien sabe dónde queda el baño? Sigo perdido desde el año pasado." },
    { hablante: "diana", texto: "Sukehiro, llevás dos años en esta escuela." },
    { hablante: "sukehiro", texto: "Y ni un solo día supe dónde queda el baño." },
    { hablante: "luis", texto: "Al menos no soy el único perdido hoy." }
  ],

  mensaje: `Escribe aquí tu mensaje para este recuerdo...`
};
