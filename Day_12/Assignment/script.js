function addMovie() {
    const movie = {
        name: document.getElementById('movieName').value.trim(),
        description: document.getElementById('movieDescription').value.trim(),
        year: document.getElementById('releaseYear').value,
        rating: document.getElementById('imdbRating').value,
        genre: document.getElementById('genre').value,
        poster: document.getElementById('posterUrl').value
    };

    if (!movie.name || !movie.description || !movie.year || !movie.rating || !movie.genre || !movie.poster) {
        alert('Please fill all fields.');
        return;
    }

    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));

    document.getElementById('notification').innerText = 'Movie added successfully!';
    document.getElementById('movieForm').reset();

    setTimeout(() => {
        document.getElementById('notification').innerText = '';
    }, 3000);
}

function displayMovies() {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movieList = document.getElementById('movieList');
    const noMoviesMessage = document.getElementById('noMoviesMessage');

    movieList.innerHTML = '';
    if (movies.length === 0) {
        noMoviesMessage.style.display = 'block';
    } else {
        noMoviesMessage.style.display = 'none';
        movies.forEach((movie, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td><img src="${movie.poster}" alt="${movie.name}" class="poster-thumb"></td>
                <td>${movie.name}</td>
                <td>${movie.description.slice(0, 100)}${movie.description.length > 100 ? '... <a href="#" onclick="readMore(' + index + ')">Read More</a>' : ''}</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.genre}</td>
                <td><button onclick="deleteMovie(${index})">🗑 Delete</button></td>
            `;
            movieList.appendChild(row);
        });
    }
}

function deleteMovie(index) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}

function filterMovies() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const rows = document.querySelectorAll('#movieList tr');

    rows.forEach(row => {
        const name = row.cells[1].innerText.toLowerCase();
        const genre = row.cells[5].innerText.toLowerCase();
        row.style.display = name.includes(query) || genre.includes(query) ? '' : 'none';
    });
}

function readMore(index) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    alert(movies[index].description);
}
