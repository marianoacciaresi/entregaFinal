/* eslint-disable react/prop-types */
import './styles.css'

const Card = ({ id, image, name, category, description, price, stock, onAddToCart, onShowDetails }) => {
    return (
        <div className='card'>
            <button className='cartButttonContainer' type='button' onClick={() => onShowDetails(id)}>
                <img className='cardImage' src={image} alt={name} />
                <div className='cardContent'>
                    <p className='cardCategory'>{category}</p>
                    <h3 className='cardName'>{name}</h3>                
                    <p className='cardDescription'>{description}</p>
                    <p className='cardPrice'>USD {price}</p>
                    <p className='cardStock'>{stock} restante</p>
                </div>
            </button>
            <div className='cardActions'>
                <button onClick={() => onAddToCart(id)} className='cardButton'>Agregar al carrito</button>
            </div>
        </div>        
    )
}

export default Card;