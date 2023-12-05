const hamburger = document.querySelector(".hamburger img");
const nav = document.querySelector(".nav-lists");
const main = document.querySelector("main");


function openMenuBar() {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    hamburger.src = "./assets/images/icon-menu-close.svg";
  } else {
    hamburger.src = "./assets/images/icon-menu.svg";
  }
}
hamburger.addEventListener("click", openMenuBar);
