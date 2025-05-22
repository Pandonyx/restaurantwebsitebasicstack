// DOM Elements
const navbar = document.getElementById("navbar");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navbarMenu = document.getElementById("navbar-menu");
const navbarLinks = document.querySelectorAll(".navbar-link");
const languageSelect = document.getElementById("language-select");
const menuTabs = document.querySelectorAll(".menu-tab");
const menuContents = document.querySelectorAll(".menu-category-content");
const scrollToTopBtn = document.getElementById("scroll-to-top");
const reservationForm = document.getElementById("reservation-form");
const downloadMenuBtn = document.getElementById("download-menu");

// Translations
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    reservation: "Reservation",
    contact: "Contact",

    // Hero Section
    heroTitle: "A Culinary Experience Like No Other",
    heroDescription:
      "Indulge in an extraordinary dining experience with our exquisite cuisine, curated by renowned chefs and served in an elegant atmosphere.",
    makeReservation: "Make a Reservation",
    exploreMenu: "Explore Our Menu",

    // About Section
    ourStory: "Our Story",
    aboutText1:
      "Founded in 2023, Elegance Dining brings the timeless elegance of fine dining to the heart of the city. Our restaurant offers an exceptional dining experience that celebrates the rich culinary heritage of contemporary gastronomy.",
    aboutText2:
      "Our founder, Chef Michael, trained in prestigious kitchens before bringing his passion for creating unforgettable dining experiences to our establishment. Today, Elegance Dining stands as a top-rated restaurant, known for its exceptional food and impeccable service.",
    inCity: "In City",
    googleRating: "Google Rating",
    happyGuests: "Happy Guests",

    // Menu Section
    ourMenu: "Our Menu",
    menuDescription: "Experience our carefully crafted seasonal offerings",
    starters: "Starters",
    mainCourses: "Main Courses",
    desserts: "Desserts",
    drinks: "Drinks",
    downloadMenu: "Download Full Menu (PDF)",
    pricesNote:
      "* All prices are subject to change and include applicable taxes",

    // Menu Items
    menuItems: {
      starters: [
        {
          name: "Signature Starter",
          description:
            "A delightful combination of fresh ingredients and unique flavors",
          price: "###",
        },
        {
          name: "Chef's Special",
          description:
            "Our chef's daily creation featuring seasonal ingredients",
          price: "###",
        },
        {
          name: "Classic Starter",
          description: "A timeless favorite prepared with our unique touch",
          price: "###",
        },
      ],
      mains: [
        {
          name: "Signature Main",
          description:
            "Our most popular dish, prepared with premium ingredients",
          price: "###",
        },
        {
          name: "Chef's Recommendation",
          description: "A special creation showcasing our culinary expertise",
          price: "###",
        },
        {
          name: "Classic Main",
          description: "A traditional favorite with our contemporary twist",
          price: "###",
        },
      ],
      desserts: [
        {
          name: "Signature Dessert",
          description: "A sweet masterpiece that will delight your senses",
          price: "###",
        },
        {
          name: "Chef's Sweet Creation",
          description: "A unique dessert experience crafted by our pastry chef",
          price: "###",
        },
        {
          name: "Classic Dessert",
          description: "A timeless sweet treat with our special touch",
          price: "###",
        },
      ],
      drinks: [
        {
          name: "Signature Cocktail",
          description:
            "Our unique blend of premium spirits and fresh ingredients",
          price: "###",
        },
        {
          name: "Wine Selection",
          description: "Carefully curated wines from around the world",
          price: "###",
        },
        {
          name: "Non-Alcoholic Special",
          description: "Refreshing mocktails and specialty drinks",
          price: "###",
        },
      ],
    },

    // Gallery Section
    galleryTitle: "Gallery",
    galleryDescription: "Glimpses of our culinary artistry and ambiance",

    // Reservation Section
    reservationTitle: "Make a Reservation",
    reservationDescription:
      "We look forward to serving you an unforgettable experience",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    date: "Date",
    time: "Time",
    guests: "Number of Guests",
    specialRequirements: "Special Requirements",
    specialRequirementsPlaceholder:
      "Dietary restrictions, allergies, special occasions...",
    requestReservation: "Request Reservation",
    reservationNote:
      "All reservations will be confirmed via phone call within 24 hours.",

    // Contact Section
    contactTitle: "Contact Us",
    location: "Location",
    openingHours: "Opening Hours",
    getDirections: "Get Directions",
    phone: "Phone",
    email: "Email",
    days: {
      weekdays: "Monday - Friday",
      weekend: "Saturday - Sunday",
      hours: {
        weekdays: "12:00 - 15:00, 19:00 - 23:00",
        weekend: "12:00 - 23:00",
      },
    },
  },
  fr: {
    // Navigation
    home: "Accueil",
    about: "À Propos",
    menu: "Menu",
    gallery: "Galerie",
    reservation: "Réservation",
    contact: "Contact",

    // Hero Section
    heroTitle: "Une Expérience Culinaire Unique",
    heroDescription:
      "Savourez une expérience gastronomique extraordinaire avec notre cuisine exquise, créée par des chefs renommés et servie dans une atmosphère élégante.",
    makeReservation: "Réserver",
    exploreMenu: "Découvrir Notre Menu",

    // About Section
    ourStory: "Notre Histoire",
    aboutText1:
      "Fondé en 2023, Elegance Dining apporte l'élégance intemporelle de la gastronomie au cœur de la ville. Notre restaurant offre une expérience culinaire exceptionnelle qui célèbre le riche patrimoine gastronomique contemporain.",
    aboutText2:
      "Notre fondateur, le Chef Michael, s'est formé dans des cuisines prestigieuses avant d'apporter sa passion pour créer des expériences culinaires inoubliables dans notre établissement. Aujourd'hui, Elegance Dining est un restaurant hautement coté, connu pour sa nourriture exceptionnelle et son service impeccable.",
    inCity: "En Ville",
    googleRating: "Note Google",
    happyGuests: "Clients Satisfaits",

    // Menu Section
    ourMenu: "Notre Menu",
    menuDescription:
      "Découvrez nos offres saisonnières soigneusement élaborées",
    starters: "Entrées",
    mainCourses: "Plats Principaux",
    desserts: "Desserts",
    drinks: "Boissons",
    downloadMenu: "Télécharger le Menu Complet (PDF)",
    pricesNote:
      "* Tous les prix sont sujets à changement et incluent les taxes applicables",

    // Menu Items
    menuItems: {
      starters: [
        {
          name: "Entrée Signature",
          description:
            "Une délicieuse combinaison d'ingrédients frais et de saveurs uniques",
          price: "###",
        },
        {
          name: "Spécial du Chef",
          description:
            "La création quotidienne de notre chef avec des ingrédients de saison",
          price: "###",
        },
        {
          name: "Entrée Classique",
          description: "Un favori intemporel préparé avec notre touche unique",
          price: "###",
        },
      ],
      mains: [
        {
          name: "Plat Signature",
          description:
            "Notre plat le plus populaire, préparé avec des ingrédients premium",
          price: "###",
        },
        {
          name: "Recommandation du Chef",
          description:
            "Une création spéciale mettant en valeur notre expertise culinaire",
          price: "###",
        },
        {
          name: "Plat Classique",
          description: "Un favori traditionnel avec notre touche contemporaine",
          price: "###",
        },
      ],
      desserts: [
        {
          name: "Dessert Signature",
          description: "Un chef-d'œuvre sucré qui ravira vos sens",
          price: "###",
        },
        {
          name: "Création Sucrée du Chef",
          description:
            "Une expérience dessert unique créée par notre pâtissier",
          price: "###",
        },
        {
          name: "Dessert Classique",
          description: "Une douceur intemporelle avec notre touche spéciale",
          price: "###",
        },
      ],
      drinks: [
        {
          name: "Cocktail Signature",
          description:
            "Notre mélange unique de spiritueux premium et d'ingrédients frais",
          price: "###",
        },
        {
          name: "Sélection de Vins",
          description: "Vins soigneusement sélectionnés du monde entier",
          price: "###",
        },
        {
          name: "Spécial Sans Alcool",
          description: "Mocktails rafraîchissants et boissons spéciales",
          price: "###",
        },
      ],
    },

    // Gallery Section
    galleryTitle: "Galerie",
    galleryDescription: "Aperçus de notre art culinaire et de notre ambiance",

    // Reservation Section
    reservationTitle: "Faire une Réservation",
    reservationDescription:
      "Nous avons hâte de vous offrir une expérience inoubliable",
    fullName: "Nom Complet",
    email: "Adresse Email",
    phone: "Numéro de Téléphone",
    date: "Date",
    time: "Heure",
    guests: "Nombre de Personnes",
    specialRequirements: "Demandes Spéciales",
    specialRequirementsPlaceholder:
      "Restrictions alimentaires, allergies, occasions spéciales...",
    requestReservation: "Demander une Réservation",
    reservationNote:
      "Toutes les réservations seront confirmées par téléphone dans les 24 heures.",

    // Contact Section
    contactTitle: "Contactez-nous",
    location: "Adresse",
    openingHours: "Heures d'Ouverture",
    getDirections: "Obtenir l'Itinéraire",
    phone: "Téléphone",
    email: "Email",
    days: {
      weekdays: "Lundi - Vendredi",
      weekend: "Samedi - Dimanche",
      hours: {
        weekdays: "12:00 - 15:00, 19:00 - 23:00",
        weekend: "12:00 - 23:00",
      },
    },
  },
};

// Initialize Mapbox only if token is available
let map = null;
try {
  if (typeof mapboxgl !== "undefined") {
    mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";
    map = new mapboxgl.Map({
      container: "mapbox-container",
      style: "mapbox://styles/mapbox/light-v10",
      center: [-73.935242, 40.73061], // Default to New York City
      zoom: 15,
    });

    // Add marker for restaurant location
    new mapboxgl.Marker().setLngLat([-73.935242, 40.73061]).addTo(map);
  }
} catch (error) {
  console.warn("Mapbox initialization failed:", error);
  const mapContainer = document.getElementById("mapbox-container");
  if (mapContainer) {
    mapContainer.innerHTML =
      "<p>Map loading failed. Please check your Mapbox configuration.</p>";
  }
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener("click", () => {
  mobileMenuToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
  });
});

// Language switching functionality
function updateLanguage(lang) {
  try {
    // Update navigation links
    document.querySelectorAll(".navbar-link").forEach((link) => {
      const key = link.getAttribute("data-translate");
      if (key && translations[lang][key]) {
        link.textContent = translations[lang][key];
      }
    });

    // Update hero section
    const heroTitle = document.querySelector(".hero h1");
    const heroDesc = document.querySelector(".hero-description");
    const heroPrimaryBtn = document.querySelector(".hero-buttons .btn-primary");
    const heroOutlineBtn = document.querySelector(".hero-buttons .btn-outline");

    if (heroTitle) heroTitle.textContent = translations[lang].heroTitle;
    if (heroDesc) heroDesc.textContent = translations[lang].heroDescription;
    if (heroPrimaryBtn)
      heroPrimaryBtn.textContent = translations[lang].makeReservation;
    if (heroOutlineBtn)
      heroOutlineBtn.textContent = translations[lang].exploreMenu;

    // Update about section
    const aboutTitle = document.querySelector(".about .section-title");
    const aboutTexts = document.querySelectorAll(".about-text");
    const statLabels = document.querySelectorAll(".stat-label");

    if (aboutTitle) aboutTitle.textContent = translations[lang].ourStory;
    if (aboutTexts[0])
      aboutTexts[0].textContent = translations[lang].aboutText1;
    if (aboutTexts[1])
      aboutTexts[1].textContent = translations[lang].aboutText2;
    if (statLabels[0]) statLabels[0].textContent = translations[lang].inCity;
    if (statLabels[1])
      statLabels[1].textContent = translations[lang].googleRating;
    if (statLabels[2])
      statLabels[2].textContent = translations[lang].happyGuests;

    // Update menu section
    const menuTitle = document.querySelector(".menu .section-title");
    const menuDesc = document.querySelector(".menu .section-description");
    const menuTabs = document.querySelectorAll(".menu-tab");
    const downloadMenu = document.getElementById("download-menu");
    const pricesNote = document.querySelector(".menu-footer p");

    if (menuTitle) menuTitle.textContent = translations[lang].ourMenu;
    if (menuDesc) menuDesc.textContent = translations[lang].menuDescription;
    menuTabs.forEach((tab, index) => {
      const keys = ["starters", "mainCourses", "desserts", "drinks"];
      if (translations[lang][keys[index]]) {
        tab.textContent = translations[lang][keys[index]];
      }
    });
    if (downloadMenu)
      downloadMenu.textContent = translations[lang].downloadMenu;
    if (pricesNote) pricesNote.textContent = translations[lang].pricesNote;

    // Update menu items
    updateMenuItems(lang);

    // Update gallery section
    const galleryTitle = document.querySelector(".gallery .section-title");
    const galleryDesc = document.querySelector(".gallery .section-description");

    if (galleryTitle)
      galleryTitle.textContent = translations[lang].galleryTitle;
    if (galleryDesc)
      galleryDesc.textContent = translations[lang].galleryDescription;

    // Update reservation section
    const reservationTitle = document.querySelector(
      ".reservation .section-title"
    );
    const reservationDesc = document.querySelector(
      ".reservation .section-description"
    );
    const formLabels = document.querySelectorAll(".form-group label");
    const specialReqPlaceholder = document.getElementById(
      "special-requirements"
    );
    const requestReservationBtn = document.querySelector(
      ".form-footer .btn-primary"
    );
    const reservationNote = document.querySelector(".form-note");

    if (reservationTitle)
      reservationTitle.textContent = translations[lang].reservationTitle;
    if (reservationDesc)
      reservationDesc.textContent = translations[lang].reservationDescription;
    if (formLabels[0]) formLabels[0].textContent = translations[lang].fullName;
    if (formLabels[1]) formLabels[1].textContent = translations[lang].email;
    if (formLabels[2]) formLabels[2].textContent = translations[lang].phone;
    if (formLabels[3]) formLabels[3].textContent = translations[lang].date;
    if (formLabels[4]) formLabels[4].textContent = translations[lang].time;
    if (formLabels[5]) formLabels[5].textContent = translations[lang].guests;
    if (formLabels[6])
      formLabels[6].textContent = translations[lang].specialRequirements;
    if (specialReqPlaceholder)
      specialReqPlaceholder.placeholder =
        translations[lang].specialRequirementsPlaceholder;
    if (requestReservationBtn)
      requestReservationBtn.textContent = translations[lang].requestReservation;
    if (reservationNote)
      reservationNote.textContent = translations[lang].reservationNote;

    // Update contact section
    const contactTitle = document.querySelector(".contact .section-title");
    const contactHeadings = document.querySelectorAll(".contact-text h3");
    const directionsLink = document.querySelector(".directions-link");
    const openingHoursList = document.querySelector(".opening-hours ul");
    const contactOpeningHours = document.querySelector(
      ".contact-item:nth-child(2) .contact-text p"
    );

    if (contactTitle)
      contactTitle.textContent = translations[lang].contactTitle;
    contactHeadings.forEach((heading, index) => {
      const keys = ["location", "openingHours", "phone", "email"];
      if (translations[lang][keys[index]]) {
        heading.textContent = translations[lang][keys[index]];
      }
    });
    if (directionsLink)
      directionsLink.textContent = translations[lang].getDirections;

    // Update opening hours in reservation section
    if (openingHoursList) {
      openingHoursList.innerHTML = `
        <li>${translations[lang].days.weekdays}: <span>${translations[lang].days.hours.weekdays}</span></li>
        <li>${translations[lang].days.weekend}: <span>${translations[lang].days.hours.weekend}</span></li>
      `;
    }

    // Update opening hours in contact section
    if (contactOpeningHours) {
      contactOpeningHours.textContent = `${translations[lang].days.weekdays} - ${translations[lang].days.weekend}: ${translations[lang].days.hours.weekend}`;
    }

    // Store selected language
    localStorage.setItem("selectedLanguage", lang);
  } catch (error) {
    console.error("Error updating language:", error);
  }
}

// Initialize language based on stored preference or default to English
const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
languageSelect.value = storedLanguage;
updateLanguage(storedLanguage);

// Language selector event listener
languageSelect.addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

// Menu tabs functionality
menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and contents
    menuTabs.forEach((t) => t.classList.remove("active"));
    menuContents.forEach((c) => {
      c.classList.remove("active");
      c.style.display = "none";
    });

    // Add active class to clicked tab and corresponding content
    tab.classList.add("active");
    const category = tab.getAttribute("data-category");
    const content = document.getElementById(category);
    if (content) {
      content.classList.add("active");
      content.style.display = "block";
    }
  });
});

// Scroll to top button functionality
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form submission handling
if (reservationForm) {
  reservationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(reservationForm);
      const response = await fetch(reservationForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Reservation request sent successfully!");
        reservationForm.reset();
      } else {
        throw new Error("Failed to send reservation request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Sorry, there was an error sending your reservation request. Please try again later."
      );
    }
  });
}

// Download menu button functionality
if (downloadMenuBtn) {
  downloadMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Menu download functionality will be implemented here.");
  });
}

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".animate-on-scroll:not(.visible)"
  );
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom > 0;
    if (isVisible) {
      element.classList.add("visible");
    }
  });
};

// Initialize menu items on page load
document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
  updateMenuItems(storedLanguage);

  // Show the active tab content
  const activeTab = document.querySelector(".menu-tab.active");
  if (activeTab) {
    const category = activeTab.getAttribute("data-category");
    const content = document.getElementById(category);
    if (content) {
      content.style.display = "block";
    }
  }
});

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Update menu items when language changes
function updateMenuItems(lang) {
  const categories = ["starters", "mains", "desserts", "drinks"];
  categories.forEach((category) => {
    const content = document.getElementById(category);
    if (content) {
      const menuItems = content.querySelector(".menu-items");
      if (menuItems) {
        menuItems.innerHTML = translations[lang].menuItems[category]
          .map(
            (item) => `
          <div class="menu-item">
            <div class="menu-item-title">
              <span>${item.name}</span>
              <span class="menu-item-price">${item.price}</span>
            </div>
            <p class="menu-item-description">${item.description}</p>
          </div>
        `
          )
          .join("");
      }
    }
  });
}
