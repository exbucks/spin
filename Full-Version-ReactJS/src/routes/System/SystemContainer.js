import React from 'react';
import ReactInterval from 'react-interval';
import uid from 'node-uuid';
import hash from 'object-hash';
import _ from 'underscore';
import numeral from 'numeral';
import deepAssign from 'assign-deep';

import {
    Row,
    Col,
    Panel,
    Table,
    ButtonGroup,
    Button,
    ProgressBar,
    Label,
    Media,
    Charts,
    SlimProgressBar
} from 'components'
import Faker from 'components/Faker';

import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { RoutedComponent, connect } from 'routes/routedComponent'

import classes from './System.scss';

import { Colors } from 'consts';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import systemData from 'consts/data/system.json';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const genInitialPerfData = (source) => {
    const initialData = (maxVal, count = 20) => {
        const output = [];
        for(let i = 0; i < count; i++) {
            const val = Math.round(Math.random() * maxVal);
            output.push(val);
        }
        return output;
    };

    return _.map(source, (s) => (
        deepAssign({}, s, {
            CpuUsage: {
                Data: initialData(s.CpuUsage.Max),
                Metric: '%',
                Color: Colors.brandWarning
            },
            MemoryUsage: {
                Data: initialData(s.MemoryUsage.Max),
                Metric: 'Mb',
                Color: Colors.brandSuccess
            },
            DiskUsage: {
                Data: initialData(s.DiskUsage.Max),
                Metric: 'KB/s',
                Color: Colors.brandDanger
            },
            ProcessCount: {
                Data: initialData(s.ProcessCount.Max),
                Color: Colors.brandPrimary
            }
        })
    ));
};

const genComponentData = (count = 16) => {
    const output = [];
    for(let i = 0; i < count; i++) {
        output.push(Math.round(Math.random() * 100));
    }
    return output;
};
// ------------------------------------
// Sub Elements
// ------------------------------------
const renderComponentStatus = (name, component, color, metric = '%') => (
    <Col lg={ 3 } sm={ 6 }>
        <Panel
            className={ classes.componentPanel }
            header={
                <Media
                    className={ classes.filledMedia }
                    style={ {backgroundColor: color} }
                >
                    <Media.Body>
                        <p className='text-white'>{ name }</p>
                        <p className={ classes.componentVal }>
                            { component.Value }
                            <small>{ metric }</small>
                        </p>
                        <Label
                            bsStyle='custom'
                            customColor={ Colors.brandWhite }
                            outline
                            className={ classes.componentDiff }
                        >
                            {
                                component.DiffInc ?
                                    <i className="fa fa-caret-up"></i> :
                                    <i className="fa fa-caret-down"></i>
                            }
                            { ` ${component.Diff}%` }
                        </Label>
                    </Media.Body>
                    <Media.Right>
                        <Charts.SparklineDonut
                            animated
                            value={ component.Value / component.Max * 100 }
                            radius={ 68 }
                            innerRadius="30%"
                            color={ Colors.brandWhite }
                        />
                    </Media.Right>
                </Media>
            }
        >
            <Charts.SparklineBar
                data={ component.Data }
                width={ 158 }
                height={ 52 }
                color={ Colors.grayLight }
                block
            />
        </Panel>
    </Col>
);

const renderProcessDetails = (processData) => {
    const processGeneral = (processName, minVal, maxVal, version) => {
        const usagePercentage = Math.round(minVal / maxVal * 100);
        const spaceLeft = maxVal - minVal;

        return (
            <div key={ hash(processName) }>
                <div className={ classes.generalRow }>
                    <h4>{ processName }</h4>
                    <Label
                        className='label-gray-lighter label-outline'
                    >v { version }</Label>
                </div>
                <div className='p-y-1'>
                    <SlimProgressBar
                        now={ usagePercentage }
                    />
                </div>
                <div className={ classes.generalRow }>
                    <span className='text-white'>
                        { usagePercentage }%
                    </span>
                    <span>
                        { numeral(spaceLeft).format('0,0') } GB Left
                    </span>
                </div>

            </div>
        );
    };

    const processComponent = (data, color, metric = '') => (
        <div>
            <p className={ classes.processComponentVal }>
                { `${_.last(data)} ${metric}` }
            </p>
            <Charts.SparklineLine
                data={ data }
                width={ 200 }
                height={ 33 }
                color={ color }
            />
        </div>
    );

    return (
        <Panel
            header={
                <div className={ classes.panelHeading }>
                    <h4>Processes</h4>
                    <ButtonGroup bsSize='small'>
                        <Button>
                            <i className="fa fa-angle-left"></i>
                        </Button>
                        <Button>
                            <i className="fa fa-angle-right"></i>
                        </Button>
                    </ButtonGroup>
                </div>
            }
        >
            <p>
                <Faker>{'[lorem.paragraph]'}</Faker>
            </p>
            <Table
                responsive
                fill
                standard
                className={ classes.processTable }
            >
                <thead>
                    <tr>
                        <th style={ {width: '20%', minWidth: '135px'} }>Name</th>
                        <th>Count</th>
                        <th>Memory</th>
                        <th>Cpu</th>
                        <th>Disk I/O</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(processData, (data) => (
                            <tr key={ data._id }>
                                <td>
                                    { processGeneral(data.Name, data.Space.Used,
                                        data.Space.Total, data.Version) }
                                </td>
                                <td>
                                    { processComponent(data.ProcessCount.Data,
                                        data.ProcessCount.Color) }
                                </td>
                                <td>
                                    { processComponent(data.MemoryUsage.Data,
                                        data.MemoryUsage.Color, data.MemoryUsage.Metric) }
                                </td>
                                <td>
                                    { processComponent(data.CpuUsage.Data,
                                        data.CpuUsage.Color, data.CpuUsage.Metric) }
                                </td>
                                <td>
                                    { processComponent(data.DiskUsage.Data,
                                        data.DiskUsage.Color, data.DiskUsage.Metric) }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Panel>
    );
}
// ------------------------------------
// Main Container
// ------------------------------------
class SystemContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        const randBool = () => Math.random() > 0.5;

        this.state = deepAssign({}, getData(systemData), {
            MemoryUsage: {
                Data: genComponentData(),
                DiffInc: randBool()
            },
            CpuUsage: {
                Data: genComponentData(),
                DiffInc: randBool()
            },
            Traffic: {
                Data: genComponentData(),
                DiffInc: randBool()
            },
            DiskUsage: {
                Data: genComponentData(),
                DiffInc: randBool()
            },
            ProcessDetails: genInitialPerfData(systemData.ProcessDetails)
        });
    }

    simulateProcessData() {
        const genNewData = (input, max) => {
            const val = Math.round(Math.random() * max);
            const lastData = _.last(input, input.length - 1);
            return [...lastData, val];
        };

        this.setState(Object.assign({}, this.state, {
            ProcessDetails: _.map(this.state.ProcessDetails, (pd) => (
                deepAssign({}, pd, {
                    CpuUsage: {
                        Data: genNewData(pd.CpuUsage.Data, pd.CpuUsage.Max),
                    },
                    MemoryUsage: {
                        Data: genNewData(pd.MemoryUsage.Data, pd.MemoryUsage.Max),
                    },
                    DiskUsage: {
                        Data: genNewData(pd.DiskUsage.Data, pd.DiskUsage.Max),
                    },
                    ProcessCount: {
                        Data: genNewData(pd.ProcessCount.Data, pd.ProcessCount.Max),
                    }
                })
            ))
        }));
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className={ classes.mainWrap }>
                <ReactInterval
                    timeout={ 500 }
                    enabled={ true }
                    callback={ () => this.simulateProcessData() }
                />
                <Row>
                    { renderComponentStatus('Memory', this.state.MemoryUsage,
                        Colors.brandPrimary, '%') }
                    { renderComponentStatus('CPU', this.state.CpuUsage,
                        Colors.brandSuccess, '%') }
                    { renderComponentStatus('Traffic', this.state.Traffic,
                        Colors.brandWarning, 'KB') }
                    { renderComponentStatus('Disk I/O', this.state.DiskUsage,
                        Colors.brandDanger, 'KB') }
                </Row>
                <Row>
                    <Col lg={ 12 }>
                        { renderSection(renderProcessDetails,
                            this.state.ProcessDetails) }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(SystemContainer);
