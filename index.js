const toggleMenu = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".navbar");

toggleMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
