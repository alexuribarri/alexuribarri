import { writer } from "../../writer.mjs";
export function blogroll(posts, main, headHtml, headerHtml, footerHtml) {
  const publishArray = [];
  const unpublishArray = [];
  const publishedMain = main;
  const unpublishedMain = main;

  const filteredBlogroll = posts.map((post) => {
    const title = post.metaData.title;
    const category = post.metaData.category;
    const meta = post.metaData.meta;
    const datetime = post.metaData.datetime;
    const filename = post.metaData.filename;
    const path = post.metaData.path;
    const type = post.metaData.type;
    const publish = post.metaData.publish;
    const folderName = post.folderName;
    // const main = post.html;
    // const headHtml = head();
    // const headerHtml = header();
    // const footerHtml = footer();
    // const content = headHtml + headerHtml + main + footerHtml;

    if (post.metaData.publish === "Yes" && post.metaData.type === "Post") {
      const link = `<li><a href="${path}${filename}">${title}</a></li>`;
      publishArray.push(link);
    } else if (
      post.metaData.publish === "No" &&
      post.metaData.type === "Post"
    ) {
      const link = `<li><a href="${path}${filename}">${title}</a></li>`;
      unpublishArray.push(link);
    }
  });

  const htmlBuilder = (list, mainPart) => {
    //Creating the list of links
    const html = `<ul>${list.join("")}</ul>`;

    mainPart += html;
    return mainPart;
  };

  //writing blog page for published posts
  writer(
    headHtml +
      headerHtml +
      htmlBuilder(publishArray, publishedMain) +
      footerHtml,
    "../pages/dist/",
    "blog.html"
  );

  //writing blog page for unpublished posts
  writer(
    headHtml +
      headerHtml +
      htmlBuilder(unpublishArray, unpublishedMain) +
      footerHtml,
    "./preview/",
    "blog.html"
  );
}
