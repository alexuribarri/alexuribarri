import inquirer from "inquirer";
import fs from "fs";

const validateFilename = (filename) => {
  if (!filename.match(/\.html?$/i)) {
    return "File must have a .html or .htm extension";
  }
  if (filename.includes(" ")) {
    return "Filename cannot contain spaces";
  }
  return true;
};

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter <title> element. Recommended length 60-70 characters",
  },
  {
    type: "input",
    name: "filename",
    validate: validateFilename,
    message:
      "Enter html filename. Recommended length max 30 characters. Lowercase with hyphens like: blog-post-title.html",
  },
  {
    type: "input",
    name: "meta",
    message:
      "Enter blog post <meta> description. You will be able to update it later. 115-130 characters is perfect spot",
  },
  {
    type: "list",
    name: "category",
    message: "Select category",
    choices: ["Economy", "Technology", "Future"],
  },
  {
    type: "list",
    name: "type",
    message: "Select post type",
    choices: ["Post", "Page"],
  },
  {
    type: "input",
    name: "path",
    message: "Enter relative path to web page. Root is ./ Blog is: ./blog/",
    default: "./blog/",
  },

  {
    type: "input",
    name: "content",
    message:
      "Enter blog post content. Start with h1 of maximum 50-60 charatcers",
  },
  {
    type: "list",
    name: "publish",
    message: "Publish after running update.mjs?",
    choices: ["No", "Yes"],
  },
];

inquirer.prompt(questions).then((answers) => {
  //const folderPath = answers.path;
  const draftFolder = "./drafts/" + answers.filename.replace(".html", "") + "/";

  if (!fs.existsSync(draftFolder)) {
    fs.mkdirSync(draftFolder);
  }

  // post projects (drafts) file creation. This is only for drafts as the pubblished path is described in the
  //JSON metada file
  const metaFileName = answers.filename.replace(".html", ".json");
  const mdFileName = answers.filename.replace(".html", ".md");

  const metadataFile = draftFolder + metaFileName;

  const currentDateTime = new Date().toISOString();

  const metadata = {
    title: answers.title,
    category: answers.category,
    meta: answers.meta,
    datetime: currentDateTime,
    filename: answers.filename,
    path: answers.path,
    type: answers.type,
    publish: answers.publish,
  };

  fs.writeFileSync(metadataFile, JSON.stringify(metadata));

  const contentFile = draftFolder + mdFileName;

  fs.writeFileSync(contentFile, answers.content);

  console.log("Files created successfully!");
});
