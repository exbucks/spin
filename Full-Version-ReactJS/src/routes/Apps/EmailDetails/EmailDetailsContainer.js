import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import truncate from 'truncate';
import { LinkContainer } from 'react-router-bootstrap';
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
    InputGroup,
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
import emailData from 'consts/data/app-email-details.json';

import classes from './EmailDetails.scss';
// ------------------------------------
// Subcomponents
// ------------------------------------
import {
    LabelsList,
    SideNav,
    EmailAttachments
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
const renderActionBar = (router, backButton = true) => (
    <div className={ `flex-space-between ${classes.messagePanelHeader} ${ !backButton ? classes.noBackLink : '' }` }>
        {
            backButton ? (
                <Button
                    className='p-l-0'
                    bsStyle="link"
                    onClick={ () => router.push('/apps/inbox') }
                >
                    <i className="fa fa-fw fa-angle-left m-r-1"></i>
                    Inbox
                </Button>
            ) : null
        }
        <ButtonToolbar className={ classes.actionButtons }>
            <ButtonGroup>
                <Button>
                    <i className="fa fa-angle-left"></i>
                </Button>
                <Button>
                    <i className="fa fa-angle-right"></i>
                </Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button>
                    <i className="fa fa-refresh"></i>
                </Button>
                <Button>
                    <i className="fa fa-mail-forward"></i>
                </Button>
                <Button>
                    <i className="fa fa-star-o"></i>
                </Button>
                <Button>
                    <i className="fa fa-print"></i>
                </Button>
                <Button>
                    <i className="fa fa-trash"></i>
                </Button>
            </ButtonGroup>

            <Button
                bsStyle="primary"
                onClick={ () => { router.push('/apps/new-email') } }
            >
                <i className="fa fa-fw fa-reply"></i>
                <span className="hidden-md">
                    {' Reply'}
                </span>
            </Button>
        </ButtonToolbar>
    </div>
);

const renderMessage = (message, router) => (
    <Panel
        header={
            renderActionBar(router)
        }
        footer={
            renderActionBar(router, false)
        }
    >
        <div className={ `${classes.messageHeader} flex-space-between` }>
            <Media>
                <Media.Left>
                    <AvatarImage
                        showStatus
                        statusPlacement='bottom'
                        src={ message.Sender.Avatar }
                    />
                </Media.Left>
                <Media.Body>
                    <Media.Heading
                        componentClass='span'
                        className={ classes.senderEmail }
                    >
                        <a
                            href='javascript: void(0)'
                            className='text-white m-r-1'
                        >
                            { message.Sender.Name }
                        </a>
                        <samp>
                            { message.Sender.Email }
                        </samp>
                    </Media.Heading>
                    <p className='m-y-0'>
                        { message.Sender.Address }
                    </p>
                    <small className='visible-xs'>
                        { moment(message.Date).format('ddd, DD MMM YYYY HH:mm a') }
                    </small>
                </Media.Body>
            </Media>
            <div className={ `${classes.messageHeaderDate} hidden-xs` }>
                <p className='m-y-0'>
                    { moment(message.Date).format('ddd, DD MMM YYYY') }
                </p>
                <p className='m-y-0'>
                    { moment(message.Date).format('HH:mm a') }
                </p>
            </div>
        </div>

        <hr />

        <div className='flex-space-between'>
            <h3 className={ classes.messageSubject }>
                { message.Subject }
            </h3>
            <div className='hidden-xs m-b-2'>
                {
                    _.map(message.Labels, (label, index) => (
                        <Label
                            className='label-outline'
                            style={ {color: messageLabelToColor(label)} }
                            key={ index }
                        >
                            { label }
                        </Label>
                    ))
                }
            </div>
        </div>

        <p className='m-b-3'>
            { message.Content }
        </p>

        <EmailAttachments
            items={ message.Attachments }
        />
    </Panel>
);
// ------------------------------------
// Main Container
// ------------------------------------
class EmailDetailsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(emailData)
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
                    { renderMessage(this.state.data.Message, this.props.history) }
                </Col>
            </Row>
        )
    }
}

export default connect()(EmailDetailsContainer);
