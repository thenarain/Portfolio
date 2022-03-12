const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const mainMenu = document.querySelector('.main-menu');
const navBar = document.querySelector('.nav-bar');
const element = document.querySelectorAll('.elements');


function displayMenu() {
  mainMenu.classList.toggle("hidden");
  openMenu.classList.add("hidden");
  closeMenu.classList.toggle("hidden");
  navBar.classList.add("show");
  document.body.classList.add('no-scroll');
}

function removeMenu() {
  closeMenu.classList.toggle("hidden");
  navBar.classList.remove("show");
  openMenu.classList.remove("hidden");
  mainMenu.classList.toggle("hidden");
  document.body.classList.remove('no-scroll');
}
element.forEach((i)=>{i.addEventListener("click", removeMenu);})
openMenu.addEventListener("click", displayMenu);
closeMenu.addEventListener("click", removeMenu);