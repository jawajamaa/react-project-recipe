import { MyConsumer } from "../MyContext";

function Recipe() {

    return(
        <MyConsumer>
            {data =>

                <h1>{ data.recipe }</h1>

            }
        </MyConsumer>
    )
};

export default Recipe;
