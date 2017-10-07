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

const TwoLevelPieChart = props => (
    <ResponsiveContainer height={ 300 }>
        <PieChart height={ 300 }>
            <Pie data={dataPieChart.data01} outerRadius={60} fill="#48B6F1" />
            <Pie data={dataPieChart.data02} innerRadius={70} outerRadius={90} fill="#41BDA8" label />
        </PieChart>
    </ResponsiveContainer>
);

export default TwoLevelPieChart;
