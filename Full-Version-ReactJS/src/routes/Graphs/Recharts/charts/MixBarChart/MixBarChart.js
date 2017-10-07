import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    Legend,
    YAxis,
    XAxis
} = Charts.Recharts;

import { dataGender } from './../../data';

const MixBarChart = props => (
    <ResponsiveContainer height={ 300 }>
        <BarChart
            height={300}
            data={dataGender}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
            <XAxis dataKey="name"/>
            <YAxis />
            <CartesianGrid />
            <Tooltip />
            <Legend />
            <Bar dataKey="female" stackId="a" fill="#47B4F3" />
            <Bar dataKey="male" stackId="a" fill="#3BBDA8" />
            <Bar dataKey="uv" fill="#86B34D"/>
        </BarChart>
    </ResponsiveContainer>
);

export default MixBarChart;
