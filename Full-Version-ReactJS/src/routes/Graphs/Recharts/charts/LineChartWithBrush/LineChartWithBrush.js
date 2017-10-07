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
    XAxis,
    Brush
} = Charts.Recharts;

import { data } from './../../data';

const LineChartWithBrush = props => (
    <ResponsiveContainer height={ 300 }>
        <LineChart
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#47B4F3" dot={{ fill: "#47B4F3" }} />
            <Line type="monotone" dataKey="uv" stroke="#3BBDA8"  dot={{ fill: "#3BBDA8" }} />
            <Brush />
        </LineChart>
    </ResponsiveContainer>
);

export default LineChartWithBrush;
