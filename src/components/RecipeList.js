import { useContext } from "react";
import { DarkMode, Recipes } from "../MyContext";
import "../index.css";
import "./RecipeList.css";
import Recipe from "./Recipe";


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
        </div>
    )
};

export default RecipeList;
