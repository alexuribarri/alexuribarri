import { footer } from "./comp/footer.mjs";
import { head } from "./comp/head.mjs";
import { main } from "./comp/main.mjs";
import { writer } from "./writer.mjs";
import { header } from "./comp/header.mjs";
// Import config.json file with 'json' type
import config from "./config.json" assert { type: "json" };

export function builder(posts) {
  for (const post of posts) {
    console.log(post.metadata.title);
  }

  ////const content = html;
  // const content = head() + header(config.title) + main() + footer();
  ////const location = meta.path;
  // const filename = "index.html";
  ////const filename = file.replace(".md", ".html");
  // writer(content, location, filename);
}
