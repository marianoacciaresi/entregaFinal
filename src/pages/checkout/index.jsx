import { useContext, useEffect } from 'react'
import Input from '../../components/input'
import './styles.css'
import { useForm } from '../../hooks/useForm'
import { CartContext } from '../../context/cart-context'
import { firebaseServices } from '../../services/firebase'
import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'
import CartItem from '../../components/cart/item'
import Total from '../../components/cart/total'


const initialState = {
    name : { value: '', error: '', hasError: true, active: false, name: 'name' },
    surname : { value: '', error: '', hasError: true, active: false, name: 'surname' },
    document : { value: '', error: '', hasError: true, active: false, name: 'document' },
    email : { value: '', error: '', hasError: true, active: false, name: 'email' },
    email_repeat : { value: '', error: '', hasError: true, active: false, name: 'email_repeat' },
    phone : { value: '', error: '', hasError: true, active: false, name: 'phone' },
    address : { value: '', error: '', hasError: true, active: false, name: 'address' },
    postalCode : { value: '', error: '', hasError: true, active: false, name: 'postalCode' },
    isFormValid: false,
}

function Checkout() {
    const {cart, total, setCart, onAddToCart, onDecreaseItem, onRemoveItem, getTotalItemQuantity} = useContext(CartContext);
    const [formState, inputHandler, inputFocus, inputBlur, clearInputs] = useForm(initialState)
    const { state } = useLocation();
    const navigate = useNavigate();
    let query = useQuery();
    
    useEffect(() => {
        const cartId = query.get("cartId") 
        
        if(query.get("cartId")) {
            const getCart = async () => {
                const cart = await firebaseServices.getCartById(cartId)
                return cart
            }
            getCart()
                .then((cart) => {
                    setCart(cart.items)
                })
                .catch((error) => {
                    console.log({error})
                })
        }

    }, [query])


    const onChange = (event) => {
        const { name, value } = event.target
        inputHandler({ name, value})
    }

    const onFocus = ({ name }) => {
        inputFocus({ name })
    }

    const onBlur = ({ name }) => {
        inputBlur({ name })
    }

    const onHandlerOrder = async () => {
        const newOrder = {
            buyer: {
                name: formState.name.value,
                surname: formState.surname.value,
                document: formState.document.value,
                email: formState.email.value,
                phone: formState.phone.value,
                address: formState.address.value,
                postalCode: formState.postalCode.value,
            },
            createdAt: new Date(),
            id: 1,
            items: cart,
            payment: {
                currency: 'USD',
                method: 'CASH',
                type: 'CASH'
            },
            seller: {
                id: 1,
                name: 'Mariano',
                phone: '4972575',
                email: 'tt23@gmail.com'
            },
            shipping: {
                deliverDate: new Date() + 7,
                trackingNumber: '123456ff227aa89',
                type: 'DELIVERY'
            },
            total: total
        }

        const orderId = await firebaseServices.createOrder(newOrder)
        await firebaseServices.updateCart(state.cartId)

        return {
            orderId,
        }
        
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const { orderId } = await onHandlerOrder();
        clearInputs({ formState })
        navigate('/entregaFinal/success-order', { state: { orderId: orderId.id } })
    }

    return (
        <div className="checkoutContainer">
            <div className='checkoutDetailContainer'>
                <div className='checkoutFormContainer'>
                    <h1 className='checkoutTitle'>Datos de la compra</h1>
                    <form onSubmit={onSubmit}  className="checkoutForm">
                        <div className="checkoutFormContainer">
                            <div className="checkoutFormInputGroup">
                                <Input 
                                    placeholder='Mariano'
                                    id='name'
                                    name='name'
                                    required={true}
                                    label='Nombre'
                                    onChange={onChange}
                                    onFocus={(e) => onFocus({ e, name: 'name'})}
                                    onBlur={(e) => onBlur({ e, name: 'name'})}
                                    active={formState.name.active}
                                    error={formState.name.error}
                                    hasError={formState.name.hasError}
                                    maxLength={40}
                                />
                            </div>
                            <div className="checkoutFormInputGroup">
                                <Input 
                                    placeholder='Acciaresi'
                                    id='surname'
                                    name='surname'
                                    required={true}
                                    label='Apellido'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'surname' })}
                                    onBlur={() => onBlur({ name: 'surname'})}
                                    active={formState.surname.active}
                                    error={formState.surname.error}
                                    hasError={formState.surname.hasError}
                                    maxLength={40}
                                />
                            </div>
                            <div className="checkoutFormInputGroup">
                                <Input 
                                    placeholder='123456789'
                                    id='document'
                                    name='document'
                                    required={true}
                                    label='Documento de identidad'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'document' })}
                                    onBlur={() => onBlur({ name: 'document'})}
                                    active={formState.document.active}
                                    error={formState.document.error}
                                    hasError={formState.document.hasError}
                                    maxLength={15}
                                />
                            </div>
                            <div className="checkoutFormInputGroup">
                                <Input 
                                    placeholder='maccia@gmail.com'
                                    id='email'
                                    name='email'
                                    required={true}
                                    label='Email'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'email' })}
                                    onBlur={() => onBlur({ name: 'email'})}
                                    active={formState.email.active}
                                    error={formState.email.error}
                                    hasError={formState.email.hasError}
                                    maxLength={40}
                                />
                            </div>

                            <div className="checkoutFormInputGroup">
                                <Input 
                                    placeholder='repetir email'
                                    id='email_repeat'
                                    name='email_repeat'
                                    required={true}
                                    label='Repetir email'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'email_repeat' })}
                                    onBlur={() => onBlur({ name: 'email_repeat'})}
                                    active={formState.email_repeat.active}
                                    error={formState.email_repeat.error}
                                    hasError={formState.email_repeat.hasError}
                                    maxLength={40}
                                />
                            </div>

                            <div className="checkoutFormInputGroup">
                                <Input 
                                    placeholder='5492214972575'
                                    id='phone'
                                    name='phone'
                                    required={true}
                                    label='Telefono'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'phone' })}
                                    onBlur={() => onBlur({ name: 'phone'})}
                                    active={formState.phone.active}
                                    error={formState.phone.error}
                                    hasError={formState.phone.hasError}
                                    maxLength={15}
                                />
                            </div>
                            <div className="checkoutFormInputGroup">
                                <Input 
                                    placeholder='Avenida San Juan, 1233, CABA'
                                    id='address'
                                    name='address'
                                    required={true}
                                    label='Direccion'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'address' })}
                                    onBlur={() => onBlur({ name: 'address'})}
                                    active={formState.address.active}
                                    error={formState.address.error}
                                    hasError={formState.address.hasError}
                                    maxLength={80}
                                />
                            </div>
                            <div className="checkoutFormInputGroup">
                                <Input 
                                    placeholder='1233'
                                    id='postalCode'
                                    name='postalCode'
                                    required={true}
                                    label='Codigo postal'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'postalCode' })}
                                    onBlur={() => onBlur({ name: 'postalCode'})}
                                    active={formState.postalCode.active}
                                    error={formState.postalCode.error}
                                    hasError={formState.postalCode.hasError}
                                    maxLength={10}
                                />
                            </div>
                        </div>
                        <button disabled={!formState.isFormValid} type='submit' className='butttonCheckout'>Confirmar Compra</button>
                    </form>
                </div>
                {cart?.length > 0 ? (
                    <div className='checkoutCartContainer'>
                    <h2 className='checkoutTitle'>Detalle de compra</h2>
                    {
                        cart.map((product) => (
                            <CartItem key={product.id}{...product} onAddToCart={onAddToCart} onDecreaseItem={onDecreaseItem} onRemoveItem={onRemoveItem} />
                        ))
                    }
                    <Total  total={total} totalItemQuantity={getTotalItemQuantity()} />
                </div>
                ) : null}
            </div>
        </div>
    )
}

export default Checkout