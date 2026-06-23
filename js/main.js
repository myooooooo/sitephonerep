// Mobile nav toggle
const burger = document.getElementById('burger');
const navEl = document.querySelector('.nav');

burger.addEventListener('click', () => {
  navEl.classList.toggle('open');
  burger.setAttribute('aria-expanded', navEl.classList.contains('open'));
});

document.querySelectorAll('.nav__drawer a').forEach(link => {
  link.addEventListener('click', () => navEl.classList.remove('open'));
});

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

// Formulaire de contact — email formaté proprement
const form = document.getElementById('contact-form');
if (form) {
  const submitBtn = form.querySelector('.btn-submit');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nom      = form.querySelector('[name="nom"]').value.trim();
    const tel      = form.querySelector('[name="tel"]').value.trim();
    const appareil = form.querySelector('[name="appareil"]').value.trim();
    const panne    = form.querySelector('[name="panne"]').value.trim();

    // Validation simple
    if (!nom || !tel || !appareil || !panne) {
      showError('Merci de remplir tous les champs obligatoires (*).');
      return;
    }

    // Construction du corps de l'email
    const sujet = `Demande de réparation – ${appareil}`;

    const corps =
      `Bonjour,\n\n` +
      `Vous avez reçu une nouvelle demande de réparation depuis votre site.\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Nom : ${nom}\n` +
      `Téléphone : ${tel}\n` +
      `Appareil : ${appareil}\n\n` +
      `Description de la panne :\n${panne}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Envoyé depuis phonerep.fr`;

    const mailto = `mailto:phonerep71@hotmail.com` +
      `?subject=${encodeURIComponent(sujet)}` +
      `&body=${encodeURIComponent(corps)}`;

    window.location.href = mailto;

    // Feedback visuel après envoi
    submitBtn.textContent = 'Message en cours…';
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = 'Envoyer ma demande';
      submitBtn.disabled = false;
    }, 3000);
  });
}

function showError(msg) {
  let el = document.getElementById('form-error');
  if (!el) {
    el = document.createElement('p');
    el.id = 'form-error';
    el.style.cssText = 'color:#CC1414;font-size:.82rem;margin-bottom:.75rem;font-weight:600;';
    form.querySelector('.btn-submit').before(el);
  }
  el.textContent = msg;
  setTimeout(() => el.remove(), 4000);
}
