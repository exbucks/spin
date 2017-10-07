import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import tinycolor from 'tinycolor2';

import Chartist from 'chartist';
import 'chartist/dist/chartist.css';
import classes from './SparklinePie.scss';

import { Colors } from './../../../../consts';

export default class SparklinePie extends React.Component {
    static propTypes = {
        radius: React.PropTypes.number,
        children: React.PropTypes.array,
        data: React.PropTypes.array,
        value: React.PropTypes.number,
        colors: React.PropTypes.array,
        color: React.PropTypes.string,
        animated: React.PropTypes.bool,
        animationDuration: React.PropTypes.number
    }

    static defaultProps = {
        radius: 30,
        value: 0,
        colors: [
            Colors.brandPrimary,
            Colors.brandInfo,
            Colors.brandWarning,
            Colors.brandDanger,
            Colors.brandSuccess
        ],
        color: Colors.brandPrimary
    }

    getChartSettings() {
        return {
            labelInterpolationFnc: () => '',
            width: this.props.radius,
            height: this.props.radius,
            chartPadding: 0,
            classNames: {
                chartPie: classes.ctPieChart,
                slicePie: classes.ctSlicePie
            }
        };
    }

    getData(props) {
        const dataProps = props || this.props;
        const data = dataProps.children || dataProps.data || [this.props.value];

        if(data.length > 1) {
            // When there are more then 1 values =>
            const multipleSeries = _.map(data, (item, index) => {
                return {
                    value: item,
                    className: `sparkline-slice-${ index }`
                }
            });

            return { series: multipleSeries };
        } else if(data.length === 1) {
            const gaugeSeries = Object.assign({}, data, {
                series: [
                    {
                        value: data[0],
                        className: 'sparkline-slice-0'
                    },
                    {
                        value: 100 - data[0],
                        className: 'sparkline-slice-1'
                    }
                ]
            });

            return gaugeSeries;
        } else {
            throw new Error('Spin.SparklinePie: No data provided for the chart');
        }
    }

    applySliceColor(sliceElement, color) {
        sliceElement.style.fill = color;
    }

    getColors(isSingleValue = false) {
        return isSingleValue ? this.props.colors : [this.props.color, tinycolor(this.props.color).setAlpha(.1).toRgbString()]
    }

    applySlicesColors(container, series) {
        const colors = this.getColors((typeof this.props.data !== 'undefined'));

        series.forEach((value, index) => {
            const sliceElement = container.querySelector(`.sparkline-slice-${index} > path`);
            if(sliceElement) {
                const colorIndex = index >= colors.length ?
                    index % colors.length : index;
                this.applySliceColor(sliceElement, colors[colorIndex]);
            }
        });
    }

    initChart(element) {
        const data = this.getData();
        const defaultSettings = this.getChartSettings();

        this.chart = new Chartist.Pie(this.refs.pieContainer, data, defaultSettings);
        this.chart.on('created', () => {
            this.applySlicesColors(this.refs.pieContainer, data.series || []);
        });
    }

    componentDidMount() {
        this.initChart(this.refs.pieContainer);
    }

    componentWillReceiveProps(nextProps) {
        if(!_.isEqual(this.props, nextProps)) {
            const newSettings = this.getChartSettings();
            const data = this.getData(classes, nextProps);

            this.chart.update(data, newSettings);
        }
    }

    componentWillUnmount() {
        if(this.chart) {
            this.chart.detach();
        }
    }

    render() {
        const otherProps  = _.omit(this.props,
            _.keys(SparklinePie.propTypes));

        return (
            <div className={classes['ctPieChart']} ref='pieContainer' { ...otherProps }></div>
        );
    }
}
