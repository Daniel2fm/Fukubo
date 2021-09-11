const navToggle = document.querySelector('.nav-barra');
const navMenu = document.querySelector('.nav_menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
});

const contToggle = document.querySelector('.materia-cont');
const contMenu = document.querySelector('.materia_contenido');

contToggle.addEventListener('click', () => {
    contMenu.classList.toggle('materia_contenido-visible');
});

const contToggle2 = document.querySelector('.materia-cont2');
const contMenu2 = document.querySelector('.materia_contenido2');

contToggle2.addEventListener('click', () => {
    contMenu2.classList.toggle('materia_contenido-visible');
});

const contToggle3 = document.querySelector('.materia-cont3');
const contMenu3 = document.querySelector('.materia_contenido3');

contToggle3.addEventListener('click', () => {
    contMenu3.classList.toggle('materia_contenido-visible');
});