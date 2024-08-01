// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import { DarkMode, RecipesContext } from "./MyContext";
// import "./index.css";
// import "./App.css";
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";


import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { RecipesProvider } from "./RecipesContext";
// import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./index.css";
import "./App.css";

const baseUrl = "http://localhost:4000/recipes/";

function App() {
    // const[isDark, setIsDark] = useState(true);
    // const[recipes, setRecipes] = useState([]);
    // const[randomRecipe, setRandomRecipe] = useState(null);
    // const className = "App-" + (isDark ? "dark" : "light");

    // useEffect(() => {
    //     fetch(baseUrl)
    //         .then(r => r.json())
    //         .then(data => {
    //             setRecipes(data)

// Lines 22&23 courtesy Chat GPT 
    //         const randomIdx = Math.floor(Math.random()*data.length);
    //         setRandomRecipe(data[randomIdx])
    //         });
    // }, [])
    
    // function onHandleHomeClick() {
    //     const randomIdx = Math.floor(Math.random()*recipes.length);
    //     console.log(randomIdx);
    //     setRandomRecipe(recipes[randomIdx])
    // }

    return(
            <ThemeProvider>
                <RecipesProvider>
                    <div className = "App">
                        {/* <header> */}
                            {/* <NavBar 
                                onHandleHomeClick = { onHandleHomeClick }
                            />
                        </header> */}
                        <main>
                            <Outlet
                                baseUrl = { baseUrl }
                            />
                        </main>
                    </div>
                </RecipesProvider>
            </ThemeProvider>
    )
};

export default App;
