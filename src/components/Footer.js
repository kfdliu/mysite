import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

function Footer (props) {

    if (props.page==='contact') {
        return (
            <footer>
                <Container fluid={true}> 
                    <Row>
                        <Col>
                           <p>© 2020 Davis Liu </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
    else {
        return (
            <footer>
                <Container fluid={true}> 
                    <Row>
                        <Col xs={0} md={2} lg={3}></Col>
                        
                        <Col xs={2} md={1}>
                            <a href="https://www.linkedin.com/in/davis-liu" target="_blank">
                               <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600049683/linkedin-1796350-1524231_duxfsq.webp" alt="not found"/>
                            </a>
                        </Col>
                        <Col xs={2} md={1}>
                            <a href="https://github.com/kfdliu" target="_blank">
                               <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600049683/github-163-761603_iipt3a.webp" alt="not found"/>
                            </a>
                        </Col>
                        <Col xs={4} md={4} lg={2}>
                           <p>© 2020 Davis Liu</p>
                        </Col>
                        <Col xs={2} md={1}>
                            <a href="mailto: davis.liu@uwaterloo.ca" target="_blank">
                               <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600049683/408-4087395_mailbox-icon-png_jyx2jb.png" alt="not found"/>
                            </a>
                        </Col>
                        <Col xs={2} md={1}>
                            <a href="tel:+14377722620">
                               <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600049683/phone-square-512_ejft0i.webp" alt="not found"/>
                            </a>
                        </Col>

                        <Col xs={0} md={2} lg={3}></Col>
                    </Row>
               </Container>
           </footer>
       )
    }
    
}

export default Footer