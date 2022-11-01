import React from "react"
import img from "../assets/LOGOFooter.png"
import '../styles/Footer.css'

function Footer() {
    return (<div className="footer">
        <img src={img} alt="Logo" className="footer-logo"></img>
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>)
}

export default Footer