import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.errror(error);

    return(
        <main>
            <h1>Oops! Something went awry!</h1>
        </main>
    )
};

export default ErrorPage;
