import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    Legend,
    YAxis,
    XAxis
} = Charts.Recharts;

import { data } from './../../data';

const CustomizedLabel = props => {
    const {x, y, stroke, value} = props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
};

const CustomizedAxisTick = props => {
    const {x, y, stroke, payload} = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
        </g>
    );
};

const CustomizedLabelLineChart = props => (
    <ResponsiveContainer height={ 300 }>
        <LineChart
            height={300}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
            tick={<CustomizedAxisTick/>}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#47B4F3" dot={{ fill: "#47B4F3" }} label={<CustomizedLabel />} />
            <Line type="monotone" dataKey="uv" stroke="#3BBDA8"  dot={{ fill: "#3BBDA8" }} />
        </LineChart>
    </ResponsiveContainer>
);

export default CustomizedLabelLineChart;
