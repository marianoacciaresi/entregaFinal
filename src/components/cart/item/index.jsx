import './styles.css'

const CartItem = ({onAddToCart,onDecreaseItem, onRemoveItem, buttonEliminar, id, image, name, price, quantity, stock }) => {
    return(
        <div key={id} className='cartItem'>
            <div className='cardImageContainerCart'>
                <img className='cardImageCart' src={image} alt={name} />
            </div>
            <div className='cartContentContainer'>
                <p className='cartProductName'>{name}</p>
                <p className='cartPrice'>USD {price}</p>
                <p className='cartQuantity'>Cantidad: {quantity}</p>
                <p className='cartStock'>{stock} restante</p>
                <div className='cartActions'>
                    <div className='rowButton'>
                        <button onClick={() => onAddToCart(id)} className='cartButttonAdd'>+</button>
                        <button onClick={() => onDecreaseItem(id)} className='cartButttonDecrease'>-</button>
                    </div>
                    { buttonEliminar === true ? ( <button onClick={() => onRemoveItem(id)} className='cartButttonRemove'>Eliminar</button>) : null}
                    
                    {/* <button onClick={() => onRemoveItem(id)} className='cartButttonRemove'>Eliminar</button> */}
                </div>
            </div>
        </div>
)
}

export default CartItem
