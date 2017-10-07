import React, { PropTypes } from 'react';

import HighchartBase, { connect } from './../HighchartBase';

class HighchartBasicColumn extends HighchartBase {
    getChartConfig() {
        return {
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
                animation: true
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
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
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            }
        }
    }
}

export default connect(HighchartBasicColumn);
