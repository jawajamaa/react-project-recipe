import App from "./App";
import ErrorPage from "./components/ErrorPage";
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
                path: "/RecipeList",
                element: <RecipeList />,
                children: [
                    {
                        path: "/RecipeList/Recipe",
                        element: <Recipe />
                    },
                    {
                        path: "/RecipeList/RecipeOverlay",
                        element: <RecipeOverlay />
                    },
                    {
                        path: "/RecipeList/NewRecipe",
                        element: <NewRecipe />
                    }
                ]
            }
        ]
    }
];

export default routes;
