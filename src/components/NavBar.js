import { useState } from "react";

function NavBar() {
    const[isDark, setIsDark] = useState(false);

    function handleClick() {
        setIsDark(!isDark);
        
    }

    return(
        <>
            <button onClick = { handleClick }>{isDark ? "Dark Mode" : "Light Mode" }</button>
        </>
    )
};

export default NavBar;
