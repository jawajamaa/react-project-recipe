import { NavLink } from "react-router-dom";
import "./RecipeOverlay.css";

function RecipeOverlay() {

    return(
        <div className = "overlay">
            <NavLink className="close" to="/RecipeList">X</NavLink>
            <div className="content">
                <div>
                <span>Here's a Recipe Overlay</span>
                <img src="http://localhost:3000/images/1560-square/fried-rice-obi-unsplash.jpg" width="400" />
                </div>
            </div>
        </div>
    )
}

export default RecipeOverlay;
