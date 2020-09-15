import React from 'react'
import 'intersection-observer'
import { useInView } from 'react-intersection-observer'
import {Container, Row, Col} from 'react-bootstrap'

function ContactMainContent () {
    return (
        <div>
            <Container fluid={true} className="contact">
                <Row>
                    <Col className="animate__animated animate__fadeInUp">
                        <h1 className="title">Let's Connect!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className=" box1 contact-item animate__animated animate__fadeIn" md={false} lg={true}>
                        <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600049683/408-4087395_mailbox-icon-png_jyx2jb.png" alt="not found"/>
                        <a href="mailto: davis.liu@uwaterloo.ca"><h2>davis.liu@uwaterloo.ca</h2></a>
                        <a href="mailto: kfdliu@gmail.com" ><h2>kfdliu@gmail.com</h2></a>
                    </Col>
                    <Col className="box2 contact-item animate__animated animate__fadeIn" md={false} lg={true}>
                        <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600049683/phone-square-512_ejft0i.webp" alt="not found"/>
                        <a href="tel:+14377722620"><h2>(437) 772-2620</h2></a>
                    </Col>
                </Row>
                <Row >
                    <Col className="box3 contact-item animate__animated animate__fadeIn" md={false} lg={true}>
                        <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600049683/linkedin-1796350-1524231_duxfsq.webp" alt="not found"/>
                        <h2><a href="https://www.linkedin.com/in/davis-liu" target="_blank">linkedin.com/in/kfdliu</a></h2>
                    </Col>
                    <Col className="box4 contact-item animate__animated animate__fadeIn" md={false} lg={true}>
                        <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600049683/github-163-761603_iipt3a.webp" alt="not found"/>
                        <h2><a href="https://github.com/kfdliu" target="_blank">github.com/kfdliu</a></h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactMainContent