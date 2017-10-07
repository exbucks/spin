import React from 'react';

import { Charts } from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const data = require('consts/data/highstock/data-large.json');
        cb(data);
    });
}

const getConfig = (data) => {
    // Create a timer
    let start = +new Date();

    // Create the chart
    const config = {
        chart: {
            events: {
                load: function () {
                    if (!window.isComparing) {
                        this.setTitle(null, {
                            text: ''
                        });
                    }
                }
            },
            zoomType: 'x'
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        rangeSelector: {

            buttons: [{
                type: 'day',
                count: 3,
                text: '3d'
            }, {
                type: 'week',
                count: 1,
                text: '1w'
            }, {
                type: 'month',
                count: 1,
                text: '1m'
            }, {
                type: 'month',
                count: 6,
                text: '6m'
            }, {
                type: 'year',
                count: 1,
                text: '1y'
            }, {
                type: 'all',
                text: 'All'
            }],
            selected: 3
        },

        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },

        title: {
            text: ''
        },

        subtitle: {
            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
        },

        series: [{
            name: 'Temperature',
            data: data.data,
            pointStart: data.pointStart,
            pointInterval: data.pointInterval,
            tooltip: {
                valueDecimals: 1,
                valueSuffix: '°C'
            }
        }]

    };

    return config;
};

const PointsWithDataGrouping = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default PointsWithDataGrouping;
