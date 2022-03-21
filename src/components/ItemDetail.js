import React, { useState, useContext } from "react"
import { HeartIcon } from "@heroicons/react/solid"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const {addItem} = useContext(CartContext)

  const [isInCart, setIsInCart] = useState(false)

  const addToCart = (quantity) => {
    addItem(item, quantity)
    setIsInCart(true)
  }

  const styles = {
    title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
    subtitle: "font-medium text-base text-gray-600 tracking-wider leading-normal uppercase",
    text: "font-regular text-sm text-gray-600 tracking-wide leading-normal",
    highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
    button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
    symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
    counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
  }

  return (
    <div className="selection:bg-gray-600 selection:text-white">

      {/* Breadcrums */}
      <ul className={"ml-10 lowercase hidden lg:flex space-x-2 " + (styles.text)}>
        <li><Link to='/'>Inicio</Link></li>
        <li><span>—</span></li>
        <li><Link to='/collection'>Colección</Link></li>
        <li><span>—</span></li>
        <li><Link to={`/category/${item.category}`}>{item.category}</Link></li>
        <li><span>—</span></li>
        <li><span>{item.name}</span></li>
      </ul>

      {/* Imágenes y detalles */}
      <div className="flex flex-col lg:flex-row max-w-full lg:max-w-7xl mx-auto justify-center items-center lg:items-start">

        {/* Imágenes */}
        <div className="p-6 lg:w-1/2 pb-3">
          <img src={item.imgB} alt={item.name} />
        </div>

        {/* Detalles */}
        <div className="p-6 lg:w-1/2">

          {/* Información */}
          <div className="flex flex-row justify-between items-end">
            <div>
              <p className={"mb-1 lowercase " + (styles.text)}>{item.color} — {item.size}</p>
              <h1 className={styles.title}>{item.name}</h1>
            </div>
            <HeartIcon className="h-7 w-7 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
          <p className={"mt-4 " + (styles.subtitle)}>{item.price}</p>
          <h2 className={"mt-4 " + (styles.highlight)}>Descripción</h2>
          <p className={"mt-2 " + (styles.text)}>{item.description}</p>
          <hr className="border-gray-200 w-full mt-4" />

          {/* Detalles del producto */}
          <div>
            <div className="flex flex-row justify-between items-center mt-4">
              <h2 className={styles.highlight}>Detalles del producto</h2>
              <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" onClick={() => setShow1(!show1)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={show1 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <p className={(styles.text) + " mt-2 w-11/12 lowercase " + (show1 ? "block" : "hidden")}>composición: {item.composition} — cuidados: {item.care}</p>
          </div>
          <hr className="border-gray-200 w-full mt-4" />

          {/* Beneficios exclusivos */}
          <div>
            <div className="flex flex-row justify-between items-center mt-4">
              <h2 className={styles.highlight}>Beneficios exclusivos</h2>
              <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" onClick={() => setShow2(!show2)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="#303030" strokeWidth="" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <p className={(styles.text) + " mt-2 w-11/12 lowercase " + (show2 ? "block" : "hidden")}>Envíos, cambios y devoluciones gratis — 3, 6 y 12 cuotas sin interés — Servicio pick up</p>
          </div>
          <hr className="border-gray-200 w-full mt-4" />

          {/* Contador */}
          { isInCart ? (
            <div className="flex flex-col space-y-8 mt-6">
              <Link to='/cart' className={(styles.button) + " focus:outline-none text-white bg-gray-700 focus:ring-transparent w-48 text-center py-3"}>Finalizar compra</Link>
            </div>
          ) : (
            <ItemCount addToCart={addToCart} stock={item.stock} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
