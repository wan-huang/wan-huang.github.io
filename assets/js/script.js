const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const year = document.querySelector('[data-current-year]');

function updateHeaderShadow() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}

function closeNav() {
  document.body.classList.remove('nav-open');
  navMenu?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('is-open');
  document.body.classList.toggle('nav-open', Boolean(isOpen));
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navMenu?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) closeNav();
});

window.addEventListener('scroll', updateHeaderShadow, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeNav();
});

if (year) year.textContent = new Date().getFullYear();
updateHeaderShadow();
