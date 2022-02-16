import { Fragment, useState } from 'react'
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
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'indumentaria',
                    name: 'Indumentaria',
                    items: [
                        { name: 'Abrigos', href: '#' },
                        { name: 'Hoodies', href: '#' },
                        { name: 'Blazers', href: '#' },
                        { name: 'Pantalones', href: '#' },
                        { name: 'Camisas', href: '#' },
                        { name: 'Remeras', href: '#' },
                        { name: 'Cardigans', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'Chaquetas', href: '#' },
                        { name: 'Vestidos', href: '#' },
                        { name: 'Faldas', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'discord',
            name: 'discord Yohji Yamamoto',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'bolsos',
                    name: 'Bolsos',
                    items: [
                        { name: 'Backpack', href: '#' },
                        { name: 'Mini', href: '#' },
                        { name: 'Clutches', href: '#' },
                        { name: 'Shoulder', href: '#' },
                        { name: 'Crossbody', href: '#' },
                        { name: 'Totes', href: '#' },
                    ],
                },
            ],
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">

            {/* MENÚ PARA DISPOSITIVOS PEQUEÑOS */}
            <Transition.Root show={open} as={Fragment}>
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
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">

                            {/* Botón para cerrar el menú */}
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-black"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Cerrar menú</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Enlaces */}
                            <Tab.Group as="div" className="mt-2">

                                {/* Iniciar sesión / Crear cuenta */}
                                <div className="py-6 px-4 space-y-6">
                                    <div className="flow-root">
                                        <a href="#" className="-m-2 p-2 block font-medium text-black">
                                            Iniciar sesión / Crear cuenta
                                        </a>
                                    </div>
                                </div>

                                {/* Categorías */}
                                <div className="border-b border-black">
                                    <Tab.List className="-mb-px flex px-4 space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                                key={category.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-black border-black' : 'text-black border-transparent',
                                                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>

                                {/* Destacados / Secciones */}
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                                            
                                            {/* Destacados */}
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative text-sm">
                                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-black overflow-hidden group-hover:opacity-75">
                                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                                                        </div>
                                                        <a href={item.href} className="mt-6 block font-medium text-black">
                                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1">
                                                            Comprar
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Secciones */}
                                            {category.sections.map((section) => (
                                                <div key={section.name}>
                                                    <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-black">
                                                        {section.name}
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                        className="mt-6 flex flex-col space-y-6"
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
            </Transition.Root>

            {/* MENÚ PARA DISPOSITIVOS GRANDES */}
            <header className="relative bg-white">

                {/* Mensaje destacado */}
                <p className="bg-black h-10 flex items-center justify-center text-sm font-light text-white px-4 sm:px-6 lg:px-8 uppercase">
                    Envío gratis para compras superiores a $100.00
                </p>
                
                {/* Navbar */}
                <nav aria-label="Top" className="mx-auto">
                    <div className="bg-white">
                        <div className="grid grid-cols-3 px-6 py-3">

                            {/* Botón para abrir el menú en dispositivos pequeños*/}
                            <button
                                type="button"
                                className="rounded-md text-black lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Abrir menú</span>
                                <MenuIcon className="h-5 w-5" aria-hidden="true" />
                            </button>

                            {/* Enlaces */}
                            <Popover.Group className="hidden lg:block">
                                <div className="h-full flex space-x-8">

                                    {/* Categorías */}
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? 'border-black text-black'
                                                                    : 'border-transparent text-black',
                                                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    {/* Destacados / Secciones */}
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute top-full inset-x-0 text-sm text-black">
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                            <div className="relative bg-white">
                                                                <div className="mx-auto px-6">
                                                                    <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-6">
                                                                        
                                                                        {/* Destacados */}
                                                                        <div className="col-start-3 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.map((item) => (
                                                                                <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                                                                        <img
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="object-center object-cover"
                                                                                        />
                                                                                        <div className="flex flex-col justify-center align-center bg-black/10 text-white">
                                                                                            <a href={item.href}>
                                                                                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                                                {item.name}
                                                                                            </a>
                                                                                            <p aria-hidden="true" className="mt-1 block font-medium">
                                                                                                Shop now
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>

                                                                        {/* Secciones */}
                                                                        <div className="row-start-1 col-start-2 grid gap-y-6 gap-x-6 text-sm">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p id={`${section.name}-heading`} className="font-medium text-black text-left">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-6 grid grid-cols-4"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name} className="flex self-end">
                                                                                                <a href={item.href}>
                                                                                                    {item.name}
                                                                                                </a>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}
                                </div>
                            </Popover.Group>

                            {/* Logo */}
                            <div className="m-auto flex">
                                <a href="#">
                                    <span className="sr-only">THE SHOP Yohji Yamamoto</span>
                                    <img
                                        className="h-10 w-auto object-contain"
                                        src={logo}
                                        alt="Logo THE SHOP Yohji Yamamoto."
                                    />
                                </a>
                            </div>

                            {/* Iconos */}
                            <div className="flex items-center justify-end">

                                {/* Iniciar sesión / Crear cuenta */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
                                    <a href="#" className="text-black">
                                        <span className="sr-only">Usuario</span>
                                        <UserCircleIcon className="w-5 h-5" aria-hidden="true" />
                                    </a>  
                                </div>

                                {/* Lista de deseos */}
                                <WishlistWidget></WishlistWidget>

                                {/* Carrito */}
                                <CartWidget></CartWidget>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar