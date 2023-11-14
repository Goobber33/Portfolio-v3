import React from 'react';

const Home: React.FC = () => {
    // Inline styles
    const homeStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };

    const titleStyle: React.CSSProperties = {
        color: '#00056B',
        textAlign: 'center',
        fontSize: '10rem'
    };

    const subTitleStyle: React.CSSProperties = {
        color: '#00056B',
        textAlign: 'center'
    };

    return (
        <div style={homeStyle}>
            <h1 style={titleStyle}>Kyle Parks</h1>
            <p style={subTitleStyle}>Software Engineer</p>
        </div>
    );
};

export default Home;
