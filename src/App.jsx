import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductDetail from './pages/product-detail';
import { CartProvider } from './context/cart-context'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import SuccessOrder from './pages/success-order'

function App() {

  return (
    <div>
      <CartProvider>
        <NavBar logo="logoBTY" />
        <Routes>
          <Route path='/entregaFinal/' element={<Home />} />
          <Route path='/entregaFinal/products/:productId' element={<ProductDetail />} />
          <Route path='/entregaFinal/cart' element={<Cart />} />
          <Route path='/entregaFinal/checkout' element={<Checkout />} />
          <Route path='/entregaFinal/success-order' element={<SuccessOrder />} />
        </Routes>
      </CartProvider>
    </div>
    )
}

export default App
