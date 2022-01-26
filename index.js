const projects = [
  {
    id: 'project-1',
    name: 'Tonic',
    featured_image: 'images/lg-Image1.png',
    technologies: [
      'HTML',
      'CSS',
      'javascript',
      'Github',
      'Ruby',
      'Bootsrap',
    ],
    live_link: '',
    source_link: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  {
    id: 'project-2',
    name: 'Multi-Post Stories',
    featured_image: 'images/image_4.png',
    technologies: ['HTML', 'CSS', 'javascript'],
    live_link: '',
    source_link: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  {
    id: 'project-3',
    name: 'Facebook 360',
    featured_image: 'images/Images_1.png',
    technologies: [
      'HTML',
      'CSS',
      'javascript',
      'Github',
      'Ruby',
      'Bootsrap',
      'Node.js',
    ],
    live_link: '',
    source_link: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  {
    id: 'project-4',
    name: 'Uber Navigation',
    featured_image: 'images/availability.png',
    technologies: [
      'HTML',
      'CSS',
      'javascript',
      'Github',
      'Bootsrap',
    ],
    live_link: '',
    source_link: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
];

const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('onion');
const nav = document.getElementById('nav');
const links = document.querySelectorAll(
  '.overlay-content > a',
);
const projectButtons = [];
const buttons = document.querySelectorAll('button');
const modal = document.getElementById('myModal');
const contactForm = document.getElementById('contactForm');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.danger');

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
  project.technologies.forEach((project) => {
    li += `<li class="languages">${project}</li>`;
  });
  const render = `
  <div class="modal-content">
  <span class="close">&times;</span>
  <h2 class="modal-card-title">${project.name}</h2>
  <ul class="icons">
      <li class="canopy">CANOPY</li>
      <li class="counter"><img src="images/Counter.svg" alt="">
      </li>
      <li class="bg">Back End Dev</li>
      <li class="counter"><img src="images/Counter.svg" alt="">
      </li>
      <li class="bg">2015</li>
  </ul>
  <img src=${project.featured_image} alt="featured project image" class="modal-card-img">
  <div class="modal-project-description">
      <p class="modal-description">${project.description}</p>
      <div class="modal-links">
          <ul class="icons">${li}</ul>
          <hr>
          <div class="live-links">
              <button class="btn-enabled" id='live-link' type="button">
                  see live<i class="fa fa-external-link"></i>
              </button>
              <button class="btn-enabled" id='btn-source-link' type="button">
                  See source
                  <i class="fa fa-github"></i>
              </button>
          </div>
      </div>
  </div>
</div>`;
  modal.innerHTML = render;
  modal.style.display = 'block';
  const closeModalBtn =
    document.querySelector('span.close');
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};
closeBtn.addEventListener('click', () => closeNav());
openBtn.addEventListener('click', () => openNav());
links.forEach((node) =>
  node.addEventListener('click', () => closeNav()),
);

projectButtons.forEach((projectBtn) => {
  const { id } = projectBtn;
  projectBtn.addEventListener('click', () =>
    displayModal(id),
  );
});

//contact form

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = email.value;
  if (value.match(/^[a-z0-9+_.-]+@[a-z0-9.-]+$/))
    contactForm.submit();
  else {
    errorMessage.textContent =
      'Your email need to be lowercase or numbers';
    email.style.border = '2px solid red';
  }
});

function hideErrorMessage() {
  errorMessage.textContent = '';
  email.style.border = 'none';
}

email.addEventListener('focus', hideErrorMessage);
