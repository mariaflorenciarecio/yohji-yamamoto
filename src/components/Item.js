import { HeartIcon, ShoppingCartIcon, EyeIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const Item = ({item: item}) => {

    return (
        <>
            <div key={item.id} className="group relative overflow-hidden font-body">

                {/* Imagenes */}
                <div className="w-full aspect-w-5 aspect-h-7 overflow-hidden">
                    <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="duration-700 group-hover:opacity-0"
                    />
                    <img 
                        src="https://cdn-images.farfetch-contents.com/15/48/49/31/15484931_29315434_1000.jpg" 
                        className="absolute top-0 z-[-5]" 
                    />
                </div>

                {/* Descripción */}
                <div className="flex flex-col justify-start p-3">
                    <h3 to={`/products/${item.id}`} className="text-sm text-neutral-600">
                        <Link to={`/item/${item.id}`}>
                            {item.name}
                        </Link>
                    </h3>
                    <p className="text-sm text-neutral-400 pt-2 tracking-widest">
                        <Link to={`/item/${item.id}`}>
                            {item.price}
                        </Link>
                    </p>
                </div>

                {/* Botones */}
                <div className="cursor-pointer">
                    <Link to={`/item/${item.id}`}>
                        <EyeIcon className="absolute group-hover:right-3 delay-100 w-8 p-1.5 hover:bg-neutral-600 hover:text-white duration-500 right-[-60px] top-3 bg-white text-neutral-600" />
                    </Link>
                    <HeartIcon className="absolute group-hover:right-3 delay-300 w-8 p-1.5 hover:bg-neutral-600 hover:text-white duration-500 right-[-60px] top-[58px] bg-white text-neutral-600" />
                    <ShoppingCartIcon className="absolute group-hover:right-3 delay-500 w-8 p-1.5 hover:bg-neutral-600 hover:text-white duration-500 right-[-60px] top-[104px] bg-white text-neutral-600" />
                </div>

            </div>
        </>
    )
}
export default Item