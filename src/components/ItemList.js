import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../firebase/firebaseClient'
import { useParams } from 'react-router-dom'
import Item from './Item'
import { Spinner } from '.'

// Lista de items
const ItemList = () => {

    // Use params
    const {categoryId} = useParams()

    // Use states para mostrar items y spinner cuando se deba
    const [items, setItems] = useState([])
    const [spinner, setSpinner] = useState(false)

    // Obtener la información de los items
    useEffect(() => {
        const getItems = async () => {
            setSpinner(true)
            const myItems = categoryId
                ? query(collection(db, "items"), where("category", "==", categoryId))
                : collection(db, "items")
            const querySnapshot = await getDocs(myItems)
            setItems(
                querySnapshot.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                })
            )
            setSpinner(false)
        }
        getItems()
    }, [categoryId])

    // Renderizar lista de items
    return (
        <>
            {/* Mientras carga toda la información de los items, mostrar un spinner */}
            <div className="mx-6">
                {spinner
                    // Spinner de carga
                    ? <Spinner />
                    : (
                        // Lista de items
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-full lg:max-w-7xl m-auto">
                            {items.map((item) => (
                                <Item key={item.id} item={item} category={categoryId}></Item>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ItemList