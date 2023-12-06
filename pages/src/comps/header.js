export function header() {
  //website name (h1 element)
  // let siteName = document.querySelector("header h1");
  // siteName.textContent = "Alex's Uribarri personal website";
  //creating navigation elements
  // Select header and h1
  const header = document.querySelector("header");
  //const h1 = header.querySelector("h1");

  const headerWrapper = document.createElement("div");
  headerWrapper.className = "header-wrapper";

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<p>Alex's</p>`;

  header.insertAdjacentElement("afterbegin", headerWrapper);
  headerWrapper.insertAdjacentElement("afterbegin", logo);

  // Create nav
  const nav = document.createElement("nav");

  // Add links to nav
  nav.innerHTML = `
  <a href="/">Home</a>
  <a href="./#about">About</a>
  <a href="./#updates">Updates<a>
`;

  // Insert nav after h1
  logo.insertAdjacentElement("afterend", nav);
}
