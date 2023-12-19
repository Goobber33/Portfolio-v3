import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects'; // Import the Projects component

function App() {
    const [activeLink, setActiveLink] = useState('home');

    const handleNavLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const renderSection = () => {
        switch (activeLink) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'projects': // Add a case for 'projects'
                return <Projects />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="App" style={{ backgroundColor: 'white', height: '100vh' }}>
            <Navbar activeLink={activeLink} onNavLinkClick={handleNavLinkClick} />
            {renderSection()}
        </div>
    );
}

export default App;
