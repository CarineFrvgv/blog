const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}