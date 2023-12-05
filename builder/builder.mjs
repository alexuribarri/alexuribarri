import { footer } from "./comp/footer.mjs";
import { head } from "./comp/head.mjs";
import { main } from "./comp/main.mjs";
import { writer } from "./writer.mjs";
import { header } from "./comp/header.mjs";

const content = head() + header() + main() + footer();

const location = "../pages/dev/";
const filename = "index.html";
writer(content, location, filename);
