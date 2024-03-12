import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { DarkMode, RecipesContext } from "./MyContext";
import NavBar from "./components/NavBar";
import "./index.css";

const baseUrl = "http://localhost:4000/recipes/";

function App() {
    const[isDark, setIsDark] = useState(true);
    const[recipes, setRecipes] = useState([]);
    const[randomRecipe, setRandomRecipe] = useState(null);
    const className = "App-" + (isDark ? "dark" : "light");

    useEffect(() => {
        fetch(baseUrl)
            .then(r => r.json())
            .then(data => {
                setRecipes(data)

// Lines 22&23 courtesy Chat GPT 
            const randomIdx = Math.floor(Math.random()*data.length);
            setRandomRecipe(data[randomIdx])
            });
    }, [])
    
    function onHandleHomeClick() {
        const randomIdx = Math.floor(Math.random()*recipes.length);
        console.log(randomIdx);
        setRandomRecipe(recipes[randomIdx])
    }

    return(
            <DarkMode.Provider value = { isDark }>
                <div className = { className }>
                    <header>
                        <NavBar 
                            setIsDark={setIsDark} 
                            setRandomRecipe = { setRandomRecipe }
                            onHandleHomeClick = { onHandleHomeClick }
                        />
                    </header>
                    <main>
                        <RecipesContext.Provider value = { {recipes, setRecipes} }>
                        {/* Lines 47 - 54, excepting line 52, courtesy Chat GPT */}
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
                                <Outlet
                                context = { baseUrl}
                                />
                        </RecipesContext.Provider>
                    </main>
                </div>
            </DarkMode.Provider>
    )
};

export default App;
