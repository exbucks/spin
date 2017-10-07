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
    PolarRadiusAxis,
    Legend
} = Charts.Recharts;

import { dataRadarChart } from './../../data';

const SpecifiedDomainRadarChart = props => (
    <ResponsiveContainer height={ 300 }>
        <RadarChart outerRadius={120} data={dataRadarChart}>
            <Radar name="Mike" dataKey="A" stroke="#48B6F1" fill="#48B6F1" fillOpacity={0.3}/>
            <Radar name="Lily" dataKey="B" stroke="#41BDA8" fill="#41BDA8" fillOpacity={0.3}/>
            <PolarGrid />
            <Legend />
            <PolarAngleAxis dataKey="subject" stroke="white" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#fff"/>
        </RadarChart>
    </ResponsiveContainer>
);

export default SpecifiedDomainRadarChart;
