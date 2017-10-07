import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const chartType = 'Bar';
const chartData =  {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
    ]
};
const chartOptions = {
    stackBars: true,
    axisY: {
        labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
        }
    }
};

//===============Component================
const StackedBarChart = () => (
    <Charts.Chartist
        className={ classes.stackedBarChart }
        data={ chartData }
        options={ chartOptions }
        type={ chartType }
    />
);

export default StackedBarChart;
