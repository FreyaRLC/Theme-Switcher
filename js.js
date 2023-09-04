"use strict";

let body = document.querySelector("body");
let themeValue = body.getAttribute("data-theme");

document.addEventListener("DOMContentLoaded", init);

function init() {
  addEventListeners();
}

function addEventListeners() {
  // Adds eventlisteners to the dropdown menu
  document
    .querySelector("#select-theme")
    .addEventListener("change", switchTheme);
}

function switchTheme() {
  // Gets the value (the theme) from the selected option
  let selectedTheme = document.querySelector("#select-theme").value;

  showTheme(selectedTheme);
}

function showTheme(theme) {
  console.log(theme);
  //   Sets the data attribute to the value of the selected option/theme
  body.setAttribute("data-theme", theme);
}
