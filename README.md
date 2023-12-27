# Personal website and blog that uses node.js to generate static content

## Structure

The project consist of two parts:

- Builder, with the CRM application located in ./builder/
- Website, where published pages are saved. Files are located in ./pages/dist/ Please make sure that basic website structure exists, with robots.txt file

## How to start

In the ./builder folder, edit config.json file with details of your blog

## Builder Structure

### newpost.mjs

Generates questionnaire that creates a new folder, JSON file for metadata and content.md file for the content

### mdloader.mjs

Loads metadata file, markdown file, converts MD into HTML and saves publishing ready file
