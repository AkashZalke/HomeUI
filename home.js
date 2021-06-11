const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
//duplicates flex card

document.getElementById('duplicateCard').onclick = duplicate;

var i = 0;
var original = document.getElementById('flexCard');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "flexCard" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
}
