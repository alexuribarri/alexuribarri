//this function changes the title
export function changeHead() {
  let newTitle = document.querySelector("h1").textContent;
  document.title = newTitle;

  //adding Meta description
  const head = document.head;
  const meta = document.createElement("meta");
  meta.name = "Alex's Uribarri personal website";
  meta.content =
    "Personal website I'm building from scratch to improve my developer skills";
  head.appendChild(meta);

  // //creating link document
  // // Create a link element
  // const link = document.createElement("link");

  // // Set the attributes for the link element
  // link.rel = "stylesheet";
  // link.href = "style.css";

  // // Insert the link element into the head
  // document.head.appendChild(link);
}
