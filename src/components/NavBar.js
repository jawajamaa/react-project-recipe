import { NavLink } from "react-router-dom";
import React from "react";
import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
import "./NavBar.css";

function NavBar() {
    const { isDark, setIsDark } = useTheme();
    const { recipes, setRandomRecipe } = useRecipes();
    const headerOfClass = `header-${isDark ? "dark" : "light"}`;
    const navItemClass = `nav-item-${isDark ? "dark" : "light"}`;
    const titleClass = `title-${isDark ? "dark" : "light"}`;
    
    function updateDarkMode(evt) {
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

    return(
        <header className = { headerOfClass }>
            <div>
                <NavLink>
                <h1 className = { titleClass }
                    to = "/"
                    onClick = { handleHomeClick }
                >
                    Recipe Collection</h1>
                </NavLink>
            </div>
            <nav className = "nav-container">
                <div 
                    className = "nav-menu"
                    id = "nav-menu"
                >
                    <ul className = "nav-list">
                        <li className = { navItemClass }>
                            <NavLink
                                to = "/"
                                onClick = { handleHomeClick }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className = { navItemClass }>   
                            <NavLink
                                to = "./RecipeList"
                                onClick = { handleClick }
                            >
                                Recipe List
                            </NavLink>
                        </li>   
                        <li className = { navItemClass }>   
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
