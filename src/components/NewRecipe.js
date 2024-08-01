import { useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { DarkMode, RecipesContext } from "../MyContext";

function NewRecipe() {
    const [formData, setFormData] = useState({ 
        name: "",
        category: "",
        vegetarian: "", 
        prepTime: "", 
        myPrepTime: "", 
        url: "",
        thumb: "",
        image: ""
    });

    const{  
        name, 
        category,
        vegetarian, 
        prepTime, 
        myPrepTime, 
        url,
        thumb,
        image
        } = formData;

    const baseUrl = useOutletContext();
    const { recipes, setRecipes } = useContext(RecipesContext);
    const { isDark } = useContext(DarkMode);

    const className = `new-recipe-${isDark ? "dark" : "light"}`;
    // const className = "new-recipe-" + (isDark ? "dark" : "light");

    function handleChange(evt) {
        console.log(evt.target.value);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "name": name, 
                "category": category,
                "vegetarian": vegetarian, 
                "prepTime": parseInt(prepTime), 
                "myPrepTime": parseInt(myPrepTime), 
                "url": url,
                "thumb": thumb,
                "image": image
            })
        })
            .then(r => r.json())
            .then(data => {
                setRecipes([...recipes, data]);
                setFormData({
                    name: "",
                    category: "",
                    vegetarian: "", 
                    prepTime: "", 
                    myPrepTime: "", 
                    url: "",
                    thumb: "",
                    image: ""
                });    
            });
    }

    return(
        <div className = { className } >
            <form onSubmit = { handleSubmit }>
                <h2>Enter New Recipe Below</h2>
                <br />
                <ul>
                    <li>
                        <label>Enter name of dish</label><input 
                            type = "text"
                            name = "name"
                            placeholder = "Enter name of dish"
                            value = { name }
                            onChange = { handleChange } 
                        />
                    </li>
                    <li>
                        <label>Dish Category</label><input 
                            type = "text"
                            name = "category"
                            placeholder = "Dish Category"
                            value = { category }
                            onChange = { handleChange }
                        />
                    </li>
                    <li>
                        <label>Is the dish vegetarian?</label><input 
                            type = "text"
                            name = "vegetarian"
                            placeholder = "Please enter Yes or No"
                            value = { vegetarian }
                            onChange = { handleChange }
                        />
                    </li>
                    <li>
                        <label>Total Prep Time</label><input 
                            type = "text"
                            name = "prepTime"
                            step = "001"
                            placeholder = "enter a number of minutes"
                            value = { prepTime }
                            onChange = { handleChange }
                        />
                    </li>
                    <li>
                        <label>Total Prep Time it takes You</label><input 
                            type = "text"
                            name = "myPrepTime"
                            placeholder = "enter a number of minutes"
                            value = { myPrepTime }
                            onChange = { handleChange }
                        />
                    </li>
                    <li>
                        <label>Is there a website for this Recipe?</label><input 
                            type = "text"
                            name = "url"
                            placeholder = "enter url of website"
                            value = { url }
                            onChange = { handleChange }
                        />
                    </li>
                    <li>
                        <label>Small (300px square) Image</label><input 
                            type = "text"
                            name = "thumb"
                            placeholder = "enter url of image"
                            value = { thumb }
                            onChange = { handleChange }
                        />
                    </li>
                    <li>
                        <label>Large Image</label><input 
                            type = "text"
                            name = "image"
                            placeholder = "enter url of large image"
                            value = { image }
                            onChange = { handleChange }
                        />
                    </li>
                    <button
                    type = "submit"
                    >Add Recipe</button>
                </ul>
            </form>
        </div>
    )
}

export default NewRecipe;
