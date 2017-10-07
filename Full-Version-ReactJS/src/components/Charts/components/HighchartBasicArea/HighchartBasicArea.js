import React, { PropTypes } from 'react';
import HighchartBase, { connect } from './../HighchartBase';
import { Colors } from './../../../../consts';
import tinycolor from 'tinycolor2';

class HighchartBasicArea extends HighchartBase {
    getChartConfig() {
        return {
            chart: {
                type: 'area'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    animation: false,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Colors.brandPrimary],
                            [1, tinycolor(Colors.brandPrimary).setAlpha(0).toString()]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            }
        };
    }
}

export default connect(HighchartBasicArea);
