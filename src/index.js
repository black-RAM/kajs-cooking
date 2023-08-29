import './style.scss'
import renderAboutPage from "./about-page"

// setup: insert the content div
const contentDiv = document.createElement("div");
contentDiv.id = "content";
document.body.appendChild(contentDiv);

// Call the renderAboutPage function
renderAboutPage();