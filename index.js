const toggleMenu = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".navbar");
const logo = document.querySelector("#logo");

toggleMenu.addEventListener("click", () => {
  navBar.classList.add("active");
});
navBar.addEventListener("click", () => {
  navBar.classList.remove("active");
});
logo.addEventListener("click", () => {
  navBar.classList.remove("active");
});
