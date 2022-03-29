import { ArrowLeftIcon } from "@heroicons/react/solid";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { addOrder, db } from "../firebase/firebaseClient";

const Checkout = () => {

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const {cartItems, cartLenght, clearCart, getSubtotal, getTotal} = useContext(CartContext)
    // const [open, setOpen] = useState(false)
    const [idCompra, setIdCompra] = useState("")
    
    // const handleOpen = () => {
    //     setOpen(true);
    // }

    // const handleClose = () => {
    //     setOpen(false);
    // }

    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
    })

    const orderDate = new Date().toLocaleDateString()

    // const newOrder = {
    //     buyer,
    //     product: cartItems,
    //     price: getTotal(),
    //     date: orderDate,
    // }

    // const handleSubmit = async (e) => {
    //     try {
    //         if (buyer.name && buyer.surname && buyer.phone && emailRegex.test(buyer.email)) {
    //             e.preventDefault()

    //             cartItems.forEach((item) => {
    //                 const itemRef = doc(db, "items", item.id)
    //                 updateDoc(itemRef, { stock: item.stock - item.quantity })
    //                 const orders = collection(db, "orders")
    //                 addDoc(orders, newOrder).then(({ id }) => {
    //                     setIdCompra(id)
    //                 })
    //                 handleOpen()
    //             })
    //         }
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    // user viene de un formulario, products y total del contexto carrito
    const orderHandler = () => {
        const order = {
            buyer,
            item: cartItems,
            price: getTotal(),
            date: orderDate,
        }
        addOrder(order).then( data => {
            setIdCompra(data)
        })
    }

    return (
        <div className="overflow-y-hidden">

            <div 
                // open={open} 
                // onClose={handleClose}
            >
                <span>¡Muchas gracias por tu compra {buyer.name}! Te enviamos un mail a {buyer.email} con tu orden de compra ID {idCompra}. ¡Esperamos verte pronto!</span>
                <Link to="/">
                    <button onClick={clearCart}>Volver al inicio</button>
                </Link>
            </div>

            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        
                        <div className>
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Checkout</p>
                        </div>
                        
                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">Detalles de facturación</p>
                        </div>
                        
                        <form className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <input 
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                                id="name" 
                                type="text" 
                                name="name" 
                                required="required" 
                                onChange={handleSubmitChange} 
                                placeholder="Nombre" 
                            />
                            <input 
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                                type="text" 
                                name="surname" 
                                required="required" 
                                onChange={handleSubmitChange}
                                placeholder="Apellido" 
                            />
                            <input 
                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                                type="tel" 
                                name="telephone" 
                                required="required" 
                                onChange={handleSubmitChange}
                                placeholder="Número de teléfono" 
                            />
                            <input 
                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                                type="email" 
                                name="email" 
                                required="required" 
                                onChange={handleSubmitChange}
                                placeholder="Email" 
                            />
                        </form>
                        
                        {buyer.name && buyer.surname && buyer.telephone && buyer.email && emailRegex.test(buyer.email)
                            ? <input onClick={orderHandler} className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 cursor-pointer" type="submit" value="Proceder al pago" />
                            : <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-400" type="submit" value="Proceder al pago" disabled />
                        }

                        <div className="mt-4 flex justify-start items-center w-full">
                            <Link to='/cart' className="flex flex-row items-center text-base leading-4 lowercase focus:outline-none focus:text-gray-500 hover:text-gray-800 text-gray-600">
                                <ArrowLeftIcon className="h-4 w-4 mr-1" />Volver al carrito
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout