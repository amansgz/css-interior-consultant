const iconHamburguer = document.getElementById('icon-hamburguer');
const navMenu = document.getElementById('nav-menu');

iconHamburguer.addEventListener("click", e => {
    iconHamburguer.classList.toggle('active')
    navMenu.classList.toggle('nav-menu__show')
})