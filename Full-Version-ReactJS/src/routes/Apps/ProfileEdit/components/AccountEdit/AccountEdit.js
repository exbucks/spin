import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

import {
    Panel,
    Form,
    FormGroup,
    Col,
    FormControl,
    ControlLabel,
    Radio,
    Button,
    Divider
} from 'components';

import { Colors } from 'consts';

import { Upload } from 'routes/Apps/components';

import classes from './../../ProfileEdit.scss';

const AccountEdit = () => (
    <div>
        <Panel
            className='m-b-2'
            header={
                <h4 className='panel-title'>
                    Account Edit
                </h4>
            }
            footer={
                <div>
                    <i className="fa fa-fw fa-support m-r-1"></i>
                    <span>
                         If you have trouble with the configuration, you can contact us.
                    </span>
                    { ' ' }
                    <Link to='/apps/faq'>
                        We can help.
                    </Link>
                </div>
            }
        >
            <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Old Password
                    </Col>
                    <Col sm={6}>
                        <FormControl type="text" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        New Password
                    </Col>
                    <Col sm={6}>
                        <FormControl type="text" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Confirm New Password
                    </Col>
                    <Col sm={6}>
                        <FormControl type="text" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={3} sm={6}>
                        <Button className='m-r-1'>
                            Update Password
                        </Button>

                        <LinkContainer to='/pages/forgot-password'>
                            <Button bsStyle='link'>
                                Forgot Password?
                            </Button>
                        </LinkContainer>
                    </Col>
                </FormGroup>
            </Form>
        </Panel>

        <Panel
            className='m-b-2'
            header={
                <h4 className='panel-title'>
                    Change Username
                </h4>
            }
        >
            <p>
                <span>Changing the username is not recommended. In this connection, it can create</span>
                { ' ' }
                <Link to='/apps/faq'>
                    many problems.
                </Link>
            </p>
            <Button>
                Change Username
            </Button>
        </Panel>

        <Panel
            header={
                <h4 className='panel-title'>
                    Delete Account
                </h4>
            }
            footer={
                <div>
                    <i className="fa fa-fw fa-exclamation-circle m-r-1"></i>
                    <span> Are you sure you don’t want to just downgrade your account to a Free Account? We won’t charge your PayPal account anymore.</span>
                </div>
            }
        >
            <p>
                Once you delete your account, there is no going back. Please be certain.
            </p>
            <Button bsStyle='danger' className='btn-outline'>
                Delete Your Account
            </Button>
        </Panel>
    </div>
);

export default AccountEdit;
