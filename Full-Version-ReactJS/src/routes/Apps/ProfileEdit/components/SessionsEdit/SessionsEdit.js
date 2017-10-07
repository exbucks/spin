import React from 'react';
import faker from 'faker';

import {
    Panel,
    Form,
    FormGroup,
    Col,
    FormControl,
    ControlLabel,
    Radio,
    Button,
    ProgressBar,
    Media,
    Table,
    OverlayTrigger,
    Tooltip
} from 'components';

import { Colors } from 'consts';

import classes from './../../ProfileEdit.scss';

const SessionsEdit = () => (
    <div>
        <Panel
            header={
                <h4 className='panel-title'>
                    Sessions Edit
                </h4>
            }
        >
            <Table fill>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Browser & OS</th>
                        <th>IP</th>
                        <th>Location</th>
                        <th>Signed In</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i className="fa fa-fw fa-circle text-success"></i>
                        </td>
                        <td>
                            <Media>
                                <Media.Left align='middle'>
                                    <i className="fa fa-fw fa-2x fa-desktop text-muted"></i>
                                </Media.Left>
                                <Media.Body className={ classes.mediaFix }>
                                    <p className='m-y-0 text-white'>
                                        Safari / 534.2.0
                                    </p>
                                    <p className='m-y-0'>
                                        OS X 10.11.3
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <p className='m-y-0 text-white'>
                                242.29.162.180
                            </p>
                            <p className='m-y-0'>
                                Your Current Session
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 text-white'>
                                New Garthstad
                            </p>
                            <p className='m-y-0'>
                                Washington, Solomon Islands
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 text-white'>
                                23 June, Saturday, 2016
                            </p>
                            <p className='m-y-0'>
                                12:43 PM
                            </p>
                        </td>
                        <td>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id='revoke-tooltip-1'>
                                        Revoke
                                    </Tooltip>
                                }
                            >
                                <i className="fa fa-close text-danger"></i>
                            </OverlayTrigger>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <i className="fa fa-fw fa-circle text-danger"></i>
                        </td>
                        <td>
                            <Media>
                                <Media.Left align='middle'>
                                    <i className="fa fa-fw fa-2x fa-laptop text-muted"></i>
                                </Media.Left>
                                <Media.Body className={ classes.mediaFix }>
                                    <p className='m-y-0 text-white'>
                                        Mozilla / 5.0
                                    </p>
                                    <p className='m-y-0'>
                                        Windows NT 6.0
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <p className='m-y-0 text-white'>
                                130.209.254.9
                            </p>
                            <p className='m-y-0'>
                                -
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 text-white'>
                                Durganbury
                            </p>
                            <p className='m-y-0'>
                                Alaska, Denmark
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 text-white'>
                                01 August, Friday, 2016
                            </p>
                            <p className='m-y-0'>
                                09:11 AM
                            </p>
                        </td>
                        <td>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id='revoke-tooltip-2'>
                                        Revoke
                                    </Tooltip>
                                }
                            >
                                <i className="fa fa-close text-danger"></i>
                            </OverlayTrigger>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <i className="fa fa-fw fa-circle"></i>
                        </td>
                        <td>
                            <Media>
                                <Media.Left align='middle'>
                                    <i className="fa fa-fw fa-2x fa-mobile text-muted"></i>
                                </Media.Left>
                                <Media.Body className={ classes.mediaFix }>
                                    <p className='m-y-0 '>
                                        Chrome / 20.0.844.0
                                    </p>
                                    <p className='m-y-0'>
                                        iOS 7.1
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                105.230.82.36
                            </p>
                            <p className='m-y-0'>
                                -
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                Port Nathen
                            </p>
                            <p className='m-y-0'>
                                Nevada, Belarus
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                01 January, Monday, 2016
                            </p>
                            <p className='m-y-0'>
                                09:11 AM
                            </p>
                        </td>
                        <td>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id='revoke-tooltip-3'>
                                        Revoke
                                    </Tooltip>
                                }
                            >
                                <i className="fa fa-close text-danger"></i>
                            </OverlayTrigger>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <i className="fa fa-fw fa-circle"></i>
                        </td>
                        <td>
                            <Media>
                                <Media.Left align='middle'>
                                    <i className="fa fa-fw fa-2x fa-tablet text-muted"></i>
                                </Media.Left>
                                <Media.Body className={ classes.mediaFix }>
                                    <p className='m-y-0 '>
                                        AppleWebKit / 534.2.0
                                    </p>
                                    <p className='m-y-0'>
                                        iOS 9.1
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                22.132.11.85
                            </p>
                            <p className='m-y-0'>
                                -
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                Kadeport
                            </p>
                            <p className='m-y-0'>
                                Delaware, Guatemala
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                01 August, Thursday, 2016
                            </p>
                            <p className='m-y-0'>
                                09:11 AM
                            </p>
                        </td>
                        <td>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id='revoke-tooltip-4'>
                                        Revoke
                                    </Tooltip>
                                }
                            >
                                <i className="fa fa-close text-danger"></i>
                            </OverlayTrigger>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i className="fa fa-fw fa-circle"></i>
                        </td>
                        <td>
                            <Media>
                                <Media.Left align='middle'>
                                    <i className="fa fa-fw fa-2x fa-server text-muted"></i>
                                </Media.Left>
                                <Media.Body className={ classes.mediaFix }>
                                    <p className='m-y-0 '>
                                        Safari / 533.1.0
                                    </p>
                                    <p className='m-y-0'>
                                        OSX Server 4
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                208.166.232.254
                            </p>
                            <p className='m-y-0'>
                                -
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                Anitamouth
                            </p>
                            <p className='m-y-0'>
                                Maryland, Ethiopia
                            </p>
                        </td>
                        <td>
                            <p className='m-y-0 '>
                                01 October, Wednesday, 2016
                            </p>
                            <p className='m-y-0'>
                                09:11 AM
                            </p>
                        </td>
                        <td>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id='revoke-tooltip-5'>
                                        Revoke
                                    </Tooltip>
                                }
                            >
                                <i className="fa fa-close text-danger"></i>
                            </OverlayTrigger>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Panel>
    </div>
);

export default SessionsEdit;
