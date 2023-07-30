import { useNavigate, useParams } from 'react-router-dom';
import Details from '../../components/products/details'
import { API_URLS } from '../../constants';
import { useFetch } from '../../hooks/useFetch';
import './styles.css'
import Loader from '../../components/loader';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

function ProductDetail() {
    const {productId} = useParams();
    const navigate = useNavigate();
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`
    const { onAddToCart } = useContext(CartContext)

    const { data, loading, error  } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config);
    const history = window.history;

    return (
        <>
            <div className='headerDetailContainer'>
                {loading && <Loader />}
                {history.length > 1 ? (<button onClick={() => navigate(-1)} className='backButton'> &#8592; Volver</button>) : null}
                <h2 className='headerTitleCard'>Detalles del Producto</h2>
            </div>
            
            <Details {...data} onAddToCart={onAddToCart} />
        </>
    )
}

export default ProductDetail