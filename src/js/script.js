// src/js/script.js

// On sélectionne les éléments du DOM
const toggle = document.querySelector(".menu-button");
const nav = document.querySelector(".menu");
const body = document.body;

// On vérifie que les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  
  toggle.addEventListener("click", () => {
    // Est-ce que le menu est actuellement ouvert ? (true/false)
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const isClosed = !isOpen;

    // 1. Mise à jour de l'attribut ARIA pour le bouton (accessibilité + style croix)
    toggle.setAttribute("aria-expanded", isClosed);

    // 2. Affiche ou cache le menu
    // Si isClosed est vrai (on veut ouvrir), hidden devient false (on affiche)
    nav.hidden = isOpen;

    // 3. Bloque ou débloque le scroll de la page
    body.classList.toggle("noscroll", isClosed);
  });
}