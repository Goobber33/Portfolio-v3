import React from 'react';
import styles from './about.module.scss';

const About: React.FC = () => {
    return (
        <div id="about" className="d-flex flex-column align-items-center justify-content-center about-section" style={{ paddingTop: '7%' }}>
            <div className="text-center">
                <div className={styles.animateGroup}>
                    <h1 style={{ color: '#00056B', fontSize: '4rem', fontFamily: "'DM Serif Display', serif" }}>
                        Software Engineer & Tech Enthusiast
                    </h1>
                </div>
                <div className={`${styles.animateParagraph} mt-5 p-4`} style={{ maxWidth: '1100px', margin: 'auto', fontFamily: "'Roboto', sans-serif", fontWeight: '100' }}>
                    <p style={{ color: '#00056B', fontSize: '1.5rem' }}>
                        My name is Kyle Parks, a freelance full-stack developer with a knack for creating dynamic and intuitive web experiences.
                    </p>
                </div>
            </div>

            {/* Bootstrap card for work history and skills */}
            <div className="card mt-5" style={{ width: '100%', maxWidth: '1100px' }}>
                <div className="card-body">
                    <h2 className="card-title" style={{ fontFamily: "'DM Serif Display', serif" }}>Relevant Experience</h2>
                    <p className="card-text" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        <strong>Freelance Full-Stack Developer | The Shed</strong> <br />
                        June 2023 - Current <br />
                        - Collaborated with client to design a contemporary gym website. <br />
                        - Employed React and Bootstrap for UI. <br />
                        - Managed codebase using GitHub. <br />
                        <br />
                        <strong>Freelance Full-Stack Developer | New Wood Designs</strong> <br />
                        September 2023 - Current <br />
                        - Crafted a portfolio website for custom furniture craftsmanship. <br />
                        - Leveraged React and Bootstrap for front-end design. <br />
                        - Managed project codebase on GitHub. <br />
                        <br />
                        <strong>MSP Field Technician | Intermax Networks</strong> <br />
                        December 2022 – June 2023 <br />
                        - Provided IT support, managed Office 365 and Azure AD. <br />
                        <br />
                        <strong>Client Support Technician | Northern Quest Resort & Casino</strong> <br />
                        August 2021 - October 2022 <br />
                        - Mentored junior IT team members and managed Office 365. <br />
                    </p>

                    <h3 className="mt-4 card-title" style={{ fontFamily: "'DM Serif Display', serif" }}>Skills and Tools</h3>
                    <div className="card-text d-flex flex-wrap justify-content-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        <i className={`fab fa-html5 ${styles.icon} ${styles.html}`}></i>
                        <i className={`fab fa-css3-alt ${styles.icon} ${styles.css}`}></i>
                        <i className={`fab fa-js-square ${styles.icon} ${styles.javascript}`}></i>
                        <i className={`fab fa-react ${styles.icon} ${styles.react}`}></i>
                        <i className={`fab fa-node-js ${styles.icon} ${styles.node}`}></i>
                        <i className={`fas fa-database ${styles.icon} ${styles.mongodb}`}></i>
                        <i className={`fab fa-python ${styles.icon} ${styles.python}`}></i>
                        <i className={`fas fa-server ${styles.icon} ${styles.express}`}></i>
                        {/* Add more icons as needed */}
                    </div>

                    <h3 className="mt-4 card-title" style={{ fontFamily: "'DM Serif Display', serif" }}>Education</h3>
                    <p className="card-text" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        University of Washington | Coding Bootcamp <br />
                        December 2022 - Current <br />
                        North Idaho College | Computer Science Courses <br />
                        February 2018 - March 2019
                    </p>

                    <h3 className="mt-4 card-title" style={{ fontFamily: "'DM Serif Display', serif" }}>Certifications</h3>
                    <p className="card-text" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        CompTIA A+ Certified <br />
                        08/2022 – Exp: 08/2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
