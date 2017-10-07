import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip
} = Charts.Recharts;

import { dataPieChart } from './../../data';

const DonutChart = props => (
    <ResponsiveContainer height={ 300 }>
        <PieChart>
            <Pie data={dataPieChart.data01} innerRadius={40} outerRadius={80} fill="#48B6F1" />
            <Tooltip itemStyle={{ color: '#fff' }}/>
        </PieChart>
    </ResponsiveContainer>
);

export default DonutChart;
