import React, { forwardRef } from "react";
import "./DropdownContent.css";

const DropdownContent = forwardRef(({ content, dropdownTop, open }, ref) => {

    return(
        <div 
            className = {`dropdown-content ${open ? "content-open" : null}`}
            ref = { ref }
            style={{ dropdownTop: dropdownTop ? `${dropdownTop}px` : "100%" }}
        >
            { content }
        </div>
    )
});

export default DropdownContent;
