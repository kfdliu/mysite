import React from 'react'
import { useInView } from 'react-intersection-observer'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function IndexMainContent () {
    const fillertext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non massa at dui egestas interdum vitae sit amet sapien. Fusce posuere aliquet mi, vitae finibus magna volutpat vel. Integer vehicula orci vitae nibh pharetra tempus. Vestibulum commodo tellus et erat iaculis pulvinar. Nam sit amet lorem tempus, aliquet sem in, varius nunc. Nulla volutpat laoreet ipsum tristique hendrerit. Vestibulum tempus nunc eget lorem mattis suscipit. Aliquam lobortis tincidunt turpis sit amet ornare. Curabitur ornare leo et ex placerat dictum. Donec ornare odio quis erat cursus efficitur.Pellentesque ut risus tellus. Aenean sit amet arcu ut lectus ultrices imperdiet."

    return (
        <div>
            <Container>
                <Row > 
                    <Col>
                        This is the home page
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default IndexMainContent