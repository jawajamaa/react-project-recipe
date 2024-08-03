import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { RecipesProvider } from "./RecipesContext";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./index.css";
import "./App.css";

const baseUrl = "http://localhost:4000/recipes/";

function App() {


    return(
            <ThemeProvider>
                <RecipesProvider>
                    <NavBar />
                    <main>
                        <Outlet
                            baseUrl = { baseUrl }
                        />
                    </main>
                </RecipesProvider>
            </ThemeProvider>
    )
};

export default App;
