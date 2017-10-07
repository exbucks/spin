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

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    series : [{
        name : 'AAPL',
        type: 'candlestick',
        color: '#2D99DC',
        data : data,
        tooltip: {
            valueDecimals: 2
        }
    }]
});

const IntradayCandlestick = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default IntradayCandlestick;
