
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css'
import { CartContext } from '../../context/cart-context';

const SuccessOrder = () => {
    const location = useLocation();

    const { orderId } = location.state || { orderId: null}
    const {cart, vaciarCarrito } = useContext(CartContext)

    return (
        <div>
            {vaciarCarrito()}
            <h2>Success Order</h2>
            <p>Order Id: {orderId}</p>
        </div>
    )
}

export default SuccessOrder