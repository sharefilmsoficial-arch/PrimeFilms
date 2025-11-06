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
    description:
      "Luego de ser mordido por una araña radioactiva, Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos.",
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/images/across-the-spiderverse.jpeg",
    trailerUrl: "https://drive.google.com/file/d/1wM0twYUIFIJ3o8oX1nyjbsyfpDwkH-cS/preview",
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
    description: "Eddie Brock y Venom están al borde de su última batalla cuando nuevas amenazas surgen y la línea entre héroe y villano se desdibuja.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/venom-3.jpeg",
    movie: "https://drive.google.com/file/d/1-I98WaJ_C622i2YMeBFjcEn43808KgmR/preview"
  },
  {
    id: "clockstoppers",
    title: "Tiempo Congelado",
    year: 2024,
    duration: "1h 55min",
    rating: "PG-13",
    genres: ["Suspenso", "Drama", "Ciencia ficción"],
    description:
      "Un científico descubre accidentalmente una forma de detener el tiempo, pero pronto se da cuenta de que cada segundo congelado tiene un precio terrible.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/tiempo-congelado.jpeg",
    movie: "https://drive.google.com/file/d/1mi8Ltlqx01KVDLKIIQXL0l05A_i5endV/preview"
  },
  {
    id: "lightyear",
    title: "Lightyear",
    year: 2022,
    duration: "1h 45min",
    rating: "PG",
    genres: ["Animación", "Aventura"],
    description:
      "Buzz y Alisha exploran el planeta T'Kani Prime y viven aventuras en el espacio-tiempo.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/lightyear.jpeg",
    movie: "https://drive.google.com/file/d/1m5gLKdgBV2loj5qCDIgLakOnUS7SN5T4/preview"
  },
  {
    id: "mufasa",
    title: "Mufasa - El Rey León",
    year: 2024,
    duration: "1h 55min",
    rating: "PG-13",
    genres: ["Animación", "Drama"],
    description:"Una inundación separa al cachorro Mufasa de sus padres, pero el rey de los leones lo acoge como a uno de los suyos tras demostrar su valentía. Al crecer, una manada de leones desterrados y los celos de su hermana adoptiva lo pondrán en peligro.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/mufasa.jpeg",
    movie: "https://drive.google.com/file/d/1kpAxZOwLmSTcZZnHZ_vDlfNHqv9ZtGgz/preview"
  },
  {
    id: "how-train-your-dragon-2",
    title: "Cómo Entrenar a tu Dragón 2",
    year: 2014,
    duration: "1h 42min",
    rating: "PG",
    genres: ["Animación", "Aventura"],
    description:"Hipo y Chimuelo se enfrentan a cazadores de dragones para evitar la guerra.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/dragon2.jpeg",
    movie: "https://drive.google.com/file/d/1HoxHuCgIgetLZk6nuFE6nN9a_1YK9Py_/preview"
  },
  {
    id: "how-train-your-dragon-3",
    title: "Cómo Entrenar a tu Dragón 3 - El Mundo Oculto",
    year: 2019,
    duration: "1h 44min",
    rating: "PG",
    genres: ["Animación", "Aventura"],
    description:
      "Hipo y Chimuelo descubren un mundo oculto mientras luchan por proteger a su gente y a los dragones.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/dragon3.jpeg",
    movie: "https://drive.google.com/file/d/1x4CYvRvkriWKcL2aE0nqOJY1tPAq71I2/preview"
  },
  {
    id: "avatar2-elcaminodelagua",
    title: "Avatar 2 - El Camino del Agua",
    year: 2022,
    duration: "3h 12min",
    rating: "PG-13",
    genres: ["Ciencia ficción", "Aventura"],
    description:
      "Jake Sully y Neytiri deben proteger a su familia de nuevas amenazas en Pandora mientras exploran las profundidades oceánicas del planeta.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/avatar2.jpeg",
    movie: "https://drive.google.com/file/d/12RRSn0kLKUea3RbJlg32Z7zLZE7v__B5/preview"
  },
  {
    id: "flow",
    title: "Flow",
    year: 2024,
    duration: "1h 25min",
    rating: "PG",
    genres: ["Animación", "Drama"],
    description:
      "Un gato debe aprender a convivir con otros animales en un barco que flota sobre un mundo inundado.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/flow.jpeg",
    movie: "https://drive.google.com/file/d/1VVd1JCyxkHXGpsYr-3-SaD68pijn1XFS/preview"
  },
  {
    id: "spiderman-into-the-spiderverse",
    title: "Spiderman - Un Nuevo Universo",
    year: 2018,
    duration: "1h 56min",
    rating: "PG",
    genres: ["Animación", "Aventura"],
    description:
      "Miles Morales se convierte en Spider-Man y conoce a otros héroes arácnidos de universos paralelos.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/into-the-spiderverse.jpeg",
    movie: "https://drive.google.com/file/d/1Gp-v1xvRausPDh9c88yxOSFusXM9dkwE/preview"
  },
  {
    id: "get-out",
    title: "Huye",
    year: 2017,
    duration: "1h 44min",
    rating: "R",
    genres: ["Terror", "Suspenso"],
    description:
      "Chris visita a los padres de su novia, pero descubre un siniestro secreto detrás de su aparente amabilidad.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/images/get-out.jpeg",
    movie: "https://drive.google.com/file/d/1en6HYU4w0GfvSf3PT8ZAqcxzbHvCcjHB/preview"
  },
  {
    id: "rango",
    title: "Rango",
    year: 2011,
    duration: "1h 47min",
    rating: "PG",
    genres: ["Animación", "Aventura", "Comedia"],
    description:
      "Un camaleón doméstico se convierte en el héroe de un pueblo del Viejo Oeste.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/images/rango.jpeg",
    movie: "https://drive.google.com/file/d/1SB357lg3QIGL5RvdfrJQ53_1jmnHNv7u/preview"
  },
  {
    id: "kpop-hunters",
    title: "Las Guerreras K-Pop",
    year: 2024,
    duration: "1h 30min",
    rating: "PG-13",
    genres: ["Acción", "Música"],
    description: "Un grupo de chicas K-Pop debe enfrentarse a un complot internacional mientras están de gira.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/huntrix.jpeg",
    movie: "https://drive.google.com/file/u/0/d/1yn5s7n8Cf3hnMtJdND3xG6gMq0DO3kfO/preview"
  },
  {
    id: "fast-and-furious5",
    title: "Rápidos y Furiosos 5",
    year: 2011,
    duration: "2h 10min",
    rating: "PG-13",
    genres: ["Acción", "Crimen"],
    description: "Dom y Brian planean un último gran golpe en Río de Janeiro mientras son perseguidos por un agente federal.",
    trailerUrl: sampleTrailer,
    image: "images/fast-and-furius5.jpg",
    movie: "https://drive.google.com/file/d/1kkdCZcm_ynd7URwOML6jWAabSMSvArha/preview"
  },
  {
    id: "miraculous-awakening",
    title: "Miraculous: Awakening",
    year: 2023,
    duration: "1h 45min",
    rating: "PG",
    genres: ["Animación", "Aventura", "Romance"],
    description:"Marinette y Adrien enfrentan nuevos desafíos como Ladybug y Cat Noir en su primera aventura cinematográfica.",
    trailerUrl: sampleTrailer,
    image: "images/miraculous-awakening.jpg",
    movie: "preview"
  },
  {
    id: "sonic-the-hedgehog",
    title: "Sonic",
    year: 2023,
    duration: "1h 45min",
    rating: "PG",
    genres: ["Animación", "Aventura", "Romance"],
    description:"Marinette y Adrien enfrentan nuevos desafíos como Ladybug y Cat Noir en su primera aventura cinematográfica.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/images/sonic.jpeg",
    movie: "https://drive.google.com/file/d/1aYLsDe1HnNSqVjS7v_tiT-ztdcG3z7eU/preview"
  },
  {
    id: "sonic-the-hedgehog-2",
    title: "Sonic 2",
    year: 2023,
    duration: "1h 45min",
    rating: "PG",
    genres: ["Animación", "Aventura", "Romance"],
    description:"Marinette y Adrien enfrentan nuevos desafíos como Ladybug y Cat Noir en su primera aventura cinematográfica.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/images/sonic2.jpeg",
    movie: "https://drive.google.com/file/d/1F6fK3gCNh5afr7ARKLWIRgvZ6iyUWnko/preview"
  },
  {
    id: "karate-kid-legends",
    title: "Karate Kid Leyendas",
    year: 2023,
    duration: "1h 45min",
    rating: "PG",
    genres: ["Animación", "Aventura", "Romance"],
    description:"Marinette y Adrien enfrentan nuevos desafíos como Ladybug y Cat Noir en su primera aventura cinematográfica.",
    trailerUrl: sampleTrailer,
    image: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/karate-legends.jpeg",
    movie: "https://drive.google.com/file/d/1A26SVMjdf0MWh_HmFkXG_qtOv_C4lYK2/preview"
  },
  {
    id: "five-nights-at-freddys",
    title: "Five Nights At Fredyy's",
    year: 2023,
    duration: "1h 45min",
    rating: "PG",
    genres: ["Animación", "Aventura", "Romance"],
    description:"Marinette y Adrien enfrentan nuevos desafíos como Ladybug y Cat Noir en su primera aventura cinematográfica.",
    trailerUrl: sampleTrailer,
    image: "images/fnaf.jpg",
    movie: "https://drive.google.com/file/d/1NTEnMppzmWsNF0ufujXQp_6tr9i09JPF/preview"
  },
  {
    id: "logan-wolverine",
    title: "Logan - Wolverine",
    year: 2017,
    duration: "1h 45min",
    rating: "PG",
    genres: ["Animación", "Aventura", "Romance"],
    description:"Marinette y Adrien enfrentan nuevos desafíos como Ladybug y Cat Noir en su primera aventura cinematográfica.",
    trailerUrl: sampleTrailer,
    image: "images/logan-wolverine.jpg",
    movie: "https://drive.google.com/file/d/11LZONN67ENZ7vo7wPpIPg2c6K4RzqLqW/preview"
  },
  {
    id: "deadpool3",
    title: "DeadPool 3",
    year: 2024,
    duration: "1h 45min",
    rating: "PG",
    genres: ["Animación", "Aventura", "Romance"],
    description:"Marinette y Adrien enfrentan nuevos desafíos como Ladybug y Cat Noir en su primera aventura cinematográfica.",
    trailerUrl: sampleTrailer,
    image: "images/deadpool3.jpg",
    movie: "https://drive.google.com/file/d/1w9pPohiLbkp3GTjTJNqPsh60khrX68Ab/preview"
  }
];

// (Opcional) Exponerlo globalmente
window.MOVIES = MOVIES;
