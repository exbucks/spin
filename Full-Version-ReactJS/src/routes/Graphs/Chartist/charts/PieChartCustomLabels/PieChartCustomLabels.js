import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const chartType = 'Pie';
const chartData = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
};
const chartOptions = {
    labelInterpolationFnc: value => value[0]
};
const responsiveOptions = [
    ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc: value => value
    }],
    ['screen and (min-width: 1024px)', {
        labelOffset: 80,
        chartPadding: 20
    }]
];
//===============Component================
const PieChartCustomLabels = () => (
    <Charts.Chartist
        className={ classes.chartContainer }
        data={ chartData }
        options={ chartOptions }
        responsiveOptions={ responsiveOptions }
        type={ chartType }
    />
);

export default PieChartCustomLabels;
