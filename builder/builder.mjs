import { footer } from "./comp/footer.mjs";
import { head } from "./comp/head.mjs";
import { main } from "./comp/main.mjs";
import { writer } from "./writer.mjs";
import { header } from "./comp/header.mjs";
// Import config.json file with 'json' type
import config from "./config.json" assert { type: "json" };

export function builder(meta, html) {
  const content = head() + header(config.title) + main() + footer();
  const location = meta.path;
  const filename = "index.html";
  writer(content, location, filename);
}
