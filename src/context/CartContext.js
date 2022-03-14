import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {

  const [itemsCart, setItemsCart] = useState([])

  // Agregar un item al carrito

  const addItem = (item, quantity) => {
    if(isInCart(item.id)) {
      let index = itemsCart.findIndex((index) => (index.id == item.id))
      let copyCart = [...itemsCart]
      copyCart[index].quantity += quantity
      setItemsCart(copyCart)
    } else {
      const itemToAdd = {...item, quantity}
      setItemsCart([...itemsCart, itemToAdd])
    }
  }

  // Checkear si el item ya se encuentra en el carrito

  const isInCart = (id) => { 
    return itemsCart.some((item) => (item.id == id))
  }

  // Remover un item del carrito

  const removeItem = (id) => {
    setItemsCart(itemsCart.filter((item) => (item.id !== id)))
  }

  // Limpiar el carrito

  const clear = () => {
    setItemsCart([])
  }

  return (
    <CartContext.Provider 
      value={{
        addItem,
        removeItem,
        clear
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }