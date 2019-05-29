import React, { Component } from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
    render() {
        return (
            <div className="NavBar" id="footBar">
                <Container>
                    <Navbar expand="lg" variant="dark">
                        <Navbar.Brand></Navbar.Brand>
                    </Navbar>
                </Container>;
            </div>
        );
    }
}

export default Footer;