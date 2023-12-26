import fs from "fs";

export function head(title, meta) {
  const style = fs.readFileSync("./style.css", "utf8");

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, maximum-scale=5">

        <title>${title}</title>

        <meta name="description" content="${meta}">

        <style>${style}</style>

      </head>
    `;
}
