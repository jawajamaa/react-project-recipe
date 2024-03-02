import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import RecipeList from "./components/RecipeList";
import { DarkMode, Recipes } from "./MyContext";

const RECIPE_URL = "http://localhost:4000/recipes/";

function App() {
    const[isDark, setIsDark] = useState(false);
    const[recipeObj, setRecipeObj] = useState([]);

    useEffect(() => {
        fetch(RECIPE_URL)
            .then(r => r.json())
            .then(setRecipeObj)
    }, [])
    
    return(
            <DarkMode.Provider value = { isDark }>
                <div className = "App">
                    <div>
                        <h1 className = "title">Home App Home</h1>
                    </div>
                    <NavBar setIsDark={setIsDark} />
                    <Recipes.Provider value = { recipeObj }>
                        <div>
                            <RecipeList />
                        </div>
                    </Recipes.Provider>
                </div>
            </DarkMode.Provider>
    )
};

export default App;
