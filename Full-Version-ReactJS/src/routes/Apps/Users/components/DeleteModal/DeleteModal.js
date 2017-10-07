import React, { PropTypes } from 'react';
import faker from 'faker';

import {
    Row,
    Col,
    Button,
    Media,
    AvatarImage,
    Image,
    Modal,
    Divider
} from 'components';

import { Colors } from 'consts';

const DeleteModal = props => (
    <Modal show={ props.visible } onHide={ props.onClose } bsSize='large' bsStyle='danger'>
        <Modal.Body>
            <Media>
                <Media.Left align='middle'>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x text-danger"></i>
                        <i className="fa fa-exclamation fa-stack-1x fa-inverse"></i>
                    </span>
                </Media.Left>
                <Media.Body>
                    <h4>Do you really want to delete?</h4>
                    <p>
                        You will not be able to rollback this action. Think carefully because the effects are irreversible.
                    </p>
                </Media.Body>
            </Media>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={ () => props.onClose() }>
                Cancel
            </Button>
            <Button bsStyle='danger'>
                Yes, Delete
            </Button>
        </Modal.Footer>
    </Modal>
);

DeleteModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func
};

DeleteModal.defaultProps = {
    onClose: () => { }
};

export default DeleteModal;
