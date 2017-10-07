import React from 'react';

import {
    Row,
    Col,
    Panel,
    Charts,
    CollapsablePanel
} from 'components';

const chartConfig = {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.3,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

    }]
};

const Results = (panelProps) => (
    <CollapsablePanel
        title='Results #2'
        footer={(
            <p className='m-y-0 text-center'>
                <a href='javascript:;' className='text-muted'>
                    See More <i className='fa fa-angle-right fa-fw'></i>
                </a>
            </p>
        )}
        { ...panelProps }
    >
        <Charts.HighchartBasicColumn config={ chartConfig } />
    </CollapsablePanel>
);

export default Results;
