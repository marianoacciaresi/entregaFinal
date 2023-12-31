import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ProductDetail from '../pages/product-detail';
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'
import SuccessOrder from '../pages/success-order'

function Router() {
    return (
        <Routes>
            <Route path='/entregaFinal/' element={<Home />} />
            <Route path='/entregaFinal/products/:productId' element={<ProductDetail />} />
            <Route path='/entregaFinal/cart' element={<Cart />} />
            <Route path='/entregaFinal/checkout' element={<Checkout />} />
            <Route path='/entregaFinal/success-order' element={<SuccessOrder />} />        
        </Routes>
  )
}

export default Router

