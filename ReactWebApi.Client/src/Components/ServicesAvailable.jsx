import '../Styles/ServicesAvailable.css';

const ServicesAvailable = () => {
    return (
        <>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus aliquid sit placeat laboriosam voluptas quibusdam quam 
                    officiis fugiat eum autem recusandae ducimus ratione inventore, 
                    exercitationem adipisci, maxime molestias fuga deserunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus aliquid sit placeat laboriosam voluptas quibusdam quam 
                    officiis fugiat eum autem recusandae ducimus ratione inventore, 
                    exercitationem adipisci, maxime molestias fuga deserunt.</p>
            </div>
            <div className="service-available col-md-2">
                <h2>Service Available</h2>
                <div className="service-list">
                    <div className="card">
                        <div className="card-header">
                            <h3>Service 1</h3>
                        </div>
                        <div className="card-body">
                            <p>Description of Service 1</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="service-list">
                    <div className="card">
                        <div className="card-header">
                            <h3>Service 1</h3>
                        </div>
                        <div className="card-body">
                            <p>Description of Service 1</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="service-list">
                    <div className="card">
                        <div className="card-header">
                            <h3>Service 1</h3>
                        </div>
                        <div className="card-body">
                            <p>Description of Service 1</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesAvailable;