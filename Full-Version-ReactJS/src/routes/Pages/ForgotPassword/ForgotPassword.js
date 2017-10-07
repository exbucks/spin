import React from 'react';
import { Link } from 'react-router';

import {
    Row,
    Col,
    Panel,
    Button,
    Form,
    FormGroup,
    FormControl,
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_FLUID } from 'layouts/DefaultLayout/modules/layout';

import classes from './../Pages.scss';

import logo from 'static/spin-logo-inverted.png';

class ForgotPassword extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_FLUID,
            sidebarEnabled: false,
            navbarEnabled: false,
            footerEnabled: false,
            headerEnabled: false
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <Button className='m-t-2 m-b-1' onClick={ () => this.props.history.goBack() }>
                        <i className='fa fa-angle-left m-r-1'></i>
                        Back
                    </Button>

                    <Row>
                        <Col className={ classes.centerCol } md={ 4 }>
                            <Panel
                                header={(
                                    <Link to='/' className={ classes.toHomeLink }>
                                        <img src={ logo } alt='Back to Home' />
                                    </Link>
                                )}
                                footer={(
                                    <div>
                                        <Link to='/pages/login'>
                                            Login
                                        </Link>
                                        <Link to='/pages/register' className='pull-right'>
                                            Register
                                        </Link>
                                    </div>
                                )}
                            >
                                <h2 className={ classes.panelHeader }>
                                    Forgot Password
                                </h2>
                                <p className='text-center m-b-3'>
                                    We can help you reset your password using a user name or email address associated with your account.
                                </p>

                                <Form onSubmit={ e => e.preventDefault() }>
                                    <FormGroup>
                                        <FormControl type='text' placeholder='Enter Username or Email...' />
                                    </FormGroup>

                                    <Button block bsStyle='primary' className='m-b-2'>
                                        Reset Your Password
                                    </Button>
                                </Form>
                            </Panel>
                            <p className='text-center text-gray-light'>
                                <strong>SPIN Dashboard </strong>
                                <span className='text-gray-light'>
                                    © 2009 - 2016. Made by <i className="fa fa-fw fa-heart text-danger"></i> New York, US
                                </span>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(ForgotPassword);
