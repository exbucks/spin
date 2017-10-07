import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} = Charts.Recharts;

import { dataPieChart } from './../../data';

const COLORS = ['#4CBAED', '#88B152', '#CB3E4B', '#E66C40'];

const PaddingAngleFull = props => (
    <ResponsiveContainer height={ 300 }>
        <PieChart>
            <Pie data={dataPieChart.data01} innerRadius={60} outerRadius={80} fill="#8884d8">
                {
                    dataPieChart.data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
);

export default PaddingAngleFull;
