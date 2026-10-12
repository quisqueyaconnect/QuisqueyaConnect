import '../Styles/InformationCard.css';

function InformationCard({ onClose }){
    return (
        <>
            <div
                className="popup-overlay"
                onClick={onClose}
            ></div>

            <section className="contact-popup">
                <button
                    className="close-popup"
                    onClick={onClose}
                    aria-label="Cerrar ventana"
                >
                    &times;
                </button>

                <h2>Contact Center</h2>

                <p>
                    Bienvenido a nuestro centro de contacto.
                    Estamos aquí para ayudarte con tus consultas.
                </p>

                <p>
                    Completa el formulario y nuestro equipo
                    podrá ponerse en contacto contigo.
                </p>

                <form onSubmit={(event) => {
                    event.preventDefault();
                    alert('Formulario enviado');
                }}>
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                    />

                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        required
                    />

                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        required
                    />

                    <button type="submit" className="submit-btn">
                        Enviar solicitud
                    </button>
                </form>
            </section>
        </>
    );
}

export default InformationCard;