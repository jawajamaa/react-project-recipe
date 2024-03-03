import { useContext } from "react";
import { DarkMode, Recipes } from "../MyContext";
import "./RecipeList.css";
import Recipe from "./Recipe";
import { Outlet } from "react-router-dom";


function RecipeList() {
    const isDark = useContext(DarkMode);
    const recipeObj = useContext(Recipes)
    const className = "recipe-list-" + (isDark ? "dark" : "light");

    console.log(recipeObj);

    return(
        <div className = {className}>
            <div className = "card-container">
                {recipeObj.map(recipe => (
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
