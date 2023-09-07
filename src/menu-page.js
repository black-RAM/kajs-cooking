import { createNavbar, createFooter, createArticle, createMainWithBanner, appendChildren, createFlowBreak } from "./template";

function renderMenuPage(contentDiv) {
  const navBar = createNavbar();

  const mainSection = createMainWithBanner("menu-page", "Our Menu");

  // Create articles for different menu sections
  const articleAppetizers = createArticle("appetizers", "Appetizers", [
    "<b>Assorted Cookies Platter</b> - A delightful selection of freshly baked cookies, including chocolate chip, oatmeal raisin, and peanut butter.",
    "<b>Buttery Croissant Bites</b> - Warm and flaky croissant bites served with a choice of honey butter or raspberry jam for dipping.",
    "<b>Mini Muffin Medley</b> - A variety of mini muffins in flavors like blueberry, banana nut, and chocolate chip, perfect for a sweet start to your meal.",
  ]);

  const articleSoups = createArticle("soups", "Simple Soups", [
    "<b>Chicken Noodle Soup</b> - Classic comfort soup with tender chicken, noodles, and vegetables in a savory broth.",
    "<b>Tomato Basil Soup</b> - Rich and creamy tomato soup infused with fresh basil for a burst of flavor.",
    "<b>Lentil Soup</b> - Nutrient-rich soup made from lentils, vegetables, and spices, perfect for a hearty and healthy option.",
    "<b>French Onion Soup</b> - Caramelized onions simmered in beef broth, topped with melted cheese and toasted bread.",
    "<b>Gazpacho</b> - Refreshing cold Spanish soup made from blended tomatoes, peppers, cucumbers, and onions.",
  ]);

  const articleSalads = createArticle("salads", "Salads", [
    "<b>Caesar Salad</b> - Romaine lettuce, croutons, parmesan cheese, and Caesar dressing, often served with grilled chicken or shrimp.",
    "<b>Greek Salad</b> - Crisp cucumbers, tomatoes, red onions, Kalamata olives, feta cheese, and Greek dressing.",
    "<b>Cobb Salad</b> - Mixed greens topped with grilled chicken, bacon, hard-boiled eggs, avocado, tomatoes, and blue cheese dressing.",
    "<b>Mediterranean Quinoa Salad</b> - Quinoa mixed with cucumber, cherry tomatoes, red onion, Kalamata olives, feta cheese, and lemon vinaigrette.",
  ]);

  // Use createFlowBreak to create the flow break for Main Courses and Desserts
  const flowBreakMainCourses = createFlowBreak("Main Courses", "main-courses");
  const flowBreakDesserts = createFlowBreak("Desserts", "dessert");

  const articleMeats = createArticle("meats", "Meats", [
    "<b>Grilled Ribeye Steak</b> - A juicy and flavorful beef ribeye steak, seasoned and grilled to perfection, served with a choice of sauce and side dishes.",
    "<b>Pork Tenderloin Medallions</b> - Sliced pork tenderloin medallions pan-seared with a savory glaze, accompanied by roasted vegetables and mashed potatoes.",
    "<b>Pan-Seared Salmon</b> - Fresh salmon fillet seared with a crispy skin, served on a bed of lemon herb rice and garnished with a dill cream sauce.",
    "<b>Lamb Chops</b> - Succulent lamb chops seasoned with rosemary and garlic, grilled to your preferred level of doneness, and served with mint jelly.",
  ]);

  const articlePizzas = createArticle("pizzas", "Pizzas", [
    "<b>Margherita Pizza</b> - Classic pizza with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil.",
    "<b>Pepperoni Pizza</b> - Traditional pizza topped with tomato sauce, mozzarella cheese, and slices of pepperoni.",
    "<b>Vegetarian Pizza</b> - A medley of fresh vegetables such as bell peppers, onions, mushrooms, olives, and tomatoes, with tomato sauce and mozzarella cheese.",
    "<b>BBQ Chicken Pizza</b> - Tangy barbecue sauce, grilled chicken, red onions, and mozzarella cheese create a smoky and sweet combination.",
  ]);

  const articleBurgers = createArticle("burgers", "Burgers and Sandwiches", [
    "<b>Hawaiian Burger:</b> A savory beef patty topped with pineapple, bacon, Swiss cheese, and teriyaki glaze, with lettuce and tomato.",
    "<b>Beef Burger:</b> A classic beef patty topped with your choice of cheese, lettuce, tomato, onion, and pickles on a toasted bun.",
    "<b>Chicken Burger:</b> A grilled chicken breast served with fresh lettuce, tomato, and your choice of toppings.",
    "<b>BBQ Burger:</b> A beef patty coated in barbecue sauce, topped with onion straws, cheddar cheese, and coleslaw.",
    "<b>Veggie Burger:</b> A plant-based patty made from black beans, vegetables, and grains, served with various toppings.",
    "<b>Cheeseburger:</b> A simple and timeless favorite with a grilled beef patty, melted cheese, lettuce, tomato, onion, and pickles on a bun.",
  ]);

  const articleDesserts = createArticle("desert-content", "Delicious Decadence", [
    "<b>Chocolate Fondant Cake</b> - A rich and gooey chocolate cake with a molten chocolate center, often served with a scoop of vanilla ice cream.",
    "<b>Apple Pie</b> - A comforting pie with a flaky crust filled with spiced apples and often served warm with a scoop of vanilla ice cream.",
    "<b>Red Velvet Cake</b> - A moist and velvety cake with cream cheese frosting, known for its vibrant red color.",
    "<b>Chocolate Mousse</b> - A light and airy dessert made with whipped chocolate and cream, often served in individual cups or as a cake filling.",
  ]);

  appendChildren(mainSection, [
    articleAppetizers,
    articleSoups,
    articleSalads,
    flowBreakMainCourses, // Flow break for Main Courses
    articleMeats,
    articlePizzas,
    articleBurgers,
    flowBreakDesserts, // Flow break for Desserts
    articleDesserts,
    createFooter(),
  ]);

  appendChildren(contentDiv, [navBar, mainSection]);
}

export default renderMenuPage;