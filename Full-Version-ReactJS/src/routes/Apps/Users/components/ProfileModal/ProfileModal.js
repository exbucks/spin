import React, { PropTypes } from 'react';
import faker from 'faker';
import {
    Modal,
    Button
} from 'components';

import {
    UserDetails
} from 'routes/Apps/components';

const userData = {
    status: 'Online',
    avatar: faker.image.avatar(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    favoritted: (!!Math.round(Math.random())),
    position: faker.name.jobTitle(),
    shortProfile: faker.lorem.paragraph(),
    contact: {
        Email: faker.internet.email(),
        Phone: faker.phone.phoneNumberFormat(),
        Mobile: faker.phone.phoneNumberFormat(),
        Fax: faker.phone.phoneNumberFormat(),
        Skype: faker.internet.userName()
    },
    social: {
        LinkedIn: '/' + faker.internet.userName(),
        Facebook: '/' + faker.internet.userName(),
        Twitter: '/' + faker.internet.userName()
    },
    address: {
        Address: faker.address.streetAddress(),
        City: faker.address.city(),
        State: faker.address.state(),
        ZipCode: faker.address.zipCode()
    },
    labels: [
        'Computers',
        faker.commerce.department(),
        faker.commerce.department()
    ]
};

const ProfileModal = props => (
    <Modal show={ props.visible } onHide={ props.onClose }>
        <Modal.Header closeButton>
            <Modal.Title>Profile Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <UserDetails { ...userData } />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={ props.onClose }>Close</Button>
        </Modal.Footer>
    </Modal>
);

ProfileModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func
};

ProfileModal.defaultProps = {
    onClose: () => { }
};

export default ProfileModal;
