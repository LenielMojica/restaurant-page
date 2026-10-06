import { createAboutPage } from "./about.js";
import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import "./styles.css";
const home = document.getElementById("home-btn");
const menu = document.getElementById("menu-btn");
const about = document.getElementById("about-btn");
const content = document.getElementById("content");
home.addEventListener("click", () => {
  content.textContent = "";
  createHomePage();
});
menu.addEventListener("click", () => {
  content.textContent = "";
  createMenuPage();
});
about.addEventListener("click", () => {
  content.textContent = "";
  createAboutPage();
});
createHomePage();
console.log("Hello world from webpack");
