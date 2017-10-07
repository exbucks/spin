import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const chartType = 'Pie';
const chartData = {
    series: [20, 10, 30, 40]
};
const chartOptions = {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false
};

//===============Component================
const GaugeChart = () => (
    <Charts.Chartist
        className={ classes.chartContainer }
        data={ chartData }
        options={ chartOptions }
        type={ chartType }
    />
);

export default GaugeChart;
