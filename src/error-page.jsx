import { useRouteError } from "react-router-dom";
import errorbg from "./images/error.png";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className=" bg-contain bg-no-repeat  h-screen flex flex-col justify-center items-end space-y-5 mx-2" style={{backgroundImage: `url(${errorbg})`}}>
            <h1 className="text-8xl font-bold">Oops!</h1>
            <p className="text-4xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-4xl">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}