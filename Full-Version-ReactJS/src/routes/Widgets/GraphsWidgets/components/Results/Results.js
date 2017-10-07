import React from 'react';

import {
    Row,
    Col,
    Panel,
    Charts,
    SlimProgressBar,
    CollapsablePanel
} from 'components';

const chartConfig = {
    chart: {
        type: 'area',
        spacingBottom: 0,
        spacingTop: 0,
        height: 272,
    },
    title: {
        text: ''
    },
    exporting: {
        enabled: false
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
        borderWidth: 0
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['', '', '', '', '', '', '', '', '', '', '', ''],
        lineColor: 'transparent',
        tickColor: 'transparent'
    },
    yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        tickColor: 'transparent',
        labels: {
            enabled: false
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
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2014',
        data: [8, 1, 4, 4, 5, 2, 3, 7, 8, 3, 5 ,6],
        lineWidth: '1',
        marker: {
            symbol: 'circle'
        },
        color: '#2E9BDA',
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, 'rgba(45, 153, 220, .4)'],
                [1, 'rgba(45, 153, 220, 0)']
            ]
        }
    }]
};

const valueStyle = {
    fontSize: '3.5rem',
    fontWeight: '300',
    lineHeight: 1.6,
    margin: 0,
    color: '#fff'
};

const Results = (panelProps) => (
    <CollapsablePanel
        title='Results'
        footer={(
            <p className='m-y-0 text-center'>
                <a href='javascript:;' className='text-muted'>
                    See More <i className='fa fa-angle-right fa-fw'></i>
                </a>
            </p>
        )}
        { ...panelProps }
    >
        <p style={ valueStyle }>
            65 %
        </p>
        <p>
            981 Companies
        </p>
        <Charts.HighchartBasicLine config={ chartConfig } />
    </CollapsablePanel>
);

export default Results;
