import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import "./index.css";
import "./App.css";
import RecipeList from "./components/RecipeList";
import { DarkMode, Recipes } from "./MyContext";
import NewRecipe from "./components/NewRecipe";

const RECIPE_URL = "http://localhost:4000/recipes/";

function App() {
    const[isDark, setIsDark] = useState(false);
    const[recipeObj, setRecipeObj] = useState([]);
    const className = "App-" + (isDark ? "dark" : "light");

    useEffect(() => {
        fetch(RECIPE_URL)
            .then(r => r.json())
            .then(setRecipeObj)
    }, [])
    
    return(
            <DarkMode.Provider value = { isDark }>
                <div className = { className }>
                    {/* <div>
                        <h1 className = "title">Recipe Collection</h1>
                    </div> */}
                    <header>
                        <NavBar setIsDark={setIsDark} />
                    </header>
                    <main>
                        <Recipes.Provider value = { recipeObj }>
                            {/* <div> */}
                                <RecipeList />
                                <NewRecipe />
                            {/* </div> */}
                        </Recipes.Provider>
                    </main>
                </div>
            </DarkMode.Provider>
    )
};

export default App;
