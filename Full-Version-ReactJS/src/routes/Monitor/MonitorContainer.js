import { RoutedComponent, connect } from './../routedComponent'
import React from 'react';
import ReactInterval from 'react-interval';
import _ from 'underscore';
import uid from 'node-uuid';

import {
    Row,
    Col,
    Panel,
    ListGroup,
    ListGroupItem,
    Media,
    Table,
    ProgressBar,
    Charts,
    SlimProgressBar,
    Divider
} from 'components';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';
import { Colors } from 'consts';
import classes from './Monitor.scss';

import sectionRender from 'modules/sectionRender';
import treeRandomizer from 'modules/treeRandomizer';

import Faker from 'components/Faker';

import monitorData from 'consts/data/monitor.json';

// ------------------------------------
// Helper functions
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const calcPercentage = (val, max) => (Math.ceil(val / max * 100));

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderCpuPanel = (cpuData) => (
    <ListGroupItem className={ classes.panelGroupItem }>
        <h5>CPU</h5>
        <p>{ cpuData.Name } <i className="fa fa-fw fa-info-circle"></i></p>
        {
             _.map(cpuData.Cores, (core) => (
                <Row key={ core._id } className='p-y-1'>
                    <Col sm={ 6 }>
                        Core { core.No } @ <span className="text-white"> { core.LoadPercentage }%</span>
                    </Col>
                    <Col
                        sm={ 6 }
                    >
                        <SlimProgressBar
                            now={ core.LoadPercentage }
                            className='m-t-1'
                        />
                    </Col>
                </Row>
            ))
        }
    </ListGroupItem>
);

const renderMemoryPanel = (memoryData) => (
    <ListGroupItem className={ classes.panelGroupItem }>
        <h5>Memory <small>({memoryData.Type})</small></h5>
        <p>{ memoryData.Name } <i className="fa fa-fw fa-info-circle"></i></p>

        <Media>
            <Media.Left>
                <div className={ classes.memoryChartWrap }>
                    <Charts.SparklineDonut
                        data={ [
                            memoryData.Allocated,
                            memoryData.InCache,
                            memoryData.Available
                        ] }
                        colors={ [
                            Colors.brandCerulean,
                            Colors.brandCuriousBlue,
                            Colors.brandEndaveour
                        ] }
                        radius={ 56 }
                        innerRadius='30%'
                    />
                </div>
            </Media.Left>
            <Media.Body>
                <p className={ classes.totalMemoryValue }>
                    { memoryData.TotalSize.toFixed(1) } <small className="text-white">GB</small>
                </p>
                Total Memory
            </Media.Body>
        </Media>

        <Row>
            {
                _.map([
                    {name: 'Allocated', value: memoryData.Allocated, color: Colors.brandCerulean},
                    {name: 'In Cache', value: memoryData.InCache, color: Colors.brandCuriousBlue},
                    {name: 'Available', value: memoryData.Available, color: Colors.brandEndaveour}
                ], (memoryEntry, index) => (
                    <Col sm={ 4 } key={ index }>
                        <small>
                            <i
                                className="fa fa-fw fa-circle"
                                style={{ color: memoryEntry.color}}
                            ></i> { memoryEntry.name }</small>
                        <p className={ classes.memoryValue }>{ memoryEntry.value } MB</p>
                        <p>{ Math.ceil((memoryEntry.value / (memoryData.TotalSize * 1024)) * 100) } %</p>
                    </Col>
                ))
            }
        </Row>
    </ListGroupItem>
);

const renderOsPanel = (buildName) => (
    <ListGroupItem className={ classes.panelGroupItem }>
        <h5>Build</h5>
        <p>{ buildName } <i className="fa fa-fw fa-info-circle"></i></p>
    </ListGroupItem>
);

const renderNetworkPanel = (networkData) => (
    <ListGroupItem className={ classes.networkGroupItem }>
        <h5>Interface Traffic <small>({ networkData.Interface })</small></h5>
        <p className={ classes.networkHardwareName }>
            { networkData.Name } <i className="fa fa-fw fa-info-circle"></i>
        </p>
        <Charts.SparklineLine
            data={ networkData.Traffic }
            width={ 329 }
            height={ 60 }
        />
    </ListGroupItem>
);

const renderTemperaturePanel = (tempData) => (
    <ListGroupItem
        className={ classes.tempGroupItem }
        key={ tempData._id }
    >
        <h5>{ tempData.Name } <small>({ tempData.Status })</small></h5>
        <p className={ classes.tempSummary }>
            <i className={`fa fa-fw fa-caret-down ${classes.tempDeltaIcon}`}></i> Min
            <span className={ classes.tempValue }> { tempData.MinTemp }<sup>o</sup>C</span>
            <i className={`fa fa-fw fa-caret-up ${classes.tempDeltaIcon}`}></i> Max
            <span className={ classes.tempValue }> { tempData.MaxTemp }<sup>o</sup>C</span>
            <i className={`fa fa-fw fa-arrows-h ${classes.tempDeltaIcon}`}></i> Average
            <span className={ classes.tempValue }> { tempData.AverageTemp }<sup>o</sup>C</span>
        </p>
        <Charts.SparklineLine
            data={ tempData.History }
            width={ 329 }
            height={ 60 }
        />
    </ListGroupItem>
);

const renderVolumesPanel = (volumesData) => {
    const volumeColors = [
        { color: Colors.brandPrimary, colorName: 'BrandPrimary' },
        { color: Colors.brandSuccess, colorName: 'BrandSuccess' },
        { color: Colors.brandWarning, colorName: 'BrandWarning' },
        { color: Colors.brandDanger, colorName: 'BrandDanger' }
    ];

    return (
        <Row>
            {
                _.map(volumesData, (volume, i) => (
                    <Col
                        key={ volume._id }
                        className={ classes.volumeWidget }
                        md={ 3 }
                        sm={ 6 }
                        xs={ 6 }
                    >
                        <h5 className={classes.volumeWidgetHeader}>Path </h5>
                        <span className="label-gray-lighter label label-outline">{volume.Path}</span>
                        <p className={classes.volumeSize}>
                            { volume.Size.Total } <small>TiB</small>
                        </p>
                        <span>Volume Size</span>
                        <div className={ classes.graphSizeWrap }>
                            <Charts.SparklineDonut
                                animated
                                value={ calcPercentage(volume.Size.Used, volume.Size.Total) }
                                radius={ 140 }
                                innerRadius="30%"
                                color={ volumeColors[i].color }
                            />
                        </div>

                        <Row>
                            <Col xs={ 6 }>
                                <div className="small">
                                    <i className={`fa fa-fw fa-circle ${classes['dot' + volumeColors[i].colorName]}`}></i>
                                    <br/>
                                    Used Space
                                </div>
                                <p className={classes.labelUsed}>{ volume.Size.Used } TiB</p>
                                <p>
                                    { calcPercentage(volume.Size.Used, volume.Size.Total) }%
                                </p>
                            </Col>
                            <Col xs={ 6 }>
                                <div className="small">
                                    <i className={`fa fa-fw fa-circle ${classes['dot' + volumeColors[i].colorName + 'Dark']}`}></i>
                                    <br/>
                                    Free Space
                                </div>
                                <p className={classes.labelUsed}>{ volume.Size.Free } TiB</p>
                                <p>
                                    { calcPercentage(volume.Size.Free, volume.Size.Total) }%
                                </p>
                            </Col>
                        </Row>
                    </Col>
                ))
            }
        </Row>
    );
};

const renderDrivesList = (drivesData) => (
    <Table
        className={ classes.drivesTable }
        responsive
    >
        <thead>
            <tr>
                <th>Desc</th>
                <th>Raid</th>
                <th>Capacity</th>
                <th className='text-right'>Usage</th>
                <th className='text-right'>Status</th>
            </tr>
        </thead>
        <tbody>
            {
                _.map(drivesData, (drive) => (
                    <tr key={ drive._id }>
                        <td>
                            <span className={classes.driveName}>{ drive.Name }</span>
                            <span>({ drive.Adapter })</span>
                        </td>
                        <td>
                            <span className={ classes.raidType }>Mirror</span>
                            <span className="label-gray-lighter label label-outline">
                                { drive.Mount }
                            </span>
                        </td>
                        <td>
                            <ProgressBar
                                now={ calcPercentage(drive.Size.Used, drive.Size.Total) }
                                className={ classes.driveBar }
                            />
                        </td>
                        <td className="text-right">
                            <span className={ classes.driveUsedSpace }>{ drive.Size.Used.toFixed(2) } TiB</span>
                            <span> / </span>
                            <span>{ drive.Size.Total.toFixed(2) } TiB</span>
                        </td>
                        <td className="text-right">
                            { drive.Status }
                            { drive.Status === 'Healthy' ?
                                <i className={`fa fa-fw fa-check-circle ${classes.iconHealthy}`}></i> :
                                <i className={`fa fa-fw fa-exclamation-circle ${classes.iconDegraded}`}></i> }
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
);

// ------------------------------------
// Main Container
// ------------------------------------
class MonitorContainer extends RoutedComponent {
    constructor() {
        super();

        this.state = Object.assign({}, this.state, getData(monitorData));
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    simulateNetworkTraffic() {
        const newValue = Math.ceil(Math.random() * 10);
        const prevTraffic = _.last(this.state.Network.Traffic, this.state.Network.Traffic.length - 1);
        const newTraffic = [...prevTraffic, newValue];
        const newState = {
            Network: Object.assign({}, this.state.Network, {
                Traffic: newTraffic
            })
        }
        this.setState(Object.assign({}, this.state, newState))
    }

    render() {
        return (
            <Row>
                <ReactInterval
                    timeout={ 1000 }
                    enabled={ true }
                    callback={ () => this.simulateNetworkTraffic() }
                />

                <Col lg={ 4 }>
                    <Row>
                        <Col lg={ 12 } sm= { 6 }>
                            <Panel
                                header='System Monitoring'
                                className={classes.monitorPanel}
                            >
                                <ListGroup fill>
                                    { sectionRender(renderCpuPanel, this.state.System.CPU) }
                                    { sectionRender(renderMemoryPanel, this.state.System.Memory) }
                                    { sectionRender(renderOsPanel, this.state.System.Build) }
                                </ListGroup>
                            </Panel>

                            <Panel
                                header='Network Monitoring'
                                className={classes.monitorPanel}
                            >
                                <ListGroup fill>
                                    { sectionRender(renderNetworkPanel, this.state.Network) }
                                </ListGroup>
                            </Panel>
                        </Col>

                        <Col lg={ 12 } sm= { 6 }>
                            <Panel
                                header='Hardware Temperature'
                                className={classes.monitorPanel}
                            >
                                <ListGroup fill>
                                    { _.map(this.state.Temperatures, (tempData) =>
                                        renderTemperaturePanel(tempData)) }
                                </ListGroup>
                            </Panel>
                        </Col>
                    </Row>
                </Col>
                <Col
                    lg={ 8 }
                    className={ classes.volumeWrap }
                >
                    <p>
                        <Faker>{'[lorem.paragraph]'}</Faker>
                    </p>
                    <Divider className='m-t-3 m-b-1'>
                        Volume Status
                    </Divider>
                    { sectionRender(renderVolumesPanel, this.state.Volumes) }

                    <Divider className='m-t-3 m-b-1'>
                        Mounted Drives
                    </Divider>
                    { sectionRender(renderDrivesList, this.state.Drives) }
                </Col>
            </Row>
        );
    }
}

export default connect()(MonitorContainer);
