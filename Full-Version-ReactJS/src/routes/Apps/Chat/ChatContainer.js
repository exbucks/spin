import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import faker from 'faker';
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
    Dropdown,
    DropdownButton,
    MenuItem,
    ButtonGroup,
    ButtonToolbar,
    FormGroup,
    Label,
    Table,
    Media,
    InputGroup,
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
import chatData from 'consts/data/app-chat.json';
// ------------------------------------
// Subcomponents
// ------------------------------------
import {
    LabelsList,
    SearchBox,
    Chat
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

const usersData = [
    {
        id: uid.v4(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.avatar(),
        statusColor: Colors.brandSuccess,
        position: faker.name.jobTitle(),
        rightElement: (
            <Badge>4</Badge>
        )
    },
    {
        id: uid.v4(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.avatar(),
        statusColor: Colors.brandWarning,
        position: faker.name.jobTitle(),
        rightElement: (
            <i
                className='fa fa-circle fa-fw'
                style={ {color: Colors.brandPrimary} }
            ></i>
        )
    },
    {
        id: uid.v4(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.avatar(),
        statusColor: Colors.brandDanger,
        position: faker.name.jobTitle(),
        rightElement: (
            <Badge bsStyle='danger'>
                13
            </Badge>
        )
    },
    {
        id: uid.v4(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.avatar(),
        position: faker.name.jobTitle(),
        statusColor: Colors.brandSuccess
    },
    {
        id: uid.v4(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.avatar(),
        position: faker.name.jobTitle(),
        statusColor: Colors.brandSuccess
    },
    {
        id: uid.v4(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.avatar(),
        position: faker.name.jobTitle(),
        statusColor: Colors.brandWarning
    },
    {
        id: uid.v4(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.avatar(),
        position: faker.name.jobTitle(),
        statusColor: Colors.grayLighter
    }
];

const updatesData = [
    {
        id: uid.v4(),
        icon: (
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle-thin fa-stack-2x text-danger"></i>
                <i className="fa fa-close fa-stack-1x fa-fw text-danger"></i>
            </span>
        ),
        title: faker.hacker.phrase(),
        date: faker.date.recent()
    },
    {
        id: uid.v4(),
        icon: (
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle-thin fa-stack-2x text-success"></i>
                <i className="fa fa-check fa-stack-1x text-success"></i>
            </span>
        ),
        title: faker.hacker.phrase(),
        date: faker.date.recent()
    },
    {
        id: uid.v4(),
        icon: (
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle-thin fa-stack-2x text-primary"></i>
                <i className="fa fa-info fa-stack-1x text-primary"></i>
            </span>
        ),
        title: faker.hacker.phrase(),
        date: faker.date.recent()
    }
];

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderUsers = () => (
    <Nav bsStyle="pills" stacked activeKey={0}>
        {
            _.map(usersData, (user, index) => (
                <NavItem eventKey={ index } key={ user.id }>
                    <Media>
                        <Media.Left>
                            <AvatarImage
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ user.statusColor }
                                src={ user.avatar }
                                size='small'
                            />
                        </Media.Left>
                        <Media.Body>
                            <h5 className='m-y-0'>
                                { user.name }
                            </h5>
                            <small className={ `${ index !==0 && 'text-gray-lighter'}` }>
                                { user.position }
                            </small>
                        </Media.Body>
                        <Media.Right>
                            { user.rightElement || null }
                        </Media.Right>
                    </Media>
                </NavItem>
            ))
        }
    </Nav>
);

const renderUpdates = () => (
    <Nav bsStyle="pills" stacked activeKey={0} className='m-b-2'>
        {
            _.map(updatesData, update => (
                <Media key={ update.id }>
                    <Media.Left>
                        { update.icon }
                    </Media.Left>
                    <Media.Body>
                        <h6 className='m-t-0'>
                            { update.title }
                        </h6>
                        <p className="text-nowrap small m-b-0 text-muted">
                            { moment(update.date).format('DD-MMM-YYYY, HH:mm') }
                        </p>
                    </Media.Body>
                </Media>
            ))
        }
    </Nav>
);

// ------------------------------------
// Main Container
// ------------------------------------
class ChatContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(chatData)
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
                <Col lg={ 3 }>
                    <SearchBox />
                    <Divider>
                        Contacts
                    </Divider>
                    { renderSection(renderUsers) }
                    <Divider>
                        Updates
                    </Divider>
                    { renderSection(renderUpdates) }
                </Col>
                <Col lg={ 9 }>
                    <Panel
                        header={(
                            <Row>
                                <Col sm={ 6 } xs={ 12 }>
                                    <h4 className='m-y-0'>
                                        {`Chat with ${faker.name.firstName()} ${faker.name.lastName()}`}
                                    </h4>
                                </Col>
                                <Col sm={ 6 } className='text-right' xsHidden>
                                    <Dropdown id={`dropdown-chat-actions-desktop`} bsSize='small'>
                                        <Dropdown.Toggle>
                                            <i className='fa fa-fw fa-gear'></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <MenuItem eventKey="1">
                                                <i className='fa fa-fw fa-comment text-gray-lighter m-r-1'></i>
                                                Private Message
                                            </MenuItem>
                                            <MenuItem eventKey="2">
                                                <i className='fa fa-fw fa-search text-gray-lighter m-r-1'></i>
                                                Search This Thread
                                            </MenuItem>

                                            <MenuItem divider />

                                            <MenuItem eventKey="3">
                                                <i className='fa fa-fw fa-close text-gray-lighter m-r-1'></i>
                                                Block User
                                            </MenuItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col xs={ 12 } lgHidden mdHidden smHidden>
                                    <DropdownButton id={`dropdown-chat-actions-mobile`} title='Options'>
                                        <MenuItem eventKey="1">
                                            <i className='fa fa-fw fa-comment text-gray-lighter m-r-1'></i>
                                            Private Message
                                        </MenuItem>
                                        <MenuItem eventKey="2">
                                            <i className='fa fa-fw fa-search text-gray-lighter m-r-1'></i>
                                            Search This Thread
                                        </MenuItem>

                                        <MenuItem divider />

                                        <MenuItem eventKey="3">
                                            <i className='fa fa-fw fa-close text-gray-lighter m-r-1'></i>
                                            Block User
                                        </MenuItem>
                                    </DropdownButton>
                                </Col>
                            </Row>
                        )}
                        footer={(
                            <InputGroup>
                                <InputGroup.Button>
                                    <Button>
                                        <i className='fa fa-fw fa-plus'></i>
                                    </Button>
                                </InputGroup.Button>

                                <FormControl type='text' />

                                <InputGroup.Button>
                                    <Button bsStyle='primary'>
                                        Send
                                    </Button>
                                </InputGroup.Button>
                            </InputGroup>
                        )}
                    >
                        <Chat messages={ this.state.data.Messages } />
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default connect()(ChatContainer);
