/* eslint-disable react/jsx-key */
import './styles.css'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { API_URLS } from '../../constants/index';
import Card from '../../components/products/card';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader';

function Home() {

    const navigate = useNavigate();

    const [isFiltered, setIsFiltered] = useState(false);
    const [productFiltered, setProductFiltered] = useState([]);

    const { data: products, loading: loadingProducts, error: errorProducts  } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);
    const { data: categories, loading: loadingCategories, error: errorCategories  } = useFetch(API_URLS.CATEGORIES.url, API_URLS.CATEGORIES.config);
    

    const onShowDetails = (id) => {
        navigate(`products/${id}`)
    }

    const onFilter = (name) => {
        setIsFiltered(true);
        const productsByCategory = products.filter((product) => product.category === name);
        setProductFiltered(productsByCategory);
    }

    return (
        <div >
            <div className='categoriesContainer'>

                    {loadingCategories && <Loader />}
                                        
                        <button onClick={() => setIsFiltered(false)} type='button' className='categoryContainer'>
                            <p className='categoryName'>Todo</p>
                        </button>
                    
                    {
                        categories.map((category) => (
                            <button key={category.id} onClick={() => onFilter(category.name)} type='button' className='categoryContainer'>
                                <p className='categoryName'>{category.name}</p>
                            </button>
                        )) 
                    }
                    
            </div>

            <div>

                {loadingProducts && <Loader />}

                <h2 className='headerTitleCard'>Productos</h2>
                <div className='cardContainer'>
                
                {

                isFiltered ? (
                productFiltered.map((product) => (
                    <Card key={product.id} {...product} onShowDetails={onShowDetails} />
                ))
                ) : (

                    products.map((product) => (
                        <Card key={product.id} {...product} onShowDetails={onShowDetails} />
                    ))
                
                )  
                } 
                </div>    
            </div>
        </div>
        )
}

export default Home
