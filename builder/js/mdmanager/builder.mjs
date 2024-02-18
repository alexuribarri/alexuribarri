import { footer } from "../../comp/footer.mjs";
import { head } from "../../comp/head.mjs";
import { writer } from "../../writer.mjs";
import { header } from "../../comp/header.mjs";
import { blogroll } from "./blogroll.mjs";
import { mainHtml } from "../../comp/main.mjs";
import { body } from "../../comp/body.mjs";

export function builder(posts) {
  for (const post of posts) {
    const title = post.metaData.title;
    const category = post.metaData.category;
    const meta = post.metaData.meta;
    const datetime = post.metaData.datetime;
    const filename = post.metaData.filename;
    const path = post.metaData.path;
    const type = post.metaData.type;
    const publish = post.metaData.publish;

    const main = post.html;
    const headHtml = head(title, meta);
    const headerHtml = header(path);
    const footerHtml = footer();
    const content = headHtml + body(headerHtml, mainHtml(main), footerHtml);

    //if post there will be ceated a folder, ir page, no folder will be created
    if (publish === "Yes" && type === "Post") {
      const finalPath = `../pages/dist/${path}/`;
      writer(content, finalPath, filename);
    } else if (
      publish === "Yes" &&
      type === "Page" &&
      filename !== "blog.html"
    ) {
      const finalPath = `../pages/dist/${path}/`;
      writer(content, finalPath, filename);
    } else if (
      publish === "No" &&
      type === "Page" &&
      filename !== "blog.html"
    ) {
      const finalPath = `./preview/${path}/`;
      writer(content, finalPath, filename);
    } else if (publish === "No" && type === "Post") {
      const finalPath = `./preview/${path}/`;
      writer(content, finalPath, filename);
    } else if (filename === "blog.html") {
      blogroll(posts, main, headHtml, headerHtml, footerHtml);
    }
    // now for blogtoll I need to create two files: one that is being published
    //and another that is not
  }

  //first - updates menus and categories. it will be passed then to file writer
  //second
}
