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

const StackedAreaChart = props => (
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
            <Area type='monotone' dataKey='uv' stackId="1" stroke='#47B4F3' fill='RGBA(72, 182, 241, 0.3)' />
            <Area type='monotone' dataKey='pv' stackId="1" troke='#41BDA8' fill='RGBA(65, 189, 168, 0.3)' />
            <Area type='monotone' dataKey='amt' stackId="1" stroke='#86B34D' fill='RGBA(134, 179, 77, 0.3)' />
        </AreaChart>
    </ResponsiveContainer>
);

export default StackedAreaChart;
