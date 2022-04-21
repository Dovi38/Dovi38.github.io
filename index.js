const toggleMenu = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".navbar");
const logo = document.querySelector("#logo");
const submitButton = document.querySelector(".form__box__button");
const formContact = document.querySelector("#contactForm");
console.log(formContact);
const textInput = document.querySelector("#message");

toggleMenu.addEventListener("click", () => {
  //navBar.classList.toggle("active");
  navBar.classList.add("active");
});
navBar.addEventListener("click", () => {
  navBar.classList.remove("active");
});
logo.addEventListener("click", () => {
  navBar.classList.remove("active");
});

// formContact.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let text = (textInput.value = "");
//   formContact.reset();
//   console.log(text);
// });
