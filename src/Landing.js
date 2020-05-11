import React, { Component } from 'react'
import './styles.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './img/lg.png'
import img_1 from './img/cov.jpg'
import img_2 from './img/cover.jpg'
import img_3 from './img/logo_black.jpg'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import t_1 from './img/t_1.jpg'
import t_2 from './img/t_2.jpg'
import t_3 from './img/t_3.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Landing extends Component{

    render(){
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                alt=""
                src = {logo}
                width="300"
                height="80"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#pricing">Discussions</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Rankings</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Gallery
                </Nav.Link>
                <Nav.Link href = "#qna">QnA</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>



            <Carousel interval = "1500" className = "carousel">
            <Carousel.Item>
                <img
                className="d-block w-100 imgs"
                src={img_2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Trekken 7</h3>
                <p>Now in stores, get your copy now!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 imgs"
                src={img_1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Brand new characteristic moves</h3>
                <p>Check out the tips and tricks in our blog.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 imgs"
                src={img_3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Global Rankings</h3>
                <p>We maintian our own leaderboard</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>


            <h2 className = "tou">UPCOMING TOURNAMENTS</h2>


            <CardGroup>
            <Card  border="danger" bg = "dark" text = "white" variant = "dark">
                <Card.Img style = {{height : "20rem"}} variant="top" src={t_1} />
                <Card.Body>
                <Card.Title>FULL TOURNAMENT</Card.Title>
                <Card.Text>
                    Trekken 7 tournament on board! <br></br>
                    We at Gaming Society NIT are going to organize a gaming event on 4th May with amazing prizes. <br></br>
                    Join us in the way.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><a href = "#">Click to Register </a></small>
                </Card.Footer>
            </Card>
            <Card  border="danger" bg = "dark" text = "white" variant = "dark">
                <Card.Img style = {{height : "20rem"}} variant="top" src={t_2} />
                <Card.Body>
                <Card.Title>FULL TOURNAMENT</Card.Title>
                <Card.Text>
                    Trekken 7 tournament on board! <br></br>
                    We at Gaming Society NIT are going to organize a gaming event on 4th May with amazing prizes. <br></br>
                    Join us in the way.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><a href = "#">Click to Register </a></small>
                </Card.Footer>
            </Card>
            <Card  border="danger" bg = "dark" text = "white" variant = "dark">
                <Card.Img style = {{height : "20rem"}} variant="top" src={t_3} />
                <Card.Body>
                <Card.Title>FULL TOURNAMENT</Card.Title>
                <Card.Text>
                    Trekken 7 tournament on board! <br></br>
                    We at Gaming Society NIT are going to organize a gaming event on 4th May with amazing prizes. <br></br>
                    Join us in the way.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><a href = "#">Click to Register </a></small>
                </Card.Footer>
            </Card>
            </CardGroup>  

            <Container fluid>
                <Row>
                    <Col sm = {6}>
                        <h3 className = "headings">Announcements</h3>
                        <ListGroup >
                            <ListGroup.Item className = "announcements" variant="dark"> Today’s update includes a revamped buy menu, a simple way to customize (and share) your crosshair, and an all new way to personalize your favorite agents! </ListGroup.Item>
                            <ListGroup.Item className = "announcements" variant="dark">Customizing your crosshair has never been easier. Head over to the settings menu, where you’ll find a variety of crosshair settings that can be tuned to your personal taste. You can share your crosshair code with others or import a code to try someone else’s.
</ListGroup.Item>
                            <ListGroup.Item className = "announcements" variant="dark"> Along with some slight rearranging, now you can preview the equipment you can afford with illuminated icons in the buy wheel.

</ListGroup.Item>
                            <ListGroup.Item className = "announcements" variant="dark">Grab an AK and queue for Cache and Train in Casual, Competitive, Wingman, and Guardian game modes.</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col sm = {6}>
                        <h3 className = "headings">News</h3>
                        <ListGroup >
                            <ListGroup.Item className = "announcements" variant="dark"> Regional Major Ranking has been updated, visit this page for up to date information: Regional Major Ranking.</ListGroup.Item>
                            <ListGroup.Item className = "announcements" variant="dark">The first series of these RMR competitions will be in May and will be hosted by ESL. All teams that would have been invited to the May Rio Major or the May Rio Minors will be invited to compete for position in their region.</ListGroup.Item>
                            <ListGroup.Item className = "announcements" variant="dark">The first series of these RMR competitions will be in May and will be hosted by ESL. All teams that would have been invited to the May Rio Major or the May Rio Minors will be invited to compete for position in their region.</ListGroup.Item>
                            <ListGroup.Item className = "announcements" variant="dark">Given the circumstances, teams’ regions are determined by their current location.</ListGroup.Item>
                        </ListGroup>
                    </Col>
            </Row>
            </Container>



                {/*
                <div></div>
                <div></div>
                <div></div>
                <div></div> */}
            </div>
        )
    }
}

export default Landing;