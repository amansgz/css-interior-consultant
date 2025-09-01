const btnHamburger = document.getElementById("btnHamburger");
const navMenu = document.getElementById("navMenu");

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
});
