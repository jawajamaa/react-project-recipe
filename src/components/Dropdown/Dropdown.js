import React, { useEffect, useRef, useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

function Dropdown({ buttonText, content }) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef();
    const buttonRef = useRef();
    const contentRef = useRef();
    
    const toggleDropdown = () => {
        setOpen((open) => !open);
    };

    useEffect(() => {
        const clickHandler = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("click", clickHandler);

        return () => {
            document.removeEventListener("click", clickHandler);
        };
    }, [dropdownRef]);
    
    return(
        <div 
            className = "dropdown"
            ref = { dropdownRef }
        >
            <DropdownButton
                toggleDropdown = { toggleDropdown } 
                open = { open } 
                buttonText = { buttonText }
                ref = { buttonRef }
            />
            <DropdownContent 
                open = { open }
                content = { content }
                ref = { contentRef }
            />
        </div>
    )
};

export default Dropdown;
