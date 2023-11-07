import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
     <div className="App" style={{ backgroundColor: 'gray', minHeight: '200vh' }}>
      <Navbar activeLink={activeLink} onNavLinkClick={handleNavLinkClick} />
    </div>
  );
}

export default App;
