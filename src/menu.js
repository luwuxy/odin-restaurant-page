const content = document.getElementById("content");

export default function Menu() {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.textContent = "This is page 2!";
  p.textContent = "This is random content, blah blah blah";

  content.appendChild(h1);
  content.appendChild(p);
}