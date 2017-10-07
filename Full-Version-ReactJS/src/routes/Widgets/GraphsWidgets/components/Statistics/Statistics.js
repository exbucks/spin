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

import classes from './Statistics.scss';

const Statistics = (panelProps) => (
    <CollapsablePanel
        title='Statistics'
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
            <ListGroupItem className='text-uppercase small'>
                <strong>Views</strong>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col xs={ 6 }>
                        <p className='m-y-0 small'>
                            <i className='fa fa-circle text-primary'></i>
                            { ' Of My Project' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            3789
                        </p>
                    </Col>
                    <Col xs={ 6 }>
                        <p className='m-y-0 small'>
                            <i className='fa fa-circle text-success'></i>
                            { ' Of My Profile' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            5467
                        </p>
                    </Col>
                    <Col xs={ 12 }>
                        <SlimProgressBar className='m-y-1'>
                            <ProgressBar now={ 60 } key={ 1 }/>
                            <ProgressBar now={ 40 } bsStyle='success' key={ 2 } />
                        </SlimProgressBar>
                    </Col>
                </Row>
            </ListGroupItem>

            <ListGroupItem className='text-uppercase small'>
                <Row>
                    <Col sm={ 6 }>
                        <strong>Likes</strong>
                    </Col>
                    <Col sm={ 6 }>
                        <strong>Comments</strong>
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col xs={ 6 }>
                        <p className='m-y-0 small'>
                            <i className='fa fa-circle text-danger'></i>
                            { ' Of My Project' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            45
                        </p>
                    </Col>
                    <Col xs={ 6 }>
                        <p className='m-y-0 small'>
                            <i className='fa fa-circle text-warning'></i>
                            { ' Of My Profile' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            123
                        </p>
                    </Col>
                    <Col xs={ 12 }>
                        <SlimProgressBar className='m-y-1'>
                            <ProgressBar now={ 20 } key={ 1 } bsStyle='danger' />
                            <ProgressBar now={ 80 } key={ 2 } bsStyle='warning' />
                        </SlimProgressBar>
                    </Col>
                </Row>
            </ListGroupItem>

            <ListGroupItem className='text-uppercase small'>
                <strong>Connections</strong>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col xs={ 6 }>
                        <p className='m-y-0 small'>
                            <i className='fa fa-circle text-danger'></i>
                            { ' Followers' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            55
                        </p>
                    </Col>
                    <Col xs={ 6 }>
                        <p className='m-y-0 small'>
                            <i className='fa fa-circle text-heliotrope'></i>
                            { ' Of My Profile' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            2
                        </p>
                    </Col>
                    <Col xs={ 12 }>
                        <SlimProgressBar className='m-y-1'>
                            <ProgressBar now={ 80 } key={ 1 } bsStyle='danger' />
                            <ProgressBar now={ 20 } key={ 2 } bsStyle='custom' customColor={ Colors.brandHeliotrope } />
                        </SlimProgressBar>
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    </CollapsablePanel>
);

export default Statistics;
