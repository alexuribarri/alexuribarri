import fs from "fs/promises";
import { builder } from "./js/mdmanager/builder.mjs";
import { optimizeImages } from "./js/mdmanager/optimizeImages.mjs";

//processFiles reads the contents of the drafts folder and converts them to html
async function processFiles() {
  try {
    //reading builder folder to find if there's a favicon.ico file
    const checkFavicon = await fs.readdir("./");
    if (checkFavicon.includes("favicon.ico")) {
      await fs.copyFile("./favicon.ico", "../pages/dist/favicon.ico");
    } else {
      console.log("No favicon.ico file found in the root directory.");
    }

    //reading builder folder to find if there's a robots.txt file
    // reading drafts folder
    const drafts = await fs.readdir("./drafts/");

    //creating array for posts
    const posts = [];

    //listing every draft post or page
    for (const draft of drafts) {
      //reading all files within the post ot page folder
      const allDraftFiles = await fs.readdir(`./drafts/${draft}`);

      //reading image files within the image folder
      const allDraftImages = await fs.readdir(
        `./drafts/${draft}/${draft}-images`
      );

      //reading metada file for the post or page

      const metaData = JSON.parse(
        await fs.readFile(`./drafts/${draft}/${draft}.json`)
      );

      //checking  dist folder structure. creating if folders
      //does not exist. To create the folder structure,
      // read the metaData.path and create folders is necessary
      // first check if there's any additional folder
      // in the path (anything after "./"). If it is only "./" don't create anything.

      // the folder structure include the images folder and the files folder

      const path = metaData.path.split("/").slice(0, -1).join("/");
      await fs.mkdir(`../pages/dist/${path}`, { recursive: true });
      await fs.mkdir(`../pages/dist/${path}/${draft}-images/`, {
        recursive: true,
      });
      await fs.mkdir(`../pages/dist/${path}/${draft}-files/`, {
        recursive: true,
      });

      //sending images to be optimized

      optimizeImages(allDraftImages, draft, path);

      const html = await fs.readFile(`./drafts/${draft}/${draft}.html`, "utf8");

      //converting content to html

      const folderName = draft;

      const stats = await fs.stat(`./drafts/${draft}/${draft}.html`);

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
