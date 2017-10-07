import React from 'react';
import uid from 'node-uuid';

import {
    Row,
    Col,
    Panel,
    Media,
    Table,
    Charts,
    CollapsablePanel,
    Label
} from 'components';

import { Colors } from 'consts';

import classes from './DonutWithLegend.scss';

const DonutWithLegend = (panelProps) => (
    <CollapsablePanel
        title='Donut with Legend'
        footer={(
            <p className='m-y-0 text-center'>
                <a href='javascript:;' className='text-muted'>
                    See More <i className='fa fa-angle-right fa-fw'></i>
                </a>
            </p>
        )}
        { ...panelProps }
    >
        <Media>
            <Media.Left align='middle'>
                <Charts.SparklineDonut
                    radius={ 56 }
                    innerRadius={ 10 }
                    colors={ [ Colors.brandSuccess, Colors.brandCaper, '#2b2f26' ] }
                    data={ [ 13, 42, 45 ] }
                />
            </Media.Left>
            <Media.Body>
                <p className='m-y-0'>
                    <i className='fa fa-fw fa-circle m-x-1 text-success'></i>
                    <span className='text-white'>
                        12
                    </span>
                    { ' Pending' }
                </p>
                <p className='m-y-0'>
                    <i className='fa fa-fw fa-circle m-x-1 text-caper'></i>
                    <span className='text-white'>
                        42
                    </span>
                    { ' Behind' }
                </p>
                <p className='m-y-0'>
                    <i className='fa fa-fw fa-circle m-x-1 text-green-darker'></i>
                    <span className='text-white'>
                        45
                    </span>
                    { ' Completed' }
                </p>
            </Media.Body>
        </Media>
    </CollapsablePanel>
);

export default DonutWithLegend;
