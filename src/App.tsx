import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'; // Import the Home component

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="App" style={{ backgroundColor: 'white', minHeight: '400vh' }}>
      <Navbar activeLink={activeLink} onNavLinkClick={handleNavLinkClick} />
      <Home /> {/* Include the Home component */}
    </div>
  );
}

export default App;
