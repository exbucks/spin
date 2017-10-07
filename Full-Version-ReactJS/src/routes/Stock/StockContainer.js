import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import deepAssign from 'assign-deep';
import moment from 'moment';
import classNames from 'classnames';

import {
    Row,
    Col,
    Panel,
    Label,
    Button,
    ButtonGroup,
    Table,
    Charts
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';

import stockData from 'consts/data/stock.json';

import classes from './Stock.scss';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const getChartData = (inputData) => (
     [
        {
            name: 'Internistic Value',
            data: inputData.Internistic,
            color: Colors.brandDanger
        },
        {
            name: 'Buy Price',
            data: inputData.BuyPrice,
            color: Colors.brandSuccess,
            dashStyle: 'shortdot'
        },
        {
            name: 'Stock Price',
            data: inputData.StockPrice,
            color: Colors.brandPrimary,
            marker: {
                enabled: false
            }
        }
    ]
);

const getChartConfig = (series) => ({
    title: '',
    series: series,
    yAxis: {
        title: ''
    },
    xAxis: {
        minTickInterval: moment.duration(1, 'year').asSeconds(),
        labels: {
            formatter: function() {
                return moment.unix(this.value).format('MMM YYYY');
            }
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormatter: function() {
            return `<strong>${moment.unix(this.x).format('MMM YYYY')}<strong>: ${this.y}`;
        }
    }
});
// ------------------------------------
// Sub Elements
// ------------------------------------
const renderStockValue = (value, percentage, growth, additionalClass = '') => {
    const isGrowth = !!parseInt(growth);
    const valueClass = classNames(classes.stockValue, additionalClass, {
        [`${classes.stockValue__growth}`]: isGrowth,
        [`${classes.stockValue__loss}`]: !isGrowth
    });
    const iconClass = classNames('fa', 'fa-fw', {
        'fa-caret-up': isGrowth,
        'fa-caret-down': !isGrowth
    });

    return (
        <div className={ valueClass }>
            <i className={ iconClass }></i>
            <span className={ classes.stockValuePrice }>
                { value }
            </span>
            {
                (percentage !== null) ?
                    <span className='text-muted'> | <small>{ `${percentage}%` }</small></span> : null
            }
        </div>
    );
}

const renderFavoriteStocks = (favoriteStocks) => (
    <Panel>
        <Row>
            <Col md={ 2 } sm={ 4 } xs={ 6 }>
                <h2 className={ classes.favoriteTitle }>
                    Your 5
                    <br/>
                    <span>Favorite Stocks</span>
                </h2>
                <p className={ classes.favoriteScoreTitle }>
                    Action Score
                </p>
                <p className={ classes.favoriteScoreTitle }>
                    Quality Score
                </p>
                <p className={ classes.favoriteScoreTitle }>
                    Value Score
                </p>
                <p className={ classes.favoriteScoreTitle }>
                    Growth Score
                </p>
            </Col>
            {
                _.map(favoriteStocks, (stock) => (
                    <Col md={ 2 } sm={ 4 } xs={ 6 } key={ stock._id }>
                        <h2 className={ classes.favoriteTitle }>
                            { stock.Name }
                        </h2>
                        { renderStockValue(stock.Value, stock.Percentage,
                            stock.Growth, classes.favoriteValue) }
                        <p className={ classes.favoriteScore }>
                            <Label
                                outline
                                bsStyle='custom'
                                customColor={ Colors.grayLighter }
                            >
                                A
                            </Label>
                            <small className='text-white'>
                                { stock.Scores.Action }
                            </small>
                        </p>
                        <p className={ classes.favoriteScore }>
                            <Label
                                outline
                                bsStyle='custom'
                                customColor={ Colors.grayLight }
                            >
                                Q
                            </Label>
                            <small className='text-white'>
                                { stock.Scores.Quality }
                            </small>
                        </p>
                        <p className={ classes.favoriteScore }>
                            <Label
                                outline
                                bsStyle='custom'
                                customColor={ Colors.gray }
                            >
                                V
                            </Label>
                            <small className='text-white'>
                                { stock.Scores.Value }
                            </small>
                        </p>
                        <p className={ classes.favoriteScore }>
                            <Label
                                outline
                                bsStyle='custom'
                                customColor={ Colors.grayLighter }
                            >
                                G
                            </Label>
                            <small className='text-white'>
                                { stock.Scores.Growth }
                            </small>
                        </p>
                    </Col>
                ))
            }
        </Row>
    </Panel>
);

const renderStockStats = (stats) => (
    <Panel
        header={
            <ButtonGroup bsSize='small'>
                <Button>Summary</Button>
                <Button>Key Stats</Button>
            </ButtonGroup>
        }
    >
        <Table
            fill
            striped
            className={ classes.statsTable }
        >
            <thead>
                <tr>
                    <th></th>
                    <th>2013</th>
                    <th>2014</th>
                    <th>TTM</th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(stats, (stat) => (
                        <tr key={ stat._id }>
                            <td>{ stat.Name }</td>
                            <td>{ stat.Values[0] }</td>
                            <td>{ stat.Values[1] }</td>
                            <td>{ stat.Values[2] }</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </Panel>
);

const renderSelectedStocks = (name, stocks) => (
    <Panel
        header={ name }
    >
        <Table
            fill
            striped
            className={ classes.selectedStocksTable }
        >
            <thead>
                <tr>
                    <th></th>
                    <th>Price</th>
                    <th className='text-right'>Score</th>
                    <th className='text-right'>Q</th>
                    <th className='text-right'>V</th>
                    <th className='text-right'>G</th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(stocks, (stock) => (
                        <tr key={ stock._id }>
                            <td className='text-white'>
                                { stock.Name }
                                <small className='text-muted'>
                                    { ` (${stock.ShortName})` }
                                </small>
                            </td>
                            <td>
                                { renderStockValue(stock.ValuePercentage + '%'
                                    , null, stock.Growth) }
                            </td>
                            <td className='text-right'>
                                { stock.Scores.Action }
                            </td>
                            <td className='text-right'>
                                { stock.Scores.Quality }
                            </td>
                            <td className='text-right'>
                                { stock.Scores.Value }
                            </td>
                            <td className='text-right'>
                                { stock.Scores.Growth }
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    </Panel>
);
// ------------------------------------
// Main Container
// ------------------------------------
class StockContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, getData(stockData), {
            chartConfig: getChartConfig(
                getChartData(stockData.DetailedStock.HistoryData)
            )
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    renderDetailedStock(details) {
        return (
            <Panel
                header={
                    <div className={ classes.detailedStockHeader }>
                        <div>
                            { `${details.Name} ` }
                            <small className='text-muted'> ({ details.ShortName })</small>
                            { renderStockValue(details.Value, details.Percentage,
                                details.Growth, classes.detailedStockHeaderValue) }
                        </div>
                        <Label
                            bsStyle='custom'
                            customColor={ Colors.grayLighter }
                        >
                            Score: { details.Score }
                        </Label>
                    </div>
                }
                footer={
                    <Row>
                        <Col
                            lg={ 4 }
                            md={ 6 }
                            xs={ 6 }
                        >
                            <dl className="dl-horizontal m-b-0">
                                <dt>Open</dt>
                                <dd className="text-white">${ details.Details.Open }</dd>
                                <dt>High</dt>
                                <dd className="text-white">${ details.Details.High }</dd>
                                <dt>Low</dt>
                                <dd className="text-white">${ details.Details.Low }</dd>
                            </dl>
                        </Col>
                        <Col
                            lg={ 4 }
                            md={ 6 }
                            xs={ 6 }
                        >
                            <dl className="dl-horizontal m-b-0">
                                <dt>Market Cap</dt>
                                <dd className="text-white">${ details.Details.MarketCap }B</dd>
                                <dt>P/E ratio (ttm)</dt>
                                <dd className="text-white">${ details.Details.PERatio }</dd>
                                <dt>Divident Yield</dt>
                                <dd className="text-white">${ details.Details.DividentYield }</dd>
                            </dl>
                        </Col>
                    </Row>
                }
            >
                <Charts.HighchartBasicLine config={ this.state.chartConfig } />
            </Panel>
        );
    };

    render() {
        return (
            <div className={ classes.mainWrap }>
                <Row>
                    <Col lg={ 12 }>
                        { renderSection(renderFavoriteStocks,
                            this.state.FavoriteStocks) }
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 8 }>
                        { this.renderDetailedStock(this.state.DetailedStock) }
                    </Col>
                    <Col lg={ 4 }>
                        { renderSection(renderStockStats, this.state.Stats) }
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 6 }>
                        { renderSelectedStocks('Cheap Stocks',
                            this.state.CheapStocks) }
                    </Col>
                    <Col lg={ 6 }>
                        { renderSelectedStocks('Expensive Stocks',
                            this.state.ExpensiveStocks) }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(StockContainer);
