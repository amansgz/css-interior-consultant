const iconHamburger = document.getElementById('icon-hamburger');
const navMenu = document.getElementById('nav-menu');

iconHamburger.addEventListener("click", e => {
    iconHamburger.classList.toggle('active')
    navMenu.classList.toggle('nav__menu__show')
})