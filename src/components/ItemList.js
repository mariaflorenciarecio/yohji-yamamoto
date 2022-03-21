import { useEffect, useState } from 'react'
import Item from './Item'

const url = 'https://run.mocky.io/v3/1f43f869-e0fd-446e-a4fe-b54ccb9c7191'

const ItemList = ({category: categoryId}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [categoryId])

    const getItems = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            if (categoryId) {
                setItems(data.filter(items => items.category.toLowerCase() == categoryId))
            } else {
                setItems(data)
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="mx-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-full lg:max-w-7xl m-auto">
                    {items.map((item) => (
                        <Item key={item.id} item={item}></Item>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemList