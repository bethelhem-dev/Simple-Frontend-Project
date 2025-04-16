const URL = "http://www.omdbapi.com/?apikey=ee92ac9f&s=back";

const fetchMovies = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.Search;
  } catch (error) {
    console.error("Failed to fetch movies", error);
    return [];
  }
};

const displayMovies = async () => {
  const movies = await fetchMovies();
  const grid = document.getElementById("movieGrid");

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
          <img src="${
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }" alt="${movie.Title}" />
          <div class="card-body">
            <div class="card-title">${movie.Title}</div>
            <div class="card-year">${movie.Year}</div>
          </div>
        `;

    grid.appendChild(card);
  });
};

displayMovies();
