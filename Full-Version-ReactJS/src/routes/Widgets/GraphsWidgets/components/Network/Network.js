import React from 'react';
import ReactInterval from 'react-interval';
import _ from 'underscore';
import uid from 'node-uuid';

import {
    Grid,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    ButtonGroup,
    Button,
    Table,
    CollapsablePanel,
    Charts
} from 'components';

import { Colors } from 'consts';

import classes from './Network.scss';

const CHART_TOTAL_POINTS = 22;

const chartPoints = [2, 4, 0, 0, 0, 0, 1, 4, 4, 10, 10, 10, 10, 0, 0, 0, 4, 6, 5, 9, 10];

const Network = (panelProps) => (
    <CollapsablePanel
        title='Network'
        footer={(
            <p className='m-y-0 text-center'>
                <a href='javascript:;' className='text-muted'>
                    See More <i className='fa fa-angle-right fa-fw'></i>
                </a>
            </p>
        )}
        fill
        className={ classes.grayPanel }
        { ...panelProps }
    >
        <Grid fluid>
            <Row className='p-t-1'>
                <Col lg={ 12 }>
                    <h5 className='text-center'>
                        Interface Traffic
                        { ' ' }
                        <small>(re0)</small>
                    </h5>
                    <p className='m-b-2 text-center'>
                        Intel Celeron G1610
                        { ' ' }
                        <small>
                            @2,66GHz
                            { ' ' }
                            <i className='fa fa-fw fa-info-circle'></i>
                        </small>
                    </p>
                    <Charts.SparklineLine
                        data={ chartPoints }
                        width={ 328 }
                        height={ 60 }
                        fullWidth
                    />
                </Col>
            </Row>
        </Grid>
    </CollapsablePanel>
);

export default Network;
