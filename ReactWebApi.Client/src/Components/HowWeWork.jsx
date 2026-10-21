
import "../Styles/HowWeWork.css";
import { Link } from "react-router-dom";
import AgentesConectando from "../assets/AgentesConectando.png";

function HowWeWork() {

    const pasos = [
        {
            numero: "01",
            icono: "📞",
            titulo: "Recibimos la comunicación",
            descripcion:
                "La llamada llega al canal telefónico acordado con la empresa. Organizamos la recepción y distribución de las comunicaciones según las necesidades del servicio."
        },
        {
            numero: "02",
            icono: "🎧",
            titulo: "Atendemos según el protocolo",
            descripcion:
                "Nuestros agentes siguen las instrucciones, guiones y procedimientos definidos por la empresa contratante para ofrecer una atención profesional y personalizada."
        },
        {
            numero: "03",
            icono: "📋",
            titulo: "Registramos y derivamos",
            descripcion:
                "Las solicitudes y mensajes se documentan siguiendo el procedimiento acordado y se comunican a la persona o departamento correspondiente cuando sea necesario."
        },
        {
            numero: "04",
            icono: "📊",
            titulo: "Revisamos el servicio",
            descripcion:
                "Podemos establecer informes e indicadores de calidad para evaluar la atención y encontrar oportunidades de mejora continua."
        }
    ];

    const tecnologias = [
        {
            icono: "📞",
            titulo: "Centralita virtual",
            descripcion:
                "Soluciones de telefonía empresarial para gestionar números, extensiones y distribución de llamadas."
        },
        {
            icono: "🕒",
            titulo: "Horarios adaptables",
            descripcion:
                "Organización de la atención según los horarios y la cobertura acordados con cada empresa."
        },
        {
            icono: "📄",
            titulo: "Protocolos personalizados",
            descripcion:
                "Guiones, instrucciones y procedimientos definidos según las necesidades de cada cliente."
        },
        {
            icono: "📈",
            titulo: "Informes y calidad",
            descripcion:
                "Posibilidad de establecer indicadores de seguimiento e informes según el servicio contratado."
        }
    ];

    return (
        <main className="how-work">

            {/* ENCABEZADO PRINCIPAL */}

            <section className="how-work-header">

                <p className="how-work-subtitle">
                    NUESTRA FORMA DE TRABAJAR
                </p>

                <h1>
                    Tecnología, calidad y
                    <span> forma de trabajo</span>
                </h1>

                <p className="how-work-description">
                    En Quisqueya Connect creemos que una atención
                    de calidad comienza con procesos bien definidos.
                    Nuestro modelo de servicio combina tecnología,
                    comunicación profesional y procedimientos
                    adaptados a las necesidades de cada empresa.
                </p>

            </section>


            {/* PROCESO DE ATENCIÓN */}

            <section className="how-work-process">

                <div className="how-work-steps">

                    {pasos.map((paso, index) => (

                        <div className="how-work-step-group" key={paso.numero}>

                            <article className="how-work-card">

                                <div className="how-work-number">
                                    {paso.numero}
                                </div>

                                <div className="how-work-icon">
                                    {paso.icono}
                                </div>

                                <h3>{paso.titulo}</h3>

                                <p>{paso.descripcion}</p>

                            </article>

                            {index < pasos.length - 1 && (
                                <span
                                    className="how-work-arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            )}

                        </div>

                    ))}

                </div>

            </section>


            {/* TECNOLOGÍA Y OPERACIONES */}

            <section className="how-work-technology">

                <article className="how-work-technology-content">

                    <p className="how-work-subtitle">
                        SOLUCIONES ADAPTADAS A TU EMPRESA
                    </p>

                    <h2>
                        Tecnología y
                        <span> operaciones</span>
                    </h2>

                    <p className="how-work-technology-description">
                        Nuestro modelo contempla soluciones de
                        telefonía empresarial para organizar la
                        recepción y distribución de llamadas,
                        establecer horarios de atención y trabajar
                        con procedimientos definidos.
                    </p>

                    <p className="how-work-technology-description">
                        Cada servicio puede adaptarse a las
                        necesidades de la empresa contratante,
                        incluyendo mecanismos de seguimiento
                        y control de calidad según lo acordado.
                    </p>

                    <div className="how-work-features">

                        {tecnologias.map((tecnologia) => (

                            <div
                                className="how-work-feature"
                                key={tecnologia.titulo}
                            >

                                <div className="how-work-feature-icon">
                                    {tecnologia.icono}
                                </div>

                                <div className="how-work-feature-text">

                                    <h3>
                                        {tecnologia.titulo}
                                    </h3>

                                    <p>
                                        {tecnologia.descripcion}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </article>


                {/* IMAGEN DERECHA */}

                <article className="how-work-image-container">

                    <img
                        src={AgentesConectando}
                        alt="Equipo de atención al cliente de Quisqueya Connect"
                        className="how-work-image"
                    />

                    <div className="how-work-image-badge">

                        <div className="how-work-shield">
                            ✓
                        </div>

                        <p>
                            Comunicación profesional
                            <span>
                                y compromiso con la calidad
                            </span>
                        </p>

                    </div>

                </article>

            </section>


            {/* LLAMADO A LA ACCIÓN */}

            <section className="how-work-contact">

                <h2>
                    ¿Quieres mejorar la atención
                    <span> de tus clientes?</span>
                </h2>

                <p>
                    Cuéntanos las necesidades de tu empresa.
                    Estudiaremos cómo podemos ayudarte a
                    organizar sus comunicaciones y ofrecer
                    una atención adaptada a tu negocio.
                </p>

                <Link
                    to="/contactUs"
                    className="how-work-contact-button"
                >
                    Solicitar información
                    <span aria-hidden="true"> →</span>
                </Link>

            </section>

        </main>
    );
}

export default HowWeWork;
