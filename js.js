"use strict";

let body = document.querySelector("body");
let themeValue = body.getAttribute("data-theme");

document.addEventListener("DOMContentLoaded", init);

function init() {
  addEventListeners();
}

function addEventListeners() {
  document
    .querySelector("#select-theme")
    .addEventListener("change", switchTheme);
}

function switchTheme() {
  let selectedTheme = document.querySelector("#select-theme").value;

  showTheme(selectedTheme);
}

function showTheme(theme) {
  console.log(theme);
  body.setAttribute("data-theme", theme);
}
