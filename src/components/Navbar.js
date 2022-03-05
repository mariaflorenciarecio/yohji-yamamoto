import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, UserCircleIcon, XIcon } from '@heroicons/react/solid'
import logo from '../assets/logo.png'
import WishlistWidget from './WishlistWidget'
import CartWidget from './CartWidget'

const navigation = {
    categories: [
        {
            id: 'yohji-yamamoto',
            name: 'Yohji Yamamoto',
            sections: [
                {
                    id: 'indumentaria',
                    name: 'Indumentaria',
                    items: [
                        { name: 'Abrigos', href: '#' },
                        { name: 'Blazers', href: '#' },
                        { name: 'Camisas', href: '#' },
                        { name: 'Cardigans', href: '#' },
                        { name: 'Chaquetas', href: '#' },
                        { name: 'Hoodies', href: '#' },
                        { name: 'Faldas', href: '#' },
                        { name: 'Jumpsuits', href: '#' },
                        { name: 'Pantalones', href: '#' },
                        { name: 'Remeras', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'Vestidos', href: '#' },
                        
                    ],
                },
            ],
        },
        {
            id: 'discord',
            name: 'discord Yohji Yamamoto',
            sections: [
                {
                    id: 'bolsos',
                    name: 'Bolsos',
                    items: [
                        { name: 'Backpack', href: '#' },
                        { name: 'Crossbody', href: '#' },
                        { name: 'Mini', href: '#' },
                        { name: 'Tote', href: '#' },
                    ],
                },
            ],
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white font-body">
            
            {/* MENÚ PARA DISPOSITIVOS PEQUEÑOS */}
            {/* <Transition.Root show={open} as={Fragment}>
                <Dialog 
                    as="div" 
                    className="fixed inset-0 flex z-40 lg:hidden" 
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"> */}

                            {/* Botón para cerrar el menú */}
                            {/* <div className="px-6 pt-6 flex bg-black">
                                <button
                                    type="button"
                                    className="-m-2 p-2 inline-flex text-white"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Cerrar menú</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div> */}

                            {/* Enlaces */}
                            {/* <Tab.Group as="div"> */}

                                {/* Iniciar sesión / Crear cuenta */}
                                {/* <div className="flow-root bg-black">
                                    <a href="#" className="pl-7 py-6 block font-light text-white">
                                        Iniciar sesión / Crear cuenta
                                    </a>
                                </div> */}

                                {/* Categorías */}
                                {/* <Tab.List className="-mb-px flex">
                                    {navigation.categories.map((category) => (
                                        <Tab
                                            key={category.name}
                                            className={({ selected }) =>
                                                classNames(
                                                    selected ? 'text-black border-black' : 'text-black border-transparent',
                                                    'flex-1 pb-6 pt-6 border-b-2 font-medium text-xs'
                                                )
                                            }
                                        >
                                            {category.name}
                                        </Tab>
                                    ))}
                                </Tab.List> */}

                                {/* Secciones */}
                                {/* <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="px-6 py-6 space-y-10">
                                            {category.sections.map((section) => (
                                                <div key={section.name}>
                                                    <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-black uppercase">
                                                        {section.name}
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                        className="grid grid-cols-2 space-y-6 items-baseline"
                                                    >
                                                        {section.items.map((item) => (
                                                            <li key={item.name} className="flow-root">
                                                                <a href={item.href} className="-m-2 p-2 block text-black">
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root> */}

            {/* MENÚ PARA DISPOSITIVOS GRANDES */}
            <header className="relative">

                {/* Mensaje destacado */}
                <p className="bg-black h-10 flex items-center justify-center text-sm font-light text-white px-4 sm:px-6 lg:px-8 uppercase">
                    Envío gratis para compras superiores a $100.00
                </p>
                
                {/* Navbar */}
                <nav aria-label="Top" className="mx-auto bg-white grid grid-cols-3 px-6 py-6">
                    {/* Botón para abrir el menú en dispositivos pequeños*/}
                    <button
                        type="button"
                        className="rounded-md text-black lg:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <span className="sr-only">Abrir menú</span>
                        <MenuIcon className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <div className="flex flex-row gap-6 items-end">
                        <span><Link to='/category/indumentaria'>Indumentaria</Link></span>
                        <span><Link to='/category/bolsos'>Bolsos</Link></span>
                    </div>
                    {/* Container de submenú */}
                    {/* <Popover.Group className="hidden lg:block z-10">
                        <div className="h-full flex space-x-8">
                            {navigation.categories.map((category) => (
                                <Popover key={category.name} className="flex">
                                    {({ open }) => (
                                        <> */}
                                            {/* Botón de categoría para abrir submenú en dispositivos grandes */}
                                            {/* <Link to="/category/bolsos">
                                            <Popover.Button
                                                className={classNames(
                                                    open
                                                        ? 'border-black text-black'
                                                        : 'border-transparent text-black',
                                                    'relative flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 mb-px pt-px'
                                                )}
                                            >
                                                {category.name}
                                            </Popover.Button>
                                            </Link>
                                            
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            > */}
                                                {/* Submenú con sección e items */}
                                                {/* <Popover.Panel className="absolute top-full inset-x-0 text-sm text-black">
                                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                                    <div className="relative bg-white">
                                                        {category.sections.map((section) => (
                                                            <div key={section.name} className="flex flex-col px-6">
                                                                <p id={`${section.name}-heading`} className="font-medium self-center uppercase">
                                                                    {section.name}
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby={`${section.name}-heading`}
                                                                    className="flex flex-row justify-center mb-6 mt-4"
                                                                >
                                                                    {section.items.map((item) => (
                                                                        <li key={item.name} className="mx-3">
                                                                            <a href={item.href}>
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            ))}
                        </div>
                    </Popover.Group> */}

                    {/* Logo */}
                    <Link to='/' className="m-auto">
                        <img
                            className="aspect-auto h-10 object-contain"
                            src={logo}
                            alt="Logo THE SHOP Yohji Yamamoto."
                        />
                    </Link>

                    {/* Iconos */}
                    <div className="flex flex-row items-center justify-end">

                        {/* Iniciar sesión / Crear cuenta */}
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
                            <a href="#">
                                <UserCircleIcon className="w-5 h-5" aria-hidden="true" />
                            </a>  
                        </div>

                        {/* Lista de deseos */}
                        <WishlistWidget></WishlistWidget>

                        {/* Carrito */}
                        <CartWidget></CartWidget>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar