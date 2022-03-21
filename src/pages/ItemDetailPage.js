import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ItemDetail } from "../components"

const ItemDetailPage = () => {

  const {itemId} = useParams()

    const url = 'https://run.mocky.io/v3/1f43f869-e0fd-446e-a4fe-b54ccb9c7191'

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