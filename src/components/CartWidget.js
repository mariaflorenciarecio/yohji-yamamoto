import { ShoppingBagIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const {cartLenght} = useContext(CartContext)

    return (
        <div className="ml-2 mr-2 flow-root">
            <Link to='/cart' className="group -m-2 flex items-center">
                <ShoppingBagIcon className="h-5 w-5 text-gray-600" />
                {cartLenght() > 0 && (
                    <span className="ml-2 text-sm font-medium text-gray-600">{cartLenght()}</span>
                )}
            </Link>
        </div>
    )
}

export default CartWidget
