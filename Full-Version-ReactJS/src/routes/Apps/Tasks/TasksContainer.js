import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import truncate from 'truncate';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Row,
    Col,
    Panel,
    Button,
    DropdownButton,
    MenuItem,
    ButtonGroup,
    FormControl,
    Checkbox,
    ListGroup,
    ListGroupItem,
    Label,
    Badge,
    Table,
    Media,
    Tooltip,
    ButtonToolbar,
    Pagination,
    Divider,
    AvatarImage
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import tasksData from 'consts/data/tasks.json';

import classes from './Tasks.scss';
// ------------------------------------
// Subcomponents
// ------------------------------------
import {
    FavoriteApps,
    SearchBox,
    ProjectsList,
    UsersList,
    PriorityButton
} from './../components';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const statusToColor = (status) => {
    switch(status) {
        case 'Online':
            return Colors.brandSuccess;
        case 'Busy':
            return Colors.brandDanger;
        case 'Away':
            return Colors.brandWarning;
        default:
        case 'Offline':
            return Colors.grayLighter;
    }
}

const priorityToColor = (priority) => {
    switch (priority) {
        case 'Low':
            return Colors.brandSuccess;
        default:
        case 'Normal':
            return Colors.brandPrimary;
        case 'High':
            return Colors.brandWarning;
        case 'Highest':
            return Colors.brandDanger;
    }
}

const taskLabelToColor = (label) => {
    switch (label) {
        case 'Bug':
            return Colors.brandDanger;
        default:
        case 'Feature':
            return Colors.brandInfo;
        case 'Duplicate':
            return Colors.brandPrimary;
        case 'Invalid':
            return Colors.brandPerfume;
        case 'On Hold':
            return Colors.brandEminence;
        case 'Help':
            return Colors.brandWarning;
        case 'HTML':
            return Colors.brandSuccess;
        case 'CSS':
            return Colors.brandMintGreen;
        case 'Next Phase':
            return Colors.brandMalibu;
    }
}
// ------------------------------------
// Sub Elements
// ------------------------------------
const renderActionsDropdown = (small = false) => (
    <DropdownButton
        bsSize={ small ? 'xsmall' : 'small'}
        pullRight
        title={
            <i className='fa fa-fw fa-gear'></i>
        }
        id='dropdown-task-actions'
    >
        <LinkContainer to='/apps/task-details'>
            <MenuItem eventKey="1">
                <i className="fa fa-fw fa-folder-open text-gray-lighter m-r-1"></i>
                View
            </MenuItem>
        </LinkContainer>
        <MenuItem eventKey="2">
            <i className="fa fa-fw fa-ticket text-gray-lighter m-r-1"></i>
            Add Task
        </MenuItem>
        <MenuItem eventKey="3">
            <i className="fa fa-fw fa-paperclip text-gray-lighter m-r-1"></i>
            Add Files
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">
            <i className="fa fa-fw fa-trash text-gray-lighter m-r-1"></i>
            Delete
        </MenuItem>
    </DropdownButton>
);

const renderTasksList = (tasks) => (
    <div className='m-t-1'>
        <Table hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Priority</th>
                    <th>Title & Description</th>
                    <th>People</th>
                    <th>Update</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(tasks, task => (
                        <tr key={ task._id }>
                            <td style={ {minWidth: '30px'} }>
                                <Checkbox />
                            </td>
                            <td>
                                <PriorityButton
                                    selectedPriority={ task.Priority }
                                    shortPriority
                                    size='small'
                                />
                            </td>
                            <td>
                                <span className="text-muted m-r-1">
                                    #{ task.Id }
                                </span>
                                <Link to="/apps/task-details">
                                    { task.Title }
                                </Link>
                                <br/>
                                <span>{ truncate(task.Content, 100) }</span>
                                { ' ' }
                                {
                                    _.map(task.Labels, (label, index) => (
                                        <Label
                                            outline
                                            className={ classes.taskLabel }
                                            bsStyle='custom'
                                            customColor={ taskLabelToColor(label) }
                                            key={ index }
                                        >
                                            { label }
                                        </Label>
                                    ))
                                }
                            </td>
                            <td className='text-right' style={ {minWidth: '70px'} }>
                                {
                                    _.map(task.Users, user => (
                                        <AvatarImage
                                            size='small'
                                            src={ user.Avatar }
                                            key={ user._id }
                                            className={ classes.taskAvatar }
                                        />
                                    ))
                                }
                            </td>
                            <td className='text-right'>
                                { moment(task.Date).format('DD-MMM-YYYY') }
                            </td>
                            <td className='text-right'>
                                { renderActionsDropdown() }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        <div className='text-center'>
            <Pagination
                bsSize="medium"
                items={10}
                activePage={1}
                boundaryLinks
                prev
                next
                first
                last
                ellipsis
            />
        </div>
    </div>
);

const renderTasksGrid = (tasks) => {
    const renderTaskTile = task => (
        <Panel key={ task._id }>
            <PriorityButton
                selectedPriority={ task.Priority }
                size='small'
            />

            <Media>
                <Media.Left align='middle'>
                    <Checkbox className='m-t-0'/>
                </Media.Left>
                <Media.Body>
                    <h4 className='m-t-0 m-b-1'>
                        <span className='text-muted'>
                            {`#${task.Id} `}
                        </span>
                        <Link to='/apps/task-details'>
                            { task.Title }
                        </Link>
                    </h4>
                </Media.Body>
            </Media>
            <span>
                { task.Content }
            </span>
            <ListGroup fill>
                <ListGroupItem className='no-bg'>
                    {
                        task.Labels ?
                            _.map(task.Labels, (label, index) => (
                                <Label
                                    key={ index }
                                    outline
                                    className={ classes.taskLabel }
                                    bsStyle='custom'
                                    customColor={ taskLabelToColor(label) }
                                >
                                    { label }
                                </Label>
                            )) : (
                                <Label
                                    outline
                                    bsStyle='custom'
                                    customColor={ Colors.grayLighter }
                                    className={ classes.taskLabel }
                                >
                                    <i className="fa fa-plus"></i> Add Label
                                </Label>
                            )
                    }
                </ListGroupItem>

                {
                    task.Users ? (
                        <ListGroupItem  className='no-bg'>
                            {
                                _.map(task.Users, user => (
                                    <AvatarImage
                                        size='small'
                                        src={ user.Avatar }
                                        key={ user._id }
                                        className={ classes.taskAvatar }
                                    />
                                ))
                            }
                        </ListGroupItem>
                    ) : null
                }


                <ListGroupItem className='no-bg'>
                    <div className='flex-space-between'>
                        <span>
                            Updated: { moment(task.Date).format('dddd, DD MMMM YYYY') }
                        </span>
                        { renderActionsDropdown(true) }
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Panel>
    );

    return (
        <div className='m-t-1'>
            <Row>
                <Col md={ 6 }>
                    {
                        _.map(tasks, (task, index) => {
                            if(index % 2 === 0) {
                                return renderTaskTile(task);
                            }
                        })
                    }
                </Col>
                <Col md={ 6 }>
                    {
                        _.map(tasks, (task, index) => {
                            if(index % 2 !== 0) {
                                return renderTaskTile(task);
                            }
                        })
                    }
                </Col>
            </Row>
            <div className='text-center'>
                <Pagination
                    bsSize="medium"
                    items={10}
                    activePage={1}
                    boundaryLinks
                    prev
                    next
                    first
                    last
                    ellipsis
                />
            </div>
        </div>
    );
};
// ------------------------------------
// Main Container
// ------------------------------------
class TasksContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(tasksData)
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        const { listStyle } = this.props.routeParams;
        return (
            <Row>
                <Col lg={ 3 }>
                    <Divider className={ classes.leftPanelDivider }>
                        Search
                    </Divider>
                    <SearchBox className={ classes.leftPanelSection } />

                    <Divider className={ classes.leftPanelDivider }>
                        Favorites
                    </Divider>
                    <FavoriteApps
                        className={ classes.leftPanelSection }
                        appSelected={ (url) => this.props.history.push(url) }
                    />

                    <Divider className={ classes.leftPanelDivider }>
                        Projects
                    </Divider>
                    <ProjectsList
                        className={ classes.leftPanelSection }
                        items={ this.state.data.ProjectsList }
                        projectSelected={ () => { this.props.history.push('/apps/tasks') } }
                    />

                    <Divider className={ classes.leftPanelDivider }>
                        People
                    </Divider>
                    <UsersList
                        className={ classes.leftPanelSection }
                        items={ this.state.data.People }
                    />
                </Col>
                <Col lg={ 9 }>
                    <div className='flex-space-between'>
                        <h3 className="f-w-300 m-t-1">
                            <Link to={`/apps/projects/${listStyle}`}>
                                Projects
                            </Link>
                            <span className="text-muted m-x-1">/</span>
                            Analytics Redesign
                            <Badge className='hidden-sm m-l-2'>
                                125 Tasks
                            </Badge>
                        </h3>
                        <div className='hidden-xs'>
                            <ButtonGroup>
                                <LinkContainer to='/apps/tasks/list'>
                                    <Button href='javascript:;'>
                                        <i className="fa fa-list text-white"></i>
                                    </Button>
                                </LinkContainer>
                                <LinkContainer to='/apps/tasks/grid'>
                                    <Button href='javascript:;'>
                                        <i className="fa fa-th-large text-white"></i>
                                    </Button>
                                </LinkContainer>
                            </ButtonGroup>
                            <Button bsStyle='primary' className='m-l-1'>
                                <span className="hidden-md hidden-sm hidden-xs">
                                    Add New Project
                                </span>
                                <i className="fa fa-fw fa-plus"></i>
                            </Button>
                        </div>
                    </div>
                    <ButtonToolbar  className='visible-xs'>
                        <ButtonGroup justified>
                            <Button
                                active={ listStyle === 'list' }
                                onClick={() => this.changeListType('list')}
                                href="javascript:void(0)"
                            >
                                <i className="fa fa-list text-white"></i>
                            </Button>
                            <Button
                                active={ listStyle === 'grid' }
                                onClick={() => this.changeListType('grid')}
                                href="javascript:void(0)"
                            >
                                <i className="fa fa-th-large text-white"></i>
                            </Button>
                            <Button
                                href="javascript:void(0)"
                            >
                                <i className="fa fa-fw fa-plus text-white"></i>
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    {
                        (listStyle === 'list') ?
                            renderSection(renderTasksList, this.state.data.Tasks) :
                            renderSection(renderTasksGrid, this.state.data.Tasks)
                    }
                </Col>
            </Row>
        );
    }
}

export default connect()(TasksContainer);
