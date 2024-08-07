import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";
import "./DropdownButton.css";

function DropdownButton({ children }) {
    const { isDark } = useTheme();
    const dropdownIconClass = `dropdown-icon-${isDark ? "dark" : "light"}`;
    const dropdownBtnClass = `dropdown-btn-${isDark ? "dark" : "light"}`;

    return(
        <div className = { dropdownBtnClass } >
            { children }
            <span className = { dropdownIconClass }>
                <FaChevronDown />
            </span>
        </div>
    )
};
export default DropdownButton;
