import React from "react";
import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
import "./Home.css";

function Home() {
    const { isDark } = useTheme();
    const { randomRecipe } = useRecipes();
    const className = `home-${isDark ? "dark" : "light"}`;

    return(
        <div  className = { className }>
            <main>
                {randomRecipe && (
                    <div className = "random-recipe">
                        <img 
                            src = { randomRecipe.image }
                            alt = { randomRecipe.name }
                            width = "750"
                            />
                    </div>
                )}
            </main>
        </div>
    );
}

export default Home;
