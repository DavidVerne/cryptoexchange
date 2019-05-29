import React, { Component } from 'react';
import '../../stylesheets/ExchangeNav/ExchangeNav.css';
import { browserHistory } from 'react-router';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import bitcoin from '../../images/bitcoin.png';
import ethereum from '../../images/ethereum.jpg';
import litecoin from '../../images/litecoin.jpg';
import xrp from '../../images/xrp.png';
import stellar from '../../images/stellar.png';
import Exchange from '../../components/Exchange/Exchange';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link } from "react-router";

class ExchangeNav extends Component {

    render() {

        return (
            <div className="Home">

                <Exchange />
                
                <Container className="coinCards">
                    <CardDeck>
                        
                        <Link to="/Bitcoin">
                            <Card className="bitcoinImage">
                            <Card.Img variant="top" src={bitcoin} />
                            <Card.Body>
                                <Card.Title>Bitcoin (BTC)</Card.Title>
                            </Card.Body>
                            </Card>
                         </Link>
  
                        <Link to="/Ethereum">
                            <Card className="ethereumImage">
                            <Card.Img variant="top" src={ethereum} />
                            <Card.Body>
                                <Card.Title>Ethereum (ETH)</Card.Title>
                            </Card.Body>
                            </Card>
                         </Link>

                        <Link to="/LiteCoin">
                            <Card className="liteCoinImage">
                            <Card.Img variant="top" src={litecoin} />
                            <Card.Body>
                                <Card.Title>LiteCoin (LTC)</Card.Title>
                            </Card.Body>
                            </Card>
                        </Link>

                        <Link to="/XRP">
                            <Card className="xrpImage">
                                <Card.Img variant="top" src={xrp} />
                                <Card.Body>
                                    <Card.Title>XRP (XRP)</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>

                        <Link to="/Stellar">
                            <Card className="stellarImage">
                                <Card.Img variant="top" src={stellar} />
                                <Card.Body>
                                    <Card.Title>Stellar (XLM)</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>

                    </CardDeck>

                </Container>
            </div>
        );
    }
}

export default ExchangeNav;