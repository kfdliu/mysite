import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar (props) {
    return (
        <Navbar className="nav-bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand 
                className="brand font-effect-neon" 
                onClick = {(event) => props.handleNavClick(event, 1)} 
                href="$">davis liu
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse expand="sm" expanded="false" id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="nav">
                    <Nav.Link 
                        onClick = {(event) => props.handleNavClick(event, 1)}
                        className="nav-link" href="$">Home
                    </Nav.Link>
                    <Nav.Link 
                        onClick = {(event) => props.handleNavClick(event, 2)}
                        className="nav-link" href="#">Projects
                    </Nav.Link>
                    <Nav.Link 
                        onClick = {(event) => props.handleNavClick(event, 3)}
                        className="nav-link" href="@">Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar