import { useState } from "react";

function NewRecipe() {
    const [formData, setFormData] = useState({ 
        name: "",
        category: "",
        vegetarian: false, 
        prepTime: 0, 
        myPrepTime: 0, 
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

    function onChange(evt) {
        console.log(evt.target.value);
    }

    return(
        <div className = "new-recipe">
            <form>
                <h2>Enter New Recipe Here</h2>
                <br />
                <ul>
                    <li>
                        <label>Enter name of dish</label><input 
                            type = "text"
                            placeholder = "Enter name of dish"
                            value = { name }
                            onChange = { onChange } 
                        />
                    </li>
                    <li>
                        <label>Dish Category</label><input 
                            type = "text"
                            placeholder = "Dish Category"
                            value = { category }
                            onChange = { onChange }
                        />
                    </li>
                    <li>
                        <label>Is the dish vegetarian?</label><input 
                            type = "text"
                            placeholder = "Vegetarian?"
                            value = { vegetarian }
                            onChange = { onChange }
                        />
                    </li>
                    <li>
                        <label>Total Prep Time</label><input 
                            type = "text"
                            placeholder = "enter a number of minutes"
                            value = { prepTime }
                            onChange = { onChange }
                        />
                    </li>
                    <li>
                        <label>Total Prep Time it takes You</label><input 
                            type = "text"
                            placeholder = "enter a number of minutes"
                            value = { myPrepTime }
                            onChange = { onChange }
                        />
                    </li>
                    <li>
                        <label>Is there a website for this Recipe?</label><input 
                            type = "text"
                            placeholder = "enter url of website"
                            value = { url }
                            onChange = { onChange }
                        />
                    </li>
                    <li>
                        <label>Small (300px square) Image</label><input 
                            type = "text"
                            placeholder = "enter url of image"
                            value = { thumb }
                            onChange = { onChange }
                        />
                    </li>
                    <li>
                        <label>Is the dish vegetarian?</label><input 
                            type = "text"
                            placeholder = "Vegetarian?"
                            value = { image }
                            onChange = { onChange }
                        />
                    </li>
                    <button>Submit</button>
                </ul>
            </form>
        </div>
    )
};

export default NewRecipe;
