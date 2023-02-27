import React from "react";
import './headerstyle.css'
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="header">
            <img src={Logo} className="logo"/>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link to='/comentarios'>
                        <li>Comentários</li>
                    </Link> 
                    <Link to='/login'>
                        <li>Login</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;