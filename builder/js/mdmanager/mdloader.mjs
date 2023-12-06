import fs from "fs/promises";
import { mdReader } from "./mdreader.mjs";

async function processFiles() {
  try {
    const files = await fs.readdir("../../md/");

    const posts = [];

    for (const file of files) {
      const data = await fs.readFile(`../../md/${file}`, "utf8");
      const stats = await fs.stat(`../../md/${file}`);

      const { metadata, content } = mdReader(data);

      posts.push({
        metadata,
        content,
        stats,
      });
    }

    console.log(posts);
  } catch (err) {
    console.error(err);
  }
}

processFiles();
