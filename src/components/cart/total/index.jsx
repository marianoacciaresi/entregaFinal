import './styles.css'

const Total = ({onHandlerCheckout, total, totalItemQuantity, isCart  }) => {
    return(
        <div className='cartDetailActions'>
            <p className='cartTotal'>Total: USD {total}</p>
            <p className='cartItemQuantity'>Cantidad de Items: {totalItemQuantity}</p>
            {isCart ? <button onClick={onHandlerCheckout} className='cartButttonCheckout'>Finalizar compra</button> : null}
        </div>
    )
}

export default Total