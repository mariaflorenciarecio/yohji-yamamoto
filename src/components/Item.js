import { HeartIcon, ShoppingCartIcon, EyeIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const Item = ({item}) => {

    const styles = {
        name: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        price: "font-normal text-xs text-gray-600 tracking-widest leading-loose uppercase",
        button: "absolute group-hover:right-3 w-8 p-1.5 hover:bg-neutral-600 hover:text-white duration-500 right-[-60px] bg-white text-neutral-600"
    }

    return (
        <>
            <div key={item.id} className="group relative overflow-hidden font-body">

                {/* Imagenes */}
                <div className="w-full aspect-w-5 aspect-h-7 overflow-hidden">
                    <img
                        src={item.images.imgB}
                        alt={item.name}
                        className="duration-700 group-hover:opacity-0"
                    />
                    <img 
                        src={item.images.imgE}
                        alt={item.name}
                        className="absolute top-0 z-[-5]" 
                    />
                </div>

                {/* Descripción */}
                <div className="flex flex-col justify-start p-3">
                    <h3 className={styles.name}>
                        <Link to={`/item/${item.id}`}>
                            {item.name}
                        </Link>
                    </h3>
                    <p className={styles.price}>
                        <Link to={`/item/${item.id}`}>
                            {item.price}
                        </Link>
                    </p>
                </div>

                {/* Botones */}
                <div className="cursor-pointer">
                    <Link to={`/item/${item.id}`}>
                        <EyeIcon className={(styles.button) + " delay-100 top-3"} />
                    </Link>
                    <HeartIcon className={(styles.button) + " delay-300 top-[58px]"} />
                    <ShoppingCartIcon className={(styles.button) + " delay-500 top-[104px]"} />
                </div>

            </div>
        </>
    )
}
export default Item