const menuBtn = document.querySelector('.menu-img');
const menu = document.querySelector ('.menu-links');

menuBtn .addEventListener ('click', () => {
    menu.classList.toggle('active');

});