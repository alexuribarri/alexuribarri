import fs from "fs/promises";
import { builder } from "./js/mdmanager/builder.mjs";

import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import Jimp from "jimp";

//processFiles reads the contents of the drafts folder and converts them to html
async function processFiles() {
  try {
    const drafts = await fs.readdir("./drafts/");

    const posts = [];

    for (const draft of drafts) {
      //listing all images files
      const allDraftFiles = await fs.readdir(`./drafts/${draft}`);

      async function optimizeImages() {
        await Promise.all(
          allDraftFiles.map(async (file) => {
            console.log(process.cwd() + file);
            if (file.endsWith(".jpg") || file.endsWith(".png")) {
              await imagemin([`./drafts/${draft}/${file}`], {
                destination: "../pages/dist/",
                plugins: [
                  imageminJpegtran(),
                  imageminPngquant({
                    quality: [0.6, 0.8],
                  }),
                ],
              });
              const image = await Jimp.read(`../pages/dist/${file}`);

              await image.resize(800, Jimp.AUTO); // resize to max 800px

              await image.write(`../pages/dist/${file}`);
            }
          })
        );
      }

      optimizeImages();

      const html = await fs.readFile(`./drafts/${draft}/${draft}.html`, "utf8");

      //converting content to html

      const folderName = draft;

      const stats = await fs.stat(`./drafts/${draft}/${draft}.html`);
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
  } catch (err) {
    console.error(err);
  }
}

processFiles();
