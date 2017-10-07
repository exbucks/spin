import React from 'react';
import _ from 'underscore'
import { Sparklines } from 'react-sparklines';
import CustomSparklinesBar from './CustomSparklinesBar';
import { Colors } from 'consts';

export default class SparklineBar extends React.Component {
    static propTypes = {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        children: React.PropTypes.array,
        data: React.PropTypes.array,
        color: React.PropTypes.string,
        block: React.PropTypes.bool
    }

    static defaultProps = {
        color: Colors.brandPrimary,
        width: 32,
        height: 16
    }

    render() {
        const data = this.props.children || this.props.data;
        if(!data) {
            throw new Error('Spin.SparklineBar: No data passed to the chart');
        }

        const {width, height, color, className} = this.props;
        const adjustedBarWidth =  ((width - data.length) / data.length);

        const style = {
            display: this.props.block ? 'block' : 'inline-block',
            width: `${width}px`,
            height: `${height}px`
        };

        const otherProps  = _.omit(this.props,
            [..._.keys(SparklineBar.propTypes), 'style']);

        return (
            <Sparklines
                data={ data }
                width={ width }
                height={ height }
                style={ Object.assign({}, this.props.style, style) } { ...otherProps }
            >
              <CustomSparklinesBar barWidth={ adjustedBarWidth } style={{fill: color}}/>
            </Sparklines>
        );
    }
}
