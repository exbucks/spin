import React from 'react';

import {
    Charts
} from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const { data } = require('consts/data/highstock/data-aapl-c.json');
        cb(data);
    });
}

const getConfig = (data) => ( {
    rangeSelector : {
        selected : 1
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
        name : 'AAPL Stock Price',
        data : data,
        type : 'area',
        threshold : null,
        tooltip : {
            valueDecimals : 2
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
    }]
});

const Area = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default Area;
