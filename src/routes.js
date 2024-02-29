import App from "./App";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import NewRecipe from "./components/NewRecipe";
import RecipeOverlay from "./components/RecipeOverlay";
import Recipe from "./components/Recipe";
import RecipeList from "./components/RecipeList";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "./components/NavBar",
                element: <NavBar />,
            },
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
];

export default routes;
