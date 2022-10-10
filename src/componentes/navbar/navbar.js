import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="header">
            <div className="divGeneral logo-nav-container">
                <Link  to='/'>
                    <h1 className="logo">APPLE</h1>
                </Link>
                
                <span className="barra"><i className="fas fa-bars"></i></span>
                
                <nav className="navegation">
                    <ul className="listaNav">
                        <li><Link to={`/category/celular`}>Iphone</Link></li>
                        <li><Link to={`/category/tablet`}>Ipad</Link></li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </div>
    );
}

export default NavBar