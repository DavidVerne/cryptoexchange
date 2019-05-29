import React, { Component } from 'react';
import '../../stylesheets/Exchange/Exchange.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
var NumberFormat = require('react-number-format');

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptos: []
        }
    };

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,XLM&tsyms=USD')
            .then(res => {
                const cryptos = res.data;
                console.log('cryptos: ', cryptos);
                this.setState({ cryptos: cryptos });
            })
    }

    render() {
        return (
            <Container>
            <div className="exchange">
                <h4>Digital Asset Prices</h4>
                {Object.keys(this.state.cryptos).map((key) => (
                    <div id="crypto-container">
                        <span className="left">{key}</span>
                        <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
                    </div>
                    ))}
                </div>
            </Container>
            )
    }

}

export default Exchange;