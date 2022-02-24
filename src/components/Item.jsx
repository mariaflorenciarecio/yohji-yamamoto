// Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante)
// Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos, para emular retrasos de red.

// import { useEffect } from 'react'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/solid'
// import logoYohjiYamamoto from '../assets/yohji-yamamoto.png'

// const Item = () => {

//     const nombres = ['Ana', 'Juan']

//     useEffect(() => {
//         getProducts()
//         console.log('se ejecuto el efecto');
//         return() => {
//             console.log('limpieza');
//         }
//     }, [])

//     const getProducts = () => {
//         const getProductsPromise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(nombres)
//             }, 2000)
//         })

//         getProductsPromise.then(response => {
//             console.log(response);
//         })
//     }
// esto sirve para el carrito
// const [contador, setContador] = useState(0)

// agregar if para que sume si el contador es menor al stock disponible
// const sumarHandler = () => {
//     setContador(contador + 1)
// }

// const restarHandler = () => {
//     if (contador > 0) {
//         setContador(contador - 1)
//     }
// }

// return (
//     <>
//         <div>Item</div>
//         Total {contador}
//         <br />
//         <button onClick={restarHandler}>-</button>
//         <button onClick={sumarHandler}>+</button>
//     </>
// )

//     return (
//         <div className="bg-white">
//             <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//                 <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

//                 <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//                     {products.map((product) => (
//                         
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Item

const Item = ({item}) => {
    return (
        <>
            <div key={item.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-5 aspect-h-7 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{item.price}</p>
                    </div>
                    <div className="flex flex-row">
                        <HeartIcon className="h-5 w-5" aria-hidden="true" />
                        <ShoppingBagIcon className="h-5 w-5 ml-1" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item