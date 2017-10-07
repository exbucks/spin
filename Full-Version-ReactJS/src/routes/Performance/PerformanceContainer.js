import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import ReactInterval from 'react-interval';
import leftPad from 'left-pad';
import deepAssign from 'assign-deep';
import numeral from 'numeral';
import moment from 'moment';
import classNames from 'classnames';

import {
    Table,
    Panel,
    Row,
    Col,
    Charts
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent'
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';

import classes from './Performance.scss';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';
import { Colors } from 'consts';

import performanceData from 'consts/data/performance.json';
import performanceChartData from 'consts/data/performance-chart.json';

// ------------------------------------
// Variables
// ------------------------------------
const initialDataLength = performanceChartData.length;
const totalSeconds = 0;
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getChartData = (chartData) => _.map(chartData, (val, i) => ({
    x: moment().utc().subtract(chartData.length - i, 'seconds').valueOf(),
    y: val
}));

const getData = (inputData) => {
    const initialData = treeRandomizer(inputData);
    const generateChartData = (count = 20) => {
        const output = [];

        for(let i = 0; i < count; i++) {
            output.push(
                Math.round(Math.random() * 100)
            );
        }

        return output;
    }
    initialData.PartsPerformance.forEach((perf) => {
        perf.DataThrughtput = generateChartData();
        perf.DataResponse = generateChartData();
        perf.DataCpuBurn = generateChartData();
    });

    return initialData;
};

const prepareHighchartSeries = (data) => ({
    /*xAxis: {
        categories: _.uniq(_.map(data, (entry) => entry.time.format('HH:mm')))
    },*/
    series: [{
        type: 'area',
        name: 'Average Response Time',
        data: _.last(data, initialDataLength)
    }]
});

const getChartConfig = (data) => {
    const series = prepareHighchartSeries(data);
    const config = {
        xAxis: {
            type: 'datetime',

            tickInterval: 3600 * 20,

            dateTimeLabelFormats : {
                hour: '%I %p',
                minute: '%I:%M %p'
            }
        }
    };

    return Object.assign({}, series, config);
};

const avgRequestsCount = Math.round(5000 * Math.random());

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderDetailedSummary = (data) => {
    const renderRow = (row) => (
        <tr key={row._id}>
            <td>
                <span className="text-white">{row.Name}</span>
            </td>

            <td className="text-right">
                <span className="text-white">{row.ResponseTime}</span> ms
            </td>
            <td>
                <Charts.SparklineLine
                    data={ row.DataResponse }
                    width={ 130 }
                    height={ 20 }
                />
            </td>

            <td className="text-right">
                <span className="text-white">{row.Thrughtput}</span> rpm
            </td>
            <td>
                <Charts.SparklineLine
                    data={ row.DataThrughtput }
                    width={ 130 }
                    height={ 20 }
                />
            </td>

            <td className="text-right">
                <span className="text-white">{row.CpuBurn}</span> cpus
            </td>
            <td className='text-left'>
                <Charts.SparklineLine
                    data={ row.DataCpuBurn}
                    width={ 130 }
                    height={ 20 }
                />
            </td>
        </tr>
    );

    return (
        <Panel className={ classes.detailedSummary }>
            <Table fill responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="text-right">Response Time</th>
                        <th className="text-left"></th>
                        <th className="text-right">Thoughtput</th>
                        <th className="text-left"></th>
                        <th className="text-right">CPU Burn</th>
                        <th className="text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    { _.map(data, (item) => renderRow(item)) }
                </tbody>
            </Table>
        </Panel>
    );
}


// ------------------------------------
// Main Container
// ------------------------------------
class PerformanceContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, {
            ResponseTimeData: getChartData(performanceChartData),
            avgRequestsCount: performanceChartData.length + Math.round(Math.random() * 10000)
        }, getData(performanceData));
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    generateMoreData() {
        const isSpike = Math.random() <= 0.05;
        let newVal = 0;
        if(!isSpike){
            const lastValues = _.pluck(_.last(this.state.ResponseTimeData, 10), 'y');
            const minValue = _.min(lastValues);
            const maxValue = _.max(lastValues);

            newVal = Math.round(minValue + (maxValue - minValue) * Math.random());
        } else {
            newVal = 200 + Math.round(Math.random() * 150);
        }
        const newPoint = {
            x: moment().utc().add(totalSeconds, 'seconds').valueOf(),
            y: newVal
        };

        this.setState(Object.assign({}, this.state, {
            ResponseTimeData: [...this.state.ResponseTimeData, newPoint],
            avgRequestsCount: this.state.avgRequestsCount + Math.round(Math.random() * 10000)
        }));
    }

    render() {
        const avgResponseTime = _.last(this.state.ResponseTimeData).y;

        const avgRequestsCount = this.state.avgRequestsCount;
        const avgRequestsCountDuration = Math.round(
            this.state.ResponseTimeData.length / 60);

        const avgRequestsCountDay = Math.round(10000000000 + Math.random() * 1000000000);

        return (
            <Row className={ classes.mainWrap }>
                <ReactInterval
                    timeout={ 1000 }
                    enabled={ true }
                    callback={ () => this.generateMoreData() }
                />

                <Col lg={ 12 }>
                    <h4>Browser Requests</h4>
                    <p>Top-level page loads by logged in users in real web browsers. Also ajax.</p>

                    <hr />

                    <Row>
                        <Col lg={ 3 } className='text-right'>
                            <p className={classes.avgResponseTime}>
                                {avgResponseTime} <small>ms</small>
                            </p>
                            <p className={classes.avgResponseTimeLabel}>
                                Average Response Time
                            </p>

                            <hr/>

                            <p className={classes.responsesSummary}>
                                <span>{numeral(avgRequestsCount).format('0,0')}</span> requests over <span>{avgRequestsCountDuration}</span> min
                            </p>
                            <p className={classes.responsesSummary}>
                                <span>~{numeral(avgRequestsCountDay).format('0,0')}</span> requests over <span>24</span> h
                            </p>
                        </Col>
                        <Col lg={ 9 }>
                            <Charts.HighchartBasicArea
                                dynamicUpdate={true}
                                config={getChartConfig(this.state.ResponseTimeData)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 12 }>
                            { renderSection(renderDetailedSummary, this.state.PartsPerformance) }
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(PerformanceContainer);
