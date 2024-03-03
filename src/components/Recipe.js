import "../index.css";
import "./Recipe.css";

function Recipe({ recipe }) {
    const{ 
        id, 
        name, 
        category,
        // vegetarian, 
        prepTime, 
        myPrepTime, 
        url,
        thumb,
        // image
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
                        src = { thumb } 
                        alt = { name }
                    ></img>
                </div>
                <div className = "description">
                    <h3>{ name }</h3> 
                    <p>Total Prep Time: { prepTime } minutes</p>
                    <p>My Total Prep Time: { myPrepTime } minutes</p> 
                    <p>Food Category: { category }</p>
                    {/* <p>{ vegetarian }</p> */}
                    <a href = { url }>
                        <button>Link to Recipe!</button>
                    </a>
                </div>
            </div>   
    )
};

export default Recipe;
