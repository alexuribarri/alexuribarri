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
      "Enter html filename (including extension). \nRecommended length max 30 characters. \nLowercase with hyphens like: blog-post-title.html",
  },
  {
    type: "input",
    name: "meta",
    message:
      "Enter blog post <meta> description. \nYou will be able to update it later. \n115-130 characters is perfect spot",
  },
  {
    type: "list",
    name: "category",
    message: "Select category",
    choices: ["Economy", "Technology", "Future", "Nautica CMS", "Archive"],
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
    message: "Enter relative path to web page. \nRoot is ./ Blog is: ./blog/",
  },

  {
    type: "list",
    name: "publish",
    message: "Publish after running update.mjs?",
    choices: ["No", "Yes"],
  },
];

inquirer.prompt(questions).then((answers) => {
  const draftFolder = "./drafts/" + answers.filename.replace(".html", "") + "/";

  if (!fs.existsSync(draftFolder)) {
    fs.mkdirSync(draftFolder);
    fs.mkdirSync(
      draftFolder + `${answers.filename.replace(".html", "")}-images/`
    );
    fs.mkdirSync(
      draftFolder + `${answers.filename.replace(".html", "")}-files/`
    );

    //   function searchFiles(folder) {
    //     fs.readdir(folder, (err, files) => {
    //       console.log(files);
    //     });
    //   }
    //   searchFiles("./drafts/");
  }

  // post projects (drafts) file creation. This is only for drafts as the pubblished path is described in the
  //JSON metada file
  const metaFileName = answers.filename.replace(".html", ".json");

  const metadataFile = draftFolder + metaFileName;

  const currentDateTime = new Date().toISOString();

  fs.readFile("./data/pages.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    try {
      const pageID = JSON.parse(data);
      console.log(pageID);
    } catch (err) {
      console.error("Error parsing JSON:", err);
    }
  });

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

  const content = `<!-- .main-wrapper {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .main-div-full {
    width: 100%;
  }
  
  .main-div-part {
    margin-right: 5px;
    margin-left: 5px;
  } -->

<main>
  <div
    class="main-div-full hero-title"
    style="background-image: url(../atlantic_boat.jpg)"
  >
    <div class="main-wrapper">
      <h1 class="h1-hero-title">${answers.title}</h1>
    </div>
  </div>
  <div class="main-wrapper"></div>
</main>
`;
  // writing metadata file.
  fs.writeFileSync(metadataFile, JSON.stringify(metadata));
  const contentFile = draftFolder + answers.filename;

  // writing content file
  fs.writeFileSync(contentFile, content);

  console.log("Files created successfully!");
});
