import { TrashIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const Cart = () => {

    const styles = {
        text: "font-light text-sm text-gray-600 tracking-wide leading-normal lowercase",
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
        symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
        counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
    }

    const {cartItems, removeItem, clearCart, cartLenght, getSubtotal, getTotal} = useContext(CartContext)

    return (
        <>
            {cartLenght() == 0 ? (
                <div>
                    <p>Oops! Tu carrito está vacío. Por favor, agregá algún producto para poder continuar.</p>
                    <div className="space-x-4">
                        <Link to='/'>Volver al inicio</Link>
                        <Link to='/collection'>Descubrir la colección</Link>
                    </div>
                </div>
            ) : (
                <div className="m-auto">
                    <div className="hidden sm:flex flex-col justify-center items-center">
                        <table className="mt-16 whitespace-nowrap w-full lg:max-w-7xl">
                            <thead className="h-10 text-center">
                                <tr className="border-gray-200 border-b">
                                    <th className={(styles.highlight) + " text-left pl-4"}>Producto</th>
                                    <th className={styles.highlight}>Precio</th>
                                    <th className={styles.highlight}>Cantidad</th>
                                    <th className={styles.highlight}>Subtotal</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody className="w-full text-center">

                                {/* Producto en carrito */}
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border-gray-200 border-b">
                                        <th className="flex flex-row justify-left items-center">
                                            <img className="p-4 h-60" src={item.imgA} alt={item.name} />
                                            <div className="flex flex-col text-left">
                                                <p className={styles.highlight}>{item.name}</p>
                                                <p className={styles.text}>{item.color} — {item.size}</p>
                                            </div>
                                        </th>
                                        <th className={styles.text}>{item.price}</th>
                                        <th className={styles.text}>{item.quantity}</th>
                                        <th className={styles.text}>{getSubtotal(item.price, item.quantity)}</th>
                                        <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                            <TrashIcon onClick={() => removeItem(item.id)} className="w-6 h-6 border-transparent focus:border-transparent focus:ring-0 text-gray-400 hover:text-gray-600 cursor-pointer" />
                                        </th>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <div>
                            <p>Cantidad de items: {cartLenght()}</p>
                            <p>Total: {getTotal()}</p>
                            <div className='space-x-4'>
                                <button onClick={clearCart}>Vaciar carrito</button>
                                <Link to='/'>Seguir comprando</Link>
                                <Link to='/checkout'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart