import { createContext, useContext, useState, useEffect } from "react";

const RecipesContext = createContext();

export function RecipesProvider({ children }) {
    const [recipes, setRecipes] = useState([]);
    const [randomRecipe, setRandomRecipe] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/recipes/")
            .then(r => r.json())
            .then(data => {
                setRecipes(data);
                const randomIdx = Math.floor(Math.random() * data.length);
                setRandomRecipe(data[randomIdx]);
            });
    }, []);

    return(
        <RecipesContext.Provider value = {{ recipes, setRecipes, randomRecipe, setRandomRecipe }}>
            { children }
        </RecipesContext.Provider>
    );
}

export function useRecipes() {
    return useContext(RecipesContext);
}
