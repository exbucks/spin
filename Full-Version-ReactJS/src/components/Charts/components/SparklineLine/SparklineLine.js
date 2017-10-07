import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Colors } from './../../../../consts';
import _ from 'underscore';

export default class SparklineLine extends React.Component{
    static propTypes = {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        children: React.PropTypes.array,
        data: React.PropTypes.array,
        color: React.PropTypes.string,
        limit: React.PropTypes.number,
        block: React.PropTypes.bool,
        style: React.PropTypes.object,
        chartStyle: React.PropTypes.object,
        fullWidth: React.PropTypes.bool
    }

    static defaultProps = {
        color: Colors.brandPrimary,
        width: false,
        height: false,
        limit: null,
        style: { },
        chartStyle: { },
        fullWidth: false
    }

    render() {
        const data = this.props.children || this.props.data;
        if(!data) {
            throw new Error('Spin.SparklineLine: No data passed to the chart');
        }
        const {width, height, color, limit, chartStyle} = this.props;

        const style = {
            ...this.props.style,
            display: this.props.block ? 'block' : 'inline-block',
            width: this.props.fullWidth ? '100%' : `${width}px`,
            height: `${height}px`
        };

        const otherProps  = _.omit(this.props,
            _.keys(SparklineLine.propTypes));

        return (
            <Sparklines width={ width } height={ height } limit={ limit || data.length } data={ data } style={ style } { ...otherProps }>
              <SparklinesLine color={ color } style={ chartStyle } />
            </Sparklines>
        );
    }
}
