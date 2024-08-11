import React from "react";
import { NavLink, useParams} from "react-router-dom";
// import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
import "./RecipeOverlay.css";

function RecipeOverlay() {
    // const { recipes } = useContext(RecipesContext);
    const { recipes } = useRecipes();
    const { id } = useParams();

    console.log(id)
    console.log(recipes)
    const foundRecipe = recipes.find(recipe => recipe.id === id)
    
    console.log(foundRecipe)
    return(
        <div className = "overlay">
            <NavLink 
                className="close" 
                to="/RecipeList"
                >X</NavLink>
            <div className="content">
                <div className = "photo">
                <img src={ foundRecipe.image } 
                    width="800" 
                    alt = { foundRecipe.name }
                    />
                </div>
                <div>
                    <h2>{ foundRecipe.name }</h2>
                    <p>{ "_____________________" }</p> 
                    <p>Category: { foundRecipe.category }</p> 
                    <p>Prep time: { foundRecipe.myPrepTime } minutes</p> 
                </div>
            </div>
        </div>
    )
}

export default RecipeOverlay;
