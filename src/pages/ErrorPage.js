import { ArrowLeftIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"

// Página error
const ErrorPage = () => {

    // Estilos página error
    const styles = {
        title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
        text: "font-light text-sm text-gray-600 tracking-wide leading-normal lowercase",
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
        symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
        counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
    }

    // Render página error
    return (
        <>
            <div className="flex min-h-screen -mb-48 flex flex-col">
                <div className="m-auto mt-64">
                    <h1 className={styles.title}>OOPS!</h1>
                    <p className={styles.highlight}>Disculpa, página no encontrada.</p>
                    <Link to='/' className={(styles.text) + " flex flex-row items-center mt-3"}>
                        <ArrowLeftIcon className="h-4 w-4 mr-1" />
                        volver al inicio
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ErrorPage