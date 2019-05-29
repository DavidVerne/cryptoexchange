// PARENT COMPONENT
// Data passed to LineChart.js
import React, { Component } from 'react';
import moment from 'moment';
import '../../stylesheets/LiteCoin/LiteCoin.css';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import InfoBox from './InfoBox';

class LiteCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingData: true,
            data: null,
            hoverLoc: null,
            activePoint: null
        }
    }
    handleChartHover(hoverLoc, activePoint) {
        this.setState({
            hoverLoc: hoverLoc,
            activePoint: activePoint
        })
    }
    componentDidMount() {
        const getData = () => {
            const url = 'https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=30';

            fetch(url).then(r => r.json())
                .then((cryptoprice) => {
                    const sortedData = [];
                    let count = 0;

                    for (let date in cryptoprice.Data) {

                        sortedData.push({
                            d: moment(cryptoprice.Data[date].time * 1000).format('MMM DD YYYY'),
                            p: cryptoprice.Data[date].close.toLocaleString('us-EN', { style: 'currency', currency: 'USD' }),
                            x: count,
                            y: cryptoprice.Data[date].close
                        });
                        count++;
                    }
                    this.setState({
                        data: sortedData,
                        fetchingData: false
                    })
                    console.log('litecoin data: ', this.state.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getData();
    }
    render() {
        return (

            <div className='container monthly-title'>
                <div className='row'>
                    <h5>30 Day LiteCoin Price Chart</h5>
                </div>
                <div className='row'>
                    {!this.state.fetchingData ?
                        <InfoBox data={this.state.data} />
                        : null}
                </div>
                <div className='row'>
                    <div className='popup'>
                        {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint} /> : null}
                    </div>
                </div>
                <div className='row'>
                    <div className='chart'>
                        {!this.state.fetchingData ?
                            <LineChart data={this.state.data} onChartHover={(a, b) => this.handleChartHover(a, b)} />
                            : null}
                    </div>
                </div>
            </div>

        );
    }
}

export default LiteCoin;