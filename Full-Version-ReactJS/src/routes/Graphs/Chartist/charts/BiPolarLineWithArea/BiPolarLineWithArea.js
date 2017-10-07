import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const chartType = 'Line';
const chartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
        [1, 2, 3, 1, -2, 0, 1, 0],
        [-2, -1, -2, -1, -2.5, -1, -2, -1],
        [0, 0, 0, 1, 2, 2.5, 2, 1],
        [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
    ]
};
const chartOptions = {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
        showLabel: false,
        showGrid: false
    }
};

//===============Component================
const BiPolarLineWithArea = () => (
    <Charts.Chartist
        className={ classes.chartContainer }
        data={ chartData }
        options={ chartOptions }
        type={ chartType }
    />
);

export default BiPolarLineWithArea;
