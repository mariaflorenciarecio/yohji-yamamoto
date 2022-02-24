import { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = () => {

    const url = 'https://run.mocky.io/v3/7b702fa5-ebed-478a-8591-d4dcec30e667'

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
                {items.map((item) => (
                    <Item key={item.id} item={item}></Item>
                ))}
            </div>
        </>
    )
}

export default ItemList