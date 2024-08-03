import React from "react";
import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
// import NavBar from "./NavBar";
import "./Home.css";

function Home() {
    const { isDark } = useTheme();
    const { randomRecipe } = useRecipes();
    const className = `home-${isDark ? "dark" : "light"}`;
    // const headerOfClass = `header-${isDark ? "dark" : "light"}`;

    console.log(randomRecipe)
    return(
        <div  className = { className }>
            {/* <header className = { headerOfClass }>
                <NavBar 
                onHandleHomeClick = { onHandleHomeClick }
                />
            </header> */}
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
