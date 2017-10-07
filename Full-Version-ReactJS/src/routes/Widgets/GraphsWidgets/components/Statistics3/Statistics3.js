import React from 'react';
import uid from 'node-uuid';

import {
    Row,
    Col,
    Panel,
    Media,
    ListGroup,
    ListGroupItem,
    ProgressBar,
    SlimProgressBar,
    CollapsablePanel
} from 'components';

import { Colors } from 'consts';

import classes from './Statistics3.scss';

const Statistics3 = (panelProps) => (
    <CollapsablePanel
        title='Statistics #3'
        footer={(
            <p className='m-y-0 text-center'>
                <a href='javascript:;' className='text-muted'>
                    See More <i className='fa fa-angle-right fa-fw'></i>
                </a>
            </p>
        )}
        fill
        { ...panelProps }
    >
        <ListGroup className={ classes.list }>
            <ListGroupItem>
                <Row>
                    <Col sm={ 6 }>
                        <span className='text-white m-r-1'>
                            81 %
                        </span>
                        Clicks
                    </Col>
                    <Col sm={ 6 } className='text-right'>
                        567
                    </Col>
                    <Col sm={ 12 } className='p-t-1'>
                        <SlimProgressBar now={ 81 } />
                    </Col>
                </Row>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col sm={ 6 }>
                        <span className='text-white m-r-1'>
                            34 %
                        </span>
                        Unique Clicks
                    </Col>
                    <Col sm={ 6 } className='text-right'>
                        98
                    </Col>
                    <Col sm={ 12 } className='p-t-1'>
                        <SlimProgressBar now={ 81 } bsStyle='success' />
                    </Col>
                </Row>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col sm={ 6 }>
                        <span className='text-white m-r-1'>
                            52 %
                        </span>
                        Impressions
                    </Col>
                    <Col sm={ 6 } className='text-right'>
                        67
                    </Col>
                    <Col sm={ 12 } className='p-t-1'>
                        <SlimProgressBar now={ 52 } bsStyle='warning' />
                    </Col>
                </Row>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col sm={ 6 }>
                        <span className='text-white m-r-1'>
                            23 %
                        </span>
                        Online Users
                    </Col>
                    <Col sm={ 6 } className='text-right'>
                        9
                    </Col>
                    <Col sm={ 12 } className='p-t-1'>
                        <SlimProgressBar now={ 23 } bsStyle='danger' />
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    </CollapsablePanel>
);

export default Statistics3;
