// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });
});