import { useContext } from "react";
import { DarkMode, RecipesContext } from "../MyContext";

import "./Home.css";

function Home() {
// function Home({ isDark, randomRecipe }) {
    const { isDark, setIsDark } = useContext(DarkMode);
    const { randomRecipe } = useContext(RecipesContext);
    const className = "home-" + (isDark ? "dark" : "light");

    console.log(randomRecipe)
    return(
        <div  className = { className }>
            {/* <header>
            </header> */}
            {/* <main className = { className }> */}
                {/* Lines 13 - 22, excepting line 52, courtesy Chat GPT */}
                {randomRecipe && (
                    <div className = "random-recipe">
                        <img 
                            src = { randomRecipe.image }
                            alt = { randomRecipe.name }
                            width = "750"
                            />
                        {/* <h2>{ randomRecipe.name }</h2> */}
                    </div>
                )}
            {/* </main> */}
        </div>
    )
}

export default Home;
