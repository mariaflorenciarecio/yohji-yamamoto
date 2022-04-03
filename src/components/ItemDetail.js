import { useState, useContext } from "react"
import { ArrowLeftIcon } from "@heroicons/react/solid"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { formatPrice } from "../helpers/formatPrice"

// Detalles del item
const ItemDetail = ({ item }) => {

    // Estilos del detalle
    const styles = {
        title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
        subtitle: "font-medium text-base text-gray-600 tracking-wider leading-normal uppercase",
        text: "font-regular text-sm text-gray-600 tracking-wide leading-normal",
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
        symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
        counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
    }

    // Contexto del carrito
    const { addItem } = useContext(CartContext)

    // Use states que permiten hacer desaparecer el contador si se agregó el item al carrito, mostrar detalles y beneficios
    const [isInCart, setIsInCart] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [showBenefits, setShowBenefits] = useState(false)

    // Agregar cantidad correcta de items al carrito
    const addToCart = (quantity) => {
        addItem(item, quantity)
        setIsInCart(true)
    }

    // Render del detalle
    return (
        <>
            {/* Contenedor del detalle */}
            <div className="selection:bg-gray-600 selection:text-white">

                {/* Breadcrumbs */}
                <ul className={"ml-10 lowercase hidden lg:flex space-x-2 " + (styles.text)}>
                    <li><Link to='/' className="font-bold">Inicio</Link></li>
                    <li><span>—</span></li>
                    <li><Link to={`/category/${item.category}`} className="font-bold">{item.category}</Link></li>
                    <li><span>—</span></li>
                    <li><span>{item.name}</span></li>
                </ul>

                {/* Imágenes y detalles */}
                <div className="flex flex-col lg:flex-row max-w-full lg:max-w-7xl mx-auto justify-center items-center lg:items-start">

                    {/* Imágenes */}
                    <div className="group relative lg:w-1/2 overflow-hidden">
                        <img
                            src={item.imgB}
                            alt={item.name}
                            className="duration-700 group-hover:opacity-0 p-6"
                        />
                        <img
                            src={item.imgC}
                            alt={item.name}
                            className="absolute top-0 z-[-5] p-6 pb-3"
                        />
                    </div>

                    {/* Detalles */}
                    <div className="w-full px-6 lg:py-6 lg:w-1/2">

                        {/* Información */}
                        <div className="flex flex-col justify-between items-start">
                            <p className={"mb-1 lowercase " + (styles.text)}>{item.color} — {item.size}</p>
                            <h1 className={styles.title}>{item.name}</h1>
                        </div>
                        <p className={"mt-4 " + (styles.subtitle)}>{formatPrice(item.price)}</p>
                        <h2 className={"mt-4 " + (styles.highlight)}>Descripción</h2>
                        <p className={"mt-2 " + (styles.text)}>{item.description}</p>
                        <hr className="border-gray-200 w-full mt-4" />

                        {/* Detalles del producto */}
                        <div>
                            <div className="flex flex-row justify-between items-center mt-4">
                                <h2 className={styles.highlight}>Detalles del producto</h2>
                                <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" onClick={() => setShowDetails(!showDetails)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={showDetails ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.16602 10H15.8327" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className={(styles.text) + " mt-2 w-11/12 lowercase " + (showDetails ? "block" : "hidden")}>composición: {item.composition} — cuidados: {item.care}</p>
                        </div>
                        <hr className="border-gray-200 w-full mt-4" />

                        {/* Beneficios exclusivos */}
                        <div>
                            <div className="flex flex-row justify-between items-center mt-4">
                                <h2 className={styles.highlight}>Beneficios exclusivos</h2>
                                <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" onClick={() => setShowBenefits(!showBenefits)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={showBenefits ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.16602 10H15.8327" stroke="#303030" strokeWidth="" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className={(styles.text) + " mt-2 w-11/12 lowercase " + (showBenefits ? "block" : "hidden")}>Envíos, cambios y devoluciones gratis — 3, 6 y 12 cuotas sin interés — Servicio pick up</p>
                        </div>
                        <hr className="border-gray-200 w-full mt-4" />

                        {/* Si se agregó el item al carrito, se muetra el botón finalizar compra, si no, el contador */}
                        {isInCart ? (
                            <div className="flex flex-col space-y-8 mt-6">
                                <Link to='/cart' className={(styles.button) + " focus:outline-none text-white bg-gray-700 focus:ring-transparent w-48 text-center py-3"}>Finalizar compra</Link>
                            </div>
                        ) : (
                            <ItemCount addToCart={addToCart} stock={item.stock} />
                        )}

                        {/* Botón para volver a ver la categoría */}
                        <Link to={`/category/${item.category}`} className={(styles.text) + " flex flex-row items-center mt-2"}>
                            <ArrowLeftIcon className="h-4 w-4 mr-1" />
                            ver {item.category}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
