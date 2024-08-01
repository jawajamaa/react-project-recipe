import React from "react";
import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
import "./Home.css";

function Home() {
    const { isDark } = useTheme();
    const { randomRecipe } = useRecipes();
    const className = `home-${isDark ? "dark" : "light"}`;

    console.log(randomRecipe)
    return(
        <div  className = { className }>
            {randomRecipe && (
                <div className = "random-recipe">
                    <img 
                        src = { randomRecipe.image }
                        alt = { randomRecipe.name }
                        width = "750"
                        />
                </div>
            )}
        </div>
    );
}

export default Home;
