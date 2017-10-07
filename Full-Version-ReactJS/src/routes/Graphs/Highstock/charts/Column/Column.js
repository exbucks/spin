import React from 'react';

import { Charts } from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const { data } = require('consts/data/highstock/data-aapl-v.json');
        cb(data);
    });
}

const getConfig = (data) => ({
    chart: {
        alignTicks: false
    },

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
        type: 'column',
        name: 'AAPL Stock Volume',
        data: data,
        dataGrouping: {
            units: [[
                'week', // unit name
                [1] // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]]
        }
    }]
});

const SingleLineSeries = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default SingleLineSeries;
