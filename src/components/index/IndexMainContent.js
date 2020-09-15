import React from 'react'
import { useInView } from 'react-intersection-observer'
import {Container, Row, Col} from 'react-bootstrap'

function IndexMainContent () {
    const tshld = 0.3

    const [ref1, inView1] = useInView({ threshold: tshld })
    const [ref2, inView2] = useInView({ threshold: tshld })
    const [ref3, inView3] = useInView({ threshold: tshld })
    const [ref4, inView4] = useInView({ threshold: tshld })
    const [ref5, inView5] = useInView({ threshold: tshld })
    const [ref6, inView6] = useInView({ threshold: tshld })
    const [ref7, inView7] = useInView({ threshold: tshld })

    const isVis1 = inView1 ? 'animate__animated animate__fadeIn animate__slow' : 'animate__animated animate__fadeOut animate__fast'
    const isVis2 = inView2 ? 'animate__animated animate__fadeIn animate__slow' : 'animate__animated animate__fadeOut animate__fast'
    const isVis3 = inView3 ? 'animate__animated animate__fadeIn animate__slow' : 'animate__animated animate__fadeOut animate__fast'
    const isVis4 = inView4 ? 'animate__animated animate__fadeIn animate__slow' : 'animate__animated animate__fadeOut animate__fast'
    const isVis5 = inView5 ? 'animate__animated animate__fadeIn animate__slow' : 'animate__animated animate__fadeOut animate__fast'
    const isVis6 = inView6 ? 'animate__animated animate__fadeIn animate__slow' : 'animate__animated animate__fadeOut animate__fast'
    const isVis7 = inView7 ? 'animate__animated animate__fadeIn animate__slow' : 'animate__animated animate__fadeOut animate__fast'

    return (
        <div>
            <Container fluid={true} className="index"> 
                <Row className="landing-container">
                    <Col md={false} lg={true}>
                        <h2 className="animate__animated animate__fadeInLeft animate_slow"> 
                            hey! my name is
                        </h2>
                        <h1 className="animate__animated animate__fadeInLeft animate__slow font-effect-neon"> 
                            davis liu
                        </h1>
                        <h4 className="animate__animated animate__fadeIn animate__slow animate__delay-1s"> 
                            join me in my passion for computers!
                        </h4>
                    </Col>
                </Row>

                <hr/>

                <Row ref={ref1} className={`${isVis1}`}>
                    <Col>
                        <h1 className="title">About Me</h1>
                    </Col>
                </Row>

                <Row >
                    <Col ref={ref2} className={`${isVis2} photo-container`}>
                        <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1599875160/portrait-white_q5mofi.png" alt="not found"/>
                    </Col>
                    <Col ref={ref3} className={`${isVis3} about-me-container`} xs={11} lg={9} xl={8}>
                        <p>Greetings! My name is Davis Liu and I'm an aspiring and driven front-end developer. I am 
                            currently in 1A Computer Engineering at the University of Waterloo in Ontario, Canada. 
                            My interests include web development & electronics. I love a good challenge, whether it 
                            involves software, hardware, or both! I have a passion for  environmentalism and I'm also
                            an engineering mentor on a FIRST Robotics team in Markham. My favourite food is spicy 
                            ramen and I love rocking out to J-Pop tunes. Let's connect!
                        </p>
                    </Col>
                </Row>

                <hr/>

                <Row ref={ref4} className={`${isVis4}`}>
                    <Col>
                        <h1 className="title">Languages</h1>
                    </Col>
                </Row>

                <Row className="skills-container">
                    <Row ref={ref5} className={`${isVis5}`}>
                    <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1599880440/Image_row1_yqkbkg.png" alt="not found"/>
                    </Row>
                    <Row ref={ref6} className={`${isVis6}`}>
                    <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1599880439/Image_row2_n9lw20.png" alt="not found"/>
                    </Row>
                    <Row ref={ref7} className={`${isVis7}`}>
                    <img src="https://res.cloudinary.com/davis-cloud/image/upload/v1599880440/Image_row3_ubv6vs.png" alt="not found"/>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default IndexMainContent