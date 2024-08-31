export function mainHtml(main, type, title, datetimeString, category, img) {
  //checking if the file is a blog post as the blog post has it's own specific format
  if (type == "Post") {
    //these variables are used to format the date into a more readable format

    const milliseconds = Date.parse(datetimeString);
    const date = new Date(milliseconds);
    const month = date.toLocaleString("en-US", {
      month: "long",
    });
    //this capitalizes the month
    const modMonth = month[0].toUpperCase() + month.slice(1);

    //merging the date

    const formattedDate = `${modMonth} ${date.getDate()}, ${date.getFullYear()}`;

    //this is the main builder of the blog post

    return `
    <main>
  <div
    class="main-div-full hero-title"
    style="background-image: url(/img/${img})"
  >
    <div class="main-wrapper">
      <h1 class="h1-hero-title">${title}</h1>
    </div>
  </div>
  <div class="main-wrapper">
    <article>
         <p>
        Posted on
        <time datetime="${date}">${formattedDate}</time>.
      </p>

      <p>Categories: ${category}</p>
    

   
      ${main}

    </article>
  </div>
</main>

    
    `;
  } else return `${main}`;
}
