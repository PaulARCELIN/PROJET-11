import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import img from '../assets/LOGO.png'

function Header() {

    return (<div className="kasa-header">   
        <img src={img} alt='Logo Kasa' className='kasa-header-logo'></img>
        <nav className="kasa-header-nav">
            <NavLink to="/accueil" className='nav-accueil' activeClassName='active'>Accueil</NavLink>
            <NavLink to="/apropos" className='nav-apropos' activeClassName='active'>A propos</NavLink>
        </nav>
    </div>)
}

export default Header

