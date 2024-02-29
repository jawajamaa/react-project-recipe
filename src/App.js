import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
    const[isDark, setIsDark] = useState(false);

    // const appClass = isDark ? "App dark" : "App light";
    console.log(isDark);
    
    return(
        // <div data-theme = { isDark ? "dark" : "light" }
        //     className = { appClass }
        // >
        <>
            <header data-theme = { isDark ? "dark" : "light" }>
              <NavBar
              isDark = { isDark } 
              handleChange = { () => setIsDark(!isDark) }
              />
            </header>
            <main data-theme = { isDark ? "dark" : "light" }>
                <div className = "box">
                    <h1 className = "title">Home App Home</h1>
                </div>
            </main>
        {/* </div> */}
        </>
    )
};

export default App;
