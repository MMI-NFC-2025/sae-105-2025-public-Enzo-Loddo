// ===== 1. GESTION DU MENU HAMBURGER =====
const toggle = document.querySelector(".menu-button");
const nav = document.querySelector(".menu");
const body = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const isClosed = !isOpen;
    
    // Mise à jour de l'attribut ARIA (accessibilité + style croix)
    toggle.setAttribute("aria-expanded", isClosed);
    
    // Affiche ou cache le menu
    nav.hidden = isOpen;
    
    // Bloque ou débloque le scroll de la page
    body.classList.toggle("noscroll", isClosed);
  });
}

// ===== 2. GESTION DU CARROUSEL =====
const carrousel = document.querySelector("#carrouselProgrammation");
const btnGauche = document.querySelector(".bouton-carrousel--gauche");
const btnDroite = document.querySelector(".bouton-carrousel--droite");

if (carrousel && btnGauche && btnDroite) {
    // Flèche DROITE
    btnDroite.addEventListener("click", () => {
        const carte = carrousel.querySelector(".carte");
        if (carte) {
            const scrollAmount = carte.offsetWidth + 20;
            carrousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });

    // Flèche GAUCHE
    btnGauche.addEventListener("click", () => {
        const carte = carrousel.querySelector(".carte");
        if (carte) {
            const scrollAmount = carte.offsetWidth + 20;
            carrousel.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        }
    });
}



// ===== 3. BOUTON RETOUR EN HAUT =====
const btnHaut = document.getElementById('btn-retour-haut');

  if (btnHaut) {

    window.addEventListener('scroll', () => {
      const isBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);

      if (isBottom) {
        btnHaut.classList.add('visible');
      } else {
        btnHaut.classList.remove('visible');
      }
    });

    btnHaut.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }