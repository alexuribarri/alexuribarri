export function blogroll(posts, headHtml, headerHtml, footerHtml) {
  const filteredBlogroll = posts.map((post) => {
    if (post.metaData.publish === "Yes") {
      console.log(`Yes publish ${post.metaData.title}`);
    } else if (post.metaData.publish === "No") {
      console.log(`No publish ${post.metaData.title}`);
      return {
        title: post.title,
        date: post.date,
        publish: post.publish,
      };
    }
  });
}
