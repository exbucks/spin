import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const chartType = 'Bar';
const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
};
const chartOptions = {
    seriesBarDistance: 10
};
const responsiveOptions = [
    ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        }
    }]
];

//===============Component================
const OverlappingBars = () => (
    <Charts.Chartist
        className={ classes.chartContainer }
        data={ chartData }
        responsiveOptions={ responsiveOptions }
        options={ chartOptions }
        type={ chartType }
    />
);

export default OverlappingBars;
