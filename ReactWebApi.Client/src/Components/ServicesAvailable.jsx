import { useState } from "react";
import "../Styles/ServicesAvailable.css";
import InformationCard from "./InformationCard.jsx";

function ServiceAvailable() {
    const [showInformation, setShowInformation] = useState(false);

    const services = [
        {
            id: 1,
            title: "Service 1",
            description: "Description of Service 1"
        },
        {
            id: 2,
            title: "Service 2",
            description: "Description of Service 2"
        },
        {
            id: 3,
            title: "Service 3",
            description: "Description of Service 3"
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