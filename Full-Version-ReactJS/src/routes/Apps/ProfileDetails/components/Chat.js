import React from 'react';
import faker from 'faker';
import {
    Row,
    Col,
    Panel,
    InputGroup,
    FormControl,
    Button,
    Dropdown,
    DropdownButton,
    MenuItem
} from 'components';

import { Chat as ChatExample } from 'routes/Apps/components';
import treeRandomizer from 'modules/treeRandomizer';

import chatData from 'consts/data/app-chat.json';

import classes from './../ProfileDetails.scss';

const messages = treeRandomizer(chatData);

const chatName = `${ faker.name.firstName() } ${ faker.name.lastName() }`;

const Chat = () => (
    <Panel
        className='m-t-2'
        header={
            <Row>
                <Col sm={ 6 } xs={ 12 }>
                    { `Chat with ${ chatName }` }
                    <Col sm={ 6 } lgHidden mdHidden smHidden>
                        <DropdownButton
                            id="dropdown-chat-options-mobile"
                            title="Options"
                        >
                            <MenuItem eventKey="1">
                                <i className='fa fa-message fa-fw m-r-1'></i>
                                Private Message
                            </MenuItem>
                            <MenuItem eventKey="2">
                                <i className='fa fa-search fa-fw m-r-1'></i>
                                Search this Thread
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="3">
                                <i className='fa fa-cross fa-fw m-r-1'></i>
                                Block User
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                </Col>
                <Col sm={ 6 } xsHidden className='text-right'>
                    <Dropdown id="dropdown-chat-options-desktop" bsSize='small'>
                        <Dropdown.Toggle>
                            <i className='fa fa-gear fa-fw'></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <MenuItem eventKey="1">
                                <i className='fa fa-message fa-fw m-r-1'></i>
                                Private Message
                            </MenuItem>
                            <MenuItem eventKey="2">
                                <i className='fa fa-search fa-fw m-r-1'></i>
                                Search this Thread
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="3">
                                <i className='fa fa-cross fa-fw m-r-1'></i>
                                Block User
                            </MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        }
        footer={
            <InputGroup>
                <InputGroup.Button>
                    <Button>
                        <i className='fa fa-plus fa-fw'></i>
                    </Button>
                </InputGroup.Button>
                <FormControl type='text' placeholder='Your Message...' />
                <InputGroup.Button bsSize='small'>
                    <Button bsStyle='primary'>
                        Send
                    </Button>
                </InputGroup.Button>
            </InputGroup>
        }
    >
        <ChatExample messages={ messages.Messages }/>
    </Panel>
);

export default Chat;
