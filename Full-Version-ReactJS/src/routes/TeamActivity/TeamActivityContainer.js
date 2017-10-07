import React from 'react';
import ReactInterval from 'react-interval';
import uid from 'node-uuid';
import _ from 'underscore';
import deepAssign from 'assign-deep';
import moment from 'moment';
import { Link } from 'react-router';

import {
    Row,
    Col,
    Panel,
    Label,
    Button,
    Media,
    Timeline,
    Charts,
    AvatarImage,
    AvatarText
} from 'components';
import Faker from 'components/Faker';

import { Colors } from 'consts';
import { RoutedComponent, connect } from 'routes/routedComponent';

import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import activityData from 'consts/data/team-activity.json';

import classes from './TeamActivity.scss';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const genChartData = (count = 20) => {
    const output = [];
    for(let i = 0; i < count; i++) {
        output.push(
            Math.round(Math.random() * 100)
        );
    }
    return output;
}

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderSummary = (data) => {
    const renderChartLegend = (legend) => _.map(legend, (l, i) => (
        <div key={ i }>
            <i className='fa fa-fw fa-circle' style={ {color: l.color} }></i>
            <span className={ classes.chartLegendValue }>
                { ` ${l.value}` }
            </span>{` ${l.name}`}
        </div>
    ));

    const renderLineChart = (name, data, color, unit = '') => (
        <Col md={ 12 } sm={ 6 } xs={ 6 }>
            <p className={ classes.lineChartTitle }>
                <span className={ classes.lineChartValue }>
                    {`${data.Count}${unit}`}
                </span>{` ${name}`}
            </p>
            <Charts.SparklineLine
                data={ data.Data }
                width={ 200 }
                height={ 33 }
                color={ color }
                fullWidth
            />
        </Col>
    );

    return (
        <Panel
            className={ classes.summaryPanel }
            header= {
                <div className={ classes.summaryPanelHeader }>
                    <p className={ classes.summaryPanelHeaderTitle }>
                        Last { data.Duration } Days
                    </p>
                    <Button
                        bsStyle='link'
                        bsSize='xsmall'
                    >
                        { `More  ` }
                        <i className="fa fa-angle-right"></i>
                    </Button>
                </div>
            }
        >
            <Row>
                <Col lg={ 12 }>
                    <p className={ classes.chartTitle }>
                        Happiness
                    </p>
                    <Media>
                        <Media.Left>
                            <Charts.SparklineDonut
                                data={ [
                                    data.Happiness.Great,
                                    data.Happiness.Good,
                                    data.Happiness.Bad
                                ] }
                                colors={ [
                                    Colors.brandPrimary,
                                    Colors.brandInfo,
                                    Colors.grayLight
                                ] }
                                radius={ 56 }
                                innerRadius='30%'
                            />
                        </Media.Left>
                        <Media.Body>
                            {
                                renderChartLegend([
                                    {
                                        name: 'Great',
                                        value: data.Happiness.Great,
                                        color: Colors.brandPrimary
                                    },
                                    {
                                        name: 'Good',
                                        value: data.Happiness.Good,
                                        color: Colors.brandInfo
                                    },
                                    {
                                        name: 'Bad',
                                        value: data.Happiness.Bad,
                                        color: Colors.grayLight
                                    }
                                ])
                            }
                        </Media.Body>
                    </Media>
                </Col>
                { renderLineChart('Customers', data.Customers, Colors.brandPrimary) }
                { renderLineChart('Tickets', data.Tickets, Colors.brandInfo) }
                { renderLineChart('Replies', data.Replies, Colors.brandSuccess) }
                { renderLineChart('Avg Response Time', data.AvgResponseTime, Colors.brandDanger, 'm' ) }
                <Col lg={ 12 } className={ classes.channelsContainer }>
                    <p className={ `${classes.chartTitle} ${classes.channelsTitle} `}>
                        Channels
                    </p>
                    <Media>
                        <Media.Left align='middle'>
                            <Charts.SparklineDonut
                                data={ _.map(data.Channels, (ch) => ch.Count) }
                                colors={ [
                                    Colors.brandPrimary,
                                    Colors.brandInfo,
                                    Colors.brandSuccess,
                                    Colors.brandWarning,
                                    Colors.brandDanger
                                ] }
                                radius={ 56 }
                                innerRadius='30%'
                            />
                        </Media.Left>
                        <Media.Body>
                            {
                                (() => {
                                    const colorList = [
                                        Colors.brandPrimary,
                                        Colors.brandInfo,
                                        Colors.brandSuccess,
                                        Colors.brandWarning,
                                        Colors.brandDanger
                                    ];

                                    const legend = _.map(data.Channels, (ch, i) => (
                                        { name: ch.Name, value: ch.Count, color: colorList[i] }
                                    ));

                                    return renderChartLegend(legend);
                                })()
                            }
                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        </Panel>
    );
}

const renderTimeline = (data) => {
    const getItemParts = (itemType) => {
        switch(itemType) {
            case 'quote':
                return {
                    icon: (<i className='fa fa-fw fa-pause-circle'></i>),
                    color: Colors.brandDanger
                };
            case 'like':
                return {
                    icon: (<i className='fa fa-fw fa-gratipay'></i>),
                    color: Colors.brandDanger
                };
            case 'question':
                return {
                    icon: (<i className='fa fa-fw fa-question-circle'></i>),
                    color: Colors.brandWarning
                };
            case 'addition':
                return {
                    icon: (<i className='fa fa-fw fa-plus-circle'></i>),
                    color: Colors.brandPrimary
                };
            case 'approve':
                return {
                    icon: (<i className='fa fa-fw fa-check-circle'></i>),
                    color: Colors.brandSuccess
                }
            case 'info':
                return {
                    icon: (<i className='fa fa-fw fa-info-circle'></i>),
                    color: Colors.brandInfo
                };
        }
    }

    const renderList = (activities) => _.map(activities, (activity) => {
        const itemParts = getItemParts(activity.Type);

        return (
            <Timeline.Item
                date={ moment(activity.Date).valueOf() }
                icon={ itemParts.icon }
                color={ itemParts.color }
                key={ activity._id }
            >
                <Timeline.ItemHeader
                    avatar={
                        <Link to='/apps/profile-details'>
                            <AvatarImage
                                src={ activity.User.Avatar }
                                showStatus={ true }
                                statusPlacement='bottom'
                            />
                        </Link>
                    }
                    primaryText={ `${activity.User.FirstName} ${activity.User.LastName}` }
                    secondaryText={ `Assigned to: ${activity.User.Assigned}` }
                />
                <Timeline.ItemBody>
                    <Link to='/pages/timeline'>
                        { activity.Content.Message }
                    </Link>
                    <br />
                    <p className="text-nowrap">
                        {`${activity.Content.User} `}
                        <Label
                            bsStyle='custom'
                            customColor={ Colors.grayLighter }
                            outline
                        >
                            {`#${activity.Content.Id}`}
                        </Label>
                    </p>
                </Timeline.ItemBody>
            </Timeline.Item>
        );
    });

    return (
        <Timeline
            itemAlignment='horizontal'
        >
            {
                _.map(data, (activityGroup) => (
                    <div key={ activityGroup._id }>
                        <Timeline.Date>{ activityGroup.Date }</Timeline.Date>
                        { renderList(activityGroup.List) }
                    </div>
                ))
            }
        </Timeline>
    )
}
// ------------------------------------
// Main Container
// ------------------------------------
class TeamActivityContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, getData(activityData), {
            Summary: {
                Customers: {
                    Data: genChartData()
                },
                AvgResponseTime: {
                    Data: genChartData()
                },
                Replies: {
                    Data: genChartData()
                },
                Tickets: {
                    Data: genChartData()
                }
            }
        });
    }

    addChartData() {
        const genNewData = (input) => {
            const val = Math.round(Math.random() * 100);
            const lastData = _.last(input, input.length - 1);
            return [...lastData, val];
        };

        this.setState(deepAssign({}, this.state, {
            Summary: {
                Customers: {
                    Data: genNewData(this.state.Summary.Customers.Data)
                },
                Tickets: {
                    Data: genNewData(this.state.Summary.Tickets.Data)
                },
                Replies: {
                    Data: genNewData(this.state.Summary.Replies.Data)
                },
                AvgResponseTime: {
                    Data: genNewData(this.state.Summary.AvgResponseTime.Data)
                }
            }
        }));
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row className={ classes.mainWrap }>
                <ReactInterval
                    timeout={ 500 }
                    enabled={ true }
                    callback={ () => this.addChartData() }
                />
                <Col lg={ 9 } md={ 8 }>
                    <p>
                        Indicate the current page's location within a navigational hierarchy.
                    </p>

                    { renderSection(renderTimeline, this.state.Activties) }
                </Col>
                <Col lg={ 3 } md={ 4 }>
                    { renderSection(renderSummary, this.state.Summary) }
                </Col>
            </Row>
        )
    }
}

export default connect()(TeamActivityContainer);
