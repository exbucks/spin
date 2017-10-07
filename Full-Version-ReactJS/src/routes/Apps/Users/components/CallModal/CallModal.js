import React, { PropTypes } from 'react';
import faker from 'faker';
import {
    Modal,
    Button,
    AvatarImage
} from 'components';

import { Colors } from 'consts';

const callerData = {
    Avatar: faker.image.avatar(),
    Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    Position: faker.name.jobTitle()
};

const CallModal = props => (
    <Modal show={ props.visible } onHide={ props.onClose } bsSize='small'>
        <Modal.Header closeButton>
            <Modal.Title>Do you want to call?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
            <AvatarImage
                src={ callerData.Avatar }
                size='large'
                showStatus
                statusPlacement='bottom'
                statusColor={ Colors.brandSuccess }
            />
            <h4 className='m-t-0'>
                { callerData.Name }
            </h4>
            <p>
                { callerData.Position }
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button block bsStyle='success' className='btn-outline'>
                <i className='fa fa-phone fa-fw m-r-1'></i>
                Call
            </Button>
            <Button block bsStyle='danger' className='btn-outline'>
                <i className='fa fa-close fa-fw m-r-1'></i>
                Dismiss
            </Button>
        </Modal.Footer>
    </Modal>
);

CallModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func
};

CallModal.defaultProps = {
    onClose: () => { }
};

export default CallModal;
