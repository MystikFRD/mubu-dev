let currentLang = localStorage.getItem("mubu-lang") || "en";
let productionMode = false;

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;
const typeSpeed = 80;

const modeToggle = document.getElementById("modeToggle");
const modeLabel = document.getElementById("modeLabel");
const yearEl = document.getElementById("year");
const heroTagline = document.getElementById("heroTagline");
const profilePhoto = document.getElementById("profilePhoto");
const sideNav = document.getElementById("sideNav");
const expTabs = document.getElementById("expTabs");
const navToggle = document.getElementById("navToggle");
const navBackdrop = document.getElementById("navBackdrop");

function setNavOpen(open) {
  document.body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navBackdrop.hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
  updateMenuAriaLabel();
}

function updateMenuAriaLabel() {
  const t = i18n[currentLang];
  const open = document.body.classList.contains("nav-open");
  navToggle.setAttribute("aria-label", open ? t.nav.menuClose : t.nav.menuOpen);
}

function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("mubu-lang", lang);

  const t = i18n[lang];
  document.documentElement.lang = lang;

  document.getElementById("metaDescription").content = t.meta.description;
  document.getElementById("pageTitle").textContent = t.meta.title;
  sideNav.setAttribute("aria-label", t.nav.aria);
  document.getElementById("langToggle").setAttribute("aria-label", t.nav.langAria);
  modeToggle.title = t.mode.title;
  profilePhoto.alt = t.hero.photoAlt;
  expTabs.setAttribute("aria-label", t.experience.tabAria);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = getNested(t, key);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  document.getElementById("techList").innerHTML = t.tech
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("bulletsApprenticeship").innerHTML = t.experience.bulletsApprenticeship
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("bulletsProduction").innerHTML = t.experience.bulletsProduction
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  modeLabel.textContent = productionMode ? t.mode.production : t.mode.idle;

  updateMenuAriaLabel();
  resetTypewriter();
}

function resetTypewriter() {
  if (typeTimeout) clearTimeout(typeTimeout);
  phraseIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typeWriter();
}

function typeWriter() {
  const t = i18n[currentLang];
  const phrases = t.hero.phrases;
  const greeting = t.hero.greeting;
  const current = phrases[phraseIndex];

  const visible = isDeleting
    ? current.substring(0, charIndex - 1)
    : current.substring(0, charIndex + 1);

  heroTagline.innerHTML = `${greeting} <span class="typed-text">${visible}</span><span class="cursor">|</span>`;

  if (!isDeleting) charIndex++;
  else charIndex--;

  let delay = isDeleting ? 40 : typeSpeed;

  if (!isDeleting && charIndex === current.length + 1) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  typeTimeout = setTimeout(typeWriter, delay);
}

// Language toggle
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.lang !== currentLang) {
      applyLanguage(btn.dataset.lang);
    }
  });
});

// Mobile menu
navToggle.addEventListener("click", () => {
  setNavOpen(!document.body.classList.contains("nav-open"));
});

navBackdrop.addEventListener("click", () => setNavOpen(false));

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) setNavOpen(false);
});

// Experience tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    document.querySelectorAll(".tab-panel").forEach((p) => {
      p.classList.remove("active");
      p.hidden = true;
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const panel = document.getElementById(target);
    panel.classList.add("active");
    panel.hidden = false;
  });
});

// Active nav highlight on scroll
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === entry.target.id);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);

sections.forEach((section) => observer.observe(section));

// Production mode toggle
modeToggle.addEventListener("click", () => {
  productionMode = !productionMode;
  document.body.classList.toggle("production-mode", productionMode);
  const t = i18n[currentLang];
  modeLabel.textContent = productionMode ? t.mode.production : t.mode.idle;
});

// Footer year
yearEl.textContent = new Date().getFullYear();

// Init
applyLanguage(currentLang);
