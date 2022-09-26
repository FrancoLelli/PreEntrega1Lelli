import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <div className="header">
            <div className="divGeneral logo-nav-container">
                <a className="logo">APPLE</a>
                <span className="barra"><i className="fas fa-bars"></i></span>
                
                <nav className="navegation">
                    <ul className="listaNav">
                        <li><a>Iphone</a></li>
                        <li><a>Ipad</a></li>
                        <li><a>Watch</a></li>
                        <li><a>AirPods</a></li>
                        <li><a>Contacto</a></li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </div>
    );
}

export default NavBar