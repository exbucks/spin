import React, { PropTypes } from 'react';
import _ from 'underscore';
import moment from 'moment';

import {
    Panel,
    Button,
    ButtonGroup,
    Charts
} from 'components';

import classes from './MoneyMap.scss';
// ------------------------------------
// Consts
// ------------------------------------
const DataPeriod = {
    Today: 'today',
    ThisWeek: 'this-week',
    LastWeek: 'last-week'
};

const ChartType = {
    Pie: 'pie',
    Bar: 'bar'
}
// ------------------------------------
// Chart Settings etc.
// ------------------------------------
const getPieChartConfig = (data) => (
    {
        chart: {
            height: 314
        },
        legend: {
            enabled: true,
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 0,
            y: 100
        },
        series: [{
            name: 'Value',
            data
        }]
    }
);

const getBarChartConfig = (series) => (
    {
        chart: {
            height: 314
        },
        series: _.map(series, (serie) => ({
            name: serie.name,
            data: _.map(serie.data, (d) =>(
                d.y
            )),
            color: serie.color
        })),
        plotOptions: {
            column: {
                borderWidth: 1,
                borderColor: 'black',
                pointPadding: 0.2
            }
        },
        legend: {
            enabled: true,
            verticalAlign: 'bottom',
            layout: 'horizontal',
            width: '100%',
            itemMarginTop: 10
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0; text-align: right"><b>{point.y:.2f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        xAxis: {
            categories: _.map(series[0].data, (d) =>
                moment(d.x).format('DD MMM')),
            crosshair: true,
            title: {
                text: ''
            }
        }
    }
);

const getChartData = (chartData, type, period) => {
    const colorSequence = [
        '#2E9BDA',
        '#3BBDA8',
        '#CB3E4B',
        '#A072FC'
    ];

    if(type === ChartType.Pie) {
        return _.map(chartData, (serie, index) => {
            let newData;
            const sumData = (data) => _.reduce(_.map(data, (d) => d.y),
                (mem, val) => mem + val);

            switch(period) {
                case DataPeriod.LastWeek:
                    newData = sumData(_.first(serie.data, 7));
                break;
                case DataPeriod.ThisWeek:
                    newData = sumData(_.last(serie.data, 7));
                break;
                case DataPeriod.Today:
                    newData = _.last(serie.data).y;
                break;
            }

            return {
                name: serie.name,
                y: newData,
                color: colorSequence[index]
            };
        });
    } else {
        return _.map(chartData, (serie, index) => {
            let newData;

            switch(period) {
                case DataPeriod.LastWeek:
                    newData = _.first(serie.data, 7);
                break;
                case DataPeriod.ThisWeek:
                default:
                    newData = _.last(serie.data, 7);
                break;
            }

            return {
                name: serie.name,
                data: newData,
                color: colorSequence[index]
            };
        });
    }
}
// ------------------------------------
// Component
// ------------------------------------
export default class MoneyMap extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            type: ChartType.Pie,
            period: DataPeriod.LastWeek
        }
    }

    setPeriod(periodValue) {
        this.setState(Object.assign({}, this.state, {
            period: periodValue
        }));
    }

    setType(chartType) {
        // If chart is set to Bar and the period is set for Today -
        // change the period to ThisWeek
        const correctedPeriod =
            (chartType == ChartType.Bar && this.state.period == DataPeriod.Today)
            ? DataPeriod.ThisWeek : this.state.period;

        this.setState(Object.assign({}, this.state, {
            type: chartType,
            period: correctedPeriod
        }));
    }


    render() {
        const chartData = getChartData(this.props.data, this.state.type
            , this.state.period);

        const panelHeader = (
            <div className={classes.controls}>
                <ButtonGroup bsSize="small">
                    <Button
                        active={ this.state.period === DataPeriod.LastWeek }
                        onClick={ () => this.setPeriod(DataPeriod.LastWeek) }
                    >
                        Last Week
                    </Button>
                    <Button
                        active={ this.state.period === DataPeriod.ThisWeek }
                        onClick={ () => this.setPeriod(DataPeriod.ThisWeek) }
                    >
                        This Week
                    </Button>
                    {
                        (this.state.type === ChartType.Pie) ?
                            <Button
                                active={ this.state.period === DataPeriod.Today }
                                onClick={ () => this.setPeriod(DataPeriod.Today) }
                            >
                                Today
                            </Button> : false
                    }
                </ButtonGroup>

                <ButtonGroup bsSize="small">
                    <Button
                        active={ this.state.type === ChartType.Pie }
                        onClick={ () => this.setType(ChartType.Pie) }
                    >
                        <i className="fa fa-pie-chart"></i>
                    </Button>
                    <Button
                        active={ this.state.type === ChartType.Bar }
                        onClick={ () => this.setType(ChartType.Bar) }
                    >
                        <i className="fa fa-bar-chart"></i>
                    </Button>
                </ButtonGroup>
            </div>
        );

        return (
            <Panel
                header={ panelHeader }
                className={ classes.panel }
            >
                {
                    this.state.type === ChartType.Pie ?
                        <Charts.HighchartBasicPie config={ getPieChartConfig(chartData) } /> :
                        <Charts.HighchartBasicColumn config={ getBarChartConfig(chartData) } />
                }
            </Panel>
        )
    }
}
