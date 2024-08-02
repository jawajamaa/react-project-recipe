import { useState } from "react";
// import { DarkMode, RecipesContext } from "../MyContext";
import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
import { Outlet } from "react-router-dom";
import Recipe from "./Recipe";
import "./RecipeList.css";

function RecipeList() {
    const { isDark } = useTheme();
    const { recipes } = useRecipes();
    const className = `recipe-list-${isDark ? "dark" : "light"}`;
    const [isBreakfast, setIsBreakfast] = useState(false);

    // isBreakfast commented out as I will make that a select feature to show items based on Dish category and also add to AddRecipe
    // function handleClick() {
    //     setIsBreakfast(!isBreakfast);
    // }

    const showBreakfast = recipes.filter(receipe => {
        return receipe.category === "Breakfast";
    })

    return(
        <div 
            className = {className}
            id = "card-container"
        >
            {/* <div>
                <button 
                    className = "button" 
                    onClick = { handleClick }
                >
                    Breakfast!
                </button>
            </div> */}
            {/* <div className = "card-container"> */}
                {isBreakfast ? 
                    showBreakfast.map(recipe => (
                        <Recipe 
                            key = { recipe.id }
                            recipe = { recipe }
                        />
                     )) : 
                        recipes.map(recipe => (
                            <Recipe 
                                key = { recipe.id }
                                recipe = { recipe }
                            />
                ))}
            {/* </div>   */}
            {/* <Outlet/>   */}
        </div>
    )
};

export default RecipeList;
