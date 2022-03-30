import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ItemDetail } from "../components"
import { getItemsById } from "../firebase/firebaseClient"

const ItemDetailPage = () => {
  const {itemId} = useParams()
  const [item, setItems] = useState([])
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    setSpinner(true)
    getItemsById(itemId).then((data) => {
      setItems(data)
      setSpinner(false)
    })
  }, [])

  return (
    <>
      {spinner
        ? (<p>Cargando...</p>)
        : (<ItemDetail key={item.id} item={item}></ItemDetail>)
      }
    </>
  )
}

export default ItemDetailPage