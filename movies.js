// movies.js
// Base de datos de películas

const movies = [
  {
    id: "spiderman",
    title: "Spider-Man: Un Nuevo Universo",
    year: 2018,
    duration: "1h 51m",
    imdb: 8.4,
    description:
      "Miles Morales, un adolescente de Brooklyn, se convierte en Spider-Man y descubre que hay otros héroes como él en diferentes universos.",
    image: "images/into-the-spiderverse.jpeg",
    trailer: "https://drive.google.com/uc?export=download&id=1FTQh3ngY6CJmWgURjpCwuYHZMZWk-NY_",
    video: "https://drive.google.com/uc?export=download&id=1Gp-v1xvRausPDh9c88yxOSFusXM9dkwE",
  },
  {
    id: "getout",
    title: "¡Huye! (Get Out)",
    year: 2017,
    duration: "1h 44m",
    imdb: 7.7,
    description:
      "Chris visita la finca de los padres de su novia blanca, pero el encuentro toma un giro siniestro cuando descubre un secreto perturbador.",
    image: "images/get-out.jpeg",
    trailer: "https://drive.google.com/uc?export=download&id=1g5nbp6iJKZyiEbcsMAtq4lqDXIv1ZWCh",
    video: "https://drive.google.com/uc?export=download&id=1hj_qdDhyiMyTWtF3XCBY1o57kK4CchZp",
  },
];

// Generar tarjetas en index.html
const container = document.querySelector(".movies-container");

if (container) {
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.year} • ${movie.duration}</p>
        <button class="watch-btn" data-id="${movie.id}">Ver</button>
      </div>
    `;

    container.appendChild(card);
  });

  // Evento para abrir cada película
  document.querySelectorAll(".watch-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      // Redirige a movie.html pasando el id
      window.location.href = `movie.html?id=${id}`;
    });
  });
}
