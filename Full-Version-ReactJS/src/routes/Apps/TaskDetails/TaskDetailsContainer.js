import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import numeral from 'numeral';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';
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
    ButtonToolbar,
    Tooltip,
    OverlayTrigger,
    InputGroup,
    Input,
    Divider,
    AvatarImage
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import taskDetailsData from 'consts/data/app-task-details.json';

import classes from './TaskDetails.scss';
// ------------------------------------
// Subcomponents
// ------------------------------------
import {
    UsersList,
    PriorityButton,
    EmailAttachments,
    Comments
} from './../components';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

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
const renderTaskDetails = (task) => (
    <ListGroup className={ classes.taskDetails }>
        <ListGroupItem className='flex-space-between'>
            <h5 className={ classes.detailsKey }>
                Project
            </h5>
            <div className={ classes.detailsValue }>
                <Link to='/apps/tasks'>
                    { task.Project.Name }
                </Link>
            </div>
        </ListGroupItem>
        <ListGroupItem className='flex-space-between'>
            <h5 className={ classes.detailsKey }>
                Assigned by
            </h5>
            <div className={ classes.detailsValue }>
                <Link to='/apps/profile-details'>
                    { task.AssignedBy.Name }
                </Link>
            </div>
        </ListGroupItem>
        <ListGroupItem className='flex-space-between'>
            <h5 className={ classes.detailsKey }>
                Start Date
            </h5>
            <div className={ classes.detailsValue }>
                { moment(task.StartDate).format('ddd, DD MMM YYYY') }
            </div>
        </ListGroupItem>
        <ListGroupItem className='flex-space-between'>
            <h5 className={ classes.detailsKey }>
                Due Date
            </h5>
            <div className={ classes.detailsValue }>
                { moment(task.DueDate).format('ddd, DD MMM YYYY') }
            </div>
        </ListGroupItem>
        <ListGroupItem className='flex-space-between'>
            <h5 className={ classes.detailsKey }>
                Priority
            </h5>
            <div className={ classes.detailsValue }>
                <PriorityButton
                    size='xsmall'
                    shortPriority
                    selectedPriority={ task.Priority }
                />
            </div>
        </ListGroupItem>
        <ListGroupItem className='flex-space-between'>
            <h5 className={ classes.detailsKey }>
                Progress
            </h5>
            <div className={ classes.detailsValue }>
                { Math.round(task.Progress * 100) }%
            </div>
        </ListGroupItem>
        <ListGroupItem className='flex-space-between'>
            <h5 className={ classes.detailsKey }>
                Task ID
            </h5>
            <div className={ classes.detailsValue }>
                # { task.Id }
            </div>
        </ListGroupItem>
        <ListGroupItem className='flex-space-between'>
            <h5 className={ classes.detailsKey }>
                Date Assigned
            </h5>
            <div className={ classes.detailsValue }>
                { moment(task.AssignedDate).format('ddd, DD MMM YYYY') }
                <br/>
                { moment(task.AssignedDate).format('hh:mm a') }
            </div>
        </ListGroupItem>
    </ListGroup>
);

const renderHeader = () => (
    <div className={ `${classes.taskHeader} flex-space-between` }>
        <h3 className='m-y-0 f-w-300'>
            <Link to='/apps/projects/grid'>
                Projects
            </Link>
            <span className='text-muted m-x-1'>/</span>
            <Link to='/apps/tasks/grid'>
                Tasks
            </Link>
            <span className='text-muted m-x-1'>/</span>
            Task Details
        </h3>

        <div className={`${classes.headerActions} hidden-xs`}>
            <Button className='m-r-1'>
                <i className="fa fa-gear"></i>
            </Button>
            <Button bsStyle='primary'>
                <i className="fa fa-pencil"></i> Edit Task
            </Button>
        </div>

        <ButtonToolbar className='visible-xs m-t-1'>
            <ButtonGroup justified>
                <Button
                    href='javascript: void(0)'
                >
                    <i className="fa fa-gear"></i>
                </Button>
                <Button
                    href='javascript: void(0)'
                >
                    <i className="fa fa-pencil"></i>
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
    </div>
);

const renderAttachments = attachments => (
    <div>
        <EmailAttachments items={ attachments } />
        <p className='m-t-1'>
            <a href="javascript: void(0)">
                Add More Files to this Task
            </a>
        </p>
    </div>
);

const renderComments = comments => (
    <div className='m-t-3'>
        <Divider>
            Comments
            <Badge className='m-l-1'>
                { comments.length }
            </Badge>
        </Divider>
        <Comments data={ comments }/>
    </div>
);

const renderTaskPanel = data => (
    <Panel
        footer={
            <InputGroup>
                <InputGroup.Button>
                    <Button>
                        <i className="fa fa-fw fa-paperclip"></i>
                    </Button>
                </InputGroup.Button>
                <FormControl type='text' placeholder='Your Message...' />
                <InputGroup.Button>
                    <Button bsStyle='primary'>
                        Send
                    </Button>
                </InputGroup.Button>
            </InputGroup>
        }
    >
        <Media className='m-b-3'>
            <Media.Left align='middle'>
                <OverlayTrigger
                    overlay={
                        <Tooltip id='open-close-task'>
                            Open / Close Task
                        </Tooltip>
                    }
                    placement='top'
                >
                    <Checkbox />
                </OverlayTrigger>
            </Media.Left>
            <Media.Body>
                <h3 className={ classes.taskPanelTitle }>
                    <span className='text-muted m-r-1'>
                        #{ data.Task.Id }
                    </span>
                    { data.Task.Title }
                </h3>
                {
                    _.map(data.Task.Labels, (label, index) => (
                        <Label
                            key={ index }
                            outline
                            bsStyle='custom'
                            customColor={ taskLabelToColor(label) }
                            className={ classes.taskLabel }
                        >
                            { label }
                        </Label>
                    ))
                }
            </Media.Body>
        </Media>

        <p className='m-b-3'>
            { data.Task.Text }
        </p>

        { renderAttachments(data.Attachments) }
        { renderComments(data.Comments) }
    </Panel>
);
// ------------------------------------
// Main Container
// ------------------------------------
class TaskDetailsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(taskDetailsData)
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className={classes.mainWrap}>
                <Row>
                    <Col lg={ 3 }>
                        <Divider
                            className={ classes.leftPanelDivider  }
                        >
                            Task Details
                        </Divider>
                        { renderSection(renderTaskDetails, this.state.data.Task)}

                        <Divider
                            className={ classes.leftPanelDivider  }
                        >
                            Assigned To
                        </Divider>
                        <UsersList
                            items={ this.state.data.People }
                        />
                    </Col>
                    <Col lg={ 9 }>
                        { renderSection(renderHeader) }
                        { renderSection(renderTaskPanel, this.state.data) }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(TaskDetailsContainer);
