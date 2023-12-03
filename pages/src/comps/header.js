export function header() {
  //website name (h1 element)
  let siteName = document.querySelector("header h1");
  siteName.textContent = "Alex's Uribarri personal website";
  //creating navigation elements
  // Select header and h1
  const header = document.querySelector("header");
  const h1 = header.querySelector("h1");

  // Create nav
  const nav = document.createElement("nav");

  // Add links to nav
  nav.innerHTML = `
  <a href="/">Home</a>
  <a href="./#about">About</a>
`;

  // Insert nav after h1
  h1.insertAdjacentElement("afterend", nav);
}
