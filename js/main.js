// Mobile nav toggle
const burger = document.getElementById('burger');
const navEl = document.querySelector('.nav');

burger.addEventListener('click', () => {
  navEl.classList.toggle('open');
  const isOpen = navEl.classList.contains('open');
  burger.setAttribute('aria-expanded', isOpen);
});

// Close drawer on link click
document.querySelectorAll('.nav__drawer a').forEach(link => {
  link.addEventListener('click', () => navEl.classList.remove('open'));
});

// Close drawer on outside click
document.addEventListener('click', e => {
  if (navEl.classList.contains('open') && !navEl.contains(e.target)) {
    navEl.classList.remove('open');
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Contact form — simple validation + mailto fallback
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    const nom = form.querySelector('[name="nom"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    if (!nom || !message) {
      e.preventDefault();
      alert('Veuillez remplir votre nom et décrire la panne.');
    }
  });
}
