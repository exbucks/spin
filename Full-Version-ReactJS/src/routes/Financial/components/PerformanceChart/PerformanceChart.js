import React, { PropTypes } from 'react';
import tinycolor from 'tinycolor2';
import _ from 'underscore';
import { Colors } from './../../../../consts';

import { Charts } from 'components';

const getChartData = (data) => {
    const colors = [
        '#CB3E4B',
        '#3BBDA8',
        '#A072FC'
    ];

    return _.map(data, (stream, i) => {
        const color = i >= colors.length ? _.last(colors) : colors[i];

        return {
            name: stream.Year,
            data: stream.Data,
            lineWidth: 1,
            color: color,
            fillColor: {
                linearGradient: {
                    x1: 0, y1: 0,
                    x2: 0, y2: 1
                },
                stops: [
                    [0, tinycolor(color).setAlpha(.2).toString()],
                    [1, tinycolor(color).setAlpha(0).toString()]
                ]
            }
        };
    });
}

const getChartConfig = (series) => ({
    chart: {
        spacingBottom: 30,
        height: 293
    },
    subtitle: {
        text: '',
        floating: true,
        align: 'right',
        verticalAlign: 'bottom',
        y: 15
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 0,
        backgroundColor: Colors.grayBase
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.x + ': ' + this.y;
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5,
            marker: {
                radius: 4
            }
        }
    },
    series: series
});

const PerformanceChart = (props) => (
    <Charts.HighchartBasicArea config={ getChartConfig( getChartData(props.data) ) } />
);

PerformanceChart.propTypes = {
    data: PropTypes.array.isRequired
}

export default PerformanceChart;
