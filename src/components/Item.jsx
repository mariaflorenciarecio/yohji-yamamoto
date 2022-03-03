import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const Item = ({item: i}) => {
    return (
        <>
            <div key={i.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-5 aspect-h-7 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={i.imageSrc}
                        alt={i.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <Link to={`/item/${i.id}`}>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {i.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{i.price}</p>
                    </Link>
                    <div className="flex flex-row">
                        <HeartIcon className="h-5 w-5" aria-hidden="true" />
                        <ShoppingBagIcon className="h-5 w-5 ml-1" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item