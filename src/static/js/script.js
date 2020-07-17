"use strict";

let openMenu = document.querySelector(".menu-open-js");
let closeMenu = document.querySelector(".menu-close-js");
let navOne = document.querySelector(".nav-one");
let navTwo = document.querySelector(".nav-two");

console.log(openMenu, closeMenu);

const handleOpenMenu = (e) => {
  console.log("dans open");
  navOne.classList.remove("active");
  navTwo.classList.add("active");
};

const handleCloseMenu = (e) => {
  console.log("dans close");
  navOne.classList.add("active");
  navTwo.classList.remove("active");
};

openMenu.addEventListener("click", handleOpenMenu, false);
closeMenu.addEventListener("click", handleCloseMenu, false);
