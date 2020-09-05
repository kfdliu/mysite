import React from 'react'
import { useInView } from 'react-intersection-observer'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProjectsMainContent () {
    const fillertext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non massa at dui egestas interdum vitae sit amet sapien. Fusce posuere aliquet mi, vitae finibus magna volutpat vel. Integer vehicula orci vitae nibh pharetra tempus. Vestibulum commodo tellus et erat iaculis pulvinar. Nam sit amet lorem tempus, aliquet sem in, varius nunc. Nulla volutpat laoreet ipsum tristique hendrerit. Vestibulum tempus nunc eget lorem mattis suscipit. Aliquam lobortis tincidunt turpis sit amet ornare. Curabitur ornare leo et ex placerat dictum. Donec ornare odio quis erat cursus efficitur.Pellentesque ut risus tellus. Aenean sit amet arcu ut lectus ultrices imperdiet."

    const [ref1, inView1] = useInView({ threshold: 0.35 })
    const [ref2, inView2] = useInView({ threshold: 0.35 })
    const [ref3, inView3] = useInView({ threshold: 0.35 })
    const [ref4, inView4] = useInView({ threshold: 0.35 })

    const isVis1 = inView1 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis2 = inView2 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis3 = inView3 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'
    const isVis4 = inView4 ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOut animate__fast'

    return (
        <div>
            <Container fluid className="projects">
                <Row>
                    <Col>
                        <h1>Projects</h1>
                    </Col>
                </Row>
                <Row ref={ref1} className={`${isVis1}`}>
                    <Col>
                        <h2>Personal Website</h2>
                        <img src="https://media.istockphoto.com/photos/closeup-of-lion-panthera-leo-8-years-old-in-front-of-white-background-picture-id944272094?k=6&m=944272094&s=612x612&w=0&h=J4pjHVFfW10BaZ4bZ06sirxbNdcw4rBu4DDkVHflMSk="/>
                        <p>{fillertext}</p>
                    </Col>
                </Row>
                <Row ref={ref2} className={`${isVis2}`}>
                    <Col>
                        <h2>Mobile Game Simulator Webapp</h2>
                        <img src="https://media.istockphoto.com/photos/closeup-of-lion-panthera-leo-8-years-old-in-front-of-white-background-picture-id944272094?k=6&m=944272094&s=612x612&w=0&h=J4pjHVFfW10BaZ4bZ06sirxbNdcw4rBu4DDkVHflMSk="/>
                        <p>{fillertext}</p>
                    </Col>
                </Row>
                <Row ref={ref3} className={`${isVis3}`}>
                    <Col>
                        <h2>Arduino Line Follower Robot</h2>
                        <img src="https://media.istockphoto.com/photos/closeup-of-lion-panthera-leo-8-years-old-in-front-of-white-background-picture-id944272094?k=6&m=944272094&s=612x612&w=0&h=J4pjHVFfW10BaZ4bZ06sirxbNdcw4rBu4DDkVHflMSk="/>
                        <p>{fillertext}</p>
                    </Col>
                </Row>
                <Row ref={ref4} className={`${isVis4}`}>
                    <Col>
                        <h2>Maze Escape Robot</h2>
                        <img src="https://media.istockphoto.com/photos/closeup-of-lion-panthera-leo-8-years-old-in-front-of-white-background-picture-id944272094?k=6&m=944272094&s=612x612&w=0&h=J4pjHVFfW10BaZ4bZ06sirxbNdcw4rBu4DDkVHflMSk="/>
                        <p>{fillertext}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsMainContent