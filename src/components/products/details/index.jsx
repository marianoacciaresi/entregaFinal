/* eslint-disable react/prop-types */
import './styles.css'

const Details = ({ id, image, name, category, description, price, stock}) => {

    const onAddToCart = (id) => {
        console.log('Add to cart', id);
    }

    return (
        <div className='cardDetail'>
            <div className='cardDetailImageContainer'>
                <img className='cardDetailImage' src={image} alt={name} />
            </div>
            <div className='cardDetailContent'>
                <p className='cardDetailCategory'>{category}</p>
                <h3 className='cardDetailName'>{name}</h3>                
                <p className='cardDetailDescription'>{description}</p>
                <p className='cardDetailPrice'>USD {price}</p>
                <p className='cardDetailStock'>{stock} restante</p>
                <div className='cardDetailActions'>
                    <button onClick={() => onAddToCart(id)} className='cardButton'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Details;