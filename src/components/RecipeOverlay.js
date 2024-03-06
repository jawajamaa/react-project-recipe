import { useContext } from "react";
import { NavLink, useParams} from "react-router-dom";
import { RecipesContext } from "../MyContext";
import "./RecipeOverlay.css";

function RecipeOverlay() {
    const { recipes, setRecipes } = useContext(RecipesContext);
    const { id } = useParams();

    console.log(id);
    console.log(recipes);

    const foundRecipe = recipes.find(recipe => recipe.id === id)

    return(
        <div className = "overlay">
            <NavLink 
                className="close" 
                to="/RecipeList"
                >X</NavLink>
            <div className="content">
                <div>
                <span>Here's a Recipe Overlay</span>
                <img src={ foundRecipe.image } width="800" />
                </div>
            </div>
        </div>
    )
}

export default RecipeOverlay;
