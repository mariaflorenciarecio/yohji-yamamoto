import { Link } from 'react-router-dom'
import { formatPrice } from '../helpers/formatPrice'

// Item
const Item = ({item}) => {

    // Estilos de la card
    const styles = {
        name: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        price: "font-normal text-xs text-gray-600 tracking-widest leading-loose uppercase"
    }

    // Render de la card
    return (
        <>
            {/* Contenedor de la card */}
            <div key={item.id} className="group relative overflow-hidden font-body">

                {/* Imagenes */}
                <Link to={`/item/${item.id}`}>
                    <div className="w-full aspect-w-5 aspect-h-7 overflow-hidden">
                        <img
                            src={item.imgA}
                            alt={item.name}
                            className="duration-700 group-hover:opacity-0"
                        />
                        <img 
                            src={item.imgD}
                            alt={item.name}
                            className="absolute top-0 z-[-5]" 
                        />
                    </div>
                </Link>

                {/* Descripción */}
                <div className="flex flex-col justify-start p-3">
                    <h3 className={styles.name}>
                        <Link to={`/item/${item.id}`}>
                            {item.name}
                        </Link>
                    </h3>
                    <p className={styles.price}>
                        <Link to={`/item/${item.id}`}>
                            {formatPrice(item.price)}
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Item