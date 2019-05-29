import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Bitcoin from './components/Bitcoin/Bitcoin';
import Ethereum from './components/Ethereum/Ethereum';
import LiteCoin from './components/LiteCoin/LiteCoin';
import XRP from './components/XRP/XRP';
import Stellar from './components/Stellar/Stellar';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Bitcoin} />
        <Route path='Bitcoin' component={Bitcoin} />
        <Route path='Ethereum' component={Ethereum} />
        <Route path='LiteCoin' component={LiteCoin} />
        <Route path='XRP' component={XRP} />
        <Route path='Stellar' component={Stellar} />
        <Route path='*' component={Bitcoin} />
    </Route>
);