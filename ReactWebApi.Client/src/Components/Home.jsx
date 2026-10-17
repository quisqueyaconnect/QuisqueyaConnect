import "../Styles/Home.css";
import AgentesConectando from '../assets/AgentesConectando.png'

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
                        En Quisqueya Connect ayudamos a las empresas a
                        fortalecer sus relaciones con los clientes mediante
                        una atención cercana, profesional y eficiente.
                    </p>

                    <p className="home-description">
                        Ofrecemos soluciones de atención al cliente y gestión
                        de comunicaciones para que tu empresa pueda centrarse
                        en lo más importante: crecer.
                    </p>

                    <div className="home-buttons">
                        <a href="#servicios" className="home-btn-primary">
                            Nuestros servicios
                        </a>

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

                <article className="home-value-content">
                    <p className="home-subtitle">
                        ¿POR QUÉ QUISQUEYA CONNECT?
                    </p>

                    <h2>
                        Cada conversación es una oportunidad.
                    </h2>

                    <p>
                        Creemos que una buena experiencia de servicio puede
                        transformar la relación entre una empresa y sus
                        clientes. Trabajamos para ofrecer comunicaciones
                        claras, atención personalizada y soluciones
                        adaptadas a cada negocio.
                    </p>
                </article>

            </section>

        </main>
    );
}

export default Home;