import hk from "./hk.jpg";
const content = document.getElementById("content");

export default function Home() {
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  img.src = hk;
  h1.textContent = "Welcome to Odin Restaurant!"

  content.appendChild(img);
  content.appendChild(h1);
}