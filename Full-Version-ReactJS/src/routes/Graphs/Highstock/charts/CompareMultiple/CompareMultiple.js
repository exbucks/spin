import React from 'react';

import { Charts } from 'components';

const getJson = (cb) => {
    require.ensure([], (require) => {
        const data = [
            {
                name: 'MSFT',
                data: require('consts/data/highstock/data-msft-c.json').data
            },
            {
                name: 'AAPL',
                data: require('consts/data/highstock/data-aapl-c.json').data
            },
            {
                name: 'GOOG',
                data: require('consts/data/highstock/data-goog-c.json').data
            }
        ];
        cb(data);
    });
}

const getConfig = (data) => ({
    rangeSelector: {
        selected: 4
    },

    yAxis: {
        labels: {
            formatter: function () {
                return (this.value > 0 ? ' + ' : '') + this.value + '%';
            }
        },
        plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
        }]
    },

    plotOptions: {
        series: {
            compare: 'percent'
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2
    },
    series: data
});

const CompareMultiple = () => (
    <Charts.AsyncChart getConfig={ getConfig } getJson={ getJson } >
        <Charts.HighStock />
    </Charts.AsyncChart>
)

export default CompareMultiple;
