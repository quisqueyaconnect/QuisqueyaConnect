import "../Styles/Nav.css"

const Nav = () => {
    return(
        <>
            <div className="container">
                <div className="logoIcon">
                    <img src="../public/imageLogo.png" alt="" />
                </div>
                <nav className="nav">
                    <div className="content">
                        <div className="form-group">
                            <ul className="list">
                                <li className="list-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="list-item">
                                    <a href="#">Quieres le contactemos? </a>
                                </li>
                                <li className="list-item">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Nav;