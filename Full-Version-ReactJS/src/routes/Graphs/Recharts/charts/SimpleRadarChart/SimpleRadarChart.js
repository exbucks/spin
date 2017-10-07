import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} = Charts.Recharts;

import { dataRadarChart } from './../../data';

const SimpleRadarChart = props => (
    <ResponsiveContainer height={ 300 }>
        <RadarChart outerRadius={130} data={dataRadarChart}>
            <Radar name="Mike" dataKey="A" stroke="#48B6F1" fill="#48B6F1" fillOpacity={0.3}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" stroke="white" />
            <PolarRadiusAxis/>
        </RadarChart>
    </ResponsiveContainer>
);

export default SimpleRadarChart;
