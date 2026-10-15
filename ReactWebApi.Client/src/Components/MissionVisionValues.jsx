
import "../Styles/MissionVisionValues.css";

function MissionVisionValues() {
    return (
        <section className="mvv-section">

            <div className="mvv-heading">
                <h2>Nuestra esencia</h2>

                <p>
                    Lo que nos inspira, nuestra visión de futuro
                    y los valores que nos representan.
                </p>
            </div>

            <div className="mvv-container">

                {/* MISIÓN */}
                <article className="mvv-card mvv-mission">
                    <div className="mvv-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="12" r="5" />
                            <circle cx="12" cy="12" r="1.5" />
                        </svg>
                    </div>

                    <h3>Nuestra Misión</h3>

                    <p>
                        MISION Ofrecer soluciones profesionales de atención al cliente y gestión de llamadas que ayuden a las empresas a mejorar la experiencia de sus clientes, optimizar sus procesos de comunicación y fortalecer sus relaciones comerciales.
Nos comprometemos a brindar un servicio cercano, eficiente y de calidad, adaptándonos a las necesidades de cada empresa para convertir cada interacción en una oportunidad de generar confianza y satisfacción.
                    </p>

                    <span className="mvv-card-line"></span>
                </article>

                {/* VISIÓN */}
                <article className="mvv-card mvv-vision">
                    <div className="mvv-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 19 19 5" />
                            <path d="M9 5h10v10" />
                            <path d="M5 5v5" />
                            <path d="M5 5h5" />
                        </svg>
                    </div>

                    <h3>Nuestra Visión</h3>

                    <p>
                        Convertirnos en una empresa de referencia en el sector de los contact centers, reconocida por la calidad de nuestro servicio, la confianza de nuestros clientes y nuestra capacidad para aportar soluciones eficaces a empresas de diferentes sectores.
Aspiramos a crecer de forma sostenible, incorporando tecnología, desarrollando el talento de nuestro equipo y construyendo relaciones comerciales duraderas basadas en la excelencia y los resultados.
                    </p>

                    <span className="mvv-card-line"></span>
                </article>

                {/* VALORES */}
                <article className="mvv-card mvv-values">
                    <div className="mvv-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="m12 3 8 5v8l-8 5-8-5V8z" />
                            <path d="m8.5 12 2.3 2.3 4.8-4.8" />
                        </svg>
                    </div>

                    <h3>Nuestros Valores</h3>

                    <ul>
                        <li>Compromiso .</li>
                         Nos implicamos en los objetivos de cada empresa y trabajamos para ofrecer un servicio fiable y constante
                        <li>Confianza.</li>
                        Actuamos con transparencia, responsabilidad y respeto por la información de nuestros clientes
                        <li>Calidad.</li>
                        Buscamos que cada llamada sea atendida con profesionalidad, amabilidad y eficacia.
                        <li>Innovación y mejora continua.</li>
                        Aprovechamos la tecnología y la mejora continua para ofrecer soluciones más eficientes.
                    </ul>

                    <span className="mvv-card-line"></span>
                </article>

            </div>
        </section>
    );
}

export default MissionVisionValues;
