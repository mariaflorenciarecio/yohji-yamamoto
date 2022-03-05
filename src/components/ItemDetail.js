const ItemDetail = ({item: filteredItem}) => {
  
  return (
    <>
      <img src={filteredItem.imageSrc} alt={filteredItem.imageAlt} />
      <h1>{filteredItem.name}</h1>
      <p>{filteredItem.price}</p>
      <p>{filteredItem.brand}</p>
      <p>{filteredItem.category}</p>
      <p>{filteredItem.color}</p>
      <p>{filteredItem.sizes.map(s => s.size)}</p>
      <p>Descripción: {filteredItem.details.description}</p>
      <p>Composición: {filteredItem.details.composition}</p>
      <p>Cuidado: {filteredItem.details.care}</p>
      <p>Corte: {filteredItem.details.cut}</p>
      <p>Tela: {filteredItem.details.fabric}</p>
    </>
  )
}
export default ItemDetail