import React from 'react';
import PropTypes from 'prop-types'
import { faker } from '@faker-js/faker';
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
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    favoritted: (!!Math.round(Math.random())),
    position: faker.person.jobTitle(),
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
        Address: faker.person.address.streetAddress(),
        City: faker.person.address.city(),
        State: faker.person.address.state(),
        ZipCode: faker.person.address.zipCode()
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
