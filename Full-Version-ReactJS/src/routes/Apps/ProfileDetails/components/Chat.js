import React from 'react';
import { faker } from '@faker-js/faker';
import {
    Row,
    Col,
    Panel,
    InputGroup,
    FormControl,
    Button,
    Dropdown,
    DropdownButton,
} from 'components';

import { Chat as ChatExample } from 'routes/Apps/components';
import treeRandomizer from 'modules/treeRandomizer';

import chatData from 'consts/data/app-chat.json';

const messages = treeRandomizer(chatData);

const chatName = `${ faker.person.firstName() } ${ faker.person.lastName() }`;

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
                            <Dropdown.Item eventKey="1">
                                <i className='fa fa-message fa-fw m-r-1'></i>
                                Private Message
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <i className='fa fa-search fa-fw m-r-1'></i>
                                Search this Thread
                            </Dropdown.Item>
                            <Dropdown.Item divider />
                            <Dropdown.Item eventKey="3">
                                <i className='fa fa-cross fa-fw m-r-1'></i>
                                Block User
                            </Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Col>
                <Col sm={ 6 } xsHidden className='text-right'>
                    <Dropdown id="dropdown-chat-options-desktop" bsSize='small'>
                        <Dropdown.Toggle>
                            <i className='fa fa-gear fa-fw'></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <Dropdown.Item eventKey="1">
                                <i className='fa fa-message fa-fw m-r-1'></i>
                                Private Message
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <i className='fa fa-search fa-fw m-r-1'></i>
                                Search this Thread
                            </Dropdown.Item>
                            <Dropdown.Item divider />
                            <Dropdown.Item eventKey="3">
                                <i className='fa fa-cross fa-fw m-r-1'></i>
                                Block User
                            </Dropdown.Item>
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
