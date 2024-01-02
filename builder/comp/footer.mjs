import config from "../config.json" assert { type: "json" };

const { social: social } = config;
const { copyright: copyright } = config;

//Social links
const socList = [];
for (let [key, value] of Object.entries(social)) {
  socList.push(`
   <li> <a href="${value}">${key}</a> </li>
  `);
}
const socialHtml = `<div class="footer-social"><ul>${socList.join(
  ""
)}</ul></div>`;

//Copyright

const copyHtml = `<dic class="copyright">© ${copyright}</div>`;
const html = socialHtml + copyHtml;

export function footer() {
  return `<footer><div class="footer-wrapper">${html}</div></footer>`;
}
