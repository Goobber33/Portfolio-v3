import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.scss';

interface NavbarProps {
  activeLink: string;
  onNavLinkClick: (link: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink, onNavLinkClick }) => {
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});
  const navRef = useRef<HTMLElement>(null);

  const updateHighlight = (el: HTMLElement) => {
    if (navRef.current) {
      const rect = el.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setHighlightStyle({
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: `translate(${rect.left - parentRect.left}px, ${rect.top - parentRect.top}px)`,
        transition: 'transform 0.4s ease-out',
        opacity: 1 // ensure the highlight is visible when updated
      });
    }
  };

  useEffect(() => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector(`.${styles.activeNavLink}`);
      if (activeEl) {
        updateHighlight(activeEl as HTMLElement);
      }
    }
  }, [activeLink]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    onNavLinkClick(link);
    if (e.currentTarget instanceof HTMLElement) {
      updateHighlight(e.currentTarget);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" ref={navRef}>
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
                onClick={(e) => handleClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className={`nav-link fs-3 ${activeLink === 'about' ? styles.activeNavLink : styles.navLink}`}
                href="#about"
                onClick={(e) => handleClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className={`nav-link fs-3 ${activeLink === 'projects' ? styles.activeNavLink : styles.navLink}`}
                href="#projects"
                onClick={(e) => handleClick(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className={`nav-link fs-3 ${activeLink === 'contact' ? styles.activeNavLink : styles.navLink}`}
                href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.highlight} style={highlightStyle} />
    </nav>
  );
};

export default Navbar;
