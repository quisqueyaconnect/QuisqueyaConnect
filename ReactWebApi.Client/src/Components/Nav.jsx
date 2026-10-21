import "../Styles/Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
            <div className="container">
                <div className="logoIcon">
                    <a href="">
                        <img src="../public/imageLogo.png" alt="" />
                    </a>
                    
                </div>
                <nav className="nav">
                    <div className="content">
                        <div className="form-group">
                            <ul className="list">
                                <li className="list-item">
                                    <Link to="/">Inicio</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/services">Servicios</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/contactUs">Contactanos</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/howWeWork">Como Trabajamos?</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/contacto">Sobre Nosotros</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Nav;