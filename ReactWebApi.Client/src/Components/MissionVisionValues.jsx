
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
                        Ofrecer soluciones y servicios de calidad,
                        brindando una atención cercana, eficiente
                        y comprometida con las necesidades de
                        nuestros clientes.
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
                        Ser una empresa reconocida por la innovación,
                        la excelencia en el servicio y la creación
                        de experiencias que generen confianza
                        y relaciones duraderas.
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
                        <li>Compromiso con cada cliente.</li>
                        <li>Respeto y comunicación efectiva.</li>
                        <li>Responsabilidad y transparencia.</li>
                        <li>Innovación y mejora continua.</li>
                    </ul>

                    <span className="mvv-card-line"></span>
                </article>

            </div>
        </section>
    );
}

export default MissionVisionValues;
