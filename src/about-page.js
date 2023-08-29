function renderAboutPage() {
  const contentDiv = document.getElementById("content");

  // Create and append navigation bar
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
  contentDiv.appendChild(navBar);

  // Create and append main section
  const mainSection = document.createElement("main");
  mainSection.className = "page";

  const banner = document.createElement("hgroup");
  banner.className = "banner";
  const bannerHeading = document.createElement("h2");
  bannerHeading.textContent = "Who we are";
  banner.appendChild(bannerHeading);

  const articleStory = createArticle(
    "story",
    "Our Story",
    "frying-pan.jpg",
    [
      "Welcome to Kaj's Kitchen, a culinary haven born from a teenage girl's boundless passion and relentless determination.",
      // ... other paragraphs ...
    ]
  );

  const articleFlavors = createArticle(
    "flavors",
    "A Journey of Flavors and Dreams",
    "spices.jpg",
    [
      "Every dish that graces our menu carries a piece of Kaj's heart and a story of her journey. The fusion of global inspirations and locally sourced ingredients reflects her commitment to excellence. As you savor each bite, you're tasting not just food, but the culmination of years of dedication and love.",
      // ... other paragraphs ...
    ]
  );

  const articleCTA = createArticle(
    "CTA",
    "Experience Kaj's Vision",
    "dinner-table.jpg",
    [
      "Step into Kaj's world and experience a culinary adventure that defies expectations. Reserve your table today and embark on a journey that celebrates not just food, but the boundless potential within us all. Come, be a part of our story.",
      // ... other paragraphs ...
    ]
  );

  // Append elements to main section
  mainSection.appendChild(banner);
  mainSection.appendChild(articleStory);
  mainSection.appendChild(articleFlavors);
  mainSection.appendChild(articleCTA);

  // Create and append footer
  const footer = document.createElement("footer");
  footer.className = "by-line";
  const footerParagraph = document.createElement("p");
  footerParagraph.innerHTML = 'By Ariel Robert Mutebi: <a href="#">source repo</a>';
  footer.appendChild(footerParagraph);

  mainSection.appendChild(footer);

  // Append main section to content
  contentDiv.appendChild(mainSection);
}

// Create article element
function createArticle(id, headingText, imgSrc, paragraphs) {
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
  imgContainer.style.backgroundImage = `url(${imgSrc})`;

  article.appendChild(textDiv);
  article.appendChild(imgContainer);

  return article;
}

export default renderAboutPage