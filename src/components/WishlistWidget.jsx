import { HeartIcon } from '@heroicons/react/solid'

const WishlistWidget = () => {
    return (
        <div className="ml-6 mr-2 flow-root">
            <a href="#" className="group -m-2 flex items-center">
                <HeartIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium">0</span>
                <span className="sr-only">artículos en la lista de deseos, mostrar lista de deseos</span>
            </a>
        </div>
    )
}

export default WishlistWidget