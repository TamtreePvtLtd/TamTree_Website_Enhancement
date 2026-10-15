const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    navigation?.classList.remove('is-open');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formNote) {
    formNote.textContent = 'This preview form is not connected to email yet. Please call one of the TamTree offices listed above.';
    formNote.setAttribute('role', 'status');
  }
});
