import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    Legend,
    YAxis,
    XAxis
} = Charts.Recharts;

import { data } from './../../data';

const SimpleAreaChart = props => (
    <ResponsiveContainer height={ 300 }>
        <AreaChart
            data={ data }
            margin={{top: 20, right: 30, left: 20, bottom: 5}}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid />
            <Tooltip />
            <Legend  />
            <Area type='monotone' dataKey='uv' stroke='#47B4F3' fill="rgba(72, 182, 241, 0.3)" dot={{ fill: "#47B4F3" }} />
        </AreaChart>
    </ResponsiveContainer>
);

export default SimpleAreaChart;
