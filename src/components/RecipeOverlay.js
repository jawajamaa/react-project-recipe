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
                <h2>{ foundRecipe.name }</h2>
                <h3>{ foundRecipe.category }</h3> 
            </div>
        </div>
    )
}

export default RecipeOverlay;
