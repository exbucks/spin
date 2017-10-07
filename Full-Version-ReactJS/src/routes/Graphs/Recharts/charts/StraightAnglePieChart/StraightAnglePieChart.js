import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    PieChart,
    Pie
} = Charts.Recharts;

import { dataPieChart } from './../../data';

const StraightAnglePieChart = props => (
    <ResponsiveContainer height={ 300 }>
        <PieChart>
            <Pie startAngle={180} stroke="#212121" endAngle={0} data={dataPieChart.data01} outerRadius={80} fill="#48B6F1" label/>
        </PieChart>
    </ResponsiveContainer>
);

export default StraightAnglePieChart;
