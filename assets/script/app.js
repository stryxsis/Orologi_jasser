const btnMenu = document.getElementById("btn-hamburger");
<<<<<<< HEAD
const svgMenu = document.getElementById("svg-hamburger");

btnMenu.addEventListener("click", () => {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu.classList.contains("nav_menu-show")) {
    navMenu.classList.remove("nav_menu-show");
    svgMenu.style.rotate = "0deg";
  } else {
    navMenu.classList.add("nav_menu-show");
    svgMenu.style.rotate = "90deg";
  }
=======

btnMenu.addEventListener("click", () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("nav_menu-show");
>>>>>>> 910ea8af39682a75a77e2c5183657fd0c796d8a2
});
