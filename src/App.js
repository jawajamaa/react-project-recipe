import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { DarkMode, RecipesContext } from "./MyContext";
import NavBar from "./components/NavBar";
import "./index.css";

const baseUrl = "http://localhost:4000/recipes/";

function App() {
    const[isDark, setIsDark] = useState(false);
    const[recipes, setRecipes] = useState([]);
    const className = "App-" + (isDark ? "dark" : "light");

    useEffect(() => {
        fetch(baseUrl)
            .then(r => r.json())
            .then(setRecipes)
    }, [])
    
    return(
            <DarkMode.Provider value = { isDark }>
                <div className = { className }>
                    {/* <div>
                        <h1 className = "title">Recipe Collection</h1>
                    </div> */}
                    <header>
                        <NavBar 
                        setIsDark={setIsDark} 
                        />
                    </header>
                    <main>
                        <RecipesContext.Provider value = { {recipes, setRecipes} }>
                                <Outlet
                                context = { baseUrl}
                                />;
                        </RecipesContext.Provider>;
                    </main>;
                </div>;
            </DarkMode.Provider>
    )
};

export default App;
