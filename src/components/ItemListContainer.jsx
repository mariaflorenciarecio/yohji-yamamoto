// import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/solid'
// import logoYohjiYamamoto from '../assets/yohji-yamamoto.png'


// const ItemListContainer = () => {

//     return (
// <div className="bg-white">
//     <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

//         <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {products.map((product) => (
//                 <div key={product.id} className="group relative">
//                     <div className="w-full min-h-80 bg-gray-200 aspect-w-5 aspect-h-7 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
//                         <img
//                             src={product.imageSrc.imgA}
//                             alt={product.imageAlt}
//                             className="w-full h-full object-center object-cover lg:w-full lg:h-full"
//                         />
//                     </div>
//                     <div className="mt-4 flex justify-between">
//                         <div>
//                             <h3 className="text-sm text-gray-700">
//                                 <a href={product.href}>
//                                     <span aria-hidden="true" className="absolute inset-0" />
//                                     {product.name}
//                                 </a>
//                             </h3>
//                             <p className="mt-1 text-sm text-gray-500">{product.price}</p>
//                         </div>
//                         <div className="flex flex-row">
//                             <HeartIcon
//                                 className="h-5 w-5"
//                                 aria-hidden="true"
//                             />
//                             <ShoppingBagIcon
//                                 className="h-5 w-5 ml-1"
//                                 aria-hidden="true"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// </div>
//     )
// }
// 
// export default ItemListContainer

import ItemList from "./ItemList";

function ItemListContainer() {
        return (
                <>
                        <ItemList></ItemList>
                </>
        )
}

export default ItemListContainer