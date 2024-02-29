import "./NavBar.css";

function NavBar({ isDark, handleChange }) {
 

    // function handleClick() {
    //     setIsDark(!isDark);
    //     console.log(isDark);
    // }

    return(
        <div className = "toggle-container">
            <input
                type= "checkbox"
                id = "check"
                className = "toggle"
                onChange = { handleChange }
                checked = { isDark }
            />
            <label htmlFor = "check">Dark Mode</label>
            {/* <Toggle /> */}
            {/* <button onClick = { handleClick }>{isDark ? "Light Mode" : "Dark Mode" }</button> */}
        </div>
    )
};

export default NavBar;
