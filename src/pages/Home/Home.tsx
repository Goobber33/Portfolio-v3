import React from 'react';
import './home.module.scss';

const Home: React.FC = () => {
    return (
        <div className="home">
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item text-center mx-3">
                            <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item text-center mx-3">
                            <a className="nav-link fs-5" href="#">About</a>
                        </li>
                        <li className="nav-item text-center mx-3">
                            <a className="nav-link fs-5" href="#">Projects</a>
                        </li>
                        <li className="nav-item text-center mx-3">
                            <a className="nav-link fs-5" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Home;
