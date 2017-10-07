import React from 'react';
import Chartist from 'chartist';
import _ from 'underscore';
import uid from 'node-uuid';

import { Colors } from './../../../../consts';

import SparklinePie from './../SparklinePie';

import classes from './SparklineDonut.scss';

const createDonutBackground = (width, height, radius, innerRadius, color) => {
    const iR = (typeof innerRadius === 'string' && innerRadius.includes('%')) ?
        (1 - (parseInt(innerRadius) / 100)) * radius : radius - innerRadius;

    const id = uid.v4();

    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
            className={classes.ctDonutBackground}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
        >
            <defs>
                <mask id={`donut-mask-${id}`}>
                    <rect width="100%" height="100%" fill="white"/>
                    <circle cx={ width / 2 } cy={ width / 2 } r={ iR }/>
                </mask>
            </defs>
            <circle id={`donut-background-${id}`} fill={ color } cx={ width / 2 } cy={ width / 2 } r={ radius } mask={`url(#donut-mask-${id})`} style={{opacity: 0.1}}/>
        </svg>
    );
}

const createSimpleDonutAnimation = (animationDuration, animationPlayed = false) => (data) => {
    if(data.type === 'slice' && data.index == 0 && !animationPlayed) {
        var pathLength = data.element._node.getTotalLength();

        // Set the dasharray so that we can animate
        // the dash-arrayoffset later
        data.element.attr({
            'stroke-dasharray': `${pathLength}px ${pathLength}px`
        });

        // Preapre the animation object
        const animationDefActiveHalf = {
            'stroke-dashoffset': {
                id: `anim${data.index}`,
                dur: animationDuration,
                from: `${-pathLength}px`,
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            }
        };


        data.element.attr({
            'stroke-dashoffset': `${-pathLength}px`
        });

        data.element.animate(animationDefActiveHalf, false);

        animationPlayed = true;
    }
};

export default class SparklineDonut extends SparklinePie {
    static propTypes = {
        radius: React.PropTypes.number,
        innerRadius: React.PropTypes.any,
        data: React.PropTypes.array,
        value: React.PropTypes.number,
        colors: React.PropTypes.array,
        color: React.PropTypes.string,
        animated: React.PropTypes.bool,
        animationDuration: React.PropTypes.number
    }

    static defaultProps = {
        radius: 30,
        innerRadius: '50%',
        value: 0,
        animated: false,
        animationDuration: 1000,
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
            donut: true,
            donutWidth: this.props.innerRadius,
            classNames: {
                chartDonut: classes.ctDonutChart,
                sliceDonut: classes.ctSliceDonut
            }
        };
    }

    componentDidMount() {
        this.initChart(this.refs.pieContainer);

        this.isChartSimple = (typeof this.props.data === 'undefined');

        if(this.props.animated) {
            if(this.isChartSimple && !this.animationPlayed) {
                this.chart.on('draw', createSimpleDonutAnimation(this.props.animationDuration));
                this.animationPlayed = true;
            }
        }
    }

    applySliceColor(sliceElement, color) {
        sliceElement.style.stroke = color;
    }

    getColors(isSingleValue) {
        return isSingleValue ? this.props.colors : [this.props.color, 'transparent'];
    }

    render() {
        const donutBackground =
            createDonutBackground(
                this.props.radius,
                this.props.radius,
                this.props.radius / 2,
                this.props.innerRadius,
                this.props.color
            );

        const otherProps  = _.omit(this.props,
            _.keys(SparklineDonut.propTypes));

        return (
            <div className={classes.ctDonutChart} { ...otherProps }>
                { donutBackground }
                <div className={classes.ctDonutFill} ref='pieContainer'></div>
            </div>
        );
    }
}
