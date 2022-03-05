import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ItemDetail } from "../components"

const ItemDetailPage = () => {

  const {itemId} = useParams()

    const url = 'https://run.mocky.io/v3/7d0e661d-7fbe-41cf-8105-bc8b9f4374d1'

    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setItems(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <>
          {items.filter(item => item.id == itemId).map(filteredItem => (
            <ItemDetail key={filteredItem.id} item={filteredItem}></ItemDetail>
          ))}
        </>
    )
}

export default ItemDetailPage