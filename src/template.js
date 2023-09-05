// centralise creation of shared components

function createNavbar() {
  const navBar = document.createElement("nav");
  navBar.id = "side-bar";

  const navDiv = document.createElement("div");
  const navHeading = document.createElement("h1");
  navHeading.textContent = "Kaj's Kitchen";

  const navList = document.createElement("ul");
  const navItems = ["About", "Menu", "Location"];

  navItems.forEach(itemText => {
    const li = document.createElement("li");
    li.textContent = itemText;
    navList.appendChild(li);
  });

  navDiv.appendChild(navHeading);
  navDiv.appendChild(navList);
  navBar.appendChild(navDiv);

  return navBar;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "by-line";
  const footerParagraph = document.createElement("p");
  footerParagraph.innerHTML = 'By Ariel Robert Mutebi: <a href="#">source repo</a>';
  footer.appendChild(footerParagraph);

  return footer;
}

function createArticle(id, headingText, paragraphs) {
  const article = document.createElement("article");
  article.id = id;

  const textDiv = document.createElement("div");
  textDiv.className = "text";

  const heading = document.createElement("h3");
  heading.textContent = headingText;
  textDiv.appendChild(heading);

  paragraphs.forEach(paragraphText => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    textDiv.appendChild(paragraph);
  });

  const imgContainer = document.createElement("aside");
  imgContainer.className = "img-container";

  article.appendChild(textDiv);
  article.appendChild(imgContainer);

  return article;
}

function createMainWithBanner(bannerText) {
  const mainSection = document.createElement("main");
  mainSection.className = "page";

  const banner = document.createElement("hgroup");
  banner.className = "banner";
  const bannerHeading = document.createElement("h2");
  bannerHeading.textContent = bannerText;
  banner.appendChild(bannerHeading);

  mainSection.appendChild(banner);

  return mainSection;
}

function appendChildren(parent, children) {
  for (const child of children) {
    parent.appendChild(child)
  }
}

export { createNavbar, createFooter, createArticle, createMainWithBanner, appendChildren }