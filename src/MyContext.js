import React, { useEffect, useState } from "react";

const MyContext = React.createContext();
const API= "http://localhost:4000/recipes/";

const MyProvider = (props) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(r => r.json())
        .then(setRecipes)
    }, [])

    console.log(recipes);

    return(
        <MyContext.Provider
            value = {{
                recipes: recipes
            }}
            >
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
