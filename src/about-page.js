import { createNavbar, createFooter, createArticle, createMainWithBanner, appendChildren } from "./template";

function renderAboutPage(contentDiv) {

  const navBar = createNavbar()

  // Create main section and banner
  const mainSection = createMainWithBanner("about-page", "Who We Are");

  // create articles
  const articleStory = createArticle(
    "story",
    "Our Story",
    [
      "Welcome to Kaj's Kitchen, a culinary haven born from a teenage girl's boundless passion and relentless determination.",
      "From a young age, Kaj found solace in the world of spices, flavors, and recipes. What began as an innocent curiosity in her family's kitchen soon evolved into an all-consuming obsession. Her nights were spent experimenting with ingredients, blending cultures, and crafting culinary wonders that transcended her years.",
      "With unwavering support from her family and mentors who recognized her exceptional talent, Kaj's dream began to take shape. Kaj's Kitchen is a testament to the power of nurturing dreams, regardless of age."
    ]
  );

  const articleFlavors = createArticle(
    "flavors",
    "A Journey of Flavors and Dreams",
    [
      "Every dish that graces our menu carries a piece of Kaj's heart and a story of her journey. The fusion of global inspirations and locally sourced ingredients reflects her commitment to excellence. As you savor each bite, you're tasting not just food, but the culmination of years of dedication and love.",
      "Kaj's Kitchen isn't just a dining establishment; it's a welcoming space where innovation thrives, and passion knows no limits. With its inviting ambiance and the warm smiles of our staff, you'll feel like a cherished guest in Kaj's own kitchen."
    ]
  );

  const articleCTA = createArticle(
    "CTA",
    "Experience Kaj's Vision",
    [
      "Step into Kaj's world and experience a culinary adventure that defies expectations. Reserve your table today and embark on a journey that celebrates not just food, but the boundless potential within us all. Come, be a part of our story.",
      // ... other paragraphs ...
    ]
  );

  // Create footer
  const footer = createFooter()

  // Append articles to main section
  appendChildren(mainSection, [articleStory, articleFlavors, articleCTA, footer])

  // Append navbar and main section to content
  appendChildren(contentDiv, [navBar, mainSection])
}

export default renderAboutPage