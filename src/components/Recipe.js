import { NavLink } from "react-router-dom";
import "../index.css";
import "./Recipe.css";

function Recipe({ recipe }) {
    const{ 
        id, 
        name, 
        category,
        // vegetarian, 
        prepTime, 
        myPrepTime, 
        url,
        thumb,
        // image
        } = recipe;


    return(
        <div 
            className = "card"
            key = { id }
            >
                <div className = "photo">
                    <NavLink 
                    to = {`/RecipeList/Recipe/${id}`}
                    >
                    <img 
                        src = { thumb } 
                        alt = { name }
                    ></img>
                    </NavLink>
                </div>
                <div className = "description">
                    <h3>{ name }</h3> 
                    <p>Total Prep Time: { prepTime } minutes</p>
                    <p>My Total Prep Time: { myPrepTime } minutes</p> 
                    <p>Food Category: { category }</p>
                    {/* <p>{ vegetarian }</p> */}
                    <a href = { url }>
                        <button className = "extLinkBtn" >Link to Recipe!</button>
                    </a>
                </div>
            </div>   
    )
};

export default Recipe;
