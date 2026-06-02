// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Destacar link ativo no menu conforme seção visível
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const setActiveLink = () => {
  let currentId = 'inicio';

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// Botão voltar ao topo
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle('show', window.scrollY > 450);
  };

  window.addEventListener('scroll', toggleBackToTop);
  window.addEventListener('load', toggleBackToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
