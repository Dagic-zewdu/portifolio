const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('onion');
const nav = document.getElementById('nav');
const links = document.querySelectorAll(
  '.overlay-content > a',
);

function openNav() {
  nav.style.height = '100%';
}

function closeNav() {
  nav.style.height = '0%';
}

closeBtn.addEventListener('click', () => closeNav());
openBtn.addEventListener('click', () => openNav());
links.forEach((node) => node.addEventListener('click', () => closeNav()));
