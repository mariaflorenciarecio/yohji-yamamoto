import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

/*
const getItems = () => {
  // Esta función debe retornar la promesa que resuelva con delay
}
*/

function ItemDetailContainer() {
  // Implementar mock invocando a getItems() y utilizando el resolver then return, copiar de ItemList

  const {itemId} = useParams()

  return (
    <>
      <ItemDetail></ItemDetail>
      <h1>Nombre del producto: {itemId}</h1>
    </>
  )
}

export default ItemDetailContainer