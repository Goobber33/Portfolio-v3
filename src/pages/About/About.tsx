import React from 'react';
import styles from './about.module.scss';

const About: React.FC = () => {
    return (
        <div id="about" className="d-flex flex-column align-items-center justify-content-center about-section" style={{ paddingTop: '7%' }}>
            <div className="text-center">

                <div className={`${styles.animateParagraph} mt-5 p-4`}>
                    <h1 style={{ color: '#00056B', fontSize: '4rem', fontFamily: "'DM Serif Display', serif", maxWidth: '900px' }}>
                        My name is Kyle Parks, I am a freelance Software Engineer.
                    </h1>
                </div>
            </div>

            <div className={styles.animateTwo}>

                <div className="mt-5" style={{ width: '100%', maxWidth: '1100px' }}>
                    <div className="card-body">

                        <p className="card-text text-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            <strong>Freelance Full-Stack Developer | The Shed</strong> <br />
                            June 2023 - Current <br />
                            <br />
                            <strong>Freelance Full-Stack Developer | New Wood Designs</strong> <br />
                            September 2023 - Current <br />
                            <br />
                            <strong>MSP Field Technician | Intermax Networks</strong> <br />
                            December 2022 – June 2023 <br />
                            <br />
                            <strong>Client Support Technician | Northern Quest Resort & Casino</strong> <br />
                            August 2021 - October 2022 <br />
                        </p>

                    </div>

                    
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="text-center m-2">
                            <i className={`fab fa-html5 ${styles.icon} ${styles.html}`}></i>
                            <p className="m-0">HTML</p>
                        </div>
                        <div className="text-center m-2">
                            <i className={`fab fa-css3-alt ${styles.icon} ${styles.css}`}></i>
                            <p className="m-0">CSS</p>
                        </div>
                        <div className="text-center m-2">
                            <i className={`fab fa-js-square ${styles.icon} ${styles.javascript}`}></i>
                            <p className="m-0">JavaScript</p>
                        </div>
                        <div className="text-center m-2">
                            <i className={`fab fa-react ${styles.icon} ${styles.react}`}></i>
                            <p className="m-0">React</p>
                        </div>
                        <div className="text-center m-2">
                            <i className={`fab fa-node-js ${styles.icon} ${styles.node}`}></i>
                            <p className="m-0">Node.js</p>
                        </div>
                        <div className="text-center m-2">
                            <i className={`fas fa-database ${styles.icon} ${styles.mongodb}`}></i>
                            <p className="m-0">MongoDB</p>
                        </div>
                        <div className="text-center m-2">
                            <i className={`fab fa-python ${styles.icon} ${styles.python}`}></i>
                            <p className="m-0">Python</p>
                        </div>
                        <div className="text-center m-2">
                            <i className={`fas fa-server ${styles.icon} ${styles.express}`}></i>
                            <p className="m-0">Express.js</p>
                        </div>
                    </div>

                    <h3 className="mt-4 text-center" style={{ color: '#00056B', fontSize: '2.5rem', fontFamily: "'DM Serif Display', serif" }}>Education</h3>
                    <p className="card-text text-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        University of Washington | Coding Bootcamp <br />
                        December 2022 - Current <br />
                        North Idaho College | Computer Science Courses <br />
                        February 2018 - March 2019
                    </p>

                    <h3 className="mt-4 text-center" style={{ color: '#00056B', fontSize: '2.5rem', fontFamily: "'DM Serif Display', serif" }}>Certifications</h3>
                    <p className="card-text text-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        CompTIA A+ Certified <br />
                        08/2022 – Exp: 08/2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
