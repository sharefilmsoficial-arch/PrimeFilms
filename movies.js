// movies.js — versión corregida compatible con index.html

const sampleTrailer = "https://www.w3schools.com/html/mov_bbb.mp4"; // Tráiler genérico temporal

const MOVIES = [
  {
    id: "contracara",
    title: "Contracara",
    year: 1997,
    duration: "2h 18min",
    rating: "R",
    genres: ["Acción", "Thriller", "Crimen"],
    description:
      "Un agente del FBI se somete a una cirugía experimental para asumir la identidad del terrorista que mató a su hijo. Pero las cosas salen terriblemente mal.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/contracara.jpeg",
    rentPrice: "MX$60.00",
    buyPrice: "MX$159.00",
  },
  {
    id: "interestelar",
    title: "Interestelar",
    year: 2014,
    duration: "2h 49min",
    rating: "PG-13",
    genres: ["Ciencia ficción", "Drama", "Aventura"],
    description:
      "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad mientras la Tierra agoniza.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/interestelar.jpeg",
    rentPrice: "MX$75.00",
    buyPrice: "MX$199.00",
  },
  {
    id: "karatekid1984",
    title: "Karate Kid (1984)",
    year: 1984,
    duration: "2h 6min",
    rating: "PG",
    genres: ["Drama", "Deportes", "Inspiradora"],
    description:
      "Daniel se muda a California y sufre acoso hasta que un sabio maestro de karate, el Sr. Miyagi, le enseña el arte del equilibrio y la disciplina.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/karatekid1984.jpeg",
    rentPrice: "MX$50.00",
    buyPrice: "MX$139.00",
  },
  {
    id: "laleyendadeloschaneques",
    title: "La Leyenda de los Chaneques",
    year: 2023,
    duration: "1h 25min",
    rating: "A",
    genres: ["Animación", "Fantasía", "Aventura"],
    description:
      "Leo San Juan y sus amigos viajan a Veracruz, donde descubren que unos traviesos chaneques están causando estragos en la región.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/laleyendadeloschaneques.jpeg",
    rentPrice: "MX$40.00",
    buyPrice: "MX$120.00",
  },
  {
    id: "venom3",
    title: "Venom 3: The Last Dance",
    year: 2024,
    duration: "2h 0min",
    rating: "PG-13",
    genres: ["Acción", "Ciencia ficción"],
    description:
      "Eddie Brock y Venom están al borde de su última batalla cuando nuevas amenazas surgen y la línea entre héroe y villano se desdibuja.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/venom3.jpeg",
    rentPrice: "MX$80.00",
    buyPrice: "MX$220.00",
  },
  {
    id: "tiempocongelado",
    title: "Tiempo Congelado",
    year: 2024,
    duration: "1h 55min",
    rating: "PG-13",
    genres: ["Suspenso", "Drama", "Ciencia ficción"],
    description:
      "Un científico descubre accidentalmente una forma de detener el tiempo, pero pronto se da cuenta de que cada segundo congelado tiene un precio terrible.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/tiempocongelado.jpeg",
    rentPrice: "MX$70.00",
    buyPrice: "MX$199.00",
  },
];

// (Opcional) Exponerlo globalmente (ya lo hace const, pero por compatibilidad)
window.MOVIES = MOVIES;
