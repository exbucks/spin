import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import truncate from 'truncate';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';

import {
    Row,
    Col,
    Panel,
    Button,
    Nav,
    NavItem,
    InputGroup,
    FormControl,
    Accordion,
    Divider
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';

import classes from './Faq.scss';

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderNavigation = () => (
    <div>
        <p className={ classes.navigiationDivider }>
            Navigate
        </p>
        <Nav
            bsStyle="pills"
            stacked
            activeKey={1}
            className='m-b-2'
        >
            <NavItem eventKey={1} href='javascript:;'>About Us</NavItem>
            <NavItem eventKey={2} href='javascript:;'>Our Team</NavItem>
            <NavItem eventKey={2} href='javascript:;'>Advisors</NavItem>
        </Nav>

        <p className={ classes.navigiationDivider }>
            Help
        </p>
        <Nav
            bsStyle="pills"
            stacked
            className='m-b-3'
        >
            <NavItem eventKey={1} href='javascript:;'>FAQ</NavItem>
            <NavItem eventKey={2} href='javascript:;'>Contact Us</NavItem>
        </Nav>

        <p className={ classes.navigiationDivider }>
            Policies
        </p>
        <Nav bsStyle="pills" stacked>
            <NavItem eventKey={1} href='javascript:;'>Terms of Use</NavItem>
            <NavItem eventKey={2} href='javascript:;'>Privacy Policy</NavItem>
        </Nav>
    </div>
);

const renderBoxes = () => (
    <Row className='m-t-3'>
        <Col lg={ 4 }>
            <Panel className='text-center'>
                <div>
                    <i className='fa fa-comment-o fa-fw fa-5x m-y-2'></i>
                </div>
                <h4>
                    Pre-Sales Questions
                </h4>
                <p>
                    Have a general questions that's not answered in our Articles? We will get back to you asap.
                </p>
                <Button bsStyle='primary' className='btn-outline m-t-2'>
                    Contact Us
                </Button>
            </Panel>
        </Col>

        <Col lg={ 4 }>
            <Panel className='text-center'>
                <div>
                    <i className='fa fa-copy fa-fw fa-5x m-y-2'></i>
                </div>
                <h4>
                    Technical Support
                </h4>
                <p>
                    Login to your Dashboard account for technical questions relative to themes & plugins.
                </p>
                <Button bsStyle='success' className='btn-outline m-t-2'>
                    Get Support
                </Button>
            </Panel>
        </Col>

        <Col lg={ 4 }>
            <Panel className='text-center'>
                <div>
                    <i className='fa fa-object-ungroup fa-fw fa-5x m-y-2'></i>
                </div>
                <h4>
                    Customizations
                </h4>
                <p>
                    You get this dashboard & need a bit of customization work completed? We can makie it happen.
                </p>
                <Button bsStyle='info' className='btn-outline m-t-2'>
                    Request Code
                </Button>
            </Panel>
        </Col>
    </Row>
);

const renderAccordions = () => {
    const renderAccordionPart = (title, id) => (
        <Panel
            header={(
                <h4 className='panel-header'>
                    <i className="fa fa-file-o fa-fw m-r-1 text-muted"></i>
                    { title }
                </h4>
            )}
            eventKey={ id }
        >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
    );

    return (
        <Row>
            <Col lg={ 6 }>
                <h4 className='m-b-2'>
                    Getting Started
                </h4>
                <Accordion>
                    { renderAccordionPart('Do you provide Photoshop files with your dashboard?', uid.v4()) }
                    { renderAccordionPart('How do I install Dashboard on my server?', uid.v4()) }
                    { renderAccordionPart('How do you provide support?', uid.v4()) }
                    { renderAccordionPart('Signing up for a new Dashboard account', uid.v4()) }
                </Accordion>
                <Button>
                    View All
                </Button>

                <h4 className='m-b-2 m-t-3'>
                    Updates
                </h4>
                <Accordion>
                    { renderAccordionPart('Updating Framework', uid.v4()) }
                    { renderAccordionPart('Update Database', uid.v4()) }
                </Accordion>
                <Button>
                    View All
                </Button>
            </Col>
            <Col lg={ 6 }>
                <h4 className='m-b-2'>
                    Plugins
                </h4>
                <Accordion>
                    { renderAccordionPart('What is your refund policy?', uid.v4()) }
                    { renderAccordionPart('Direct Operations Producer', uid.v4()) }
                    { renderAccordionPart('Forward Communications Specialist', uid.v4()) }
                </Accordion>
                <Button>
                    View All
                </Button>
            </Col>
        </Row>
    );
};

// ------------------------------------
// Main Container
// ------------------------------------
class FaqContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 2 }>
                    { renderSection(renderNavigation) }
                </Col>
                <Col lg={ 10 }>
                    <div className='text-center'>
                        <h4 className="display-4 m-t-0">
                            Frequently Asked Questions
                        </h4>
                        <p>
                            Get Help. Find Answers.
                        </p>
                    </div>

                    <Row>
                        <Col lg={ 4 } lgOffset={ 4 } className='m-y-3'>
                            <InputGroup>
                                <FormControl type='text' placeholder='Search...'/>
                                <InputGroup.Button>
                                    <Button bsStyle='primary'>
                                        Find Help
                                    </Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </Col>
                    </Row>

                    { renderSection(renderBoxes) }

                    <Divider
                        textPosition='center'
                        className='m-b-2 m-t-3'
                    >
                        Articles
                    </Divider>

                    { renderSection(renderAccordions) }
                </Col>
            </Row>
        );
    }
}

export default connect()(FaqContainer);
