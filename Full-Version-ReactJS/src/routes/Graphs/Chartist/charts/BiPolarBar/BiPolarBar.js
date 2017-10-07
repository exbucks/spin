import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const chartType = 'Bar';
const chartData = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
};
const chartOptions = {
    high: 10,
    low: -10,
    axisX: {
        labelInterpolationFnc: (value, index) => (index % 2 === 0 ? value : null)
    }
};

//===============Component================
const BiPolarBar = () => (
    <Charts.Chartist
        className={ classes.chartContainer }
        data={ chartData }
        options={ chartOptions }
        type={ chartType }
    />
);

export default BiPolarBar;
