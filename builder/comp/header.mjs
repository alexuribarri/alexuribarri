import main from "../menus/main.json" assert { type: "json" };
import config from "../config.json" assert { type: "json" };

export function header() {
  //website URL and logo
  const { url: webUrl } = config;
  const { logo: webLogo } = config;

  //Navlinks
  const navLinks = `
  <ul>
    ${main.main
      .map(
        (item) => `
        <li><a href="${item.url}">${item.name}</a></li>
      `
      )
      .join("")}
  </ul>
  `;
  //HTML for Logo and NAV
  const logoHtml = `<div class="logo"><a href="${webUrl}">${webLogo}</a></div>`;
  const navHtml = `<nav>${navLinks}</nav>`;

  const html = logoHtml + navHtml;

  return `<header>${html}</header>`;
}
