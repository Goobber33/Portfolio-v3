import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="position-relative vh-100">
            <div className="position-absolute" style={{ top: '25%', left: '50%', transform: 'translate(-50%, -30%)' }}>
                <h1 className="text-center" style={{ color: '#00056B', fontSize: '8rem' }}>Hi, I'm Kyle Parks</h1>
                <p className="text-center" style={{ color: '#00056B' }}>I'm a Software Engineer</p>
            </div>
        </div>
    );
};

export default Home;
