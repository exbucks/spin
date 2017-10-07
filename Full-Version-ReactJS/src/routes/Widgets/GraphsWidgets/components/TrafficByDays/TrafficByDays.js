import React from 'react';

import {
    Row,
    Col,
    CollapsablePanel,
    SlimProgressBar,
    Charts
} from 'components';

import classes from './TrafficByDays.scss';

import { Colors } from 'consts';

const chartConfig = {
    chart: {
        type: 'area',
        spacingBottom: 30,
        height: 293,
        backgroundColor: '#2D99DC'
    },
    title: {
        text: ''
    },
    exporting: {
        enabled: false
    },
    subtitle: {
        text: '',
        floating: true,
        align: 'right',
        verticalAlign: 'bottom',
        y: 15
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 0//,
        //backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        lineColor: 'white',
        tickColor: 'white'
    },
    yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'rgba(255,255,255,.2)',
        tickColor: 'white',
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
            this.x + ': ' + this.y;
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2014',
        data: [0, 1, 4, 4, 5, 2, 3, 7, 8, 3, 5 ,6],
        lineWidth: '1',
        marker: {
            symbol: 'square'
        },
        color: 'white',
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, 'rgba(255,255,255,.4)'],
                [1, 'rgba(255,255,255,0)']
            ]
        }
    }]
};

const TrafficByDays = (panelProps) => (
    <CollapsablePanel
        background={ Colors.brandPrimary }
        title='Traffic by Days'
        footer={(
            <Row className='m-b-2'>
                <Col md={ 3 }>
                    <small className='text-muted'>
                        Yearly Change
                    </small>
                    <p className='m-t-0 m-b-1 h2 f-w-300'>
                        + 233.19
                    </p>
                    <SlimProgressBar now={ 60 } />
                </Col>
                <Col md={ 3 }>
                    <small className='text-muted'>
                        Shares Trade
                    </small>
                    <p className='m-t-0 m-b-1 h2 f-w-300'>
                        + 89.22 M
                    </p>
                    <SlimProgressBar now={ 20 } />
                </Col>
                <Col md={ 3 }>
                    <small className='text-muted'>
                        Today
                    </small>
                    <p className='m-t-0 m-b-1 h2 f-w-300'>
                        + 21.01
                    </p>
                    <SlimProgressBar now={ 35 } />
                </Col>
                <Col md={ 3 }>
                    <small className='text-muted'>
                        Last Month
                    </small>
                    <p className='m-t-0 m-b-1 h2 f-w-300'>
                        - 9.19
                    </p>
                    <SlimProgressBar now={ 10 } />
                </Col>
            </Row>
        )}
        { ...panelProps }
    >
        <Charts.HighchartBasicLine config={ chartConfig } />
    </CollapsablePanel>
);

export default TrafficByDays;
