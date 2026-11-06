// Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed consequatur quia! Commodi non eaque quasi expedita veniam quas exercitationem molestiae, voluptate hic dicta! Odit error similique corrupti velit sequi. Tempore rerum nam officia nihil autem aliquam possimus iure eveniet doloremque distinctio atque veritatis, id odio eum harum incidunt quo!
const content = document.getElementById("content");

export default function About() {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "This is page 3!";
  p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed consequatur quia! Commodi non eaque quasi expedita veniam quas exercitationem molestiae, voluptate hic dicta! Odit error similique corrupti velit sequi. Tempore rerum nam officia nihil autem aliquam possimus iure eveniet doloremque distinctio atque veritatis, id odio eum harum incidunt quo!";

  content.appendChild(h1);
  content.appendChild(p);
}