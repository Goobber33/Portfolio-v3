import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.scss';

interface NavbarProps {
    activeLink: string;
    onNavLinkClick: (link: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink, onNavLinkClick }) => {
    const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const updateHighlight = (el: HTMLElement, animate = false) => {
        if (navRef.current) {
            const rect = el.getBoundingClientRect();
            const parentRect = navRef.current.getBoundingClientRect();
            const padding = 22;
            const highlightWidth = rect.width + padding * 2;

            const newStyle: React.CSSProperties = {
                width: `${highlightWidth}px`,
                height: `${rect.height}px`,
                transform: `translate(${rect.left - parentRect.left - padding}px, ${rect.top - parentRect.top}px)`,
                opacity: 1,
                transition: animate ? 'transform 0.2s ease-out' : undefined,
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
        setIsInitialLoad(false);
    }, [navRef]);

    useEffect(() => {
        if (navRef.current && !isInitialLoad) {
            const activeNavLink = navRef.current.querySelector(`.${styles.activeNavLink}`);
            if (activeNavLink instanceof HTMLElement) {
                updateHighlight(activeNavLink, true);
            }
        }
    }, [activeLink, isInitialLoad, navRef]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        onNavLinkClick(link);
        if (e.currentTarget instanceof HTMLElement) {
            updateHighlight(e.currentTarget, true);
        }
        if (window.innerWidth <= 992) {
            setIsMobileNavOpen(false); // Close offcanvas on link click in mobile view
        }
    };

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const navLinks = (
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
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light mt-4" style={{ width: '100%' }} ref={navRef}>
            <div className="container-fluid">
                {/* Toggler for mobile view */}
                <button className="navbar-toggler d-lg-none" type="button" onClick={toggleMobileNav} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Offcanvas navbar for mobile */}
                <div className={`offcanvas offcanvas-start d-lg-none ${isMobileNavOpen ? 'show' : ''}`} tabIndex={-1}>
                    <div className="offcanvas-header">
                        <p></p>
                        <button type="button" className="btn-close" onClick={toggleMobileNav} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {navLinks} {/* Mobile Nav Links */}
                    </div>
                </div>

                {/* Regular navbar for desktop */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    {navLinks} {/* Desktop Nav Links */}
                </div>
            </div>
            <div className={styles.highlight} style={highlightStyle} />
        </nav>
    );
};

export default Navbar;