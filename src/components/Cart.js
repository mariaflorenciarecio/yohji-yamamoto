import { ArrowLeftIcon, TrashIcon } from "@heroicons/react/solid"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { formatPrice } from "../helpers/formatPrice"

// Carrito de compras
const Cart = () => {

    // Estilos del carrito
    const styles = {
        title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
        text: "font-light text-sm text-gray-600 tracking-wide leading-normal lowercase",
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
        symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
        counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
    }

    // Contexto del carrito
    const {cartItems, removeItem, clearCart, cartLenght, getSubtotal, getTotal} = useContext(CartContext)

    // Render del carrito
    return (
        <>
            {/* Si el carrito esta vacío, se muestra un mensaje de advertencia, si no, se muestra su contenido */}
            {cartLenght() == 0 ? (

                // Mensaje de advertencia
                <div className="flex min-h-screen -mb-48 flex flex-col">
                    <div className="m-auto mt-64">
                        <p className={styles.highlight}>Oops! Tu carrito está vacío. Por favor, agregá algún producto para poder continuar.</p>
                        <Link to='/' className={(styles.text) + " flex flex-row items-center mt-3"}>
                            <ArrowLeftIcon className="h-4 w-4 mr-1" />
                            volver al inicio
                        </Link>
                    </div>
                </div>

            ) : (

                // Contenido del carrito
                <div className="mx-6">
                    <div className="flex flex-col justify-between w-full lg:max-w-7xl xl:m-auto">

                        {/* Título */}
                        <h1 className={(styles.title) + " self-center mb-6"}>Carrito</h1>

                        {/* Tabla de contenido */}
                        <table className="inline-block overflow-x-auto whitespace-nowrap">
                            
                            {/* Nombre de columnas */}
                            <thead className="h-10 text-center">
                                <tr className="border-gray-200 border-b">
                                    <th className={(styles.highlight) + " text-left pl-4 lowercase"}>Producto</th>
                                    <th className={(styles.highlight) + " lowercase px-6 lg:px-16 xl:px-32"}>Precio</th>
                                    <th className={(styles.highlight) + " lowercase px-6 md:px-2 lg:px-8 xl:px-12"}>Cantidad</th>
                                    <th className={(styles.highlight) + " lowercase px-6 md:px-2 lg:px-16 xl:px-28"}>Subtotal</th>
                                    <th />
                                </tr>
                            </thead>

                            {/* Items en el carrito */}
                            <tbody className="w-full text-center">
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border-gray-200 border-b">
                                        <th className="flex flex-row justify-left items-center pr-40 md:pr-0">
                                            <img className="p-4 h-60" src={item.imgA} alt={item.name} />
                                            <div className="flex flex-col text-left">
                                                <p className={styles.highlight}>{item.name}</p>
                                                <p className={styles.text}>{item.color} — {item.size}</p>
                                            </div>
                                        </th>
                                        <th className={styles.text}>{formatPrice(item.price)}</th>
                                        <th className={styles.text}>{item.quantity}</th>
                                        <th className={styles.text}>{formatPrice(getSubtotal(item.price, item.quantity))}</th>
                                        <th className="px-4 lg:pl-2 xl:pl-24">
                                            <TrashIcon onClick={() => removeItem(item.id)} className="w-6 h-6 border-transparent focus:border-transparent focus:ring-0 text-gray-400 hover:text-gray-600 cursor-pointer" />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Detalles del carrito */}
                        <div className="flex flex-col md:flex-row justify-between mt-6 mb-3 mx-4">

                            {/* Vaciar carrito */}
                            <button onClick={clearCart} className={(styles.highlight) + ' lowercase flex flex-row items-center self-start mb-4'}>
                                x vaciar carrito
                            </button>

                            {/* Resúmen de compra */}
                            <div className="flex flex-col self-start w-full md:w-2/5">
                                <div className={"flex flex-row justify-between " + (styles.text)}>
                                    <p>Cantidad de items:</p>
                                    <p>{cartLenght()}</p>
                                </div>
                                <div className={"flex flex-row justify-between " + (styles.text)}>
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className={"flex flex-row justify-between font-semibold " + (styles.highlight)}>
                                    <p>Total:</p>
                                    <p>{formatPrice(getTotal())}</p>
                                </div>
                                <Link to='/checkout' className={(styles.button) + " focus:outline-none text-white bg-gray-700 focus:ring-transparent w-full text-center py-3 mt-3"}>Checkout</Link>
                                <Link to='/' className={(styles.text) + " flex flex-row items-center mt-2"}>
                                    <ArrowLeftIcon className="h-4 w-4 mr-1" />
                                    seguir comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
}

export default Cart