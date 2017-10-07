import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const chartType = 'Bar';
const chartData = {
    labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
    series: [
        [60000, 40000, 80000, 70000],
        [40000, 30000, 70000, 65000],
        [8000, 3000, 10000, 6000]
    ]
};
const chartOptions = {
    seriesBarDistance: 10,
    axisX: {
        offset: 60
    },
    axisY: {
        offset: 80,
        labelInterpolationFnc: function(value) {
            return value + ' CHF'
        },
        scaleMinSpace: 15
    }
};

//===============Component================
const MultiLineLabels = () => (
    <Charts.Chartist
        className={ classes.chartContainer }
        data={ chartData }
        options={ chartOptions }
        type={ chartType }
    />
);

export default MultiLineLabels;
