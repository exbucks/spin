import React from 'react';
import uid from 'node-uuid';
import hash from 'object-hash';
import _ from 'underscore';
import { Link } from 'react-router';
import deepAssign from 'assign-deep';
import numeral from 'numeral';
import moment from 'moment';
import faker from 'faker';
import { LinkContainer } from 'react-router-bootstrap';

import {
    AvatarImage,
    Row,
    Col,
    Panel,
    Button,
    DropdownButton,
    ButtonGroup,
    Table,
    Media,
    Label,
    ListGroup,
    ListGroupItem,
    ProgressBar,
    Charts,
    Timeline,
    Divider
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';

import { Colors } from 'consts';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import projectsData from 'consts/data/projects.json';

import classes from './Projects.scss';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderChartWithLegend = (chartData) => (
    <Media>
        <Media.Left>
            <Charts.SparklineDonut
                data={ _.map(chartData, v => parseInt(v.value)) }
                colors={ _.map(chartData, v => v.color) }
                radius={ 96 }
                innerRadius='30%'
            />
        </Media.Left>
        <Media.Body>
            {
                _.map(chartData, (v, i) => (
                    <div key={ i }>
                        <i
                            className='m-l-1 fa fa-fw fa-circle'
                            style={ {color: v.color} }
                        ></i>
                        <span className='text-white m-r-1'>{ v.value }</span>
                        { v.title }
                    </div>
                ))
            }
        </Media.Body>
    </Media>
);

const renderPayments = (payments) => {
    const renderRow = (title, data) => (
        <div className={ classes.itemsGroup }>
            <Divider textPosition="center" className={ classes.itemsGroupHeader }>
                { title }
            </Divider>
            <Row>
                {
                    _.map(data, (item) => (
                        <Col sm={ 6 } xs={ 6 } key={ item._id }>
                            <p className={ classes.itemsGroupTitle } >
                                <i className='fa fa-circle' style={ {color: item.color} }></i>
                                { item.title }
                            </p>
                            <p className={ classes.itemsGroupValue }>
                                { item.value }
                            </p>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );

    return (
        <div>
            { renderRow('Payments', [
                {
                    title: 'Today',
                    value: `$${numeral(payments.Payments.Today).format('0,0.00')}`,
                    color: Colors.brandPrimary
                },
                {
                    title: 'This Month',
                    value: `$${numeral(payments.Payments.ThisMonth).format('0,0.00')}`,
                    color: Colors.brandEndaveour
                }
            ]) }
            { renderRow('Invoices', [
                {
                    title: 'Due',
                    value: `$${numeral(payments.Invoices.Due).format('0,0.00')}`,
                    color: Colors.brandSuccess
                },
                {
                    title: 'Overdue',
                    value: `$${numeral(payments.Invoices.Overdue).format('0,0.00')}`,
                    color: '#adcb86'
                }
            ]) }
        </div>
    );
}

const renderAllTasks = (tasks) => (
    <div>
        <Divider>
            <strong>All Tasks</strong>
            <span className="m-l-1 badge badge-gray-lighter badge-outline">4</span>
        </Divider>
        {
            renderChartWithLegend([
                { value: tasks.Pending, title: 'Pending', color: Colors.brandPrimary },
                { value: tasks.Behind, title: 'Behind', color: Colors.brandEndaveour },
                { value: tasks.Completed, title: 'Completed', color: '#222d33' }
            ])
        }
    </div>
);

const renderAllProjects = (projects) => (
    <div>
        <Divider>
            All Projects
        </Divider>
        {
            renderChartWithLegend([
                { value: projects.Pending, title: 'Pending', color: Colors.brandSuccess },
                { value: projects.Behind, title: 'Behind', color: '#adcb86'},
                { value: projects.Completed, title: 'Completed', color: '#2b2f26' }
            ])
        }
    </div>
);

const renderMyStats = (stats) => {
    return (
        <div>
            <Divider>
                My Stats
            </Divider>
            <ListGroup className={ classes.statsList }>
                <ListGroupItem className={ classes.statsListItem }>
                    Active Projects
                    <Label bsStyle='success' outline>
                        { stats.ActiveProjects }
                    </Label>
                </ListGroupItem>
                <ListGroupItem className={ classes.statsListItem }>
                    Open Tasks
                    <Label bsStyle='primary' outline>
                        { stats.OpenTasks }
                    </Label>
                </ListGroupItem>
                <ListGroupItem className={ classes.statsListItem }>
                    Support Tickets
                    <Label bsStyle='info' outline>
                        { stats.Support }
                    </Label>
                </ListGroupItem>
                <ListGroupItem className={ classes.statsListItem }>
                    Active Timers
                    <Label bsStyle='custom' customColor={ Colors.grayLighter } outline>
                        { stats.ActiveTimers }
                    </Label>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};

const renderTasksPanel = (tasks) => {
    const typeToColor = (type) => ([
        Colors.brandPrimary,
        Colors.brandDanger,
        Colors.brandSuccess,
        Colors.grayLighter
    ][type]);

    const renderTask = task => (
        <Media>
            <Media.Body>
                <div className='checkbox'>
                    <label>
                        <input type="checkbox" defaultChecked={ task.Complete } />
                        <Link
                            to='/apps/task-details'
                            className={ task.Complete ? classes.taskTitleComplete : null}
                        >
                            { task.Title }
                        </Link>
                        <p className="m-t-1 small">
                            { moment(task.Date).format('DD-MMM-YYYY, HH:mm') }
                        </p>
                    </label>
                </div>
            </Media.Body>
            <Media.Right align="middle">
                <i
                    className="fa fa-fw fa-circle"
                    style={ { color: typeToColor(task.Type) } }
                ></i>
            </Media.Right>
        </Media>
    );

    return (
        <Panel
            header={
                <div className={ classes.panelHeader }>
                    <h5 className={ classes.panelHeaderTitle }>Tasks</h5>
                    <LinkContainer to='/apps/tasks/list'>
                        <Button bsSize='xsmall'>
                            <i className="fa fa-pencil"></i>
                        </Button>
                    </LinkContainer>
                </div>
            }
            footer={
                <div className='text-center'>
                    <Link to='/apps/tasks/list'>
                        See More Tasks <i className="fa fa-angle-right"></i>
                    </Link>
                </div>
            }
            maxHeight={ 600 }
        >
            <ListGroup fill>
                {
                    _.map(tasks, task => (
                        <ListGroupItem
                            className={ classes.listItemTransparent }
                            key={ task._id }
                        >
                            { renderTask(task) }
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </Panel>
    );
};

const renderMyProjectsPanel = (projects) => {
    const statusToColor = (status) => {
        const map = {
            active: Colors.brandSuccess,
            timer: Colors.grayLighter,
            open: Colors.brandPrimary,
            support: Colors.brandInfo,
        };
        return map[status.toLowerCase()];
    };

    const renderProject = (project) => (
        <div>
            <div className={ classes.projectTitle }>
                <Link to='/apps/task-details'>
                    { project.Title }
                </Link>
                <Label
                    outline
                    bsStyle='custom'
                    customColor={ statusToColor(project.Status) }
                >
                    { project.Status }
                </Label>
            </div>
            <div className={ classes.slimBarWrap }>
                <ProgressBar
                    now={ project.Completness }
                    className={ classes.slimBar }
                />
            </div>
            <Row className='m-b-2'>
                <Col sm={ 4 } xs={ 4 } className='text-center'>
                    <h4 className="m-t-0 f-w-300 m-b-0">{project.Completness}%</h4>
                    <p className="text-center m-b-0">Complete</p>
                </Col>
                <Col sm={ 4 } xs={ 4 } className='text-center'>
                    <h4 className="m-t-0 f-w-300 m-b-0">{project.Tasks}</h4>
                    <p className="text-center m-b-0">My Tasks</p>
                </Col>
                <Col sm={ 4 } xs={ 4 } className='text-center'>
                    <h4 className="m-t-0 f-w-300 m-b-0">{project.DaysDue}</h4>
                    <p className="text-center m-b-0">Days Due</p>
                </Col>
            </Row>
        </div>
    );

    return (
        <Panel
            className={ classes.panelLight }
            header={
                <div className={ classes.panelHeader }>
                    <h5 className={ classes.panelHeaderTitle }>My Projects</h5>
                    <LinkContainer to='/apps/projects/list'>
                        <Button bsSize='xsmall'>
                            <i className="fa fa-pencil"></i>
                        </Button>
                    </LinkContainer>
                </div>
            }
            footer={
                <div className='text-center'>
                    <Link to='/apps/projects/list'>
                        See More Projects <i className="fa fa-angle-right"></i>
                    </Link>
                </div>
            }
            maxHeight={ 600 }
        >
            <ListGroup fill>
                {
                    _.map(projects, (project) => (
                            <ListGroupItem
                                className='no-bg'
                                key={ project._id }
                            >
                                { renderProject(project) }
                            </ListGroupItem>
                        )
                    )
                }
            </ListGroup>
        </Panel>
    )
}

const renderTimeline = (timeline) => {
    const titleToColor = (title) => {
        const map = {
            alert: Colors.brandDanger,
            warning: Colors.brandWarning,
            info: Colors.brandInfo,
            message: Colors.brandPrimary,
            success: Colors.brandSuccess,
            obsolete: Colors.gray
        };
        return map[title.toLowerCase()];
    };

    const titleToIcon = (title) => {
        const map = {
            alert: <i className='fa fa-fw fa-times-circle'></i>,
            warning: <i className='fa fa-fw fa-exclamation-circle'></i>,
            info: <i className='fa fa-fw fa-info-circle text-info'></i>,
            message: <i className='fa fa-fw fa-plus-circle'></i>,
            success: <i className='fa fa-fw fa-check-circle'></i>,
            obsolete: <i className='fa fa-fw fa-circle'></i>
        }
        return map[title.toLowerCase()];
    }

    const bodyElements = (element) => {
        const map = {
            files: (
                <Timeline.ItemBody>
                    <i className="m-l-1 fa fa-file-text-o fa-fw"></i> read_me.txt
                    <br />
                    <i className="m-l-1 fa fa-file-zip-o fa-fw"></i> all-files.zip
                    <br />
                    <i className="m-l-1 fa fa-file-word-o fa-fw"></i> alice-feedback.doc
                    <br />
                    <span className="badge m-t-1 m-b-1">+12</span>
                </Timeline.ItemBody>
            ),
            avatars: (
                <Timeline.ItemBody>
                    <AvatarImage size='small' src={ faker.image.avatar() }/>
                    <AvatarImage size='small' src={ faker.image.avatar() }/>
                    <AvatarImage size='small' src={ faker.image.avatar() }/>
                    <AvatarImage size='small' src={ faker.image.avatar() }/>
                    <AvatarImage size='small' src={ faker.image.avatar() }/>
                    <AvatarImage size='small' src={ faker.image.avatar() }/>
                </Timeline.ItemBody>
            ),
            messageExtra: (
                <Timeline.ItemBody>
                    { element.ExtraText }
                </Timeline.ItemBody>
            )
        };
        return map[element.Type] || null;
    }

    const renderTimelineItem = (entry) => (
        <Timeline.Item
            date={ entry.Date }
            dateFormat='DD-MMM-YYYY, HH:mm'
            color={ titleToColor(entry.Title) }
            icon={ titleToIcon(entry.Title) }
            key={ entry._id || hash(entry) }
        >
            <Timeline.ItemHeader
                primaryText={
                    <p>
                        <Label
                            outline
                            bsStyle='custom'
                            customColor={ titleToColor(entry.Title) }
                        >{ entry.Title }</Label>
                    </p>
                }
                secondaryText={
                    <p
                        className={`text-white ${entry.Disabled?classes.taskTitleComplete:''}`}
                    >
                        { entry.Text }
                    </p>
                }
            />
            { bodyElements(entry) }
        </Timeline.Item>
    );

    return (
        <Panel
            header={
                <div className={ classes.panelHeader }>
                    <h5 className={ classes.panelHeaderTitle }>Timeline</h5>
                    <LinkContainer to='/pages/timeline'>
                        <Button bsSize='xsmall'>
                            <i className="fa fa-pencil"></i>
                        </Button>
                    </LinkContainer>
                </div>
            }
            maxHeight={ 639 }
        >
            <Timeline
                itemAlignment='vertical-inner-date'
            >
                <Timeline.Date>Today</Timeline.Date>

                {
                    _.map(timeline, timelineEntry => renderTimelineItem(timelineEntry))
                }
            </Timeline>
        </Panel>
    );
};

// ------------------------------------
// Main Container
// ------------------------------------
class ProjectsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, getData(projectsData));
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className={ classes.mainWrap }>
                <Row>
                    <Col lg={ 12 }>
                        <p className={ classes.headParagraph }>
                            { faker.lorem.paragraph() }
                        </p>

                        <Row>
                            <Col lg={ 3 }>
                                { renderSection(renderPayments,
                                     _.pick(this.state, 'Payments', 'Invoices')) }
                            </Col>
                            <Col lg={ 3 }>
                                { renderSection(renderAllTasks, this.state.AllTasks) }
                            </Col>
                            <Col lg={ 3 }>
                                { renderSection(renderAllProjects, this.state.AllProjects) }
                            </Col>
                            <Col lg={ 3 }>
                                { renderSection(renderMyStats, this.state.MyStats) }
                            </Col>
                        </Row>

                        <Row className='m-t-3'>
                            <Col lg={ 4 }>
                                { renderSection(renderTasksPanel, this.state.Tasks) }
                            </Col>
                            <Col lg={ 4 }>
                                { renderSection(renderTimeline, this.state.Timeline) }
                            </Col>
                            <Col lg={ 4 }>
                                { renderSection(renderMyProjectsPanel, this.state.MyProjects) }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(ProjectsContainer);
