import { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = () => {

    const url = 'https://run.mocky.io/v3/7d0e661d-7fbe-41cf-8105-bc8b9f4374d1'

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
            <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((i) => (
                    <Item key={i.id} item={i}></Item>
                ))}
            </div>
        </>
    )
}

export default ItemList