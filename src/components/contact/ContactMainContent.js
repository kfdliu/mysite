import React from 'react'
import { useInView } from 'react-intersection-observer'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ContactMainContent () {
    const fillertext = "Platform: someurlpleaseclick.com"

    const [ref1, inView1] = useInView({ threshold: 0.35 })
    const [ref2, inView2] = useInView({ threshold: 0.35 })
    const [ref3, inView3] = useInView({ threshold: 0.35 })
    const [ref4, inView4] = useInView({ threshold: 0.35 })
    const [ref5, inView5] = useInView({ threshold: 0.35 })

    const isVis1 = inView1 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis2 = inView2 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis3 = inView3 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis4 = inView4 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis5 = inView5 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'

    return (
        <div>
            <Container fluid className="contact">
                <Row>
                    <Col>
                        <h1>Let's Connect!</h1>
                    </Col>
                </Row>
                <Row ref={ref1} className={`${isVis1}`}>
                    <Col>
                        <img src="https://static.thenounproject.com/png/437813-200.png" alt="image not found"/>
                        <h2>davis.liu@uwaterloo.ca | kfdliu@gmail.com</h2>
                    </Col>
                </Row>
                <Row ref={ref2} className={`${isVis2}`}>
                    <Col>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="image not found"/>
                        <h2>(437) 772-2620</h2>
                    </Col>
                </Row>
                <Row ref={ref3} className={`${isVis3}`}>
                    <Col>
                        <img src="https://cdn.iconscout.com/icon/free/png-512/linkedin-1796350-1524231.png" alt="image not found"/>
                        <h2><a href="https://www.linkedin.com/in/davis-liu" target="_blank">linkedin.com/in/davis-liu</a></h2>
                    </Col>
                </Row>
                <Row ref={ref4} className={`${isVis4}`}>
                    <Col>
                        <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-264-734861.png" alt="image not found"/>
                        <h2><a href="https://www.facebook.com/profile.php?id=100010655590200" target="_blank">Davis Liu</a></h2>
                    </Col>
                </Row>
                <Row ref={ref5} className={`${isVis5}`}>
                    <Col>
                        <img src="https://cdn.iconscout.com/icon/free/png-512/github-163-761603.png" alt="image not found"/>
                        <h2><a href="https://github.com/kfdliu" target="_blank">github.com/kfdliu</a></h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactMainContent