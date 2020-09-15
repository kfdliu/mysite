import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function ResumeMainContent () {
    return (
        <div>
            <Container fluid={true} className="resume">
                <Row>
                    <Col className="animate__animated animate__fadeInUp">
                        <h1 className="title">Resume</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1600060285/Frontend_Dev_Resume_f7ipzx.png" alt="not found"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResumeMainContent