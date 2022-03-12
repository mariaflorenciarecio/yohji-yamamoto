import { ShoppingBagIcon } from '@heroicons/react/solid'

const CartWidget = () => {
    return (
        <div className="ml-2 mr-2 flow-root">
            <a href="#" className="group -m-2 flex items-center">
                <ShoppingBagIcon
                    className="h-5 w-5 text-gray-600"

                />
                <span className="ml-2 text-sm font-medium text-gray-600">0</span>
                <span className="sr-only">artículos en el carrito, mostrar carrito</span>
            </a>
        </div>
    )
}

export default CartWidget
