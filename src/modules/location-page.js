import { createNavbar, createFooter, createArticle, createMainWithBanner, appendChildren, createFlowBreak } from "./template";

function renderLocationPage(contentDiv) {
  const navBar = createNavbar()

  const mainSection = createMainWithBanner("location-page", "Where We are");

  const articleFindUs = createArticle("find-us", "Find Us", [
    "We are nestled in the enchanting Montmartre neighborhood of Paris, known for its artistic heritage and stunning views.",
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10494.12587268694!2d2.3275995109406225!3d48.88620774137075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e44d4c0f5d5%3A0x7dd44a8503e08670!2sMontmartre%2C%2075018%20Paris%2C%20France!5e0!3m2!1sen!2sug!4v1694175035262!5m2!1sen!2sug" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  ])

  appendChildren(mainSection, [
    articleFindUs,
    createFooter()
  ])

  appendChildren(contentDiv, [navBar, mainSection]);
}

export default renderLocationPage;