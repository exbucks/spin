import React, { PropTypes } from 'react';
import deepAssign from 'assign-deep';
import _ from 'underscore';
import ReactHighstock from 'react-highcharts/bundle/ReactHighstock';
import ReactHighcharts from 'react-highcharts/bundle/ReactHighcharts';

import theme from './../../highcharts-theme';

const updateChartSeries = (chart, currentSeries, nextSeries) => {
    let result = false;

    for(let i = 0; i < currentSeries.length; i++) {
        const currentSerie = currentSeries[i];
        const nextSerie = nextSeries[i];

        const addedData = _.difference(nextSerie.data, currentSerie.data);
        const removedData = _.difference(currentSerie.data, nextSerie.data);

        if(addedData.length > 0) {
            addedData.forEach((data) => {
                chart.series[i].addPoint(data);
            });
            result = true;
        }

        if(removedData.length > 0) {
            removedData.forEach((data) => {
                chart.series[i].removePoint(data);
            });
            result = true;
        }
    }

    return result;
}

class HighchartBase extends React.Component {
    static propTypes = {
        config: PropTypes.object,
        dynamicUpdate: PropTypes.bool,
    }

    static defaultProps = {
        config: { },
        dynamicUpdate: false
    }

    getChartConfig() {
        return { };
    }

    isHighstock() {
        return false;
    }

    constructor(props, context) {
        super(props, context);

        this.state = Object.assign({}, this.state, {
            chartConfig: deepAssign({}, theme, this.getChartConfig()
                , this.props.config)
        });
        this.Chart = this.isHighstock() ? ReactHighstock : ReactHighcharts;
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.dynamicUpdate && updateChartSeries(this.chartObject, this.props.config.series,
            nextProps.config.series)) {
            return;
        }

        this.setState(Object.assign({}, this.state, {
            chartConfig: deepAssign({}, theme, this.getChartConfig()
                , nextProps.config)
        }));
    }

    componentDidMount() {
        // Reflow when the browser finishes rendering
        setTimeout(()=> {
            this.chartObject.reflow();
        }, 0);
    }

    render() {
        const otherProps = _.omit(this.props, [
            ..._.keys(HighchartBase.propTypes),
            'contentView', 'sidebarStyle', 'sidebarEnabled', 'dispatch'
        ]);

        return (
            <div { ...otherProps }>
                <this.Chart
                    config={ this.state.chartConfig }
                    isPureConfig={true}
                    callback={ (chart) => this.chartObject = chart }
                />
            </div>
        )
    }
}

export default HighchartBase;
