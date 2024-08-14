# react-project-recipe

The front-end is created in React with JSX and styled by hand with CSS.  The back-end is a simple db.json file containing the receipes and paths to the respective images.  I created custom hooks, useTheme, useRecipes, useBaseUrl to use Context to enable different components access to Dark/Light Mode, Recipes and the url to use to make it easily scalable.

The initial load causes useEffect to initiate a fetch, stores the receipes in state and displays one image chosen at random for the splash page.  Concurrently, it loads all of the recipes and their attributes ready for display when the 'Recipe List' route is chosen. The page does not need to be reloaded, but if the splash page is reloaded, a new recipe image is loaded.  This can be accomplished by either reloading or clicking on 'Home' or the title, 'Recipe Collection' which will also work from any of the other routes with the exception of the overlay where the NavBar is purposely not available.

When looking at the Recipe List, any of the diplayed recipes can be selected, and the receipe image expands to an overlay with a small description next to the image.  For further expansion, I can institute a filter either in the NavBar or just below where a  user can filter for any combination of the meal types listed to see all the recipes that fit that category.

The third route is 'Add Recipe' where one can add a new recipe to the database with the options available, and it will be appear at the last recipe when one navigates to 'Recipe List' and you can straight away open up  the overlay if you choose to do so.

The components that I use are 'App.js' as the top of the tree, then the 'Home.js' component. This is followed by the 'RecipeList.js' component that in turn renders the 'Recipe.js' card components to form the Recipe List route.  The 'Overlay.js' component is only accessible from there, by clicking on a recipe's image.  Finally, 'NewRecipe.js' is a form component to add a new recipe that will use a POST to persist the new Recipe to the db.json file.

    App.js
    |-- NavBar.js
    |  
    |-- Home.js
    |
    |--RecipeList.js
    | |-Recipe.js  
    | |-RecipeOverlay.js
    |
    |--NewRecipe.js

Using the above components, I use React Router to create client side routes, where no page reloads are necessary.

## Citation

Chat GPT for code snippets noted by comments in code.

Image credit Courtesy Unsplash © Photographers or Adobe Stock where noted.

  Brussels Sausage (Hotdog?!) - Adobe Stock
  Brussels Sprouts - Jez Timms (not used currently)
  Butternut Squash Soup - Jezebel Rose
  Cabbage - Arnaldo Aldana (not used currently)
  Chicken Mole  - Adobe Stock (not used currently)
  Chili in Bowl  - Adobe Stock
  Cornbread Muffins  - Adobe Stock (not used currently)
  Cupcakes - Brooke Lark
  Fajitas - Hybrid Storytellers
  Fried Rice - Obi
  Granola - Heather Barnes
  No Bake Chocolate-Peanut-Butter-Bars - Unknown
  Oatmeal - Margarita Zueva
  Peach Cobbler - Sarah Brown
  Sauteed Cabbage - Adobe Stock
  
