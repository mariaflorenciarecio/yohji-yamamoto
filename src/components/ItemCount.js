import React, { useState } from 'react'

const ItemCount = ({stock, addToCart}) => {

  const [count, setCount] = useState(1)

  const styles = {
    text: "font-regular text-sm text-gray-600 tracking-wide leading-normal",
    highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
    button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
    symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
    counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-6 p-0.5"
  }

  const addCount = () => {
    if(count < stock) {
      setCount((prev) => prev + 1)
    }
  }

  const minusCount = () => {
    if(count > 1) {
      setCount((prev) => prev - 1)
    }
  }

  return (
    <div className="mt-8">
      <div className="flex flex-row items-center space-x-4">
        {/* Contador */}
        <div className="flex flex-row">
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

        {/* Stock */}
        {/* <p className={(styles.button) + " lowercase text-gray-700 font-semibold italic"}>Últimas {stock} unidades</p> */}
      </div>

      {/* Agregar al carrito */}
      <button className={(styles.button) + " border border-gray-400 focus:outline-none bg-gray-700 text-white focus:ring-transparent p-3 mt-8"} onClick={() => addToCart(count)}>Agregar a mi compra</button>
    </div>
  )
}

export default ItemCount