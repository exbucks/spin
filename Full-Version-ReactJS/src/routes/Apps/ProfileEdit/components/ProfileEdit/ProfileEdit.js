import React from 'react';

import {
    Panel,
    Form,
    FormGroup,
    Col,
    FormControl,
    ControlLabel,
    Radio,
    Button,
    Divider,
    Label
} from 'components';

import { Colors } from 'consts';

import { Upload } from 'routes/Apps/components';

import classes from './../../ProfileEdit.scss';

const ProfileEdit = () => (
    <div>
        <Panel
            header={
                <h4 className='panel-title'>
                    Edit Profile
                </h4>
            }
            footer={
                <div className='text-right'>
                    <Button bsStyle='primary'>
                        Update Profile
                    </Button>
                </div>
            }
        >
            <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Avatar
                    </Col>
                    <Col sm={6}>
                        <Upload />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        First Name
                    </Col>
                    <Col sm={6}>
                        <FormControl type="text" placeholder="First Name..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Last Name
                    </Col>
                    <Col sm={6}>
                        <FormControl type="text" placeholder="Last Name..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <span className='text-danger'> * </span>
                        Job Type
                    </Col>
                    <Col sm={6}>
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
                    <Col sm={6}>
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
                    <Col sm={6}>
                        <FormControl componentClass="textarea" placeholder="Please Describe Your Profile..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Add Labels
                    </Col>
                    <Col sm={6}>
                        <FormControl type="text" placeholder="Add Here..." />
                    </Col>
                </FormGroup>
            </Form>
        </Panel>
    </div>
);

export default ProfileEdit;
