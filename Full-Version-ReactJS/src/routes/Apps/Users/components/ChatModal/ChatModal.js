import React, { PropTypes } from 'react';
import faker from 'faker';
import _ from 'underscore';

import {
    Modal,
    Button,
    FormControl,
    InputGroup
} from 'components';

import treeRandomizer from 'modules/treeRandomizer';
import chatData from 'consts/data/app-chat.json';

const messages = treeRandomizer(chatData).Messages;

import {
    Chat
} from 'routes/Apps/components';

const ChatModal = props => (
    <Modal show={ props.visible } onHide={ props.onClose }>
        <Modal.Header closeButton>
            <Modal.Title>Chat with {`${faker.name.firstName()} ${faker.name.lastName()}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Chat messages={ _.first(messages, 4) } />
        </Modal.Body>
        <Modal.Footer>
            <InputGroup>
                <FormControl type='text' placeholder='Message...' />
                <InputGroup.Button>
                    <Button>
                        Send
                    </Button>
                </InputGroup.Button>
            </InputGroup>
        </Modal.Footer>
    </Modal>
);

ChatModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func
};

ChatModal.defaultProps = {
    onClose: () => { }
};

export default ChatModal;
