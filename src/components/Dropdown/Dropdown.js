import React, { useEffect, useRef, useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

function Dropdown({ buttonText, content }) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef();

    console.log(`${buttonText}`)
    console.log(buttonText)
    console.log(content)
    
    const toggleDropdown = () => {
        setOpen((open) => !open);
    };

    useEffect(() => {
        const clickHandler = (e) => {
            if(dropdownRef.current &&
                !dropdownRef.current.contains
                (e.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("click", clickHandler)

        return () => {
            document.removeEventListener("click", clickHandler);
        };
    }, [dropdownRef])
    
    return(
        <div 
            className = "dropdown"
            ref = { dropdownRef }
        >
            <DropdownButton
                toggleDropdown = { toggleDropdown } 
                open = { open } 
                // { ...buttonText } no dropdown fields shown using this method, but looks cleaner.  errors when not using ...
                buttonText = { buttonText }
            />
            <DropdownContent 
                open = { open }
                // { ...content }
                content = { content }
            />
            </div>
    )
};
export default Dropdown;
