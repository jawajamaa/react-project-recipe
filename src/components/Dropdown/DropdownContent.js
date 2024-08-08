import React, { forwardRef } from "react";
import "./DropdownContent.css";

const DropdownContent = forwardRef(({ content, open }, ref) => {
// function DropdownContent({ content, ref, open }) {

    // console.log(children)
    // console.log(content)

    return(
        <div 
            className = {`dropdown-content ${open ? "content-open" : null}`}
            ref = { ref }
        >
            { content }
        </div>
    )
});

export default DropdownContent;
