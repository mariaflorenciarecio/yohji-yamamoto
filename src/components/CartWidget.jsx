import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/solid'

const CartWidget = () => {
    return (
        <div className="ml-6 mr-2 flow-root">
            <a href="#" className="group -m-2 flex items-center">
                <ShoppingBagIcon
                    className="flex-shrink-0 h-5 w-5 text-black"
                    aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-black">0</span>
                <span className="sr-only">artículos en el carrito, mostrar carrito</span>
            </a>
        </div>
    )
}

export default CartWidget
