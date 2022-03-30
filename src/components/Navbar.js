import React, { useState } from "react"
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { MenuIcon } from "@heroicons/react/solid"
import CartWidget from "./CartWidget"

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    const [showLargeCat, setShowLargeCat] = useState(false)
    const [showSmallCat, setShowSmallCat] = useState(false)

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
                            <ul className="flex items-center space-x-7">
                                <li>
                                    <NavLink to='/' className={(styles.highlight) + " focus:outline-none focus:ring-2 focus:ring-white active:font-bold"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <button className={(styles.highlight) + " focus:outline-none focus:ring-2 focus:ring-white active:font-bold"} onClick={() => setShowLargeCat(!showLargeCat)}>
                                        Fall winter 22
                                    </button>
                                </li>
                                <li>
                                    <NavLink to='/about' className={(styles.highlight) + " focus:outline-none focus:ring-2 focus:ring-white active:font-bold"}>
                                        About
                                    </NavLink>
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

                    {/* const [categories, setCategories] = useState([]) */}

                    {/* 
                    const filterItems = (category) => {

                    }
                    */}

                    {/* 
                    {categories.map((category) => {
                        <li><Link to={`/category/${item.category}`}>{item.category}</Link></li>
                    })

                    }
                    */}

                    {/* Enlaces secundarios */}
                    <ul className={(styles.button) + " flex justify-center py-4 space-x-3 border-b border-gray-200 font-normal " + (showLargeCat ? "block" : "hidden")} onMouseLeave={() => setShowLargeCat(!showLargeCat)}>
                        <li><NavLink to='/category/abrigos' className="active:font-bold">Abrigos</NavLink></li>
                        <li><NavLink to='/category/blazers' className="active:font-bold">Blazers</NavLink></li>
                        <li><NavLink to='/category/camisas' className="active:font-bold">Camisas</NavLink></li>
                        <li><NavLink to='/category/chaquetas' className="active:font-bold">Chaquetas</NavLink></li>
                        <li><NavLink to='/category/faldas' className="active:font-bold">Faldas</NavLink></li>
                        <li><NavLink to='/category/jumpsuits' className="active:font-bold">Jumpsuits</NavLink></li>
                        <li><NavLink to='/category/pantalones' className="active:font-bold">Pantalones</NavLink></li>
                        <li><NavLink to='/category/remeras' className="active:font-bold">Remeras</NavLink></li>
                        <li><NavLink to='/category/sweaters' className="active:font-bold">Sweaters</NavLink></li>
                        <li><NavLink to='/category/vestidos' className="active:font-bold">Vestidos</NavLink></li>
                    </ul>
                </div>

                {/* Dispositivos pequeños */}
                <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} lg:hidden absolute inset-0 z-10 flex-col w-full mt-14`}>

                    {/* Enlaces primarios */}
                    <div className="px-6 bg-white">
                        <ul className="flex flex-col space-y-4 pb-6">
                            <li className="border-b border-t border-gray-200 pb-4 px-1 pt-4 mt-4 flex items-center justify-between">
                                <NavLink to='/' className={(styles.highlight) + "focus:outline-none focus:ring-2 focus:ring-white border-gray-200 uppercase active:font-bold"}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="border-b border-gray-200 pb-4 px-1 flex flex-col">
                                <div className="flex flex-row items-center justify-between">
                                    <NavLink to='/collection' className={(styles.highlight) + "focus:outline-none focus:ring-2 focus:ring-white border-gray-200 uppercase active:font-bold"}>
                                        Fall winter 22
                                    </NavLink>
                                    <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" onClick={() => setShowSmallCat(!showSmallCat)}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={showSmallCat ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.16602 10H15.8327" stroke="#303030" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Enlaces secundarios */}
                                <ul className={(styles.button) + " grid grid-cols-3 md:grid-cols-5 items-end mt-2 space-y-2 font-normal " + (showSmallCat ? "block" : "hidden")}>
                                    <li><NavLink to='/category/abrigos' className="active:font-bold">Abrigos</NavLink></li>
                                    <li><NavLink to='/category/blazers' className="active:font-bold">Blazers</NavLink></li>
                                    <li><NavLink to='/category/camisas' className="active:font-bold">Camisas</NavLink></li>
                                    <li><NavLink to='/category/chaquetas' className="active:font-bold">Chaquetas</NavLink></li>
                                    <li><NavLink to='/category/faldas' className="active:font-bold">Faldas</NavLink></li>
                                    <li><NavLink to='/category/jumpsuits' className="active:font-bold">Jumpsuits</NavLink></li>
                                    <li><NavLink to='/category/pantalones' className="active:font-bold">Pantalones</NavLink></li>
                                    <li><NavLink to='/category/remeras' className="active:font-bold">Remeras</NavLink></li>
                                    <li><NavLink to='/category/sweaters' className="active:font-bold">Sweaters</NavLink></li>
                                    <li><NavLink to='/category/vestidos' className="active:font-bold">Vestidos</NavLink></li>
                                </ul>
                            </li>
                            <li className="border-b border-gray-200 pb-4 px-1 flex items-center justify-between">
                                <NavLink to='/about' className={(styles.highlight) + "focus:outline-none focus:ring-2 focus:ring-white border-gray-200 uppercase active:font-bold"}>
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar