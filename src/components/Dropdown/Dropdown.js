import React from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

function Dropdown({ buttonText, content }) {
    // console.log(`${buttonText}`)
    console.log(buttonText)
    console.log(content)
    
    return(
        <div>
            <DropdownButton 
                buttonText = { buttonText }
            />
            <DropdownContent 
                content = { content }
            />
            </div>
    )
};
export default Dropdown;
