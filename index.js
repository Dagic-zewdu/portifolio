const projects = [{
  id: 'project-1',
  name: 'Tonic',
  featured_image: 'images/lg-Image1.png',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Ruby', 'Bootsrap'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
{
  id: 'project-2',
  name: 'Multi-Post Stories',
  featured_image: 'images/image_4.png',
  technologies: ['HTML', 'CSS', 'javascript'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
{
  id: 'project-3',
  name: 'Facebook 360',
  featured_image: 'images/Images_1.png',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Ruby', 'Bootsrap', 'Node.js'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',

},
{
  id: 'project-4',
  name: 'Uber Navigation',
  featured_image: 'images/availability.png',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Bootsrap'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
];

const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('onion');
const nav = document.getElementById('nav');
const links = document.querySelectorAll('.overlay-content > a');
const projectButtons = [];
const buttons = document.querySelectorAll('button');
const modal = document.getElementById('myModal');
const closeModalBtn = document.querySelector('span.close');
const modalTile = document.querySelector('.modal-content > .modal-card-title');
const modalImage = document.querySelector('.modal-content > .modal-card-img');
const modalDescription = document.querySelector('.modal-project-description > .modal-description');
const modalTech = document.querySelector('.modal-links > .icons');

buttons.forEach((button) => {
  const [btn] = button.id.split('-');
  if (btn === 'project') projectButtons.push(button);
});
function openNav() {
  nav.style.height = '100%';
}

function closeNav() {
  nav.style.height = '0%';
}
const displayModal = (id) => {
  let li = '';
  const project = projects.find((p) => p.id === id);
  modal.style.display = 'block';
  modalTile.textContent = project.name;
  modalImage.src = project.featured_image;
  modalDescription.textContent = project.description;
  project.technologies.forEach((project) => {
    li += `<li class="languages">${project}</li>`;
  });
  modalTech.innerHTML = li;
};
closeBtn.addEventListener('click', () => closeNav());
openBtn.addEventListener('click', () => openNav());
links.forEach((node) => node.addEventListener('click', () => closeNav()));

projectButtons.forEach((projectBtn) => {
  const { id } = projectBtn;
  projectBtn.addEventListener('click', () => displayModal(id));
});

closeModalBtn.addEventListener('click', () => { modal.style.display = 'none'; });