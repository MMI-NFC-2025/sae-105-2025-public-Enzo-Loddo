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
/* Menu présent sur toutes les pages :
- index.html
- Le festival.html
- La programmation.html
- Artiste.html
- scénes.html
- Info pratique.html
- Contact.html
- 404.html
- Artiste2.html
*/  




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
/* Menu présent sur les pages :
- index.html
*/



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
  /* Menu présent sur toutes les pages :
- index.html
- Le festival.html
- La programmation.html
- Artiste.html
- scénes.html
- Info pratique.html
- Contact.html
- 404.html
- Artiste2.html
*/ 








/* --- 4. MOTEUR DE RECHERCHE INTERNE --- */
const searchForm = document.getElementById("siteSearchForm");
const searchInput = document.getElementById("siteSearchInput");
const searchError = document.getElementById("searchError");

// Dictionnaire pour retrouver les mots 
const pagesMap = {
    // Page Accueil
    "accueil": "index.html",
    "home": "index.html",
    "chorus": "index.html",

    // Page Festival
    "festival": "Le festival.html",
    "histoire": "Le festival.html",
    "citadelle": "Le festival.html",

    // Page Programmation
    "programme": "La programmation.html",
    "heure": "La programmation.html",
    "date": "La programmation.html",
    "concert": "La programmation.html",

    // Page Artistes
    "artiste": "Artiste.html",
    "chanteur": "Artiste.html",
    "groupe": "Artiste.html",
    "marc": "Artiste.html",   
    "khatia": "Artiste.html",
    "pianiste": "Artiste.html",


    // Page Scènes
    "scene": "Scénes.html",
    "lieu": "Scénes.html",
    "carte": "Scénes.html",

    // Page Infos Pratiques
    "info": "Info pratique.html",
    "billet": "Info pratique.html",
    "tarif": "Info pratique.html",
    "prix": "Info pratique.html",
    "acheter": "Info pratique.html",

    // Page Contact
    "contact": "Contact.html",
    "mail": "Contact.html",
    "message": "Contact.html"
};

if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        searchError.style.display = "none"; // Cache l'erreur précédente

        // 1. On récupère ce que l'utilisateur a écrit (en minuscule et sans espaces inutiles)
        const query = searchInput.value.toLowerCase().trim();

        let foundPage = null;

        // 2. On cherche si un mot-clé existe dans la recherche
        // Exemple : Si l'utilisateur tape "je veux un billet", on trouve "billet"
        for (const [keyword, url] of Object.entries(pagesMap)) {
            if (query.includes(keyword)) {
                foundPage = url;
                break; // On a trouvé, on arrête de chercher
            }
        }

        // 3. Redirection ou Erreur
        if (foundPage) {
            window.location.href = foundPage; // Hop, on change de page !
        } else {
            // Pas trouvé ? On affiche le message d'erreur rouge
            searchError.style.display = "block";
            // Animation : secouer le formulaire (optionnel mais sympa)
            searchForm.style.transform = "translateX(5px)";
            setTimeout(() => searchForm.style.transform = "translateX(0)", 100);
        }
    });
}