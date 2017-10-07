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

const attachments = [
    {
        FileName: "borders_action_items_bandwidth.skd",
        FileSize: 548,
        Type: "Word",
        Owner: "{{fake:[name.firstName] [name.lastName]}}",
        DateAdded: "{{faker:date.recent}}"
    },
    {
        FileName: "borders_action_items_bandwidth.skd",
        FileSize: 959,
        Type: "PowerPoint",
        Owner: "{{fake:[name.firstName] [name.lastName]}}",
        DateAdded: "{{faker:date.recent}}"
    },
    {
        FileName: "borders_action_items_bandwidth.skd",
        FileSize: 887,
        Type: "Excel",
        Owner: "{{fake:[name.firstName] [name.lastName]}}",
        DateAdded: "{{faker:date.recent}}"
    }
];

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderMessageCreator = (attachments, router) => (
    <Panel
        header={
            <div className='flex-space-between'>
                <Button
                    className='p-l-0'
                    bsStyle="link"
                    onClick={ () => router.push('/apps/inbox') }
                >
                    <i className="fa fa-fw fa-angle-left m-r-1"></i>
                    Inbox
                </Button>
                <ButtonToolbar>
                    <Button bsStyle="link">
                        Cancel
                    </Button>
                    <Button bsStyle="primary">
                        <i className="fa fa-fw fa-paper-plane"></i>
                        <span className="visible-lg-inline">
                            {' Send'}
                        </span>
                    </Button>
                </ButtonToolbar>
            </div>
        }
        footer={
            <div className='text-right'>
                <Button>
                    <i className="fa fa-fw fa-paperclip"></i> Add New Files
                </Button>
            </div>
        }
    >
        <div>
            <Row>
                <Col md={ 12 } className='m-b-1'>
                    <InputGroup>
                        <InputGroup.Addon>
                            To
                        </InputGroup.Addon>
                        <FormControl
                            type='email'
                            placeholder='Enter email(s)...'
                        />
                        <InputGroup.Button>
                            <Button>
                                <i className="fa fa-fw fa-plus"></i>
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={ 6 } className='m-b-1'>
                    <InputGroup>
                        <InputGroup.Addon>
                            Cc
                        </InputGroup.Addon>
                        <FormControl
                            type='text'
                            placeholder='Enter email(s)...'
                        />
                    </InputGroup>
                </Col>
                <Col md={ 6 } className='m-b-1'>
                    <InputGroup>
                        <InputGroup.Addon>
                            Bcc
                        </InputGroup.Addon>
                        <FormControl
                            type='text'
                            placeholder='Enter email(s)...'
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={ 12 } className='m-b-1'>
                    <InputGroup>
                        <InputGroup.Addon>
                            Subject
                        </InputGroup.Addon>
                        <FormControl
                            type='text'
                            placeholder='Enter topic...'
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={ 12 } className='m-b-1'>
                    <FormControl
                         componentClass="textarea"
                         placeholder="Enter message..."
                         rows={ 6 }
                    />
                </Col>
            </Row>
        </div>
        <EmailAttachments
            items={ attachments }
            actionIcon='fa fa-close'
            actionTooltipText='Remove'
        />
    </Panel>
);
// ------------------------------------
// Main Container
// ------------------------------------
class NewEmailContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            attachments: treeRandomizer(attachments)
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
                    { renderMessageCreator(this.state.attachments, this.props.history) }
                </Col>
            </Row>
        )
    }
}

export default connect()(NewEmailContainer);
