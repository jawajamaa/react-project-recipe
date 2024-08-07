import React from "react";
import "./DropdownItem.css";

function DropdownItem({ children, onClick }) {

    return(
        <div 
            className = "dropdown-item"
            onClick = { onClick }
        >
            { children }
        </div>
    )
};
export default DropdownItem;
