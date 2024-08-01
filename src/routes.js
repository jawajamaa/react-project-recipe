import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import NewRecipe from "./components/NewRecipe";
import RecipeList from "./components/RecipeList";
import RecipeOverlay from "./components/RecipeOverlay";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/NewRecipe",
                element: <NewRecipe />
            },
            {
                path: "/RecipeList",
                element: <RecipeList />,
                children: [
                    {
                        path: "/RecipeList/Recipe/:id",
                        element: <RecipeOverlay />
                    }
                ]
            }
        ]
    }
];

export default routes;
