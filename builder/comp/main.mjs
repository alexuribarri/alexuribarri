export function mainHtml(main, type, title, datetimeString, category, img) {
  if (type == "Post") {
    const milliseconds = Date.parse(datetimeString);
    const date = new Date(milliseconds);
    const month = date.toLocaleString("en-US", {
      month: "long",
    });

    const modMonth = month[0].toUpperCase() + month.slice(1);

    const formattedDate = `${modMonth} ${date.getDate()}, ${date.getFullYear()}`;

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
