import { marked } from "marked";

export function mdReader(mdString) {
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
