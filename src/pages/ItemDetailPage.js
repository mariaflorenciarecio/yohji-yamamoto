import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ItemDetail } from "../components"

function ItemDetailPage() {

  const {itemId} = useParams()

  const url = 'https://run.mocky.io/v3/c9b148fd-ecac-41df-aa30-e8466ebe9f65'

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

  useEffect(() =>{
    getItems()
  }, [])

  // const singleItem = items.filter((i) => (i.id === itemId))

  return (
    <>
      <h1>Producto con ID {itemId}</h1>
      {/* {singleItem.forEach((i) => (
        <ItemDetail key={i.id} item={i}></ItemDetail>
      ))} */}
    </>
  )
}

export default ItemDetailPage