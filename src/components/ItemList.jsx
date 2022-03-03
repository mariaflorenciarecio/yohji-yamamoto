import { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = () => {

    const url = 'https://run.mocky.io/v3/907be23b-5c68-46c0-8178-285e21f6b1ce'

    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const response = await fetch(url)
            const items = await response.json()
            setItems(items)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems()
    }, [])


    return (
        <>
            <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                {items.map((i) => (
                    <Item key={i.id} item={i}></Item>
                ))}
            </div>
        </>
    )
}

export default ItemList