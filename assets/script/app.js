const btnMenu = document.getElementById("btn-hamburger");
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
});
