const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// ===================================
// EXERCICE 1 : Afficher/masquer sections
// ===================================

function hideSection(button) {
    let section = button.closest("section");
    let cards = section.querySelectorAll(".card");
    // On a extrait toutes les cartes dans chaque section, on les parcourt pour les cacher 
    cards.forEach(card => {
        card.classList.toggle("hidden");
    });
}

// ===================================
// EXERCICE 2 : Compteur de films
// ===================================

const filmList = document.querySelectorAll(".mini-film");
let catalogue = document.createElement("div");
catalogue.innerText = `Catalogue : ${filmList.length} films disponibles`;
let node = document.querySelector(".films");
node.appendChild(catalogue); 

// ===================================
// EXERCICE 3 : Films vus
// ===================================

function toggleWatched(card) {
    card.classList.toggle("watched");
}

// ===================================
// EXERCICE 4 : Recherche
// ===================================


// ===================================
// EXERCICE 5 : Modal
// ===================================




