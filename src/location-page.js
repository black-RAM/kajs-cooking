import { createNavbar, createFooter, createArticle, createMainWithBanner, appendChildren, createFlowBreak } from "./template";

function renderLocationPage(contentDiv) {
  const navBar = createNavbar()

  const mainSection = createMainWithBanner("unfinished-page", "Still in the Works...");

  appendChildren(contentDiv, [navBar, mainSection]);
}

export default renderLocationPage;