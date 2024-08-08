import React, { useEffect, useRef, useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

function Dropdown({ buttonText, content }) {
    const [open, setOpen] = useState(false);
    const [dropdownTop, setDropdownTop] = useState(0);

    const dropdownRef = useRef();
    const buttonRef = useRef();
    const contentRef = useRef();
    
    const toggleDropdown = () => {
        if(!open) {
            const spaceRemaining = window.innerHeight - buttonRef.current.getBoundingClientRect().bottom;
            const contentHeight = contentRef.current.clientHeight;

            const topPosition = spaceRemaining > contentHeight ? null : spaceRemaining - contentHeight;
            setDropdownTop(topPosition);
        }
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
                dropdownTop = { dropdownTop }
            />
        </div>
    )
};

export default Dropdown;
