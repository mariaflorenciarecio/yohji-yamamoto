import { HeartIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const ItemDetail = ({ item: filteredItem }) => {

  const [count, setCount] = useState(1);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const styles = {
    title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
    subtitle: "font-medium text-base text-gray-600 tracking-wider leading-normal uppercase",
    text: "font-light text-sm text-gray-600 tracking-wide leading-normal",
    highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
    button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
    symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
    counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
  }

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 selection:bg-gray-600 selection:text-white">

      {/* Breadcrums */}
      <p className={"my-8 lowercase " + (styles.text)}>Home — {filteredItem.brand} — {filteredItem.category} — {filteredItem.product} — <strong className="text-gray-800">{filteredItem.name}</strong></p>

      {/* Imágenes y detalles */}
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">

        {/* Imágenes */}
        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
        <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
            <div className="bg-gray-100 flex justify-center items-center py-4">
              <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair - preview 1" />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4">
              <img src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png" alt="Wooden chair - preview 2" />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4">
              <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair- preview 3" />
            </div>
          </div>
          <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
            <img src={filteredItem.imageSrc} alt={filteredItem.imageAlt} />
          </div>
        </div>

        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">

          {/* Información */}
          <div className="flex flex-row justify-between items-end">
            <div>
              <p className={"mb-1 lowercase " + (styles.text)}>SKU {filteredItem.id} — {filteredItem.color}</p>
              <h1 className={styles.title}>{filteredItem.name}</h1>
            </div>
            <HeartIcon className="h-7 w-7 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
          <p className={"mt-4 " + (styles.subtitle)}>{filteredItem.price}</p>
          <h2 className={"mt-4 " + (styles.highlight)}>Descripción</h2>
          <p className={"mt-2 " + (styles.text)}>{filteredItem.details.description}</p>
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
              <p className={(styles.text) + " mt-2 w-11/12 lowercase " + (show1 ? "block" : "hidden")}>composición: {filteredItem.details.composition} — cuidados: {filteredItem.details.care}</p>
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

          <div className="mt-8">

            {/* Contador */}
            <div className="flex flex-row justify-between">
              <div className="flex">
                <span onClick={minusCount} className={"border-r-0 " + (styles.symbol)}>
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16602 10H15.8327" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <input id="counter" aria-label="input" className={styles.counter} type="text" value={count} onChange={(e) => e.target.value} />
                <span onClick={addCount} className={"border-l-0 " + (styles.symbol)}>
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4.1665V15.8332" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.16602 10H15.8327" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Agregar al carrito */}
            <button className={(styles.button) + " border border-gray-400 focus:outline-none hover:bg-gray-700 hover:text-white focus:ring-transparent w-32 py-3 mt-8"}>Comprar</button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
