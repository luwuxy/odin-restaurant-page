import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

Home();

homeBtn.addEventListener('click', () => {
  content.textContent = "";
  Home();
})

menuBtn.addEventListener('click', () => {
  content.textContent = "";
  Menu();
})

aboutBtn.addEventListener('click', () => {
  content.textContent = "";
  About();
})