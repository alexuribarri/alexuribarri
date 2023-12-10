import fs from "fs/promises";
//import { mdReader } from "./mdreader.mjs";
import { builder } from "./js/mdmanager/builder.mjs";
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

//processFiles reads the contents of the drafts folder and converts them to html
async function processFiles() {
  try {
    const drafts = await fs.readdir("./drafts/");

    const posts = [];

    for (const draft of drafts) {
      const allDraftFiles = await fs.readdir(`./drafts/${draft}`);
      const content = await fs.readFile(
        `./drafts/${draft}/${draft}.md`,
        "utf8"
      );

      //converting content to html
      const html = marked(content);
      const folderName = draft;

      const stats = await fs.stat(`./drafts/${draft}/${draft}.md`);
      const metaStream = await fs.readFile(`./drafts/${draft}/${draft}.json`);
      const metaData = JSON.parse(metaStream);
      posts.push({
        metaData,
        folderName,
        html,
        stats,
      });
    }

    builder(posts);

    console.log("Files processed successfully!");
  } catch (err) {
    console.error(err);
  }
}

processFiles();
