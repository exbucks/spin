import React from 'react';

import { Charts } from 'components';

import classes from './../../Chartist.scss';

//================Settings=================
const times = n => Array.apply(null, new Array(n));

const chartType = 'Line';
const chartData = times(52).map(Math.random).reduce((data, rnd, index) => {
        data.labels.push(index + 1);
        data.series.forEach(series => {
            series.push(Math.random() * 100)
        });

        return data;
    }, {
        labels: [],
        series: times(4).map(() => new Array())
    });

const chartOptions = {
    showLine: false,
    axisX: {
        labelInterpolationFnc: (value, index) => (index % 13 === 0 ? 'W' + value : null)
    }
};

const responsiveOptions = [
    ['screen and (min-width: 640px)', {
        axisX: {
            labelInterpolationFnc: (value, index) => (index % 4 === 0 ? 'W' + value : null)
        }
    }]
];

//===============Component================
const ScatterWithResponsive = () => (
    <Charts.Chartist
        className={ classes.chartContainer }
        data={ chartData }
        options={ chartOptions }
        responsiveOptions={ responsiveOptions }
        type={ chartType }
    />
);

export default ScatterWithResponsive;
