import React from 'react';

import {
    Row,
    Col,
    Panel,
    Label,
    Divider
} from 'components';

import { Colors } from 'consts';

import { VerticalTimeline } from 'routes/Pages/Timeline/components';

import classes from './../ProfileDetails.scss';

const Overview = () => (
    <div>
        <Row className='m-t-3'>
            <Col lg={ 3 } md={ 6 }>
                <Panel
                    className={ classes.overviewBox }
                    style={ { backgroundColor: Colors.brandPrimary } }
                >
                    <p className={ classes.header }>
                        <span>Views</span>
                        <Label
                            bsStyle='custom'
                            customColor={ Colors.brandWhite }
                            className='pull-right'
                            outline
                        >
                            Monthly
                        </Label>
                    </p>
                    <p className={ classes.value }>
                        6.200
                    </p>
                    <p className={ classes.subTitle }>
                        Total Views
                    </p>
                    <p className={ classes.footer }>
                        <span>
                            Last Month
                        </span>
                        <span>
                            34%
                            { ' ' }
                            <i className='fa fa-caret-down'></i>
                        </span>
                    </p>
                </Panel>
            </Col>
            <Col lg={ 3 } md={ 6 }>
                <Panel
                    className={ classes.overviewBox }
                    style={ { backgroundColor: Colors.brandSuccess } }
                >
                    <p className={ classes.header }>
                        <span>Orders</span>
                        <Label
                            bsStyle='custom'
                            customColor={ Colors.brandWhite }
                            className='pull-right'
                            outline
                        >
                            Annual
                        </Label>
                    </p>
                    <p className={ classes.value }>
                        80.202
                    </p>
                    <p className={ classes.subTitle }>
                        New Orders
                    </p>
                    <p className={ classes.footer }>
                        <span>
                            Last Month
                        </span>
                        <span>
                            92%
                            { ' ' }
                            <i className='fa fa-caret-down'></i>
                        </span>
                    </p>
                </Panel>
            </Col>
            <Col lg={ 3 } md={ 6 }>
                <Panel
                    className={ classes.overviewBox }
                    style={ { backgroundColor: Colors.brandWarning } }
                >
                    <p className={ classes.header }>
                        <span>Visits</span>
                        <Label
                            bsStyle='custom'
                            customColor={ Colors.brandWhite }
                            className='pull-right'
                            outline
                        >
                            Monthly
                        </Label>
                    </p>
                    <p className={ classes.value }>
                        767
                    </p>
                    <p className={ classes.subTitle }>
                        Total Views
                    </p>
                    <p className={ classes.footer }>
                        <span>
                            Last Month
                        </span>
                        <span>
                            34%
                            { ' ' }
                            <i className='fa fa-caret-down'></i>
                        </span>
                    </p>
                </Panel>
            </Col>
            <Col lg={ 3 } md={ 6 }>
                <Panel
                    className={ classes.overviewBox }
                    style={ { backgroundColor: Colors.brandDanger } }
                >
                    <p className={ classes.header }>
                        <span>Downloads</span>
                        <Label
                            bsStyle='custom'
                            customColor={ Colors.brandWhite }
                            className='pull-right'
                            outline
                        >
                            Today
                        </Label>
                    </p>
                    <p className={ classes.value }>
                        72
                    </p>
                    <p className={ classes.subTitle }>
                        Total Downloads
                    </p>
                    <p className={ classes.footer }>
                        <span>
                            Last Month
                        </span>
                        <span>
                            20%
                            { ' ' }
                            <i className='fa fa-caret-up'></i>
                        </span>
                    </p>
                </Panel>
            </Col>
        </Row>

        <Row>
            <Col lg={ 12 }>
                <Divider className='m-t-2' textPosition='center'>
                    Activity
                </Divider>
                <VerticalTimeline />
            </Col>
        </Row>
    </div>
);

export default Overview;
