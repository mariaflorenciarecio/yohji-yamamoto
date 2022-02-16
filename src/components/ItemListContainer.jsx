const ItemListContainer = ({greeting}) => {

    const styles = {
        greeting: 'h-6 font-light text-indigo-500'
    }

    return (
        <>
            <div className={styles.greeting}>¡Bienvenido a mi e-commerce {greeting}!</div>
            <div>Aquí estarán los productos listados.</div>
        </>
    )
}

export default ItemListContainer