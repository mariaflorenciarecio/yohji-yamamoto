import { Link } from "react-router-dom"

const ItemDetail = ({item: filteredItem, item: item}) => {
  
  return (
    <>
      <img src={filteredItem.imageSrc} alt={filteredItem.imageAlt} />
      <h1>{filteredItem.name}</h1>
      <p>{filteredItem.price}</p>
      <p>{filteredItem.brand}</p>
      <Link to={`/category/${item.category.toLowerCase()}`}>{filteredItem.category}</Link>
      <p>{filteredItem.color}</p>
      <p>Descripción: {filteredItem.details.description}</p>
      <p>Composición: {filteredItem.details.composition}</p>
      <p>Cuidado: {filteredItem.details.care}</p>
      <p>Corte: {filteredItem.details.cut}</p>
      <p>Tela: {filteredItem.details.fabric}</p>
    </>
  )
}
export default ItemDetail