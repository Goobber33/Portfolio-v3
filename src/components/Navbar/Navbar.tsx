// Navbar.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.scss';

interface NavbarProps {
  activeLink: string;
  onNavLinkClick: (link: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink, onNavLinkClick }) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-4">
                <a
                  className={`nav-link fs-3 ${activeLink === 'home' ? styles.activeNavLink : styles.navLink}`}
                  href="#home"
                  onClick={(e) => { e.preventDefault(); onNavLinkClick('home'); }}
                >
                  Home
                </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className={`nav-link fs-3 ${activeLink === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={(e) => { e.preventDefault(); onNavLinkClick('about'); }}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className={`nav-link fs-3 ${activeLink === 'projects' ? 'active' : ''}`}
                href="#projects"
                onClick={(e) => { e.preventDefault(); onNavLinkClick('projects'); }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className={`nav-link fs-3 ${activeLink === 'contact' ? 'active' : ''}`}
                href="#contact"
                onClick={(e) => { e.preventDefault(); onNavLinkClick('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
