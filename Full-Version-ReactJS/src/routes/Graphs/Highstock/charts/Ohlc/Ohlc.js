import React from 'react';

import { Charts } from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const { data } = require('consts/data/highstock/data-aapl-ohlc.json');
        cb(data);
    });
}

const getConfig = (data) => ({
    rangeSelector : {
        selected : 2
    },

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    title : {
        text : ''
    },

    series : [{
        type : 'ohlc',
        name : 'AAPL Stock Price',
        data : data,
        dataGrouping : {
            units : [[
                'week', // unit name
                [1] // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]]
        }
    }]
});

const Ohlc = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default Ohlc;
