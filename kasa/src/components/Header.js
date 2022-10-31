import { Link } from 'react-router-dom'
import '../styles/Header.css'
import img from '../assets/LOGO.png'

function Header() {
    return (<div className="kasa-header">
        
        <img src={img} alt='Logo Kasa' className='kasa-header-logo'></img>
        
        <nav className="kasa-header-nav">
            <Link to="/" className='nav-accueil'>Accueil</Link>
            <Link to="/apropos" className='nav-apropos'>A propos</Link>
        </nav>

    </div>)
}

export default Header

