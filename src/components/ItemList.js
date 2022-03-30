import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../firebase/firebaseClient'
import { useParams } from 'react-router-dom'
import Item from './Item'

const ItemList = () => {

    const {categoryId} = useParams()

    const [items, setItems] = useState([])
    const [spinner, setSpinner] = useState(false)

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

    return (
        <div className="mx-6">
            {spinner
                ? (<p>Cargando...</p>)
                : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-full lg:max-w-7xl m-auto">
                        {items.map((item) => (
                            <Item key={item.id} item={item} category={categoryId}></Item>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default ItemList