import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export function writer(content, location, filename) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const dirPath = path.join(__dirname, location);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  //fs.mkdirSync("location");

  const filePath = path.join(__dirname, location + filename);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("HTML file created");
  });
}
