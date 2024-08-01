const menu = document.querySelector('.menu');
const list = document.querySelector('.list__items');

menu.addEventListener('click', handleMenu);

function handleMenu(e) {
  e.preventDefault();
  list.classList.toggle('active')
}