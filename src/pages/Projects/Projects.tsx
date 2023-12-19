import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './projects.module.scss';

const Projects = () => {
    const projectsData = [
        { id: 1, title: 'Portfolio-v3', description: 'A groundbreaking project focused on innovative design.' },
        { id: 2, title: 'Portfolio-v2', description: 'An exploration of new technologies in web development.' },
        { id: 3, title: 'Game-Template', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 4, title: 'Home-Prices', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 5, title: 'Restaurant-Template', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 6, title: 'Game-Talk', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 7, title: 'Game-Talk-Python-Code', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 8, title: 'Business-Site', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 9, title: 'The-Shed', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 10, title: 'Arcanum', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 11, title: 'Search-For-Books', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 12, title: 'Machine-Learning', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 13, title: 'Web-Scraper', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 14, title: 'Social-Network', description: 'A mobile app that revolutionizes social interaction.' },
        { id: 15, title: 'Chatbot', description: 'A mobile app that revolutionizes social interaction.' },
      
    ];

    return (
        <div className="pb-5" id="projects" style={{ paddingTop: '5%' }}>
            <div className="container">
                <h2 className={`text-center mb-5 ${styles.animateParagraph}`} style={{ color: '#00056B', fontSize: '9rem', fontFamily: "'DM Serif Display', serif" }}>My Projects</h2>
                <Row xs={1} md={3} className="g-5">
                    {projectsData.map(project => (
                        <Col key={project.id}>
                            <div className={`${styles.animateTwo}`}>
                            <Card className={`${styles.cardCustomHeight} ${styles.cardHover} h-100`}>
                                <Card.Body>
                                    <Card.Title style={{ color: '#00056B', fontSize: '2rem', fontFamily: "'DM Serif Display', serif" }}>{project.title}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Projects;
