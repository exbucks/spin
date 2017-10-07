import React from 'react';
import uid from 'node-uuid';
import { Link } from 'react-router';
import {
    Row,
    Col,
    Panel,
    InputGroup,
    FormControl,
    Button
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_FLUID } from 'layouts/DefaultLayout/modules/layout';

import classes from './../Pages.scss';
import logo from 'static/spin-logo-inverted.png';

class NotFoundContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_FLUID,
            navbarEnabled: false,
            sidebarEnabled: false,
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
                                footer={
                                    <div className={ classes.infoPanelFooter }>
                                        <Link to='/'>
                                            <i className="fa fa-angle-left m-r-1"></i>
                                            Back to Home
                                        </Link>
                                    </div>
                                }
                            >
                                <h2 className={ classes.panelHeader }>
                                    Error 404
                                </h2>
                                <p className='text-center m-b-3'>
                                    Sorry but the page you are looking for ( <span className='text-white'>{this.props.location.pathname}</span> ) was not found. Try to fix the URL or use the search engine below.
                                </p>
                                <InputGroup>
                                    <FormControl
                                        type='text'
                                        placeholder='Search pages...'
                                    />
                                    <InputGroup.Button>
                                        <Button bsStyle='primary'>
                                            <i className="fa fa-fw fa-search"></i>
                                        </Button>
                                    </InputGroup.Button>
                                </InputGroup>
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
        )
    }
}

export default connect()(NotFoundContainer);
