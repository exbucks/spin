import React from 'react';
import uid from 'node-uuid';

import {
    Grid,
    Row,
    Col,
    Panel,
    Media,
    Table,
    Charts,
    CollapsablePanel
} from 'components';

import { Colors } from 'consts';

import classes from './Monitor.scss';

const Monitor = (panelProps) => (
    <CollapsablePanel
        title='Monitor'
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
        <Grid fluid>
            <Row>
                <Col sm={ 4 } className='text-center p-t-2'>
                    <Charts.SparklineDonut
                        value={ 76 }
                        radius={ 56 }
                        innerRadius={ 8 }
                    />
                    <h5 className='m-b-0'>
                        CPU
                    </h5>
                    <p className='small text-center'>
                        76%
                    </p>
                </Col>
                <Col sm={ 4 } className='text-center p-t-2'>
                    <Charts.SparklineDonut
                        value={ 90 }
                        radius={ 56 }
                        innerRadius={ 8 }
                    />
                    <h5 className='m-b-0'>
                        Drive
                    </h5>
                    <p className='small text-center'>
                        90%
                    </p>
                </Col>
                <Col sm={ 4 } className='text-center p-t-2'>
                    <Charts.SparklineDonut
                        value={ 27 }
                        radius={ 56 }
                        innerRadius={ 8 }
                    />
                    <h5 className='m-b-0'>
                        Memory
                    </h5>
                    <p className='small text-center'>
                        27%
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm={ 12 } className='text-center small text-uppercase p-t-2 m-b-2'>
                    <strong>Network</strong>
                </Col>
                <Col sm={ 12 }>
                    <p className='text-nowrap text-white text-center small'>
                        <span>21 KB/s</span>
                        { ' ' }
                        <i className="fa fa-level-down text-primary m-r-2"></i>
                        <i className="fa fa-level-up text-primary"></i>
                        { ' ' }
                        <span>89 KB/s</span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm={ 12 }>
                    <Table className={ classes.tableValue } condensed>
                        <thead>
                            <tr>
                                <th>
                                    <i className='fa fa-database m-x-1'></i>
                                    { ' System' }
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Disabled
                                </td>
                                <td>
                                    1:36
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Processing
                                </td>
                                <td>
                                    89706
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CPU User
                                </td>
                                <td>
                                    16%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CPU System
                                </td>
                                <td>
                                    19%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CPU Free
                                </td>
                                <td>
                                    78%
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                <Col sm={ 12 }>
                    <Table className={ classes.tableValue } condensed>
                        <thead>
                            <tr>
                                <th>
                                    <i className='fa fa-wifi m-x-1'></i>
                                    { ' LAN' }
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    WiFi
                                </td>
                                <td>
                                    <i className="fa fa-fw fa-sort"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    IP
                                </td>
                                <td>
                                    246.3.241.158
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    MAC
                                </td>
                                <td>
                                    a2:e7:34:33:b5:da
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa fa-long-arrow-down"></i>
                                </td>
                                <td>
                                    <span className='m-r-1'>864.00 KB/s</span>
                                    <span>991.00 MB</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa fa-long-arrow-up text-white"></i>
                                </td>
                                <td>
                                    <span className='m-r-1'>427.00 KB/s</span>
                                    <span>593.00 MB</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Grid>
    </CollapsablePanel>
);

export default Monitor;
