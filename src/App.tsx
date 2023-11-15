import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="App" style={{ backgroundColor: 'white' }}>
      <Navbar activeLink={activeLink} onNavLinkClick={handleNavLinkClick} />
      <Home />
    </div>
  );
}

export default App;
