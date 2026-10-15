import "../Styles/Nav.css"

const Nav = () => {
    return(
        <>
            <div className="container">
                <div className="logoIcon">
                    <a href="">
                        <img src="../public/imageLogo.png" alt="" />
                    </a>
                    
                </div>
                <nav className="nav">
                    <div className="content">
                        <div className="form-group">
                            <ul className="list">
                                <li className="list-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="list-item">
                                    <a href="https://www.google.com/">Quieres le contactemos? </a>
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