// DOM Event Steps:

// 1. select hamburger icon --> event target
const hamburgerIcon = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-bar");

// 2. event handler --> show/hide
// Tip: use classList to help us toggle between show and hiding a class
const toggleMenu = function() {
  navLinks.classList.toggle("open-sesame");
}

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
hamburgerIcon.addEventListener("click", toggleMenu);

// ----------------------------------

// ----------------------------------
// back to top arrow button - operational
//Get the button
let scrollbutton = document.getElementById("scroll-button");

// When the user scrolls down 2px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // 200 works
    // limit
  if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}