import React from 'react';
import styles from './about.module.scss';

const About: React.FC = () => {
    return (
        <div id="about" className="d-flex align-items-start justify-content-center about-section" style={{ paddingTop: '7%' }}>
            <div className="text-center">
                <div className={styles.animateGroup}>
                    <h1 style={{ color: '#00056B', fontSize: '12rem', fontFamily: "'DM Serif Display', serif" }}>
                        About Me
                    </h1>
                    <p style={{ color: '#00056B', fontSize: '5rem', fontFamily: "'DM Serif Display', serif" }}>
                        Software Engineer & Tech Enthusiast
                    </p>
                </div>
                <div 
                    className={`${styles.animateParagraph} mt-5 p-4`} 
                    style={{ maxWidth: '600px', margin: 'auto', fontFamily: "'Roboto', sans-serif", fontWeight: '100' }}
                >
                    <p style={{ color: '#00056B', fontSize: '1.5rem' }}>
                        I'm Kyle, a passionate developer with a focus on creating meaningful and impactful web applications. With a strong foundation in both front-end and back-end technologies, I thrive in environments where I can solve complex problems and build innovative solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
