import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import truncate from 'truncate';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';
import {
    Row,
    Col,
    Panel,
    Button,
    Nav,
    NavItem,
    Badge,
    ButtonGroup,
    ButtonToolbar,
    FormGroup,
    Label,
    Table,
    Media,
    FormControl,
    Checkbox,
    Pagination,
    OverlayTrigger,
    Tooltip,
    Divider,
    AvatarImage
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import inboxData from 'consts/data/app-inbox.json';

import classes from './Inbox.scss';
// ------------------------------------
// Subcomponents
// ------------------------------------
import {
    LabelsList,
    SearchBox,
    SideNav
} from './../components';

// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const messageLabelToColor = (label) => {
    switch(label) {
        case 'Work':
            return Colors.brandSuccess;
        case 'Friends':
            return Colors.brandInfo;
    }
}

const userStatusToColor = (status) => {
    switch(status) {
        default:
        case 'Online':
            return Colors.brandSuccess;
        case 'Away':
            return Colors.brandWarning;
        case 'Busy':
            return Colors.brandDanger;
        case 'Offline':
            return Colors.grayLighter;
    }
}

const folders = [
    { title: 'Inbox', count: 4 },
    { title: 'Draft', count: 2 },
    { title: 'Sent', count: 7 },
    { title: 'Trash', count: 1 }
];

const labels = [
    { title: 'Family', color: Colors.brandPrimary },
    { title: 'Friends', color: Colors.brandInfo },
    { title: 'Work', color: Colors.brandSuccess },
    { title: 'Other', color: Colors.brandDanger }
];
// ------------------------------------
// Sub Elements
// ------------------------------------
const renderPanelHeader = (router) => (
    <div className='flex-space-between'>
        <div>
            <SearchBox
                phText="Search Inbox..."
                buttonStyle="default"
                className={ classes.searchBox }
            />

            <div className='visible-xs m-t-1'>
                <ButtonToolbar>
                    <ButtonGroup justified>
                        <Button href='javascript: void(0)'>
                            <i className="fa fa-refresh"></i>
                        </Button>
                        <Button href='javascript: void(0)'>
                            <i className="fa fa-star"></i>
                        </Button>
                        <Button href='javascript: void(0)'>
                            <i className="fa fa-tag"></i>
                        </Button>
                        <Button href='javascript: void(0)'>
                            <i className="fa fa-ban"></i>
                        </Button>
                        <Button href='javascript: void(0)'>
                            <i className="fa fa-trash"></i>
                        </Button>
                        <Button href='javascript: void(0)'>
                            <i className="fa fa-pencil"></i>
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>

        <div className={`hidden-xs ${classes.headerActions}`}>
            <ButtonGroup>
                <Button>
                    <i className="fa fa-refresh"></i>
                </Button>
                <Button>
                    <i className="fa fa-star"></i>
                </Button>
                <Button>
                    <i className="fa fa-tag"></i>
                </Button>
                <Button>
                    <i className="fa fa-ban"></i>
                </Button>
                <Button>
                    <i className="fa fa-trash"></i>
                </Button>
            </ButtonGroup>
            <Button
                bsStyle='success'
                className='m-l-1'
                onClick={ () => router.push('/apps/new-email') }
            >
                <i className="fa fa-fw fa-pencil"></i>
            </Button>
        </div>
    </div>
);

const renderPanelFooter = () => (
    <div className='flex-space-between'>
        <p className='m-b-0'>
            Showing 1 to 15 of 147 entries
        </p>
        <Pagination
            bsSize="medium"
            items={10}
            activePage={1}
            className='m-y-0'
            boundaryLinks
            prev
            next
            first
            last
            ellipsis
        />
    </div>
)

const renderMessagesTable = (messages) => (
    <Table
        responsive
        hover
        fill
    >
        <thead>
            <tr>
                <th style={ {width: '5px'} }></th>
                <th style={ {width: '10px'} }></th>
                <th>From</th>
                <th>Subject</th>
                <th></th>
                <th></th>
                <th className='text-right'>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                _.map(messages, message => (
                    <tr key={ message._id }>
                        <td>
                            {
                                (message.Unread) ?
                                    (
                                        <OverlayTrigger
                                            overlay= {
                                                <Tooltip id='new-message-tooltip'>
                                                    You got a now message
                                                </Tooltip>
                                            }
                                            placement='top'
                                        >
                                            <i className='fa fa-fw fa-circle
                                                text-primary'></i>
                                        </OverlayTrigger>
                                    ) : null
                            }
                        </td>
                        <td>
                            <div className='flex-space-between'>
                                <Checkbox />
                                {
                                    (message.Starred) ?
                                        (
                                            <OverlayTrigger
                                                overlay= {
                                                    <Tooltip id='remove-from-favs-tooltip'>
                                                        Remove from Favorites
                                                    </Tooltip>
                                                }
                                                placement='top'
                                            >
                                                <i className='fa fa-fw fa-star
                                                    text-warning fa-lg'></i>
                                            </OverlayTrigger>
                                        ) : (
                                            <OverlayTrigger
                                                overlay= {
                                                    <Tooltip id='add-to-favs-tooltip'>
                                                        Add to Favorites
                                                    </Tooltip>
                                                }
                                                placement='top'
                                            >
                                                <i className='fa fa-fw fa-star-o
                                                    fa-lg'></i>
                                            </OverlayTrigger>
                                        )
                                }
                            </div>
                        </td>
                        <td className={ classes.messageContent }>
                            <Media>
                                <Media.Left align='middle'>
                                    <AvatarImage
                                        src={ message.Sender.Avatar }
                                        showStatus={ true }
                                        statusPlacement='bottom'
                                        statusColor={ userStatusToColor(message.Sender.Status) }
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <a href='javascript: void(0)'>
                                        <span className='text-white'>
                                            { message.Sender.Name }
                                        </span>
                                    </a>
                                    <br />
                                    <Media.Heading
                                        componentClass='span'
                                    >
                                        { message.Sender.Address }
                                    </Media.Heading>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <Link to='/apps/email-details'>
                                <span
                                    className={ message.Unread ? 'text-white' : 'text-muted'}
                                >
                                    { message.Subject }
                                </span>
                            </Link>
                            <br/>
                            <span>
                                { truncate(message.Content, 50) }
                            </span>
                        </td>
                        <td className='text-right'>
                            {
                                _.map(message.Labels, (label, index) => (
                                    <Label
                                        key={ index }
                                        outline
                                        bsStyle='custom'
                                        customColor={ messageLabelToColor(label) }
                                        className={ classes.messageLabel }
                                    >
                                        { label }
                                    </Label>
                                ))
                            }
                        </td>
                        <td className='text-right'>
                            {
                                (message.HasAttachment) ?
                                    (<i className='fa fa-fw fa-lg fa-paperclip'></i>) :
                                    null
                            }
                        </td>
                        <td className='text-right'>
                            <span className={ message.Unread ? 'text-white' : '' }>
                                { moment(message.Date).format('DD-MMM-YYYY') }
                            </span>
                            <br/>
                            <span>
                                { moment(message.Date).format('hh:mm a') }
                            </span>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
)
// ------------------------------------
// Main Container
// ------------------------------------
class InboxContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(inboxData)
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 2 }>
                    <Row>
                        <Col lg={ 12 } xs={ 6 }>
                            <SideNav
                                items={ folders }
                                folderSelected={ () => { this.props.history.push('/apps/inbox') } }
                            />
                        </Col>
                        <Col lg={ 12 } xs={ 6 }>
                            <Divider>Labels</Divider>
                            <LabelsList
                                items={ labels }
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={ 10 }>
                    <Panel
                        className={ classes.messagesPanel }
                        header={
                            renderPanelHeader(this.props.history)
                        }
                        footer={
                            renderPanelFooter()
                        }
                    >
                        { renderSection(renderMessagesTable, this.state.data.Messages) }
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default connect()(InboxContainer);
