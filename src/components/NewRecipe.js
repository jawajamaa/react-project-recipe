import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { useRecipes } from "../RecipesContext";
import Dropdown from "./Dropdown/Dropdown";
import DropdownItem from "./Dropdown/DropdownItem";
import "./NewRecipe.css";

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
    const { isDark } = useTheme();
    const { recipes, setRecipes } = useRecipes();

    const className = `new-recipe-${isDark ? "dark" : "light"}`;
    const buttonClass = `myButton-${isDark ? "dark" : "light"}`;

    function handleChange(evt) {
        // console.log(evt.target.value);
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

    const foodCategories = ["Appetizer", "Breakfast", "Desert", "Dinner", "Lunch", "Snack"]

    return(
        <div className = { className } >
            <form onSubmit = { handleSubmit }>
                <div className = "form-box">
                    <div>
                        <h2>Enter New Recipe</h2>
                        <br />
                        <label>Enter name of dish:  
                        <input 
                            type = "text"
                            name = "name"
                            placeholder = "Enter name of dish"
                            value = { name }
                            onChange = { handleChange } 
                        />
                        </label>
                        <div className = "dropdown">
                            <Dropdown 
                                // buttonText = "Select"
                                buttonText = "Select Recipe Category"
                                content = {
                                    <>
                                        {foodCategories.map(meal => (
                                            <DropdownItem key={meal}>
                                                {meal}
                                            </DropdownItem>
                                        ))}
                                    </>
                                }
                            />
                        </div>
                        {/* <label>Dish Category:
                        <input 
                            type = "text"
                            name = "category"
                            placeholder = "Dish Category"
                            value = { category }
                            onChange = { handleChange }
                        />
                        </label> */}
                        <label>Is the dish vegetarian?
                        <input 
                            type = "text"
                            name = "vegetarian"
                            placeholder = "Please enter Yes or No"
                            value = { vegetarian }
                            onChange = { handleChange }
                        />
                        </label>
                        <label>Total Prep Time:
                        <input 
                            type = "text"
                            name = "prepTime"
                            step = "001"
                            placeholder = "enter a number of minutes"
                            value = { prepTime }
                            onChange = { handleChange }
                        />
                        </label>
                        <label>Total Prep Time it takes You: 
                        <input 
                            type = "text"
                            name = "myPrepTime"
                            placeholder = "enter a number of minutes"
                            value = { myPrepTime }
                            onChange = { handleChange }
                        />
                        </label>
                        <label>Website for this Recipe?
                        <input 
                            type = "text"
                            name = "url"
                            placeholder = "enter url of website"
                            value = { url }
                            onChange = { handleChange }
                        />
                        </label>
                        <label>Small (300px square) Image -
                        <input 
                            type = "text"
                            name = "thumb"
                            placeholder = "enter url of image"
                            value = { thumb }
                            onChange = { handleChange }
                        />
                        </label>
                        <label>Large Image -
                        <input 
                            type = "text"
                            name = "image"
                            placeholder = "enter url of large image"
                            value = { image }
                            onChange = { handleChange }
                        />
                        </label>
                        <button
                            className = { buttonClass }
                            type = "submit"
                        >
                            Add Recipe
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewRecipe;
