import React from 'react'
import 'intersection-observer'
import { useInView } from 'react-intersection-observer'
import {Container, Row, Col} from 'react-bootstrap'

function ProjectsMainContent () {
    //const fillertext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non massa at dui egestas interdum vitae sit amet sapien. Fusce posuere aliquet mi, vitae finibus magna volutpat vel. Integer vehicula orci vitae nibh pharetra tempus. Vestibulum commodo tellus et erat iaculis pulvinar. Nam sit amet lorem tempus, aliquet sem."

    const tshld = 0.3

    const [ref1, inView1] = useInView({ threshold: tshld })
    const [ref2, inView2] = useInView({ threshold: tshld })
    const [ref3, inView3] = useInView({ threshold: tshld })
    const [ref4, inView4] = useInView({ threshold: tshld })

    const isVis1 = inView1 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis2 = inView2 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis3 = inView3 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis4 = inView4 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'

    return (
        <div>
            <Container fluid={true} className="projects">
                <Row>
                    <Col className="animate__animated animate__fadeInUp">
                        <h1 className="title">Projects</h1>
                    </Col>
                </Row>
                <Row>
                    <Col ref={ref1} className={`${isVis1} project-box`} md={false} lg={true}>
                        <h2>Personal Website</h2>
                        <img style={{height: "5rem"}} src="https://res.cloudinary.com/davis-cloud/image/upload/v1599340819/firefox_SclcbODY73_oapyv9.png"/>
                        <h3>Languages/Frameworks: </h3>
                        <p>HTML, CSS, React.js, Node.js, React-Bootstrap, Animation.css</p>
                        <h3>Date: </h3>
                        <p>August/September 2020 </p> 
                        <h3>Description:</h3>
                        <p>A website where you can find all kinds of information about me! You can learn about my skills, passions, and contact
                        information all within a few clicks. This website is my first project written using the React.js front-end framework.
                        </p>
                        <h3>URL: </h3>
                        <a href="https://kfdliu.github.io/mysite"><p>kfdliu.github.io/mysite</p></a>
                        <h3>Source Code: </h3>
                        <a href="https://github.com/kfdliu/mysite" target="_blank"><p>github.com/kfdliu/mysite</p></a>
                    </Col>
                    <Col ref={ref2} className={`${isVis2} project-box`} md={false} lg={true}>
                        <h2>Simulator WebApp</h2>
                        <img style={{height: "5rem"}} src="https://res.cloudinary.com/davis-cloud/image/upload/v1599340880/firefox_0u2ph5axyM_hmatox.png"/>
                        <h3>Languages/Frameworks: </h3>
                        <p>HTML, CSS, Vanilla JavaScript</p>
                        <h3>Date: </h3>
                        <p>July/August 2020 </p> 
                        <h3>Description:</h3>
                        <p>A simulator of the randomized unit acquisition system from the highest-grossing mobile game
                           in Japan, Fate/Grand Order. Coding this website was my introduction into coding more dynamic websites using JavaScript. 
                           The webapp features live stat tracking, dynamic graphics, a large selection of prize pools, and a fun and friendly 
                           user interface. The current webapp features all available events from August 2020 to December 2020.   
                        </p> 
                        <h3>URL: </h3>
                        <a href="https://kfdliu.github.io/quartzsim" target="_blank"><p>kfdliu.github.io/quartzsim</p></a>
                        <h3>Source Code: </h3>
                        <a href="https://github.com/kfdliu/quartzsim" target="_blank"><p>github.com/kfdliu/quartzsim</p></a>
                    </Col>
                </Row>
                <Row>
                    <Col ref={ref3} className={`${isVis3} project-box`} md={false} lg={true}>
                        <h2>Arduino Robot</h2>
                        <iframe width="300rem" height="200rem" src="https://www.youtube.com/embed/4B-RTDjbUZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>Languages/Frameworks: </h3>
                        <p>C++</p>
                        <h3>Hardware </h3>
                        <p>Arduino Nano, L293D H-Bridge IC, Geared Motors, Photoresistors</p>
                        <h3>Date: </h3>
                        <p>March 2020 </p> 
                        <h3>Description:</h3>
                        <p>An Arduino-controlled robot that will autonomously follow a coloured line for an indefinite period of time. The robot detects 
                           the colour of a line and will follow it by reading the analog signals coming from a voltage divider circuit. The analog 
                           signal provided from the voltage divider circuit comes from one of two photoresistors that change resistance depending 
                           on the amount of ambient light. Light is provided by LEDs situated next to the photoresistors. The amount of light that
                           is reflected back is dependant on the color the robot is scanning. The robot then interprets the signal and moves 
                           accordingly.
                        </p>
                        <h3>Source Code: </h3>
                        <a href="https://github.com/kfdliu/line-follower" target="_blank"><p>github.com/kfdliu/line-follower</p></a>
                        <h3>Circuit Diagram: </h3>
                        <a href="https://res.cloudinary.com/davis-cloud/image/upload/v1599339236/circuit_fnbkwx.png" target="_blank"><p>click here for diagram</p></a>
                    </Col>
                    <Col ref={ref4} className={`${isVis4} project-box`} md={false} lg={true}>
                        <h2>PICAXE Maze Robot</h2>
                        <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1599338756/chief_nzgbdv.png"/>
                        <h3>Languages/Frameworks: </h3>
                        <p>PICAXE BASIC</p>
                        <h3>Hardware </h3>
                        <p>PICAXE 20X2 20-Pin Microcontroller, Self Soldered H-Bridge, Geared Motors, Speaker, Push Buttons</p>
                        <h3>Date: </h3>
                        <p>March 2019 </p> 
                        <h3>Description:</h3>
                        <p>A robot built to escape homemade mazes consisting of books, boxes, etc.. The robot is controlled by a programmable 
                           PICAXE chip that controls LEDs, 2 motors, a speaker, and receives input from various buttons. The robot senses when it
                           bumps into an obstacle from behind or from the front. The robot then moves away from the obstacle and turns itself to 
                           evade the obstacle. The robot produces tunes depending on which phase of movement it is in. 
                        </p>
                        <h3>Source Code: </h3>
                        <a href="https://github.com/kfdliu/mazebot" target="_blank"><p>github.com/kfdliu/mazebot</p></a>
                        <h3>Circuit Diagram: </h3>
                        <a href="https://res.cloudinary.com/davis-cloud/image/upload/v1599338257/circuit_ol8suv.png" target="_blank">
                        <p>click here for diagram</p>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsMainContent