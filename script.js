const mainMenu = document.querySelector('.main-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const logo = document.querySelector('.logo');
const navBar = document.querySelector('.nav-bar');


function show() {
  closeMenu.classList.toggle('hidden');
  navBar.classList.add('show');
  openMenu.classList.add('hidden');
  mainMenu.classList.toggle('hidden');
  logo.classList.add('hidden');
  document.body.classList.add('no-scroll');
}

function closeMenuFun() {
  openMenu.classList.remove('hidden');
  closeMenu.classList.toggle('hidden');
  navBar.classList.remove('show');
  mainMenu.classList.toggle('hidden');
  logo.classList.remove('hidden');
  document.body.classList.remove('no-scroll');
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', closeMenuFun);