import React from 'react';
import styles from './about.module.scss';
import profileImage from '../../assets/images/kyle.jpeg';
import profileImageTwo from '../../assets/images/kyletwo.jpeg';
import shed from '../../assets/images/Shed.png';
import wood from '../../assets/images/Wood.png';

const About: React.FC = () => {
    return (
        <div id="about" className="about-section" style={{ paddingTop: '5%' }}>
            <div className="container">

                <div className="row">
                    <div className="col text-center">
                        <h1 className={styles.animateParagraph} style={{ color: '#00056B', fontSize: '9rem', fontFamily: "'DM Serif Display', serif", maxWidth: '1800px', margin: '0 auto' }}>
                            Kyle Parks
                        </h1>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5">
                    <div className="col-md-5 text-center">
                        <img className={styles.animateParagraph} src={profileImage} alt="Kyle Parks" style={{ borderTopLeftRadius: '10rem', borderTopRightRadius: '10rem', maxWidth: '65%', marginBottom: '1rem' }} />
                    </div>

                    <div className="col-md-7">
                        <div className={styles.animateParagraph} style={{ paddingLeft: '3rem', maxWidth: '1000px' }}>
                            <p style={{ color: '#00056B', fontSize: '3rem', fontFamily: "'DM Serif Display', serif" }}>
                                I am a freelance software engineer, and I live in Idaho.
                            </p>
                            <p className="mt-5" style={{ color: '#00056B', fontFamily: "'Roboto', sans-serif", fontSize: '1.5rem', maxWidth: '900px', fontWeight: '100' }}>
                                Over the past four years, I've worked in various IT roles. Initially intimidated by coding, this past year marked a significant shift — I've grown to love building software, finding joy in the challenge and creativity it offers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.animateTwo} style={{ marginTop: '10%' }}>
                    <div className="card-body text-center">
                        <h2 style={{ color: '#00056B', fontSize: '3rem', fontFamily: "'DM Serif Display', serif" }}>
                            Freelance Full-Stack Developer | The Shed
                        </h2>
                        <p style={{ color: '#00056B', fontFamily: "'Roboto', sans-serif", fontSize: '1.5rem', fontWeight: '100' }}>
                            June 2023 - Current
                        </p>

                        <div className={styles.shedImageContainer} style={{ maxWidth: '40%' }} >
                            <a href="https://goobber33.github.io/The-Shed/" target="_blank" rel="noopener noreferrer">
                                <img src={shed} alt="The Shed" className={`img-fluid mt-5 mb-5 ${styles.shedHoverEffect}`} />
                            </a>

                        </div>

                        <h3 className="mt-5" style={{ color: '#00056B', fontSize: '3rem', fontFamily: "'DM Serif Display', serif" }}>Freelance Full-Stack Developer | New Wood Designs</h3>
                        <p style={{ color: '#00056B', fontFamily: "'Roboto', sans-serif", fontSize: '1.5rem', fontWeight: '100' }}>
                            September 2023 - Current
                        </p>

                        <div className={styles.shedImageContainer} style={{ maxWidth: '40%' }} >
                            <a href="https://goobber33.github.io/Jeff-Barden-Portfolio/" target="_blank" rel="noopener noreferrer">
                                <img src={wood} alt="New Wood Designs" className={`img-fluid mt-5 mb-5 ${styles.shedHoverEffect}`} />
                            </a>
                        </div>

                        <h3 className="mt-4" style={{ color: '#00056B', fontSize: '2.5rem', fontFamily: "'DM Serif Display', serif" }}>MSP Field Technician | Intermax Networks</h3>
                        <p style={{ color: '#00056B', fontFamily: "'Roboto', sans-serif", fontSize: '1.5rem', fontWeight: '100' }}>
                            December 2022 – June 2023
                        </p>

                        <h3 className="mt-4" style={{ color: '#00056B', fontSize: '2.5rem', fontFamily: "'DM Serif Display', serif" }}>Client Support Technician | Northern Quest Resort & Casino</h3>
                        <p style={{ color: '#00056B', fontFamily: "'Roboto', sans-serif", fontSize: '1.5rem', fontWeight: '100', marginBottom: '12rem' }}>
                            August 2021 - October 2022
                        </p>

                        <div className="row justify-content-center align-items-center mt-5">
                            <div className="col-md-7">
                                <div style={{ paddingLeft: '5.8rem', maxWidth: '1000px', textAlign: 'left' }}>
                                    <p style={{ color: '#00056B', fontSize: '3rem', fontFamily: "'DM Serif Display', serif" }}>
                                        My journey in coding began at the University of Washington's coding bootcamp.
                                    </p>
                                    <p className="mt-5" style={{ color: '#00056B', fontFamily: "'Roboto', sans-serif", fontSize: '1.5rem', maxWidth: '900px', fontWeight: '100' }}>
                                        In the bootcamp, I first mastered HTML and CSS, and then progressed to JavaScript. This solid foundation spurred my passion for web development, leading me to acquire skills in React, Node.js, MongoDB, and Express.js. Python was my latest endeavor, further diversifying my expertise. Each step in this path has been fueled by a relentless drive to innovate and excel in software engineering.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <img src={profileImageTwo} alt="Kyle Parks" style={{ borderTopRightRadius: '10rem', borderTopLeftRadius: '10rem', maxWidth: '65%', marginBottom: '1rem' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-content-center" style={{ marginTop: '5rem' }}>
                    <div className="text-center m-2 mb-5">
                        <i className={`fab fa-html5 ${styles.icon} ${styles.html}`}></i>
                        <p style={{ color: '#00056B', fontSize: '1.5rem', fontFamily: "'DM Serif Display', serif" }} className="m-0">HTML</p>
                    </div>
                    <div className="text-center m-2">
                        <i className={`fab fa-css3-alt ${styles.icon} ${styles.css}`}></i>
                        <p style={{ color: '#00056B', fontSize: '1.5rem', fontFamily: "'DM Serif Display', serif" }} className="m-0">CSS</p>
                    </div>
                    <div className="text-center m-2">
                        <i className={`fab fa-js-square ${styles.icon} ${styles.javascript}`}></i>
                        <p style={{ color: '#00056B', fontSize: '1.5rem', fontFamily: "'DM Serif Display', serif" }} className="m-0">JavaScript</p>
                    </div>
                    <div className="text-center m-2">
                        <i className={`fab fa-react ${styles.icon} ${styles.react}`}></i>
                        <p style={{ color: '#00056B', fontSize: '1.5rem', fontFamily: "'DM Serif Display', serif" }} className="m-0">React</p>
                    </div>
                    <div className="text-center m-2">
                        <i className={`fab fa-node-js ${styles.icon} ${styles.node}`}></i>
                        <p style={{ color: '#00056B', fontSize: '1.5rem', fontFamily: "'DM Serif Display', serif" }} className="m-0">Node.js</p>
                    </div>
                    <div className="text-center m-2">
                        <i className={`fas fa-database ${styles.icon} ${styles.mongodb}`}></i>
                        <p style={{ color: '#00056B', fontSize: '1.5rem', fontFamily: "'DM Serif Display', serif" }} className="m-0">MongoDB</p>
                    </div>
                    <div className="text-center m-2">
                        <i className={`fab fa-python ${styles.icon} ${styles.python}`}></i>
                        <p style={{ color: '#00056B', fontSize: '1.5rem', fontFamily: "'DM Serif Display', serif" }} className="m-0">Python</p>
                    </div>
                    <div className="text-center m-2">
                        <i className={`fas fa-server ${styles.icon} ${styles.express}`}></i>
                        <p style={{ color: '#00056B', fontSize: '1.5rem', fontFamily: "'DM Serif Display', serif" }} className="m-0">Express.js</p>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default About;