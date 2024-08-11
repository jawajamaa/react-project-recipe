import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
import Recipe from "./Recipe";
// import RecipeOverlay from "./RecipeOverlay";
import "./RecipeList.css";

function RecipeList() {
    const { isDark } = useTheme();
    const { recipes } = useRecipes();
    const className = `recipe-list-${isDark ? "dark" : "light"}`;
    const [isBreakfast, setIsBreakfast] = useState(false);

    // isBreakfast commented out as I will make that a select feature to show items based on Dish category and also add to AddRecipe.  Plan for isBreakfast to become isVegetarian, and to add a separate item of state, 'isMealType' and it would be an object with each meal category, ie. Breakfast, Lunch etc as a boolean so a user can select any number of meal types at once? Using Radio buttons?
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
            <Outlet/>  
        </div>
    )
};

export default RecipeList;
