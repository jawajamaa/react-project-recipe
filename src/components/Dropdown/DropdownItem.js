import React from "react";
import "./DropdownItem.css";

function DropdownItem({ children, onHandleClick }) {

    function handleClick(){
        onHandleClick(children);
        console.log(children);
    }

    return(
        <div 
            className = "dropdown-item"
            onClick = { handleClick }
        >
            { children }
        </div>
    )
};
export default DropdownItem;
