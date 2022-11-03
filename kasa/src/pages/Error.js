import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/Error.css'
import Footer from "../components/Footer"

function Error() {
    return (<div className="error">
        <div className="error-404">404</div>
        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='error-link'>Retourner sur la page d'accueil</Link>
        <Footer />
    </div>)
} 

export default Error