import './App.css'
import NavBar from './components/NavBar/NavBar'
import { CartProvider } from './context/cart-context'
import Router from './navigation'

function App() {

  return (
    <div>
      <CartProvider>
        <NavBar logo="logoBTY" />
        <Router />
        </CartProvider>
    </div>
    )
}

export default App
