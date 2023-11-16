import React, { useRef } from 'react';
import styles from './home.module.scss';

const Home: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`d-flex align-items-start justify-content-center vh-100 ${styles.animateText}`} style={{ paddingTop: '10%' }}>
            <div 
                className="text-center" 
                style={{ animation: 'slideUp 1s ease forwards' }}
                ref={textRef}
            >
                <h1 style={{ color: '#00056B', fontSize: '8rem', fontFamily: "'DM Serif Display', serif" }}>Hi. I'm Kyle</h1>
                <p style={{ color: '#00056B', fontSize: '2.5rem', fontFamily: "'DM Serif Display', serif" }}>I'm a Software Engineer</p>
                <div className="mt-5 p-4" style={{ maxWidth: '600px', margin: 'auto', fontFamily: "'Roboto', serif" }}>
                    <p style={{ color: '#00056B', fontSize: '1.5rem' }}>
                        Passionate about building seamless digital experiences with clean and efficient code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
