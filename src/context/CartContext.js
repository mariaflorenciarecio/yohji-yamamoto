import { createContext, useState } from 'react'

// Contexto del carrito
const CartContext = createContext()

// Provider del carrito
const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    // Agregar un item al carrito
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let index = cartItems.findIndex((index) => (index.id == item.id))
            let copyCart = [...cartItems]
            copyCart[index].quantity += quantity
            setCartItems(copyCart)
        } else {
            const itemToAdd = { ...item, quantity }
            setCartItems([...cartItems, itemToAdd])
        }
    }

    // Checkear si el item ya se encuentra en el carrito
    const isInCart = (id) => {
        return cartItems.some((item) => (item.id == id))
    }

    // Remover un item del carrito
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => (item.id !== id)))
    }

    // Limpiar el carrito
    const clearCart = () => {
        setCartItems([])
    }

    // Obtener número total de items
    const cartLenght = () => {
        let quantity = 0
        cartItems.forEach((item) => {
            quantity = quantity + item.quantity
        })
        return quantity
    }

    // Obtener el subtotal
    const getSubtotal = (price, quantity) => {
        let subtotal = 0
        subtotal = subtotal + (price * quantity)
        return Number(subtotal)
    }

    // Obtener el total
    const getTotal = () => {
        let total = 0
        cartItems.forEach((item) => {
            total = total + (item.quantity * item.price)
        })
        return Number(total)
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItem,
                removeItem,
                clearCart,
                cartLenght,
                getSubtotal,
                getTotal
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }