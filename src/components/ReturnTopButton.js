import React, {useState} from 'react'
import {Button, Row} from 'react-bootstrap'

function ReturnTopButton () {
    const docHeight = 
        document.body["scrollHeight"] || 
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth ||
        document.body.offsetWidth

    const [showScroll, setShowScroll] = useState(false)   

    const checkScrollTop = () => {    
        if (!showScroll && window.pageYOffset > (docHeight*0.6)){
            setShowScroll(true) 
        } else if (showScroll && window.pageYOffset <= (docHeight*0.6)){
            setShowScroll(false)
        }  
    }

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    console.log(docHeight)
    window.addEventListener('scroll', checkScrollTop)
    
    return (
        <div className="top-button">
            <Row>
            </Row>
            <Button 
                onClick={scrollTop}  
                className='animate__animated animate__bounce animate__fast '
                style={{display: showScroll ? 'flex' : 'none'}} 
                variant="dark">
            </Button>
            <img 
                src="https://res.cloudinary.com/davis-cloud/image/upload/v1600061372/1024px-White_Arrow_Up.svg_zlntco.png" alt="not found"
                onClick={scrollTop}  
                className='animate__animated animate__bounce animate__fast '
                style={{display: showScroll ? 'flex' : 'none'}}    
            /> 
        </div>
    )
}

export default ReturnTopButton