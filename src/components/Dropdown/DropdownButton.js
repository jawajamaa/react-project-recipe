import React, { forwardRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";
import "./DropdownButton.css";

const DropdownButton = forwardRef(({ buttonText, open, toggleDropdown }, ref) => {
// function DropdownButton({ buttonText, open, ref, toggleDropdown }) {
    const { isDark } = useTheme();
    const dropdownIconClass = `dropdown-icon-${isDark ? "dark" : "light"}`;
    const dropdownBtnClass = `dropdown-btn-${isDark ? "dark" : "light"}`;

    return(
        <div className = { dropdownBtnClass } >
            <div 
                onClick = { toggleDropdown }
                className = {`dropdown-btn ${open ? "button-open" : null}`}
                ref = { ref } 
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
});

export default DropdownButton;
