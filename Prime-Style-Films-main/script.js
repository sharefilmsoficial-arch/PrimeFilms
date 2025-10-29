// script.js - corregido: ahora incluye la lógica para renderizar el catálogo en index.html
const sampleTrailer = "https://www.w3schools.com/html/mov_bbb.mp4"; // Tráiler genérico temporal

const movies = [
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
    poster: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/contracara.jpeg",
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
    poster: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/interestelar.jpeg",
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
    poster: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/karatekid1984.jpeg",
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
    poster: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/laleyendadeloschaneques.jpeg",
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
    poster: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/venom3.jpeg",
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
    poster: "https://apeiros173.github.io/ShareFilms-Peliculas-Gratis/tiempocongelado.jpeg",
    rentPrice: "MX$70.00",
    buyPrice: "MX$199.00",
  },
];

// --- Renderizado del catálogo (index.html) ---
// Este bloque fue el que faltaba: si existe el contenedor #movie-list,
// crea las tarjetas y las añade al DOM.
(function renderCatalog() {
  const movieList = document.getElementById("movie-list");
  if (!movieList) return; // Si estamos en movie.html no hacemos nada aquí

  // Limpia por si acaso
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    // Estructura interna de la tarjeta
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x600/000000/FFFFFF?text=No+image';">
      <div class="overlay">
        <h2>${movie.title}</h2>
        <p>${movie.year}</p>
      </div>
    `;

    // Al hacer click vamos a la página de detalle
    card.addEventListener("click", () => {
      window.location.href = `movie.html?id=${encodeURIComponent(movie.id)}`;
    });

    movieList.appendChild(card);
  });
})();

// (Opcional) Exponer movies en global para debugging en consola
window.__MOVIES__ = movies;
