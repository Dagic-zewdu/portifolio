const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('onion');
const nav = document.getElementById('nav');

function openNav() {
  nav.style.height = '100%';
}

function closeNav() {
  nav.style.height = '0%';
}

closeBtn.addEventListener('click', () => closeNav());
openBtn.addEventListener('click', () => openNav());
