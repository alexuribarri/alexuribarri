export function body(header, main, footer) {
  return `
  <body>
 <div id="page-container">
   <div id="content-wrap">
   ${header}${main}
   </div>
   ${footer}
 </div>
</body>

    `;
}
