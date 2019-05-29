import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ExchangeNav from './components/ExchangeNav/ExchangeNav';

export default class App extends Component {
    render() {
        return (
                <div className="App">
                    <Header />
                    <ExchangeNav />
                <div className="main-container">
                    {this.props.children}
                </div>
                    <Footer />
                </div>
        );
    }
}