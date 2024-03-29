import { useContext, useState } from "react";
import { DarkMode, RecipesContext } from "../MyContext";
import "./RecipeList.css";
import Recipe from "./Recipe";
import { Outlet } from "react-router-dom";

function RecipeList() {
    const isDark = useContext(DarkMode);
    const { recipes } = useContext(RecipesContext)
    const className = "recipe-list-" + (isDark ? "dark" : "light");
    const [isBreakfast, setIsBreakfast] = useState(false);

    function handleClick() {
        setIsBreakfast(!isBreakfast);
    }

    const showBreakfast = recipes.filter(receipe => {
        return receipe.category === "Breakfast";
    })

    return(
        <div className = {className}>
            <div>
                <button 
                    className = "button" 
                    onClick = { handleClick }
                >
                    Breakfast!
                </button>
            </div>
            <div className = "card-container">
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
            </div>  
            <Outlet/>  
        </div>
    )
};

export default RecipeList;
