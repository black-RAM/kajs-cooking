import './style.scss'
import renderAboutPage from "./about-page"

// setup: create the content div
const contentDiv = document.createElement("div");
contentDiv.id = "content";

// Call the renderAboutPage function
renderAboutPage(contentDiv);

// append content to body
document.body.appendChild(contentDiv);