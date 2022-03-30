import { ArrowLeftIcon } from "@heroicons/react/solid";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { addOrder, db } from "../firebase/firebaseClient";
import { formatPrice } from "../helpers/formatPrice";

const Checkout = () => {

    const { cartItems, cartLenght, clearCart, getTotal } = useContext(CartContext)

    const [idCompra, setIdCompra] = useState("")
    const [showModal, setShowModal] = useState(false)

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

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
        emailConfirm: "",
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
    function orderHandler() {
        const order = {
            buyer,
            item: cartItems,
            price: getTotal(),
            date: orderDate,
        }
        addOrder(order).then(data => {
            setIdCompra(data)
        })
    }

    return (
        <div className="overflow-y-hidden">

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
                                required
                                onChange={handleSubmitChange}
                                placeholder="Nombre"
                            />
                            <input
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                id="surname"
                                type="text"
                                name="surname"
                                required
                                onChange={handleSubmitChange}
                                placeholder="Apellido"
                            />
                            <input
                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                id="telephone"
                                type="tel"
                                name="telephone"
                                required
                                onChange={handleSubmitChange}
                                placeholder="Teléfono"
                            />
                            <input
                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                id="email"
                                type="email"
                                name="email"
                                required
                                onChange={handleSubmitChange}
                                placeholder="E-mail"
                            />
                            <input
                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                id="emailConfirm"
                                type="email"
                                name="emailConfirm"
                                required
                                onChange={handleSubmitChange}
                                placeholder="Confirmar e-mail"
                            />
                        </form>

                        {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                            ? <input onClick={() => { orderHandler(); setShowModal(true) }} className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 cursor-pointer" type="submit" value="Proceder al pago" />
                            : <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-400" type="submit" value="Proceder al pago" disabled />
                        }

                        <div className="mt-4 flex justify-start items-center w-full">
                            <Link to='/cart' className="flex flex-row items-center text-base leading-4 lowercase focus:outline-none focus:text-gray-500 hover:text-gray-800 text-gray-600">
                                <ArrowLeftIcon className="h-4 w-4 mr-1" />Volver al carrito
                            </Link>
                        </div>
                    </div>

                    {/* Resumen */}
                    <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Resumen</h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            {(cartLenght() == 1)
                                ? (
                                    <div className="flex justify-between w-full items-center">
                                        <p className="text-lg leading-4 text-gray-600">Item</p>
                                        <p className="text-lg font-semibold leading-4 text-gray-600">{cartLenght()} unidad</p>
                                    </div>
                                ) : (
                                    <div className="flex justify-between w-full items-center">
                                        <p className="text-lg leading-4 text-gray-600">Items</p>
                                        <p className="text-lg font-semibold leading-4 text-gray-600">{cartLenght()} unidades</p>
                                    </div>
                                )
                            }
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Gastos de envío</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">¡Envío gratis!</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center mt-32">
                            <p className="text-xl font-semibold leading-4 text-gray-800 uppercase">Total</p>
                            <p className="text-lg font-semibold leading-4 text-gray-800">{formatPrice(getTotal())}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-800`}>
                <div id="modal" className="container mx-auto justify-center items-center px-4 md:px-10 py-20">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                        <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h1>
                        <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12">Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {idCompra}. Esperamos que hayas tenido una agradable experiencia en YOHJI YAMAMOTO. ¡Hasta la próxima!</p>
                        <Link to="/" className="mt-12 md:mt-14 w-full flex justify-center">
                            <button onClick={clearCart} className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white">
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Checkout