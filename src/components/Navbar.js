import React, { useState } from "react"
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { MenuIcon } from "@heroicons/react/solid"
import CartWidget from "./CartWidget"

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const styles = {
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
        icon: "w-5 h-5 text-gray-600"
    }

    return (
        <div className="bg-white">
            <div className="mx-auto relative">

                {/* Dispositivos grandes */}
                <div className="pt-4 pb-6 mx-6">

                    {/* Parte superior */}
                    <div className="flex items-center justify-between border-b border-gray-200 py-4 px-4">

                        {/* Logo */}
                        <Link to='/' className="block cursor-pointer w-60">
                            <img src={logo} alt="Logo de la marca Yohji Yamamoto" className="fill-stroke text-gray-900 h-6" />
                        </Link>
                        
                        {/* Enlaces primarios */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center space-x-6">
                                <li>
                                    <Link to='/' className={(styles.highlight) + " focus:outline-none focus:ring-2 focus:ring-white"}>
                                        Novedades
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/collection" className={(styles.highlight) + " focus:outline-none focus:ring-2 focus:ring-white"} onMouseEnter={() => setShow1(!show1)}>
                                        Colección
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className={(styles.highlight) + " focus:outline-none focus:ring-2 focus:ring-white"}>
                                        Esenciales
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Iconos */}
                        <div className="flex ml-auto lg:ml-0 items-center justify-end space-x-5 lg:w-60">

                            {/* Carrito */}
                            <CartWidget></CartWidget>

                            {/* Toggle */}
                            <button aria-label="open close menu" onClick={() => setShowMenu(!showMenu)} className="lg:hidden focus:outline-none focus:ring-2 focus:ring-white">
                                <MenuIcon className={styles.icon} />
                            </button>
                        </div>
                    </div>

                    {/* Enlaces secundarios */}
                    <ul className={(styles.button) + " flex justify-center py-4 space-x-3 border-b border-gray-200 font-normal " + (show1 ? "block" : "hidden")} onMouseLeave={() => setShow1(!show1)}>
                        <li><Link to='/category/abrigos'>Abrigos</Link></li>
                        <li><Link to='/category/blazers'>Blazers</Link></li>
                        <li><Link to='/category/camisas'>Camisas</Link></li>
                        <li><Link to='/category/chaquetas'>Chaquetas</Link></li>
                        <li><Link to='/category/faldas'>Faldas</Link></li>
                        <li><Link to='/category/jumpsuits'>Jumpsuits</Link></li>
                        <li><Link to='/category/pantalones'>Pantalones</Link></li>
                        <li><Link to='/category/remeras'>Remeras</Link></li>
                        <li><Link to='/category/sweaters'>Sweaters</Link></li>
                        <li><Link to='/category/vestidos'>Vestidos</Link></li>
                    </ul>
                </div>

                {/* Dispositivos pequeños */}
                <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} lg:hidden absolute inset-0 z-10 flex-col w-full mt-14`}>

                    {/* Enlaces primarios */}
                    <div className="px-6 bg-white">
                        <ul className="flex flex-col space-y-4 pb-6">
                            <li className="border-b border-t border-gray-200 pb-4 px-1 pt-4 mt-4 flex items-center justify-between">
                                <Link to='/' className={(styles.highlight) + "focus:outline-none focus:ring-2 focus:ring-white border-gray-200 uppercase"}>
                                    Novedades
                                </Link>
                            </li>
                            <li className="border-b border-gray-200 pb-4 px-1 flex flex-col">
                                <div className="flex flex-row items-center justify-between">
                                    <Link to='/collection' className={(styles.highlight) + "focus:outline-none focus:ring-2 focus:ring-white border-gray-200 uppercase"}>
                                        Colección
                                    </Link>
                                    <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" onClick={() => setShow2(!show2)}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.16602 10H15.8327" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Enlaces secundarios */}
                                <ul className={(styles.button) + " grid grid-cols-3 md:grid-cols-5 items-end mt-2 space-y-2 font-normal " + (show2 ? "block" : "hidden")}>
                                    <li><Link to='/category/abrigos'>Abrigos</Link></li>
                                    <li><Link to='/category/blazers'>Blazers</Link></li>
                                    <li><Link to='/category/camisas'>Camisas</Link></li>
                                    <li><Link to='/category/chaquetas'>Chaquetas</Link></li>
                                    <li><Link to='/category/faldas'>Faldas</Link></li>
                                    <li><Link to='/category/jumpsuits'>Jumpsuits</Link></li>
                                    <li><Link to='/category/pantalones'>Pantalones</Link></li>
                                    <li><Link to='/category/remeras'>Remeras</Link></li>
                                    <li><Link to='/category/sweaters'>Sweaters</Link></li>
                                    <li><Link to='/category/vestidos'>Vestidos</Link></li>
                                </ul>
                            </li>
                            <li className="border-b border-gray-200 pb-4 px-1 flex items-center justify-between">
                                <Link to='/' className={(styles.highlight) + "focus:outline-none focus:ring-2 focus:ring-white border-gray-200 uppercase"}>
                                    Esenciales
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar