import "../index.css";
import "./Recipe.css";

function Recipe({ recipe }) {
    const{ 
        id, 
        name, 
        category,
        vegetarian, 
        prepTime, 
        myPrepTime, 
        url,
        image
        } = recipe;

console.log(recipe)
console.log(name)

    return(
        <div 
            className = "card"
            key = { id }
            >
                <div className = "photo">
                    <img 
                        src = { image } 
                        alt = { name }
                    ></img>
                </div>
                <div className = "description">
                    <h3>{ name }</h3> 
                    <p>{ prepTime }</p>
                    <p>{ myPrepTime }</p> 
                    <p>{ category }</p>
                    <p>{ vegetarian }</p>
                    <p>{ url }</p>
                </div>
            </div>   
    )
};

export default Recipe;
