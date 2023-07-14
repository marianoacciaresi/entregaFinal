import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductDetail from './pages/product-detail';



function App() {

  return (
    <div>
      <NavBar logo="logoBTY" />
      <Routes>
        <Route path='/entregaFinal/' element={<Home />} />
        <Route path='/entregaFinal/products/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
    )
}

export default App
