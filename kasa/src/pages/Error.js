import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/Error.css'


function Error() {
    return (<div className="error">
        <div className="error-404">404</div>
        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/accueil" className='error-link'>Retourner sur la page d'accueil</Link>
    </div>)
} 

export default Error