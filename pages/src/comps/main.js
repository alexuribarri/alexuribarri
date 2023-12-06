export function main() {
  const mainHtml = document.querySelector("main");
  mainHtml.innerHTML = `      <h2>Welcome</h2>
  <div id="first-parag">
    <img
      src="./static/img/oldpc.jpg"
      width="200px"
      height="160px"
      alt="a boy with a PC"
    />
    <p>
      This website is an attempt to go back to the origins of the web, to
      it's simplest form, old web aesthetics and no frameworks or libraries
      whatsoever. A sort of artisan development.
    </p>
  </div>

  <p>
    I built my first website back in 2002 through the only user-friendly
    option available back then -
    <a href="https://en.wikipedia.org/wiki/GeoCities" target="_blank"
      >GeoCities</a
    >. I still have the URL:
    <a
      href="http://www.geocities.com/uribarialex/1.html"
      target="_blank"
      rel="noopener noreferrer"
      >http://www.geocities.com/uribarialex/1.html</a
    >
    but unfortunately, the site were not preserved and I were unable to find
    it archived elsewhere. Since then, I tried many different things to host
    my site: free hostings with site builders, Wordpress, static website
    generators like
    <a href="https://getpublii.com/" target="_blank">Publii</a>, more
    complex static website generators with CLI and returning back to
    Wordpress again. I was never fully satisfied with the result (except,
    probably, with
    <a href="https://en.wikipedia.org/wiki/GeoCities" target="_blank"
      >GeoCities</a
    >...).
  </p>
  <p>
    I think it is time to build something of my own. Static, serverless, but
    built by myself. Without any libraries, using vanilla Javascript. A year
    ago I would consider this unachivable due to my poor developer skills,
    but today, thanks to many tools available for junior developers, I think
    it is possible. I will be using Amazon Q and Amazon CodeWhisperer for
    guidance. Ideally this site will have a backend for article publishing
    and maybe some comments feature.
  </p>
  <p>
    If the project will be worth it, I'll make the code public on my Github
    so you could build it on your own as well. In line with the the early
    internet philosophy, the idea is to build this site as frugal as
    possible (free, to be precise). Thefore, the services will be chosen
    with this idea in mind, free and no credit card requirment.
  </p>
  <p>Current tech stack:</p>
  <ul>
    <li>Domain registration: Amazon Route 53 - 12$/year</li>
    <li>
      Development assistance, generative AI: Amazon Q, Amazon CodeWhisperer.
      Free. No credit card required
    </li>
    <li>
      Integrated Development Environment (IDE): Visual Studio Code. Free. No
      credit card required
    </li>
    <li>
      Online IDE: GitHub Codespaces. 2 cores/60 hours, 15GB per month Free.
      No credit card required
    </li>
    <li>
      Named servers and DNS: Cloudflare. Free. No credit card required
    </li>
    <li>
      Static web hosting: Cloudflare Pages. Free. No credit card required
    </li>
    <li>
      Git management: GitHub private repository. Free. No credit card
      required
    </li>
    <li>
      Serverless functions (compute). Cloudflare Workers. Free. No credit
      card required
    </li>
    <li>Database: Cloudflare Workers KV. Free. No credit card required</li>
    <li>
      Backend programming language: Node.js Free. No credit card required
    </li>
  </ul>
  <p>
    With kindest regards, <br />
    Alex Uribarri<br />
    December 3rd, 2023
  </p>
  <h2 id="updates">Updates</h2>
  <ul>
    <li>
      <time datetime="2023-12-04">December 4th, 2023</time> - Started
      working on automatic page generator
    </li>
    <li>
      <time datetime="2023-12-06">December 6th, 2023</time> - Created the
      compiler to read markdown files in certain folder and translate these
      into html. Markdown files include "matter" part with metda details of
      the post
    </li>
  </ul>

  <h2 id="about">About</h2>
  <p>
    This is strictly personal website. All opinions in this website are of
    the author. This website is for personal leasure and learning purposes
    only and should not be taken seriously in any way. Just have fun, enjoy
    and take everything written here with enrormous grain of salt.
  </p>

  <p>
    You can reach me via LinkedIn profile referenced in the footer of this
    page.
  </p>
  <a href="#top">Back to Top</a>`;
}
