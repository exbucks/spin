import React from 'react';

import { Charts } from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const { data } = require('consts/data/highstock/data-aapl-c.json');
        cb(data);
    });
}

const getConfig = (data) => ({
    rangeSelector: {
        selected: 1
    },

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    title: {
        text: ''
    },

    series: [{
        name: 'AAPL Stock Price',
        data: data,
        type: 'spline',
        tooltip: {
            valueDecimals: 2
        }
    }]
});

const SingleLineSeries = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default SingleLineSeries;
