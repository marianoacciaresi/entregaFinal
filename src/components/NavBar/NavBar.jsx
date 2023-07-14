import React from "react";
import '../assets/styles.css';
import CartWidget from "../CartWidget/CartWidget";


const NavBar = ({ logo }) => {
    return (

        <header className="header">
                                    
            <nav className="navbar navbar-dark bg-dark noOverflow">

                <div className="container-fluid navBar50">
                    
                    <div > 
                    <a className="navbar-brand noFlex" href="">                        
                        <img src="logo_nav_bty.webp" alt={logo} width="110" height="40" id="navLogo" className="d-inline-block"/>  
                    </a>
                    <a className="navbar-brand noFlex" href=""> TT23 - Tu paleta a medida</a>
                    
                    </div>

                </div>

                <div className="align-top paddingRight">

                    <input type="checkbox" className="side-menu" id="side-menu" />
                    
                    <label className="hamb" htmlFor ="side-menu">
                        <span className="hamb-line"></span>
                    </label>

                    <nav className="nav">
                        <ul className="menu">
                            <li><a href="#">Quiénes Somos</a></li>
                            <li><a href="#">Productos</a></li>
                            {/* <li><a href="">Categorías</a></li> */}
                            <li><a href="#">Contactos</a></li>
                        </ul>
                    </nav> 

                    <CartWidget />

                </div>

            </nav>

        </header>

)
}

export default NavBar;