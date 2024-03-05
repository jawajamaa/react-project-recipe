import { useContext } from "react";
import { DarkMode, RecipesContext } from "../MyContext";
import "./RecipeList.css";
import Recipe from "./Recipe";
import { Outlet } from "react-router-dom";


function RecipeList() {
    const isDark = useContext(DarkMode);
    const recipes = useContext(RecipesContext)
    const className = "recipe-list-" + (isDark ? "dark" : "light");

    console.log(recipes);

    return(
        <div className = {className}>
            <div className = "card-container">
                {recipes.map(recipe => (
                    <Recipe 
                        key = { recipe.id }
                        recipe = { recipe }
                        />
                ))}
            </div>  
            <Outlet/>  
        </div>
    )
};

export default RecipeList;
