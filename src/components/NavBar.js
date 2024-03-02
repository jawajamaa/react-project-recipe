import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { DarkMode } from "../MyContext";

function NavBar({ setIsDark }) {
    const isDark = useContext(DarkMode)

    function updateDarkMode(evt) {
        setIsDark(evt.target.checked);
    }

    return(
        <div>
            <nav>
                <NavLink
                    to = "/"
                    className = "nav-link"
                    >
                        Home
                    </NavLink>
                <NavLink
                    to = "./RecipeList"
                    className = "nav-link"
                    >
                        Recipe List
                    </NavLink>
                </nav>    
            <div className = "toggle-container">
                <input
                    type= "checkbox"
                    id = "check"
                    className = "toggle"
                    onChange = { updateDarkMode }
                    checked = { isDark }
                />
                <label htmlFor = "check">Dark Mode</label>
        
            </div>
        </div>
    )
};

export default NavBar;
