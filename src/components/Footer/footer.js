import React from "react";
import './styles.css'
import Logo from '../../assets/Logo.png'

function Footer(){
    return(
        <div className="footer">
            <img src={Logo}></img>
            <div>All directs reserved.</div>
            <div>Developed by Leonardo Mendes Rocha</div>
        </div>
    )
}

export default Footer