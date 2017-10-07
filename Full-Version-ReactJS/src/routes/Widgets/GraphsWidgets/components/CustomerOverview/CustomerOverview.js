import React from 'react';

import {
    Row,
    Col,
    Panel,
    Charts,
    CollapsablePanel
} from 'components';

import analyticsChartData from './../../../../../consts/data/analytics-chart.json';

const chartConfig = {
    title: '',
    yAxis: {
        title: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1
    },
    legend: {
        layout: 'horizontal',
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },
    plotOptions: {
        line: {
            lineWidth: 1,
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: 'Visits',
        data: analyticsChartData.Visits,
        lineWidth: 1,
        marker: {
            radius: 4
        }
    }, {
        name: 'Unique Visitors',
        data: analyticsChartData.UniqueVisitors,
        lineWidth: 1
    }]
};

const CustomerOverview = (panelProps) => (
    <CollapsablePanel
        title='Customer Overview'
        footer={(
            <p className='m-y-0 text-center'>
                <a href='javascript:;' className='text-muted'>
                    See More <i className='fa fa-angle-right fa-fw'></i>
                </a>
            </p>
        )}
        { ...panelProps }
    >
        <Charts.HighchartBasicLine config={ chartConfig } />
    </CollapsablePanel>
);

export default CustomerOverview;
