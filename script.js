const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const navLinks = navMenu ? [...navMenu.querySelectorAll('a')] : [];
const year = document.querySelector('[data-year]');

if (year) {
  year.textContent = new Date().getFullYear();
}

function setMenuState(isOpen) {
  if (!navToggle || !navMenu) return;

  navToggle.setAttribute('aria-expanded', String(isOpen));
  navMenu.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuState(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 900px)').matches) {
      setMenuState(false);
    }
  });
}
