import { useState } from "react";
import "../Styles/ServicesAvailable.css";
import InformationCard from "./InformationCard.jsx";

function ServiceAvailable() {
    const [showInformation, setShowInformation] = useState(false);

    const services = [
        {
            id: 1,
            title: "Atención al Cliente",
            description: "En Quisqueya Connect ofrecemos soluciones profesionales de atención al cliente para ayudar a las empresas a gestionar sus llamadas entrantes de forma eficiente, cercana y profesional. Nuestro equipo se encarga de atender consultas, resolver dudas, gestionar solicitudes y transmitir mensajes, garantizando una experiencia positiva para cada cliente."
        },
        {
            id: 2,
            title: "Gestión de citas y asistencia comercial",
            description: "Optimizamos la gestión de citas y oportunidades comerciales para que tu empresa aproveche cada contacto con sus clientes. En Quisqueya Connect nos encargamos de organizar agendas, confirmar y modificar citas, registrar solicitudes y realizar el seguimiento de presupuestos y consultas comerciales."
        },
        {
            id: 3,
            title: "soporte administrativo y atención multicanal",
            description: "Ofrecemos soporte administrativo y atención multicanal para facilitar las operaciones diarias de tu empresa. En Quisqueya Connect trabajamos para que tu empresa mantenga una comunicación organizada, una atención consistente y una gestión más eficiente, adaptándonos a sus necesidades y al volumen de trabajo."
        }
    ];

    return (
        <>
            <div className="service-available col-md-2">
                <h2>Service Available</h2>

                {services.map((service) => (
                    <div className="service-list" key={service.id}>
                        <div className="card">

                            <div className="card-header">
                                <h3>{service.title}</h3>
                            </div>

                            <div className="card-body">
                                <p>{service.description}</p>

                                <button
                                    className="btn btn-primary"
                                    onClick={() => setShowInformation(true)}
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {showInformation && (
                <InformationCard
                    onClose={() => setShowInformation(false)}
                />
            )}
        </>
    );
}

export default ServiceAvailable;