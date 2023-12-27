export function header() {
  //website name (h1 element)
  // let siteName = document.querySelector("header h1");
  // siteName.textContent = "Alex's Uribarri personal website";
  //creating navigation elements
  // Select header and h1
  const header = document.querySelector("header");
  header.className = "window";

  //const h1 = header.querySelector("h1");

  const headerWrapper = document.createElement("div");
  headerWrapper.className = "title-bar";

  const logo = document.createElement("div");
  logo.className = "title-bar-text";
  logo.innerHTML = `alexuribarri.com`;

  header.insertAdjacentElement("afterbegin", headerWrapper);
  headerWrapper.insertAdjacentElement("afterbegin", logo);

  // Create nav
  const navWrapper = document.createElement("div");
  navWrapper.className = "window-body";
  const nav = document.createElement("nav");

  // Add links to nav
  nav.innerHTML = `
  <a href="./">
  <button>Home</button>
  </a>

  <a href="./#updates">
  <button>Updates</button>
  </a>

  <a href="./#about">
  <button>About</button>
  </a>

  <a href="./#links">
  <button>Links</button>
  </a>
`;

  // Insert nav after h1
  headerWrapper.insertAdjacentElement("afterend", navWrapper);
  navWrapper.insertAdjacentElement("afterbegin", nav);
}
