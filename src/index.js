import './style.scss'
import renderAboutPage from "./modules/about-page"
import renderMenuPage from './modules/menu-page';
import renderLocationPage from './modules/location-page';

// setup: create the content div
const contentDiv = document.createElement("div");
contentDiv.id = "content";

// Call the renderAboutPage function when page first loads
renderAboutPage(contentDiv);

// append content to body
document.body.appendChild(contentDiv);

// Page-switching-logic using event delegation 
// since all contentDiv's contents are replaced when a new page is loaded
contentDiv.addEventListener("click", (event) => {
  const chosenPage = event.target.innerText;

  switch (chosenPage) {
    case "About":
      clearContentDiv();
      renderAboutPage(contentDiv)
      break;

    case "Menu":
      clearContentDiv();
      renderMenuPage(contentDiv)
      break;

    case "Location":
      clearContentDiv();
      renderLocationPage(contentDiv)
      break;

    default:
      break;
  }
});

function clearContentDiv() {
  contentDiv.innerHTML = "";
}