import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import RecipeList from "./components/RecipeList";
import { MyConsumer } from "./MyContext";

function App() {
    const[isDark, setIsDark] = useState(false);

    console.log(MyConsumer);
    
    return(
            <div className = "App" id = "dark">
                <NavBar />
                <div>
                    <h1 className = "title">Home App Home</h1>
                </div>
                <div>
                    <RecipeList />
                </div>
            </div>
    )
};

export default App;
