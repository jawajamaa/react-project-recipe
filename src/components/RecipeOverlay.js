import { useContext } from "react";
import { NavLink, useParams} from "react-router-dom";
import { RecipesContext } from "../MyContext";
import "./RecipeOverlay.css";

function RecipeOverlay() {
    const { recipes } = useContext(RecipesContext);
    const { id } = useParams();

    const foundRecipe = recipes.find(recipe => recipe.id === id)

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
