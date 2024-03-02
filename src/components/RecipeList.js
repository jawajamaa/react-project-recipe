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
            <div className = "box">
                {recipeObj.map(recipe => (
                    <Recipe 
                        key = { recipe.id }
                        recipe = { recipe }
                    />
                    // <div 
                    // className = "item"
                    // key = { recipe.id }
                    // >
                    //     <img 
                    //         src = { recipe.image } 
                    //         alt = { recipe.name }
                    //     ></img>
                    //     <h3>{ recipe.name }</h3> 
                    //     <p>{ recipe.prepTime }</p>
                    //     <p>{ recipe.myPrepTime }</p>   
                    // </div>
                ))}
            </div>    
        </div>
    )
};

export default RecipeList;
