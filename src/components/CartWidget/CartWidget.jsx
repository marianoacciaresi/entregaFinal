import React from "react";
import "../assets/styles.css";

const CartWidget = ({ logo, menuItem }) => {
    return (
        <>
            <button type="button" className="btn btn-light"><span className="bi bi-cart"></span></button>
            <span className="badge rounded-pill badge-notification bg-danger">23</span>
        </>
    )
}

export default CartWidget;