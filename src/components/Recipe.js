// import { MyConsumer } from "../MyContext";

function Recipe({ recipe }) {

    return(
        // <MyConsumer>
        //     {context =>

        //         { context.recipes.map(recipe => (
        //             <div>
        //                 <img>{recipe.image}</img>
        //                 <h2>{recipe.name}</h2>
        //             </div>
        //         )) 
        //         }

        //     }
        // </MyConsumer>
        <>
            <h2>{ recipe }</h2>
        </>
    )
};

export default Recipe;
