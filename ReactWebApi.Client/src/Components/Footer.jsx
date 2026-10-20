
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-glow"></div>

            <div className="footer-container">

                {/* Identidad de la empresa */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img
                            src="/imageLogo.png"
                            alt="Logo de Quisqueya Connect"
                        />
                        <div className="footer-brand-text">
                            <h2>Quisqueya Connect</h2>
                            <span>CALL CENTER & CUSTOMER SERVICE</span>
                        </div>
                    </Link>

                    <p className="footer-description">
                        Conectamos empresas con sus clientes a través de
                        una atención cercana, profesional y eficiente.
                        Tu comunicación, en buenas manos.
                    </p>

                    <div className="footer-badge">
                        <span className="footer-status-dot"></span>
                        Comunicación que conecta.
                    </div>
                </div>

                {/* Navegación */}
                <div className="footer-column">
                    <h3>Explora</h3>

                    <ul>
                        <li>
                            <Link to="/">⌂ Inicio</Link>
                        </li>
                        <li>
                            <Link to="/services">▤ Nuestros servicios</Link>
                        </li>
                        <li>
                            <Link to="/mission-vision-values">
                                ◈ Conócenos
                            </Link>
                        </li>
                        <li>
                            <Link to="/#contact">✉ Contacto</Link>
                        </li>
                    </ul>
                </div>

                {/* Servicios */}
                <div className="footer-column">
                    <h3>Nuestros servicios</h3>

                    <ul>
                        <li>
                            <Link to="/services">
                                Atención al cliente
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                Gestión de citas
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                Recepción de llamadas
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                Asistencia comercial
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contacto */}
                <div className="footer-column footer-contact">
                    <h3>Hablemos</h3>

                    <p>
                        ¿Buscas mejorar la atención de tu empresa?
                        Nos gustaría conocer tu proyecto.
                    </p>

                    <Link to="/#contact" className="footer-contact-button">
                        <span>✉</span>
                        Ponte en contacto
                        <span className="footer-arrow">↗</span>
                    </Link>

                    <div className="footer-contact-note">
                        <span>◎</span>
                        Atención cercana y profesional
                    </div>
                </div>
            </div>

            {/* Separador y pie inferior */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Quisqueya Connect.
                    Todos los derechos reservados.
                </p>

                <div className="footer-bottom-links">
                    <Link to="/#contact">Contacto</Link>
                    <span className="footer-divider">|</span>
                    <span>Hecho para conectar.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;