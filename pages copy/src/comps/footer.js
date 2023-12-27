export function footer() {
  // Select the footer element
  const footer = document.querySelector("footer");
  footer.className = "window";

  const socialLinks = document.createElement("ul");

  // Add social link list items
  socialLinks.innerHTML = `
    <li><a href="https://www.linkedin.com/in/uribarri/" target="_blank">LinkedIn</a></li> 
    <li><a href="https://github.com/alexuribarri" target="_blank">GitHub</a></li>
    <li><a href="https://x.com/alexuribarri" target="_blank">x.com</a></li>

  `;

  // Create back to top link
  const backToTop = document.createElement("p");
  backToTop.innerHTML = '<a href="#top">Back to Top</a>';

  // Create author
  const authorBar = document.createElement("div");

  authorBar.className = "status-bar";
  const author = document.createElement("p");
  author.className = "status-bar-field";
  author.textContent = "Copyright 2023 - Created by Alex Uribarri";
  authorBar.appendChild(author);

  // Append elements to footer
  footer.appendChild(socialLinks);
  footer.appendChild(backToTop);

  footer.appendChild(authorBar);
}
