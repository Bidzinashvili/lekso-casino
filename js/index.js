const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.body.classList.toggle("active");
});

const modal = document.querySelector(".modal");
const modalCloser = document.querySelector("[data-modal-close]");

const openModal = () => {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "visible";
};

modalCloser.addEventListener("click", closeModal);

const buttons = document.querySelectorAll(".card--button");
buttons.forEach((button) => {
  button.addEventListener("click", openModal);
});
