import React from 'react';

import { Charts } from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const { data } = require('consts/data/highstock/data-range.json');
        cb(data);
    });
}

const getConfig = (data) => ({
    chart: {
        type: 'columnrange'
    },

    rangeSelector: {
        selected: 2
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

    tooltip: {
        valueSuffix: '°C'
    },

    series: [{
        name: 'Temperatures',
        data: data
    }]
});

const SingleLineSeries = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default SingleLineSeries;
