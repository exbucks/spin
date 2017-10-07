import React from 'react';
import _ from 'underscore';
import num from 'numeral';
import uid from 'node-uuid';
import moment from 'moment';
import {
    Table,
    ListGroup,
    ListGroupItem,
    Label,
    Media,
    Button,
    ButtonGroup,
    Checkbox,
    Row,
    Col,
    Grid,
    AvatarImage,
    Charts,
    SlimProgressBar
} from 'components';

import { Colors } from 'consts';

import classes from './RightSidebar.scss';

const renderStatistics = (stats) => (
    <div>
        <h6 className={ classes.sectionTitle }>
            Statistics
        </h6>
        <Grid fluid className={ classes.sectionContainer }>
            <Row className='m-t-3'>
                {
                    _.map(stats.Components, component => (
                        <Col
                            sm={ 4 }
                            key={ component._id }
                            className='text-center'
                        >
                            <Charts.SparklineDonut
                                animated
                                value={ parseInt(component.Value) }
                                radius={ 56 }
                                innerRadius="30%"
                                color={ Colors.brandPrimary }
                            />
                            <h5 className='m-b-0 text-center'>
                                { component.Name }
                            </h5>
                            <span className='small'>
                                { component.Value }%
                            </span>
                        </Col>
                    ))
                }
            </Row>
        </Grid>
    </div>
);

const renderNetwork = network => (
    <div>
        <h6 className={ `${classes.sectionTitle} text-center` }>
            Network
        </h6>
        <p className='text-nowrap text-center'>
            <span className='text-white'>
                <span className='small'>
                    { `${network.DownStream} KB/s  ` }
                </span>
                <i className='fa fa-level-down text-primary m-r-2'></i>
                <i className='fa fa-level-up text-primary'></i>
                <span className='small'>
                    { `  ${network.UpStream} KB/s` }
                </span>
            </span>
        </p>
    </div>
);

const renderSystemTable = (system) => (
    <div className='m-t-2'>
        <h6 className={ classes.sectionTitle }>
            <i className='fa fa-database m-r-1'></i>System
        </h6>
        <ListGroup className={ classes.list }>
            {
                _.map(system, sysEntry => (
                    <ListGroupItem
                        className={ `${classes.listEntry} ${classes.flexSpaceBetween}` }
                        key={ sysEntry._id }
                    >
                        <span className='small'>
                            { sysEntry.Name }
                        </span>
                        <span className='small text-white'>
                            { sysEntry.Value }
                        </span>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    </div>
);

const renderLanTable = (lan) => (
    <div className='m-t-2'>
        <h6 className={ classes.sectionTitle }>
            <i className='fa fa-wifi m-r-1'></i>Lan
        </h6>
        <ListGroup className={ classes.list }>
            <ListGroupItem className={ `${classes.listEntry} ${classes.flexSpaceBetween}` }>
                <span className='small'>Wi-Fi</span>
                <i className='fa fa-fw fa-sort text-white'></i>
            </ListGroupItem>
            <ListGroupItem className={ `${classes.listEntry} ${classes.flexSpaceBetween}` }>
                <span className='small'>IP</span>
                <span className='small text-white'>{ lan.Ip }</span>
            </ListGroupItem>
            <ListGroupItem className={ `${classes.listEntry} ${classes.flexSpaceBetween}` }>
                <span className='small'>MAC</span>
                <span className='small text-white'>{ lan.Mac }</span>
            </ListGroupItem>
            <ListGroupItem className={ `${classes.listEntry} ${classes.flexSpaceBetween}` }>
                <i className='fa fa-long-arrow-down'></i>
                <div>
                    <span className='small text-white m-r-1'>
                        { lan.DownStream.Current } KB/s
                    </span>
                    <span className='small text-white'>
                        { lan.DownStream.Total } MB
                    </span>
                </div>
            </ListGroupItem>
            <ListGroupItem className={ `${classes.listEntry} ${classes.flexSpaceBetween}` }>
                <i className='fa fa-long-arrow-up text-white'></i>
                <div>
                    <span className='small text-white m-r-1'>
                        { lan.UpStream.Current } KB/s
                    </span>
                    <span className='small text-white'>
                        { lan.UpStream.Total } MB
                    </span>
                </div>
            </ListGroupItem>
        </ListGroup>
    </div>
);

const renderMachines = machines => (
    <ListGroup>
        {
            _.map(machines, (machine, index) => (
                <ListGroupItem key={ machine._id }>
                    <div className={ classes.flexSpaceBetween }>
                        <div>
                            <i className="fa fa-hdd-o small m-r-1"></i>
                            <span className='text-uppercase small'>
                                { machine.Name }
                            </span>
                        </div>
                        <span className='text-white small'>
                            { machine.Performance }
                        </span>
                    </div>
                    <SlimProgressBar
                        className='m-b-1'
                        now={ parseInt(machine.Space.Used / machine.Space.Total * 100) }
                        bsStyle={ [null, 'danger', 'info'][index] }
                    />
                    <p className='m-y-0 small'>
                        <strong className='text-white'>{ machine.Space.Used } GB </strong>
                        <span> / </span>
                        <span>{ num(machine.Space.Total).format('0,0.00') } GB</span>
                    </p>
                </ListGroupItem>
            ))
        }
    </ListGroup>
);

const SecondRightSidebarTab = (props) => (
    <div>
        { renderStatistics(props.data.SystemStatus) }
        { renderNetwork(props.data.SystemStatus.Network) }
        { renderSystemTable(props.data.SystemStatus.System) }
        { renderLanTable(props.data.SystemStatus.Lan) }
        { renderMachines(props.data.SystemStatus.VirtualMachines) }
    </div>
);

SecondRightSidebarTab.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default SecondRightSidebarTab;
