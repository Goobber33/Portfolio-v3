import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';

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
            default:
                return <Home />;
        }
    };

    return (
        <div className="App" style={{ backgroundColor: 'white' }}>
            <Navbar activeLink={activeLink} onNavLinkClick={handleNavLinkClick} />
            {renderSection()}
        </div>
    );
}

export default App;
