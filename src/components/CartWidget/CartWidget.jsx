import React from "react";
import { useContext } from "react";
import "../assets/styles.css";
import { CartContext } from "../../context/cart-context";
// import { useNavigate, Link } from "react-router-dom";
import { useNavigate, } from "react-router-dom";

// const CartWidget = ({  }) => {

const CartWidget = ({ logo }) => {    

    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCart = () => {
        navigate('entregaFinal/cart');
    }

    return (
        <>
            {/* <Link to='/' className="logo">{logo}</Link> */}
            <button onClick={goToCart} type="button" className="btn btn-light"><span className="bi bi-cart"></span></button>
            <span className="badge rounded-pill badge-notification bg-danger">{cart.length}</span>
        </>
    )
}

export default CartWidget;