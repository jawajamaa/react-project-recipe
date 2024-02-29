# react-project-recipe

There will be a db.json file as a RESTful API that will contain a selection of recipes, each with a title, prep/total time including cooking, an image, and  a link to the recipe.  The plan should I want to continue this, would be to add additional keys such as one for ingredients, with the value as a nested object for the actual list of ingredients, and a final field as the instructions that could either be one field or another nested object with each step as it's own key.

The initial load would trigger useEffect to initiate a fetch, then store the receipes in state and display just their names and small images.

When selected, a receipe would expand to show all the pieces of information as an overlay.

The components that I envision would be App.js as the top of the tree, then a Form component to add a new recipe and satisfy the controlled form deliverable, as well as the POST method to persist the new Recipe to the db.json.

    App.js
    |--NavBar.js
    |  
    |
    |--RecipeList.js
      |-Recipe.js  |--NewRecipe.js
      |-RecipeOverlay.js

Using the above components, I would use React Router to create client side routes, where App would be Home with the list of receipes, New Recipe would navigate to the NewRecipe component containing the controlled form to submit a new recipe
