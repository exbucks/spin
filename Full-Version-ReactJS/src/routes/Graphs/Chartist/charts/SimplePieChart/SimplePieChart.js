import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const sum = (a, b) => a + b;

const chartType = 'Pie';
const chartData = {
    series: [5, 3, 4]
};
const chartOptions = {
    labelInterpolationFnc: value =>
        Math.round(value / chartData.series.reduce(sum) * 100) + '%'
};

//===============Component================
const SimplePieChart = () => (
    <Charts.Chartist
        className={ classes.chartContainer }
        data={ chartData }
        options={ chartOptions }
        type={ chartType }
    />
);

export default SimplePieChart;
