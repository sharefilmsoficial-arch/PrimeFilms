// movies.js — versión corregida compatible con index.html

const sampleTrailer = "https://www.w3schools.com/html/mov_bbb.mp4"; // Tráiler genérico temporal

const MOVIES = [
  {
  id: "across-the-spiderverse",
  title: "Spider-Man: A través del Spiderverso",
  year: 2023,
  duration: "2h 20min 05s",
  rating: "PG",
  genres: ["Animación", "Acción", "Aventura", "Superhéroes"],
  description: "Luego de ser mordido por una araña radioactiva, Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos.",
  // imagen local (usa la que tienes en /images)
  image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/images/across-the-spiderverse.jpeg",
  // trailer y video en formato "descarga directa" de Google Drive (los que me diste)
  trailer: "https://drive.google.com/file/d/1wM0twYUIFIJ3o8oX1nyjbsyfpDwkH-cS/preview",
  movie: "https://drive.google.com/file/d/11SMv4hmFUM71MWcPYm5qXf5j-tJgeAWp/preview"
},
  {
    id: "face-off",
    title: "Contracara",
    year: 1997,
    duration: "2h 18min 57s",
    rating: "R",
    genres: ["Acción", "Thriller", "Crimen"],
    description:
      "Un agente del FBI se somete a una cirugía experimental para asumir la identidad del terrorista que mató a su hijo. Pero las cosas salen terriblemente mal.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/contracara.jpeg",
  movie: "https://drive.google.com/file/d/1FsEqOKWlq4zMSeYOF-7tp_UB4jTKujqn/preview"
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
    movie: "https://drive.google.com/file/d/1cVVPgzsRjlombZxDsP2YWa9F9cHs0xa7/preview"
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
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/karate-kid.jpeg",
    movie: "https://drive.google.com/file/d/1vytWPJ8SuHa5cLsXWXQFHsCA26jYspc5/preview"
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
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/la-leyenda-de-los-chaneques.jpeg",
    movie: "https://drive.google.com/file/d/1j2-DvVDho1-u6DoJhZpr3fG6mpyAMGL5/preview"
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
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/venom-3.jpeg",
    movie: "https://drive.google.com/file/d/1-I98WaJ_C622i2YMeBFjcEn43808KgmR/preview"
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
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/tiempo-congelado.jpeg",
    movie: "https://drive.google.com/file/d/1-I98WaJ_C622i2YMeBFjcEn43808KgmR/preview"
  },
  {
    id: "Lightyear",
    title: "Lightyear",
    year: 2022,
    duration: "??",
    rating: "PG-13",
    genres: ["Animación, Aventura"],
    description:
      "Buzz y Alisha exploran el planeta T'Kani Prime y viven aventuras en el espacio-tiempo.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/lightyear.jpeg",
    movie: "https://drive.google.com/file/d/1m5gLKdgBV2loj5qCDIgLakOnUS7SN5T4/preview"
  },
  
];

// (Opcional) Exponerlo globalmente (ya lo hace const, pero por compatibilidad)
window.MOVIES = MOVIES;
