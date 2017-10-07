import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import leftPad from 'left-pad';
import numeral from 'numeral';

import {
    Row,
    Col,
    Table,
    Panel,
    Button,
    Form,
    FormGroup,
    FormControl,
    InputGroup,
    Charts,
    Divider
} from 'components';

import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { RoutedComponent, connect } from 'routes/routedComponent'

import classes from './ExchangeAndTrading.scss';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';
import { Colors } from 'consts';

import tradeData from 'consts/data/exchange-trading.json';
import highStockData from 'consts/data/highStock-USDEUR.json';

// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const getChartData = (inputData) => {
    const data = inputData;

    let startDate = new Date(data[data.length - 1][0]),
        minRate = 1,
        maxRate = 0,
        startPeriod,
        date,
        rate,
        index;

        startDate.setMonth(startDate.getMonth() - 3); // a quarter of a year before last data point
        startPeriod = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

        for (index = data.length - 1; index >= 0; index = index - 1) {
            date = data[index][0]; // data[i][0] is date
            rate = data[index][1]; // data[i][1] is exchange rate
            if (date < startPeriod) {
                break; // stop measuring highs and lows
            }
            if (rate > maxRate) {
                maxRate = rate;
            }
            if (rate < minRate) {
                minRate = rate;
            }
        }

    return {
        minRate,
        maxRate,
        data: data
    }
};

const getChartConfig = (state) => ({
    rangeSelector: {
            selected: 1
        },

        title: {
            text: ''
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: state.chartData.minRate,
                color: Colors.brandPrimary,
                dashStyle: 'shortdash',
                width: 1,
                label: {
                    text: '',
                }
            }, {
                value: state.chartData.maxRate,
                color: Colors.brandDanger,
                dashStyle: 'shortdash',
                width: 1,
                label: {
                    text: ''
                }
            }]
        },

        credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    series: [{
        name: 'USD to EUR',
        data: state.chartData.data,
        tooltip: {
            valueDecimals: 4
        }
    }]
});

const generateOrdersData = (count) => {
    const output = [];
    const randomBetweenFloat = (min, max, fixedLength = 2) =>
        (min + Math.random() * (max - min)).toFixed(fixedLength);
    const randomBetween = (min, max) =>
        Math.ceil(parseFloat(randomBetweenFloat(min, max))).toString();

    for(let i = 0; i < count; i++) {
        const newOrder = {
            Price: randomBetweenFloat(50, 1000),
            Btc: randomBetweenFloat(100, 100000, 5),
            Usd: randomBetweenFloat(1000, 10000000),
            Time: leftPad(randomBetween(1, 24), 2, 0) + ':' + leftPad(randomBetween(1, 60), 2, 0),
            Increase: Math.random() > 0.5
        }
        output.push(newOrder);
    }
    return output;
}

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderSummary = (summaryData) => (
    <div>
        <Row className={ classes.summary }>
            <Col md={ 2 } sm={ 4 } xs={ 5 }>
                <Divider>
                    Last Price
                </Divider>
                <p className={classes.summaryLargeValue}>
                    {summaryData.LastPrice}
                    <small> Euro</small>
                </p>
            </Col>

            <Col md={ 3 } sm={ 8 } xs={ 7 }>
                <Divider>
                    Daily Change
                </Divider>
                <p className={classes.summaryLargeValue}>
                    {summaryData.DailyChange.Value}
                    <small> Euro </small>
                    <small
                        className={summaryData.DailyChange.Diff < 0
                            ? classes.summaryValueLess : classes.summaryValueMore }
                    >
                        { summaryData.DailyChange.Diff < 0?
                            <i className="fa fa-caret-down"></i> :
                            <i className="fa fa-caret-up"></i>}
                        &nbsp;{summaryData.DailyChange.Diff}%
                    </small>
                </p>
            </Col>

            <Col md={ 3 } sm={ 12 } xs={ 12 }>
                <Divider>
                    Daily Range
                </Divider>
                <p className={classes.summaryLargeValue}>
                    {summaryData.DailyRange.From} - {summaryData.DailyRange.To}
                    <small> Euro</small>
                </p>
            </Col>

            <Col md={ 2 } sm={ 4 } xs={ 5 }>
                <Divider>
                    Today's Open
                </Divider>
                <p className={classes.summaryLargeValue}>
                    {summaryData.TodayOpen}
                    <small> Euro</small>
                </p>
            </Col>

            <Col md={ 2 } sm={ 8 } xs={ 7 }>
                <Divider>
                    24h Volume
                </Divider>
                <p className={classes.summaryLargeValue}>
                    {summaryData.Volume}
                    <small> Euro</small>
                </p>
            </Col>
        </Row>
        <Row className={ classes.overall }>
            <Col md={ 5 } sm={ 6 } xs={ 12 } className='text-center'>
                <span className={classes.overallEntry}>
                    <strong>Market Cap</strong>
                    <span className={classes.overallValue}>{numeral(summaryData.MarketCap).format('0,0')} Euro</span>
                </span>
            </Col>
            <Col md={ 3 } sm={ 6 } xs={ 12 } className={ `text-center` }>
                <span className={classes.overallEntry}>
                    <strong>Total BTC</strong>
                    <span className={classes.overallValue}>{numeral(summaryData.Total).format('0,0')} BTC</span>
                </span>
            </Col>
        </Row>
    </div>
);

const renderExchangePanel = () => (
    <Panel className={ classes.exchangePanel }>
        <Form inline>
            <FormGroup>
                <span className={`${classes.exchangePanelTitle} visible-lg-inline`}>
                    Buy or Sell BTC
                </span>

                <InputGroup className={ classes.exchangeInput }>
                    <InputGroup.Addon>
                        <i className="fa fa-fw fa-bitcoin"></i>
                    </InputGroup.Addon>
                    <FormControl type="number" placeholder="0.00"/>
                    <InputGroup.Addon>
                        Amount BTC
                    </InputGroup.Addon>
                </InputGroup>

                <InputGroup className={ classes.exchangeInput }>
                    <InputGroup.Addon>
                        <i className="fa fa-fw fa-dollar"></i>
                    </InputGroup.Addon>
                    <FormControl type="number" placeholder="0.00"/>
                    <InputGroup.Addon>
                        Price USD
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
            <div className={ classes.exchangeActions }>
                <Button
                    bsStyle='primary'
                    className={ classes.exchangeAction }
                >
                    <i className='fa fa-fw fa-download'></i>Buy BTC
                </Button>
                <Button
                    bsStyle='danger'
                    className={ classes.exchangeAction }
                >
                    <i className='fa fa-fw fa-upload'></i>Sell BTC
                </Button>
            </div>
        </Form>
    </Panel>
);

const renderNews = (newsList) => (
    <div className={classes.news}>
        <div className={ classes.newsHeader }>
            <h3 className={classes.newsHeaderTitle}>Latest News</h3>
            <Button
                bsSize='small'
            >
                All News <i className="fa fa-fw fa-angle-right"></i>
            </Button>
        </div>
        <Row>
            {_.map(newsList, (news) => (
                <Col key={ uid.v4() } md={ 4 }>
                    <small>{news.Date}</small>
                    <h5 className={classes.newsTitle}>
                        <a>
                            {news.Title}
                        </a>
                    </h5>
                    <p>
                        {news.Content}
                    </p>
                </Col>
            ))}
        </Row>
    </div>
);

const renderOrders = (orders) => {
    const renderTime = (time, increase) => (
        <td>
            <i className={`fa fa-fw ${ increase ? classes.iconIncrease + ' fa-caret-up' :
                classes.iconDecrease + ' fa-caret-down' }`}></i>
            {time}
        </td>
    );

    const renderOrdersList = (data, time = false) => (
        <Table
            condensed
            hover
            className={ classes.ordersTable }
        >
            <thead>
                <tr>
                    { time ?
                        <th>Time</th> : null
                    }
                    <th>Price</th>
                    <th>Btc</th>
                    <th>Usd</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {_.map(data, (order) => (
                    <tr key={uid.v4()}>
                        { time ? renderTime(order.Time, order.Increase) : null }
                        <td className="text-white">
                            { order.Price }
                        </td>
                        <td>
                            { numeral(order.Btc).format('0,0.0000') }
                        </td>
                        <td>
                            { numeral(order.Usd).format('0,0') }
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );

    return (
        <Row className={ classes.orders }>
            <Col lg={ 4 }>
                <h5>
                    <i className={`fa fa-fw fa-download ${classes.iconBuy}`}></i>
                    { ' Orders to Buy' }
                </h5>
                { renderOrdersList(orders.Buy) }
            </Col>
            <Col lg={ 4 }>
                <h5>
                    <i className={`fa fa-fw fa-download ${classes.iconSell}`}></i>
                    { ' Orders to Sell' }
                </h5>
                { renderOrdersList(orders.Sell) }
            </Col>
            <Col lg={ 4 }>
                <h5>
                    <i className={`fa fa-fw fa-bars ${classes.iconAll}`}></i>
                    { ' All Transactions' }
                </h5>
                { renderOrdersList(orders.All, true) }
            </Col>
        </Row>
    );
}
// ------------------------------------
// Main Container
// ------------------------------------
class ExchangeAndTradingContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = Object.assign({}, {
            chartData: getChartData(highStockData)
        }, getData(tradeData), {
            Orders: {
                Buy: generateOrdersData(16),
                Sell: generateOrdersData(16),
                All: generateOrdersData(16)
            }
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className={classes.mainWrap}>
                <Row>
                    <Col md={ 12 }>
                        { renderSection(renderSummary, this.state.pricingSummary) }
                    </Col>
                </Row>

                <Row>
                    <Col md={ 12 }>
                        <Charts.HighStock config={getChartConfig(this.state)}/>
                    </Col>
                </Row>

                <Row>
                    <Col md={ 12 }>
                        { renderSection(renderExchangePanel) }
                    </Col>
                </Row>

                <Row>
                    <Col md={ 12 }>
                        { renderSection(renderOrders, this.state.Orders) }
                    </Col>
                </Row>

                <Row>
                    <Col md={ 12 }>
                        { renderSection(renderNews, this.state.News) }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(ExchangeAndTradingContainer);
