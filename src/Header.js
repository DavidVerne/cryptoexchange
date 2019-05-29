import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router";
import { clearInterval } from 'timers';

class Header extends Component {
    render() {
        return (
            <div className="NavBar">
                <Container>
                    <Navbar expand="lg" variant="dark">
                        <Navbar.Brand><Link to="/Bitcoin">Crypto Exchange</Link></Navbar.Brand>
                    </Navbar>
                </Container>;
            </div>
        );
    }
}

export default Header;