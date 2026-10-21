
import { useState } from "react";
import "../Styles/ContactUs.css";
import AgentesConectando from "../assets/AgentesConectando.png";

const servicios = [
    {
        icono: "📞",
        titulo: "Atención de llamadas entrantes"
    },
    {
        icono: "👥",
        titulo: "Atención al cliente y resolución de consultas"
    },
    {
        icono: "📅",
        titulo: "Gestión de citas y solicitudes"
    },
    {
        icono: "🎧",
        titulo: "Recepción telefónica externalizada"
    }
];

const datosIniciales = {
    empresa: "",
    contacto: "",
    correo: "",
    servicio: "Atención de llamadas entrantes",
    volumen: "",
    horario: "",
    mensaje: ""
};

function ContactUs() {

    const [formulario, setFormulario] = useState(datosIniciales);
    const [enviado, setEnviado] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });

        setEnviado(false);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        // Demostración: todavía no se envían datos.
        setEnviado(true);
        setFormulario({ ...datosIniciales });
    };

    return (
        <main className="contact-page">

            <section className="contact-section">

                {/* COLUMNA IZQUIERDA */}
                <article className="contact-information">

                    <div className="contact-brand">
                        <div>
                            <h2>
                                Quisqueya
                                <span> Connect</span>
                            </h2>

                            <p>CALL CENTER</p>
                        </div>
                    </div>

                    <div className="contact-introduction">

                        <span className="contact-subtitle">
                            ESTAMOS PARA AYUDARTE
                        </span>

                        <h1>
                            Hablemos de las
                            <span>
                                {" "}necesidades de tu empresa
                            </span>
                        </h1>

                        <div className="contact-title-line"></div>

                        <p className="contact-description">
                            Cuéntanos qué tipo de atención necesitas,
                            cuál es el volumen aproximado de llamadas
                            y qué horario deseas cubrir.
                            Estudiaremos tu solicitud para valorar
                            una propuesta adaptada a tu negocio.
                        </p>

                    </div>

                    {/* SERVICIOS */}
                    <div className="contact-services">

                        {servicios.map((servicio, index) => (

                            <div
                                className="contact-service"
                                key={index}
                            >

                                <div className="contact-service-icon">
                                    {servicio.icono}
                                </div>

                                <h3>
                                    {servicio.titulo}
                                </h3>

                            </div>

                        ))}

                    </div>

                    {/* IMAGEN DE AGENTES */}
                    <div className="contact-agents">

                        <div className="contact-agents-glow"></div>

                        <img
                            src={AgentesConectando}
                            alt="Agentes de atención al cliente de Quisqueya Connect"
                        />

                        <div className="contact-agents-message">

                            <span>💬</span>

                            <div>
                                <strong>
                                    Conectamos personas
                                </strong>

                                <p>
                                    Creamos soluciones.
                                </p>
                            </div>

                        </div>

                    </div>

                </article>

                {/* COLUMNA DERECHA */}
                <article className="contact-form-container">

                    <div className="contact-form-header">

                        <span className="contact-form-label">
                            CONTACTA CON NOSOTROS
                        </span>

                        <h2>
                            Formulario para empresas
                        </h2>

                        <div className="contact-form-line"></div>

                        <p>
                            Completa los siguientes datos
                            y cuéntanos cómo podemos ayudarte.
                        </p>

                    </div>

                    <form
                        className="contact-form"
                        onSubmit={manejarEnvio}
                    >

                        {/* EMPRESA Y CONTACTO */}
                        <div className="contact-form-row">

                            <div className="contact-form-group">

                                <label htmlFor="empresa">
                                    Nombre de la empresa
                                    <span> *</span>
                                </label>

                                <input
                                    type="text"
                                    id="empresa"
                                    name="empresa"
                                    placeholder="Ej. Tu empresa S.L."
                                    value={formulario.empresa}
                                    onChange={manejarCambio}
                                    required
                                />

                            </div>

                            <div className="contact-form-group">

                                <label htmlFor="contacto">
                                    Persona de contacto
                                    <span> *</span>
                                </label>

                                <input
                                    type="text"
                                    id="contacto"
                                    name="contacto"
                                    placeholder="Nombre y apellido"
                                    value={formulario.contacto}
                                    onChange={manejarCambio}
                                    required
                                />

                            </div>

                        </div>

                        {/* CORREO */}
                        <div className="contact-form-group">

                            <label htmlFor="correo">
                                Correo corporativo
                                <span> *</span>
                            </label>

                            <input
                                type="email"
                                id="correo"
                                name="correo"
                                placeholder="ejemplo@tuempresa.com"
                                value={formulario.correo}
                                onChange={manejarCambio}
                                required
                            />

                        </div>

                        {/* SERVICIOS */}
                        <fieldset className="contact-fieldset">

                            <legend>
                                Servicio que necesita
                                <span> *</span>
                            </legend>

                            <div className="contact-radio-grid">

                                {servicios.map((servicio, index) => (

                                    <label
                                        className="contact-radio-option"
                                        key={index}
                                    >

                                        <input
                                            type="radio"
                                            name="servicio"
                                            value={servicio.titulo}
                                            checked={
                                                formulario.servicio ===
                                                servicio.titulo
                                            }
                                            onChange={manejarCambio}
                                        />

                                        <span>
                                            {servicio.titulo}
                                        </span>

                                    </label>

                                ))}

                            </div>

                        </fieldset>

                        {/* VOLUMEN */}
                        <div className="contact-form-group">

                            <label htmlFor="volumen">
                                Volumen aproximado de llamadas
                                <span> *</span>
                            </label>

                            <select
                                id="volumen"
                                name="volumen"
                                value={formulario.volumen}
                                onChange={manejarCambio}
                                required
                            >

                                <option value="">
                                    Selecciona una opción
                                </option>

                                <option value="Menos de 20 al día">
                                    Menos de 20 al día
                                </option>

                                <option value="20–100 al día">
                                    20–100 al día
                                </option>

                                <option value="Más de 100 al día">
                                    Más de 100 al día
                                </option>

                                <option value="Todavía no lo sabemos">
                                    Todavía no lo sabemos
                                </option>

                            </select>

                        </div>

                        {/* HORARIO */}
                        <div className="contact-form-group">

                            <label htmlFor="horario">
                                Horario de atención deseado
                                <span> *</span>
                            </label>

                            <select
                                id="horario"
                                name="horario"
                                value={formulario.horario}
                                onChange={manejarCambio}
                                required
                            >

                                <option value="">
                                    Selecciona una opción
                                </option>

                                <option value="Horario comercial">
                                    Horario comercial
                                </option>

                                <option value="Horario ampliado">
                                    Horario ampliado
                                </option>

                                <option value="Por acordar">
                                    Por acordar
                                </option>

                            </select>

                        </div>

                        {/* MENSAJE */}
                        <div className="contact-form-group">

                            <label htmlFor="mensaje">
                                Cuéntanos qué necesita tu empresa
                                <span> *</span>
                            </label>

                            <textarea
                                id="mensaje"
                                name="mensaje"
                                rows="5"
                                placeholder="Escribe aquí los detalles de tu solicitud..."
                                value={formulario.mensaje}
                                onChange={manejarCambio}
                                required
                            ></textarea>

                        </div>

                        {/* BOTÓN */}
                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            <span>➤</span>
                            Enviar solicitud
                        </button>

                        {/* CONFIRMACIÓN */}
                        {enviado && (

                            <div
                                className="contact-success"
                                role="status"
                            >
                                ✓ Formulario completado correctamente.
                                Esta es una demostración; todavía
                                no se ha enviado ninguna solicitud.
                            </div>

                        )}

                        {/* AVISO */}
                        <p className="contact-disclaimer">
                            Esta demostración no envía datos a
                            Quisqueya Connect. El formulario real
                            deberá conectarse a un sistema que
                            reciba y gestione las solicitudes.
                        </p>

                    </form>

                </article>

            </section>

        </main>
    );
}

export default ContactUs;
