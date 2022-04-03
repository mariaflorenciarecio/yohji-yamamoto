import { useState } from "react"
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { MenuIcon } from "@heroicons/react/solid"
import CartWidget from "./CartWidget"

// Navbar
const Navbar = () => {

    // Estilos del navbar
    const styles = {
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
        icon: "w-5 h-5 text-gray-600"
    }

    // Use states que permiten desplegar el menu (en mobile) y las categorías 
    const [showMenu, setShowMenu] = useState(false)
    const [showLargeCat, setShowLargeCat] = useState(false)
    const [showSmallCat, setShowSmallCat] = useState(false)

    // Renderizar navbar
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto relative">

                    {/* DISPOSITIVOS GRANDES */}
                    <div className="pt-4 pb-6 mx-6">

                        {/* Parte superior */}
                        <div className="flex items-center justify-between border-b border-gray-200 py-4 px-4">

                            {/* Logo */}
                            <Link to='/' className="block cursor-pointer w-60">
                                <img src={logo} alt="Logo de la marca Yohji Yamamoto" className="fill-stroke text-gray-900 h-6" />
                            </Link>
                            
                            {/* Enlaces primarios */}
                            <div className="hidden lg:block">
                                <ul className="flex items-center space-x-7">
                                    <li>
                                        <NavLink to='/' className={({isActive}) => isActive ? ((styles.highlight) + " font-bold") : ((styles.highlight) + " hover:font-bold")}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button className={(styles.highlight) + " italic hover:font-bold"} onClick={() => setShowLargeCat(!showLargeCat)}>
                                            Fall winter 22
                                        </button>
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

                        {/* Enlaces categorías */}
                        <ul className={(styles.button) + " flex justify-center py-4 space-x-3 border-b border-gray-200 font-normal " + (showLargeCat ? "block" : "hidden")} onMouseLeave={() => setShowLargeCat(!showLargeCat)}>
                            <li><NavLink to='/category/abrigos' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Abrigos</NavLink></li>
                            <li><NavLink to='/category/blazers' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Blazers</NavLink></li>
                            <li><NavLink to='/category/camisas' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Camisas</NavLink></li>
                            <li><NavLink to='/category/chaquetas' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Chaquetas</NavLink></li>
                            <li><NavLink to='/category/faldas' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Faldas</NavLink></li>
                            <li><NavLink to='/category/jumpsuits' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Jumpsuits</NavLink></li>
                            <li><NavLink to='/category/pantalones' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Pantalones</NavLink></li>
                            <li><NavLink to='/category/remeras' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Remeras</NavLink></li>
                            <li><NavLink to='/category/sweaters' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Sweaters</NavLink></li>
                            <li><NavLink to='/category/vestidos' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Vestidos</NavLink></li>
                        </ul>
                    </div>

                    {/* DISPOSITIVOS PEQUEÑOS */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} lg:hidden absolute inset-0 z-10 flex-col w-full mt-14`}>

                        {/* Enlaces primarios */}
                        <div className="px-6 bg-white">
                            <ul className="flex flex-col space-y-4 pb-6">
                                <li className="border-b border-t border-gray-200 pb-4 px-1 pt-4 mt-4 flex items-center justify-between">
                                    <NavLink to='/' className={({isActive}) => isActive ? ((styles.highlight) + " font-bold") : ((styles.highlight) + " hover:font-bold")}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="border-b border-gray-200 pb-4 px-1 flex flex-col">
                                    <div className="flex flex-row items-center justify-between">
                                        <button className={(styles.highlight) + " italic hover:font-bold"}>
                                            Fall winter 22
                                        </button>
                                        <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" onClick={() => setShowSmallCat(!showSmallCat)}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={showSmallCat ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4.16602 10H15.8327" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Enlaces categorías */}
                                    <ul className={(styles.button) + " grid grid-cols-3 md:grid-cols-5 items-end mt-2 space-y-2 font-normal " + (showSmallCat ? "block" : "hidden")}>
                                        <li><NavLink to='/category/abrigos' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Abrigos</NavLink></li>
                                        <li><NavLink to='/category/blazers' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Blazers</NavLink></li>
                                        <li><NavLink to='/category/camisas' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Camisas</NavLink></li>
                                        <li><NavLink to='/category/chaquetas' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Chaquetas</NavLink></li>
                                        <li><NavLink to='/category/faldas' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Faldas</NavLink></li>
                                        <li><NavLink to='/category/jumpsuits' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Jumpsuits</NavLink></li>
                                        <li><NavLink to='/category/pantalones' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Pantalones</NavLink></li>
                                        <li><NavLink to='/category/remeras' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Remeras</NavLink></li>
                                        <li><NavLink to='/category/sweaters' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Sweaters</NavLink></li>
                                        <li><NavLink to='/category/vestidos' className={({isActive}) => isActive ? "font-bold" : " hover:font-bold"}>Vestidos</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar