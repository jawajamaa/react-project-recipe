import App from "./App";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import RecipeOverlay from "./components/ReceipeOverlay";
import NewRecipe from "./components/NewRecipe";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "./components/NavBar",
                element: <NavBar />,
                children: [
                    {
                        path: "./components/RecipeList",
                        element: <RecipeList />,
                        children: [
                            {
                                path: "./components/Recipe",
                                element: <Recipe />
                            },
                            {
                                path: "./components/RecipeOverlay",
                                element: <RecipeOverlay />
                            },
                            {
                                path: "./components/NewRecipe",
                                element: <NewRecipe />
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
