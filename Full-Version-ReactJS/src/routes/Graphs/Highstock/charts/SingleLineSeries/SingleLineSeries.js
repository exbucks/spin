import React from 'react';

import { Charts } from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const { data } = require('consts/data/highstock/data-aapl-c.json');
        cb(data);
    });
}

const getConfig = (data) =>  ({
    rangeSelector : {
        selected : 1
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series : [{
        name : 'AAPL',
        data : data,
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
