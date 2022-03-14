import { HeartIcon } from '@heroicons/react/solid'

const WishlistWidget = () => {
    return (
        <div className="ml-2 mr-2 flow-root">
            <a href="#" className="group -m-2 flex items-center">
                <HeartIcon
                    className="h-5 w-5 text-gray-600"
                />
                <span className="m-2 text-sm font-medium text-gray-600">0</span>
                <span className="sr-only">artículos en la lista de deseos, mostrar lista de deseos</span>
            </a>
        </div>
    )
}

export default WishlistWidget