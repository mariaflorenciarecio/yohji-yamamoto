import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ItemDetail } from "../components"
import { getItemsById } from "../firebase/firebaseClient"

const ItemDetailPage = () => {

  const {itemId} = useParams()

  const [item, setItems] = useState([])

  useEffect(() => {

      getItemsById(itemId).then((data) => {
          setItems(data)
      })

  }, [])

  return (
      <>
        <ItemDetail key={item.id} item={item}></ItemDetail>
      </>
  )
}

export default ItemDetailPage