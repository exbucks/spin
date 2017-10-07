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

    title: {
        text: ''
    },

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'AAPL Stock Price',
        data: data,
        step: true,
        tooltip: {
            valueDecimals: 2
        }
    }]
});

const StepLine = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default StepLine;
