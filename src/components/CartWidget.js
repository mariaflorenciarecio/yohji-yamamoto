import { ShoppingBagIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

// Widget del carrito
const CartWidget = () => {

    // Contexto del carrito
    const {cartLenght} = useContext(CartContext)

    // Render del widget del carrito
    return (
        <>
            {/* Widget del carrito, mostrando la cantidad de items que contiene */}
            <div className="ml-2 mr-2 flow-root">
                <Link to='/cart' className="group -m-2 flex items-center">

                    {/* Icono del carrito */}
                    <ShoppingBagIcon className="h-5 w-5 text-gray-600" />

                    {/* Número que indica la cantidad de items en el carrito */}
                    {cartLenght() > 0 && (
                        <span className="ml-2 text-sm font-medium text-gray-600">{cartLenght()}</span>
                    )}
                </Link>
            </div>
        </>
    )
}

export default CartWidget
