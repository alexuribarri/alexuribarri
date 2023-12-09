import fs from "fs/promises";
//import { mdReader } from "./mdreader.mjs";
import { builder } from "../../builder.mjs";
import { marked } from "marked";

//function mdReader reads the contents of markdown file and converts it to html

function mdReader(mdString) {
  const parts = mdString.split("---");
  const matter = parts[1];
  const content = parts[2];
  const metaData = JSON.parse(matter);
  const html = marked(content);

  return {
    metadata: metaData,
    content: html,
  };
}

async function processFiles() {
  try {
    const files = await fs.readdir("../../md/");

    const posts = [];

    for (const file of files) {
      const data = await fs.readFile(`../../md/${file}`, "utf8");
      const stats = await fs.stat(`../../md/${file}`);

      const { metadata, content } = mdReader(data);
      //  builder(metadata, content, file);

      posts.push({
        metadata,
        content,
        file,
        stats,
      });
    }
    builder(posts);

    // console.log(posts);
  } catch (err) {
    console.error(err);
  }
}

processFiles();
