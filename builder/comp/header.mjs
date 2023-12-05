//import { assert } from "console";
import main from "../menus/main.json" assert { type: "json" };

export function header(siteName) {
  console.log(typeof main.main);
  let html = `
    <ul>
  `;

  for (let item of main.main) {
    html += `
      <li><a href="${item.url}">${item.name}</a></li>
    `;
  }

  html += `
    </ul>
  `;

  return html;
}
