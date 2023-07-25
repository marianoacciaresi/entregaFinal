import { useContext } from 'react'
import './styles.css'
import { CartContext } from '../../context/cart-context'
import { useNavigate } from 'react-router-dom';
import { firebaseServices } from '../../services/firebase';

function Cart() {

    const navigate = useNavigate();

    const {cart, onAddToCart, onRemoveItem, onDecreaseItem, total, getTotalItemQuantity } = useContext(CartContext)

    const onHandlerCreateCart = async () => {
        const newCart = {
            buyer: {
                id: 1,
            },
            items: cart,
            createdAt: new Date(),
            total: total,
            status: 'pending',
        }

        const cartId = await firebaseServices.createCart(newCart)

        return cartId
    }

    const onHandlerCheckout = async () => {
        const cartId = await onHandlerCreateCart()
        navigate('/entregaFinal/checkout', { state: { cartId: cartId.id } })
    }
 

    return (
        <div>
            <div className='cartContainerCart'>
                <h2>Carrito de Compras</h2>
                {cart.length === 0 && <h3>No ha seleccionado productos a comprar</h3>}
                {
                    cart?.length > 0 && cart.map((product) => (
                        <div key={product.id} className='cartItem'>
                            <div className='cardImageContainerCart'>
                                <img className='cardImageCart' src={product.image} alt={product.name} />
                            </div>
                            <div className='cartContentContainer'>
                                <p className='cartProductName'>{product.name}</p>
                                <p className='cartPrice'>USD {product.price}</p>
                                <p className='cartQuantity'>Cantidad: {product.quantity}</p>
                                <p className='cartStock'>{product.stock} restante</p>
                                <div className='cartActions'>
                                    <div className='rowButton'>
                                        <button onClick={() => onAddToCart(product.id)} className='cartButttonAdd'>+</button>
                                        <button onClick={() => onDecreaseItem(product.id)} className='cartButttonDecrease'>-</button>
                                    </div>
                                    <button onClick={() => onRemoveItem(product.id)} className='cartButttonRemove'>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    cart?.length > 0 && (
                        <div className='cartDetailActions'>
                            <p className='cartTotal'>Total: USD {total}</p>
                            <p className='cartItemQuantity'>Cantidad de Items: {getTotalItemQuantity()}</p>
                            <button onClick={onHandlerCheckout} className='cartButttonCheckout'>Finalizar compra</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart