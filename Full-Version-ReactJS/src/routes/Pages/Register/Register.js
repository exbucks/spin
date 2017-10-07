import React from 'react';
import {
    Row,
    Col,
    Panel,
    Button,
    Form,
    FormGroup,
    FormControl,
    Checkbox
} from 'components';
import { Link } from 'react-router';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_FLUID } from 'layouts/DefaultLayout/modules/layout';

import classes from './../Pages.scss';

import logo from 'static/spin-logo-inverted.png';

class RegisterContainer extends RoutedComponent {
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
                                className={ classes.registerPanel }
                                header={(
                                    <Link to='/' className={ classes.toHomeLink }>
                                        <img src={ logo } alt='Back to Home' />
                                    </Link>
                                )}
                                footer={(
                                    <div>
                                        <Link to='/pages/forgot-password'>
                                            Forgot Password?
                                        </Link>
                                        <Link to='/pages/login' className='pull-right'>
                                            Login
                                        </Link>
                                    </div>
                                )}
                            >
                                <h2 className={ classes.panelHeader }>
                                    Register
                                </h2>
                                <p className='text-center m-b-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                </p>

                                <Form onSubmit={ e => e.preventDefault() }>
                                    <FormGroup>
                                        <label>
                                            Username
                                        </label>
                                        <FormControl type='text' placeholder='Enter an Username...' />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>
                                            Password
                                        </label>
                                        <FormControl type='password' placeholder='Enter a Password...' />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>
                                            Repeat Password
                                        </label>
                                        <FormControl type='password' placeholder='Reapeat the Password...' />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>
                                            Email
                                        </label>
                                        <FormControl type='email' placeholder='Enter an Email...' />
                                    </FormGroup>
                                    <Checkbox>
                                        Accept Terms & Privacy Policy
                                    </Checkbox>

                                    <Button block bsStyle='primary' className='m-b-2'>
                                        Register
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

export default connect()(RegisterContainer);
