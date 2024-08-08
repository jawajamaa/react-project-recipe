import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";
import "./DropdownButton.css";

function DropdownButton({ buttonText, children, open, toggleDropdown }) {
    const { isDark } = useTheme();
    const dropdownIconClass = `dropdown-icon-${isDark ? "dark" : "light"}`;
    const dropdownBtnClass = `dropdown-btn-${isDark ? "dark" : "light"}`;

    console.log(children)
    console.log(buttonText)
    return(
        <div className = { dropdownBtnClass } >
            <div 
                onClick = { toggleDropdown }
                className = {`dropdown-btn ${open ? "button-open" : null}`} 
            >
                { buttonText }
                {/* { children } */}
                <span className = { dropdownIconClass }>
                {/* <span className = "dropdown-icon"> */}
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </div>
        </div>
    );
};

export default DropdownButton;
