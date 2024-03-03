import { NavLink } from "react-router-dom";
import "../index.css";
import "./NavBar.css";
import { useContext } from "react";
import { DarkMode } from "../MyContext";

function NavBar({ setIsDark }) {
    const isDark = useContext(DarkMode)

    function updateDarkMode(evt) {
        setIsDark(evt.target.checked);
    }

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
                                // className = "nav-link"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className = "nav-item">   
                            <NavLink
                                to = "./RecipeList"
                                // className = "nav-link"
                            >
                                Recipe List
                            </NavLink>
                        </li>   
                        <li className = "nav-item">   
                            <NavLink
                                to = "./NewRecipe"
                                // className = "nav-link"
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
