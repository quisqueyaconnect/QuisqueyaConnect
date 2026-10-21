import "../Styles/Home.css";
import AgentesConectando from '../assets/AgentesConectando.png'
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="home">

            {/* SECCIÓN PRINCIPAL */}
            <section className="home-hero">

                {/* CONTENIDO IZQUIERDO */}
                <article className="home-content">

                    <p className="home-subtitle">
                        TU ALIADO EN ATENCIÓN Y SERVICIO
                    </p>

                    <h1>
                        Conectamos personas,
                        <span> creamos soluciones.</span>
                    </h1>

                    <p className="home-description">
                        En Quisqueya Connect nos especializamos en ayudar a las empresas a
                        fortalecer su relación con los clientes mediante
                        una atención cercana, profesional y eficiente.
                    </p>

                    <p className="home-description">
                        Ofrecemos soluciones de atención al cliente y gestión
                        de comunicaciones para que tu empresa pueda centrarse
                        en lo más importante: crecer.
                    </p>

                    <div className="home-buttons">
                        <Link to="/services" className="home-btn-primary">
                            Nuestros servicios
                        </Link>

                        <a href="#contacto" className="home-btn-secondary">
                            Contáctanos
                        </a>
                    </div>

                </article>

                {/* IMAGEN DERECHA */}
                <article className="home-image-container">
                    <img
                        src={AgentesConectando}
                        alt="Agentes profesionales de atención al cliente de Quisqueya Connect"
                        className="home-image"
                    />

                    <div className="home-image-caption">
                        <span className="home-status-dot"></span>
                        Atención profesional, conexiones reales
                    </div>
                </article>

            </section>

            {/* SEGUNDA SECCIÓN: PROPUESTA DE VALOR */}
            <section className="home-value" id="nosotros">
                {/* CONTENIDO DEL LADO IZQUIERDO */}
                <article className="home-value-content">
                    <p className="home-subtitle">
                        ¿POR QUÉ QUISQUEYA CONNECT?
                    </p>
                    
                    <h2>
                        Cada conversación es una oportunidad.
                    </h2>
                    <p>
                        Para nosotros, una buena experiencia de servicio puede
                        transformar la relación entre una empresa y sus
                        clientes. Trabajamos para ofrecer comunicaciones
                        claras, atención personalizada y soluciones
                        adaptadas a cada negocio.
                    </p>
                        <div class="benefits-container">

        <div class="benefit-card">
            <div class="benefit-icon">💬</div>
            <h3>Comunicación profesional</h3>
            <p>
                Atención amable, clara y alineada con
                las instrucciones del cliente.
            </p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon">⚙️</div>
            <h3>Procesos adaptables</h3>
            <p>
                Protocolos y guiones definidos según
                las necesidades de cada empresa.
            </p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon">📊</div>
            <h3>Seguimiento del servicio</h3>
            <p>
                Posibilidad de establecer indicadores
                e informes según lo acordado.
            </p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon">🤝</div>
            <h3>Relaciones duraderas</h3>
            <p>
                Enfoque en la comunicación, la colaboración
                y la mejora del servicio.
            </p>
        </div>

    </div>
                </article>
                {/* CONTENIDO DEL LADO DERECHO */}
                <article className="home-value-action">
                    
                    <h2>
                        Tu empresa merece una atención al cliente excepcional.
                    </h2>

                    <p>
                        En Quisqueya Connect ayudamos a las empresas a gestionar
                        sus comunicaciones con sus clientes mediante servicios
                        de atención telefónica, gestión de solicitudes y
                        recepción de llamadas adaptados a sus necesidades.
                    </p>
                    <p><strong>Beneficios de trabajar con nosotros</strong></p>
                    <p><strong>Atención cercana:</strong> comunicación profesional y amable con los clientes.</p>
                    <p><strong>Flexibilidad operativa:</strong> soluciones adaptadas al volumen de llamadas y a los horarios acordados.</p>
                    <p><strong>Apoyo a tu equipo:</strong> ayudamos a gestionar las consultas para que tu empresa pueda concentrarse en sus prioridades.</p>
                </article>
            </section>
{/* <section class="benefits-section">

</section> */}
        </main>
    );
}

export default Home;