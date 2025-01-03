const btnMenu = document.getElementById("btn-hamburger");

btnMenu.addEventListener("click", () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("nav_menu-show");
});
