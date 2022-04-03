import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ItemDetail, Spinner } from "../components"
import { getItemsById } from "../firebase/firebaseClient"

// Página de detalles de item
const ItemDetailPage = () => {

    // Use params
    const { itemId } = useParams()

    // Use states
    const [item, setItems] = useState([])
    const [spinner, setSpinner] = useState(false)

    // Obtener información del item
    useEffect(() => {
        setSpinner(true)
        getItemsById(itemId).then((data) => {
            setItems(data)
            setSpinner(false)
        })
    }, [])

    // Renderizar detalles de item
    return (
        <>
            {/* Mientras carga toda la información del item, mostrar un spinner */}
            {spinner
                ? <Spinner />
                : (<ItemDetail key={item.id} item={item}></ItemDetail>)
            }
        </>
    )
}

export default ItemDetailPage