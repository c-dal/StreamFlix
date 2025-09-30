// Fonctions d'affichage utilisées dans tous les exemples
function showLoading(show) {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = show ? 'block' : 'none';
    }
}

function showError(message) {
    const errorElement = document.getElementById('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function displayMovieInfo(movie, movieId) {
    const container = document.getElementById(movieId);
    if (container) {
        let badges = "";
        movie.genres.forEach(element => {
            badges +=`<span class="genre badge text-bg-secondary">${element.name}</span>`
        });
        container.innerHTML = `
            <div class="movie-card card">
                <img src="${IMAGE_BASE_URL}${movie.poster_path}" alt="${movie.title}" class="mini-img">
                <div class="movie-details">
                    <h2>${movie.title}</h2>
                    <p class="overview">${movie.overview}</p>
                    <p class="meta">
                        <span class="rating">⭐ ${movie.vote_average}/10</span>
                        <span class="year">${movie.release_date?.split('-')[0]}</span>
                        <span class="runtime">${movie.runtime} min</span> <br>
                        ${badges}
                    </p>
                </div>
            </div>
        `;
    }
}

// Fonction de debouncing pour la recherche
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


// FETCH

// Configuration de base
const API_KEY = '58200380fa028fb6019d2115f75a1761';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Fonction avec Fetch API (moderne)
async function getMovieWithFetch(movieId) {
    try {
        // Affichage du loading
        showLoading(true);

        // Requête vers l'API
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`);

        // Vérification du statut
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        // Conversion en JSON
        const movie = await response.json();

        // Traitement des données
        displayMovieInfo(movie, movieId.toString());

        return movie;

    } catch (error) {
        console.error('Erreur lors de la récupération du film:', error);
        showError(`Erreur: ${error.message}`);
    } finally {
        showLoading(false);
    }
}

// Utilisation
getMovieWithFetch(27205); // Inception
getMovieWithFetch(155); // DarkKnight
