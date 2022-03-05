import { useParams } from 'react-router-dom';
import { ItemList } from '../components'

const ItemListPage = () => {

        const {categoryId} = useParams()

        return (
                <>
                        <ItemList category={categoryId}></ItemList>
                </>
        )
}
export default ItemListPage