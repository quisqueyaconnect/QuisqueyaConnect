import '../Styles/ServicesAvailable.css';
import { useState } from "react";

function ServiceAvailable() {

    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Service 1",
            description: "Description of Service 1",
            details: "Here you can find detailed information about Service 1, including its features, benefits, and how it can help you."
        },
        {
            id: 2,
            title: "Service 2",
            description: "Description of Service 2",
            details: "This service provides additional solutions to improve your experience. Contact us to learn more about its features."
        },
        {
            id: 3,
            title: "Service 3",
            description: "Description of Service 3",
            details: "Discover all the advantages of this service and how our team can help you meet your needs."
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
                                    onClick={() => setSelectedService(service)}
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Panel emergente del lado derecho */}

            {selectedService && (
                <>
                    <div
                        className="service-overlay"
                        onClick={() => setSelectedService(null)}
                    ></div>

                    <div className="service-popup">

                        <button
                            className="close-popup"
                            onClick={() => setSelectedService(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>

                        <h2>{selectedService.title}</h2>

                        <p>{selectedService.details}</p>

                        <button
                            className="btn btn-primary"
                            onClick={() => setSelectedService(null)}
                        >
                            Close
                        </button>

                    </div>
                </>
            )}
        </>
    );
}

export default ServiceAvailable;