const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");

const showMoreMenu = document.querySelector("#show-more-menu");
const moreMenu = document.getElementById('more-menu');
const showProductMenu = document.querySelector("#show-product-menu");
const productMenu = document.getElementById("product-menu");

hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.classList.add("show-hamburger-menu")
})

crossIcon.addEventListener("click", function () {
    hamburgerMenu.classList.remove("show-hamburger-menu")
})


showMoreMenu.addEventListener("mouseenter", function (e) {
    // console.log(e.target.childNodes[5]);
    const ul = e.target.childNodes[5];
    ul.style.animation = 'showUp 0.35s 1';
    ul.style.display = 'block';
})


moreMenu.addEventListener("mouseleave", function (e) {
    moreMenu.style.display = "none";
})


showProductMenu.addEventListener("mouseenter", function (event) {
    // console.log(event.target.childNodes[5]);
    const div = event.target.childNodes[5];
    div.style.animation = 'showUp 0.35s 1';
    div.style.display = 'flex';
})


productMenu.addEventListener("mouseleave", function (event) {
    productMenu.style.display = 'none';
})

