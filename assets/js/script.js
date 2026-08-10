// Mobile nav toggle
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

// Close the menu when a nav link is clicked
document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
