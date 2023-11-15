import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.scss';

interface NavbarProps {
    activeLink: string;
    onNavLinkClick: (link: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink, onNavLinkClick }) => {
    const initialActiveLink = localStorage.getItem('activeLink') || 'home';
    const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});
    const [isInitialLoad, setIsInitialLoad] = useState(true); // New state to track initial load
    const navRef = useRef<HTMLDivElement>(null);

    const updateHighlight = (el: HTMLElement, animate = false) => {
        if (navRef.current) {
            const rect = el.getBoundingClientRect();
            const parentRect = navRef.current.getBoundingClientRect();
            const padding = 20;
            const highlightWidth = rect.width + padding * 2;

            const newStyle: React.CSSProperties = {
                width: `${highlightWidth}px`,
                height: `${rect.height}px`,
                transform: `translate(${rect.left - parentRect.left - padding}px, ${rect.top - parentRect.top}px)`,
                opacity: 1,
                ...(isInitialLoad ? {} : { transition: 'transform 0.2s ease-out' }), // Apply transition only after initial load
            };

            setHighlightStyle(newStyle);
        }
    };

    useEffect(() => {
        if (navRef.current) {
            const homeNavLink = navRef.current.querySelector(`.${styles.navLink}:first-child`);
            if (homeNavLink instanceof HTMLElement) {
                updateHighlight(homeNavLink);
            }
        }
        setIsInitialLoad(false); // Update state after initial setup
    }, []);

    useEffect(() => {
        if (navRef.current && !isInitialLoad) {
            const activeNavLink = navRef.current.querySelector(`.${styles.activeNavLink}`);
            if (activeNavLink instanceof HTMLElement) {
                updateHighlight(activeNavLink);
            }
        }
    }, [activeLink, isInitialLoad]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        onNavLinkClick(link);
        if (e.currentTarget instanceof HTMLElement) {
            updateHighlight(e.currentTarget);
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light mt-4`} ref={navRef}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <a className={`nav-link fs-5 ${activeLink === 'home' ? styles.activeNavLink : styles.navLink}`} href="#home" onClick={(e) => handleClick(e, 'home')} style={{ fontFamily: 'Roboto, sans-serif' }}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className={`nav-link fs-5 ${activeLink === 'about' ? styles.activeNavLink : styles.navLink}`} href="#about" onClick={(e) => handleClick(e, 'about')} style={{ fontFamily: 'Roboto, sans-serif' }}>
                                About
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className={`nav-link fs-5 ${activeLink === 'projects' ? styles.activeNavLink : styles.navLink}`} href="#projects" onClick={(e) => handleClick(e, 'projects')} style={{ fontFamily: 'Roboto, sans-serif' }}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className={`nav-link fs-5 ${activeLink === 'contact' ? styles.activeNavLink : styles.navLink}`} href="#contact" onClick={(e) => handleClick(e, 'contact')} style={{ fontFamily: 'Roboto, sans-serif' }}>
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
