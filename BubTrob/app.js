let menuTogger = document.querySelector(".nav__button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuTogger.addEventListener("click", () => {
    body.classList.toggle("open");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    })
})