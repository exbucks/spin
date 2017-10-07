/* Perfect Component, nothing to Wrap here - just export the module
with basic components styling */
import React from 'react';
import * as Recharts from 'recharts';
import { Colors } from 'consts';
import uid from 'node-uuid';

const {
    YAxis: RechartsYAxis,
    XAxis: RechartsXAxis,
    CartesianGrid: RechartsCartesianGrid,
    PolarGrid: ReachartsPolarGrid,
    Tooltip: RechartsTooltip,
    Line: RechartsLine,
    Area: RechartsArea,
    Pie: RechartsPie,
    Treemap: RechartsTreemap,
    ReferenceLine: RechartsReferenceLine,
} = Recharts;

class XAxis extends RechartsXAxis {
    static defaultProps = Object.assign({}, RechartsXAxis.defaultProps, {
        stroke: "#404040"
    });
}

class YAxis extends RechartsYAxis {
    static defaultProps = Object.assign({}, RechartsYAxis.defaultProps, {
        stroke: "#404040"
    });
}

const CartesianGrid = props => {
    const extendedProps = {
        ...props,
        strokeDasharray: '3 3',
        stroke: '#303030'
    }

    return <RechartsCartesianGrid { ...extendedProps } />
}

const PolarGrid = props => {
    const extendedProps = {
        ...props,
        stroke: '#404040'
    }

    return <ReachartsPolarGrid { ...extendedProps } />
}

const Tooltip = props => {
    const extendedProps = {
        ...props,
        wrapperStyle: {
            ...props.wrapperStyle,
            background: '#282828',
            borderWidth: '1px',
            borderColor: '#282828'
        }
    }

    return <RechartsTooltip { ...extendedProps } />
}

class Line extends RechartsLine {
    static defaultProps = {
        ...RechartsLine.defaultProps,
        dot: {
            ...RechartsLine.defaultProps.dot,
            stroke: '#212121',
            strokeWidth: '1',
        },
        activeDot: {
            ...RechartsLine.defaultProps.activeDot,
            stroke: '#212121',
            strokeWidth: '2',
            r: 10
        }
    }
}

class Area extends RechartsArea {
    static defaultProps = {
        ...RechartsArea.defaultProps,
        dot: {
            ...RechartsArea.defaultProps.dot,
            stroke: '#212121',
            strokeWidth: '1',
        },
        activeDot: {
            ...RechartsArea.defaultProps.activeDot,
            stroke: '#212121',
            strokeWidth: '2',
            r: 10
        }
    }
}

class Pie extends RechartsPie {
    static defaultProps = {
        ...RechartsPie.defaultProps,
        stroke: '#212121'
    }
}

class Treemap extends RechartsTreemap {
    static defaultProps = {
        ...RechartsTreemap.defaultProps,
        stroke: '#212121'
    }
}

const ReferenceLine = props => {
    const extendedProps = Object.assign({}, {
        stroke: '#000'
    }, props);

    return <RechartsReferenceLine { ...extendedProps } />
}

export default Object.assign({}, Recharts, {
    XAxis,
    YAxis,
    CartesianGrid,
    PolarGrid,
    Tooltip,
    Line,
    Area,
    Pie,
    Treemap,
    ReferenceLine
})
