import React from 'react';
import styles from './about.module.scss';
import profileImage from '../../assets/images/kyle.jpeg';

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
                        <img className={styles.animateParagraph} src={profileImage} alt="Kyle Parks" style={{ borderTopLeftRadius: '10rem', borderTopRightRadius: '10rem', maxWidth: '65%' }} />
                    </div>

                    <div className="col-md-7">
                        <div className={styles.animateParagraph} style={{ paddingLeft: '3rem', maxWidth: '1000px' }}>
                            <p style={{ color: '#00056B', fontSize: '3rem', fontFamily: "'DM Serif Display', serif" }}>
                                I am a freelance software engineer, and I live in Coeur d'Alene Idaho.
                            </p>
                            <p className="mt-5" style={{ color: '#00056B', fontFamily: "'Roboto', sans-serif", fontSize: '1.5rem', maxWidth: '900px', fontWeight: '100' }}>
                                Over the past four years, I've worked in various IT roles. Initially intimidated by coding, this past year marked a significant shift — I've grown to love building software, finding joy in the challenge and creativity it offers.
                            </p>
                        </div>
                    </div>
                </div>


                <div className={styles.animateTwo}>

                    <div className="mt-5" style={{ width: '100%', maxWidth: '1100px' }}>
                        <div className="card-body text-center">

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
        </div>
    );
};

export default About