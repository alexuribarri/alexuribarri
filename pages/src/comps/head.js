//this function changes the title
export function changeHead() {
  let newTitle = document.querySelector("h1").textContent;
  document.title = newTitle;
}

//creating link document
// Create a link element
const link = document.createElement("link");

// Set the attributes for the link element
link.rel = "stylesheet";
link.href = "styles.css";

// Insert the link element into the head
document.head.appendChild(link);
