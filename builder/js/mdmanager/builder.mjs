import { footer } from "../../comp/footer.mjs";
import { head } from "../../comp/head.mjs";
import { writer } from "../../writer.mjs";
import { header } from "../../comp/header.mjs";
import { blogroll } from "./blogroll.mjs";
// Import config.json file with 'json' type
import config from "../../config.json" assert { type: "json" };

export function builder(posts) {
  for (const post of posts) {
    //post is receiving an object that consist of:
    //metaData
    // title: 'This is a first full post',
    // category: 'Economy',
    // meta: 'Checking the possibility to publish my first post',
    // datetime: '2023-12-09T14:24:30.472Z',
    // filename: 'first-post.html',
    // path: './blog/',
    // type: 'Post',
    // publish: 'Yes'

    //html
    // <h1>first post</h1>
    // <p>ergergeqgrqerg</p>
    //stats (information of when file has been updated last time)

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
    const headerHtml = header();
    const footerHtml = footer();
    const content = headHtml + headerHtml + main + footerHtml;

    //if post there will be ceated a folder, ir page, no folder will be created
    if (publish === "Yes" && type === "Post") {
      const finalPath = `./dist/${path}/`;
      writer(content, finalPath, filename);
    } else if (
      publish === "Yes" &&
      type === "Page" &&
      filename !== "blog.html"
    ) {
      const finalPath = `./dist/${path}/`;
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
