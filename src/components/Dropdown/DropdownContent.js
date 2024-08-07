import React from "react";
import "./DropdownContent.css";

function DropdownContent({ content }) {

    // console.log(children)
    console.log(content)

    return(
        <div className = "dropdown-content">
            { content }
        </div>
    )
};
export default DropdownContent;
