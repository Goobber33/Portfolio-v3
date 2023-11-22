import React from 'react';
import styles from './home.module.scss';

const Home: React.FC = () => {
    return (
        <div id="home" className="d-flex align-items-start justify-content-center home-section" style={{ paddingTop: '6%' }}>
            <div className="text-center">
                <div className={`${styles.animateGroup}`}>
                    <h1 style={{ color: '#00056B', fontSize: '10rem', fontFamily: "'DM Serif Display', serif" }}>
                        Hi. I'm Kyle
                    </h1>
                    <p style={{ color: '#00056B', fontSize: '3rem', fontFamily: "'DM Serif Display', serif" }}>
                        I'm a Software Engineer
                    </p>
                </div>
                <div 
                    className={`${styles.animateParagraph} mt-5 p-4`} 
                    style={{ maxWidth: '600px', margin: 'auto', fontFamily: "'Roboto', sans-serif", fontWeight: '100' }}
                >
                    <p style={{ color: '#00056B', fontSize: '1.5rem' }}>
                        Passionate about building seamless digital experiences with clean and efficient code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
