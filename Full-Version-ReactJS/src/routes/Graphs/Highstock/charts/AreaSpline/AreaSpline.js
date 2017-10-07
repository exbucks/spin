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
        type: 'areasplinerange'
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

const AreaSpline = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default AreaSpline;
