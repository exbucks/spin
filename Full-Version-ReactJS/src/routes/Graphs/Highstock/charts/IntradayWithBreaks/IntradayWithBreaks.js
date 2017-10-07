import React from 'react';

import { Charts } from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const { data }  = require('consts/data/highstock/data-intraday.json');
        cb(data);
    });
}

const getConfig = (data) => ({
    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        breaks: [{ // Nights
            from: Date.UTC(2011, 9, 6, 16),
            to: Date.UTC(2011, 9, 7, 8),
            repeat: 24 * 36e5
        }, { // Weekends
            from: Date.UTC(2011, 9, 7, 16),
            to: Date.UTC(2011, 9, 10, 8),
            repeat: 7 * 24 * 36e5
        }]
    },

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    rangeSelector : {
        buttons : [{
            type : 'hour',
            count : 1,
            text : '1h'
        }, {
            type : 'day',
            count : 1,
            text : '1D'
        }, {
            type : 'all',
            count : 1,
            text : 'All'
        }],
        selected : 1,
        inputEnabled : false
    },

    series : [{
        name : 'AAPL',
        type: 'area',
        data : data,
        gapSize: 5,
        tooltip: {
            valueDecimals: 2
        },
        color: '#2D99DC',
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, 'rgba(45, 153, 220, .1)'],
                [1, 'rgba(45, 153, 220, 0)']
            ]
        },
        threshold: null
    }]
});

const IntradayWithBreaks = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default IntradayWithBreaks;
