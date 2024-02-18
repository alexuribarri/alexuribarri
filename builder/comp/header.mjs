import main from "../menus/main.json" assert { type: "json" };
import config from "../config.json" assert { type: "json" };

export function header(path) {
  //website URL and logo
  const { url: webUrl } = config;
  const { logo: webLogo } = config;

  //function checks if the path is root or not and updates the navigation links

  function normalizePath(path) {
    let slashes = path.split("/").length - 1;
    let upDirs = "";

    if (slashes > 0) {
      for (let i = 1; i < slashes; i++) {
        upDirs += "../";
      }
    }

    return upDirs;
  }

  //Navlinks. It checks if the path is root or not and updates the navigation links

  const navLinks = `
  <ul>
    ${main.main
      .map((item) => {
        let url = item.url;

        const upDirs = normalizePath(path);
        if (upDirs) {
          url = upDirs + url;
        }

        return `
          <li><a href="${url}">${item.name}</a></li>
        `;
      })
      .join("")}
  </ul>
`;

  //HTML for Logo and NAV
  const logoHtml = `<div class="logo"><a href="${webUrl}">${webLogo}</a></div>`;
  const navHtml = `<nav>${navLinks}</nav>`;

  const html = logoHtml + navHtml;

  return `<header><div class="header-wrapper">${html}</div></header>`;
}
