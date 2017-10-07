import React, { PropTypes } from 'react';
import faker from 'faker';

import {
    Row,
    Col,
    Modal,
    Button,
    Form,
    Radio,
    InputGroup,
    FormGroup,
    FormControl,
    ControlLabel,
    Divider,
    Label
} from 'components';

import { Colors } from 'consts';

import { Upload } from 'routes/Apps/components';

const EditModal = props => (
    <Modal show={ props.visible } onHide={ props.onClose }>
        <Modal.Header closeButton>
            <Modal.Title>
                { 'Edit Profile ' }
                <small>
                    The fields marked with * are required
                </small>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Avatar
                    </Col>
                    <Col sm={9}>
                        <Upload />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        First Name
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="First Name..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Last Name
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Last Name..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        Job Type
                    </Col>
                    <Col sm={9}>
                        <FormControl componentClass="select" placeholder="1">
                            <option value="1">Human Intranet Developer</option>
                            <option value="2">Dynamic Tactics Specialist</option>
                            <option value="3">Global Configuration Consultant</option>
                            <option value="4">Principal Directives Orchestrator</option>
                            <option value="5">Corporate Usability Consultant</option>
                        </FormControl>
                    </Col>
                </FormGroup>

                <Divider>
                    Availability
                </Divider>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        After Logging
                    </Col>
                    <Col sm={9}>
                        <Radio name='after-logging' defaultChecked>
                            <Label outline bsStyle='success'>
                                Available
                            </Label>
                        </Radio>
                        <Radio name='after-logging'>
                            <Label outline bsStyle='warning'>
                                Inactive
                            </Label>
                        </Radio>
                        <Radio name='after-logging'>
                            <Label outline bsStyle='danger'>
                                Busy
                            </Label>
                        </Radio>
                        <Radio name='after-logging'>
                            <Label outline bsStyle='custom' customColor={ Colors.grayDarker }>
                                Offline
                            </Label>
                        </Radio>
                    </Col>
                </FormGroup>

                <Divider>
                    Add Profile
                </Divider>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Profile
                    </Col>
                    <Col sm={9}>
                        <FormControl componentClass="textarea" placeholder="Please Describe Your Profile..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Add Labels
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Add Here..." />
                    </Col>
                </FormGroup>

                <Divider>
                    Add Contacts
                </Divider>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        Email
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Enter Here..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        Mobile
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Enter Here..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Phone
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Enter Here..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Fax
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Enter Here..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Skype
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Enter Here..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Other
                    </Col>
                    <Col sm={9}>
                        <Button bsStyle='link'>
                            <i className='fa fa-plus m-r-1 text-success'></i>
                            Add
                        </Button>
                    </Col>
                </FormGroup>

                <Divider>
                    Add Social
                </Divider>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        LinkedIn
                    </Col>
                    <Col sm={9}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fa fa-fw fa-linkedin-square m-r-1 text-gray-lighter"></i>
                                http://lnkd.in/
                            </InputGroup.Addon>
                            <FormControl type='text' placeholder='Your Username...' />
                        </InputGroup>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Facebook
                    </Col>
                    <Col sm={9}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fa fa-fw fa-facebook-square m-r-1 text-gray-lighter"></i>
                                http://fb.com/
                            </InputGroup.Addon>
                            <FormControl type='text' placeholder='Your Username...' />
                        </InputGroup>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Twitter
                    </Col>
                    <Col sm={9}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fa fa-fw fa-twitter-square m-r-1 text-gray-lighter"></i>
                                http://twitter.com/
                            </InputGroup.Addon>
                            <FormControl type='text' placeholder='Your Username...' />
                        </InputGroup>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Other
                    </Col>
                    <Col sm={9}>
                        <Button bsStyle='link'>
                            <i className='fa fa-plus m-r-1 text-success'></i>
                            Add
                        </Button>
                    </Col>
                </FormGroup>

                <Divider>
                    Add Address
                </Divider>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        Address
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Address..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        City
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="City..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        State
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Enter State..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        ZIP Code
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="ZIP Code..." />
                    </Col>
                </FormGroup>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={ props.onClose }>Close</Button>
            <Button bsStyle='primary'>Save</Button>
        </Modal.Footer>
    </Modal>
);

EditModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func
};

EditModal.defaultProps = {
    onClose: () => { }
};

export default EditModal;
