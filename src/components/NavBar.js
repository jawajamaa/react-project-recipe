// import { NavLink } from "react-router-dom";
// import "../index.css";
// import "./NavBar.css";
// import { useContext } from "react";
// import { DarkMode } from "../MyContext";
import { NavLink } from "react-router-dom";
import React from "react";
import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
import "./NavBar.css";

function NavBar() {
// function NavBar({ setIsDark,  onHandleHomeClick, setRandomRecipe }) {
    const { isDark, setIsDark } = useTheme();
    const { recipes, setRandomRecipe } = useRecipes();

    function updateDarkMode(evt) {
        // setIsDark(!isDark);
        setIsDark(evt.target.checked);
    }

    function handleClick() {
        setRandomRecipe(null)
    }

    function handleHomeClick() {
        const randomIdx = Math.floor(Math.random()*recipes.length);
        console.log(randomIdx);
        setRandomRecipe(recipes[randomIdx])
    }
    // function handleHomeClick() {
    //     onHandleHomeClick();
    // }
    // function onHandleHomeClick() {
    //     const randomIdx = Math.floor(Math.random()*recipes.length);
    //     console.log(randomIdx);
    //     setRandomRecipe(recipes[randomIdx])
    // }

    return(
        <header className = "header">
            <div>
                <h1 className = "title">Recipe Collection</h1>
            </div>
            <nav className = "nav-container">
                <div 
                    className = "nav-menu"
                    id = "nav-menu"
                >
                    <ul className = "nav-list">
                        <li className = "nav-item">
                            <NavLink
                                to = "/"
                                onClick = { handleHomeClick }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className = "nav-item">   
                            <NavLink
                                to = "./RecipeList"
                                onClick = { handleClick }
                            >
                                Recipe List
                            </NavLink>
                        </li>   
                        <li className = "nav-item">   
                            <NavLink
                                to = "./NewRecipe"
                                onClick = { handleClick }
                            >
                                Enter New Recipe
                            </NavLink>
                        </li> 
                    </ul>
                </div>
            </nav>    
            <div className = "toggle-container">
                <input
                    type= "checkbox"
                    id = "check"
                    className = "toggle"
                    onChange = { updateDarkMode }
                    checked = { isDark }
                />
                <label htmlFor = "check">{ isDark ? "Dark Mode" : "Light Mode" }</label>
            </div>
        </header>
    )
};

export default NavBar;
