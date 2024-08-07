import React from "react";
import "./DropdownContent.css";

function DropdownContent({ content, open }) {

    // console.log(children)
    console.log(content)

    return(
        <div className = {`dropdown-content ${open ? "content-open" : null}`}>
            { content }
        </div>
    )
};
export default DropdownContent;
