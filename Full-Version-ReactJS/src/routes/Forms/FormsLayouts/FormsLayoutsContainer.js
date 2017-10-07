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
    Button,
    InputGroup,
    FormControl,
    Form,
    FormGroup,
    ControlLabel,
    HelpBlock,
    Checkbox,
    Radio,
    Panel
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';

import { Colors } from 'consts';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './FormsLayouts.scss';
// ------------------------------------
// Sub Elements
// ------------------------------------
const BasicExample = () => (
    <div>
        <h5>
            Basic Example
        </h5>
        <p>
            Individual form controls automatically receive some global styling. All textual <kbd>FormControl</kbd> components are set to width: 100%; by default. Wrap labels and controls in <kbd>FormGroup</kbd> for optimum spacing.
        </p>
        <p className={`m-t-2 ${ classes.sectionLabel }`}>
            Example
        </p>
        <Panel>
            <Row>
                <Col sm={ 4 }>
                    <Form>
                        <FormGroup controlId='formBasicEmail'>
                            <ControlLabel>
                                Email address
                            </ControlLabel>
                            <FormControl type='email' placeholder='Email'/>
                        </FormGroup>
                        <FormGroup controlId='formBasicPassword'>
                            <ControlLabel>
                                Password
                            </ControlLabel>
                            <FormControl type='password' placeholder='Password'/>
                        </FormGroup>
                        <FormGroup controlId='formBasicFile'>
                            <ControlLabel>
                                FileInput
                            </ControlLabel>
                            <FormControl type='file'/>
                            <HelpBlock>
                                Example block-level help text here.
                            </HelpBlock>
                        </FormGroup>
                        <Checkbox>
                            Check me out
                        </Checkbox>
                        <Button>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Panel>
    </div>
);

const InlineExample = () => (
    <div>
        <h5>
            Inline Form
        </h5>
        <p>
            Add <kbd>inline</kbd> prop to make a <kbd>FormControl</kbd> inline block.
        </p>
        <p className={`m-t-2 ${ classes.sectionLabel }`}>
            Example
        </p>
        <Panel>
            <Form inline>
                <FormGroup controlId='inlineUserName'>
                    <ControlLabel className='m-r-1'>
                        Name
                    </ControlLabel>
                    <FormControl type='text' placeholder='Jane Doe' />
                </FormGroup>
                <FormGroup controlId='inlineUserEmail' className='m-r-1'>
                    <ControlLabel className='m-x-1'>
                        Email
                    </ControlLabel>
                    <FormControl type='email' placeholder='jane.doe@example.com' />
                </FormGroup>
                <Button>
                    Send Invitation
                </Button>
            </Form>
        </Panel>

        <p className={`m-t-2 ${ classes.sectionLabel }`}>
            Example
        </p>
        <Panel>
            <Form inline>
                <FormGroup controlId='inlineUserLoginEmail'>
                    <FormControl type='email' placeholder='Email' />
                </FormGroup>
                { ' ' }
                <FormGroup controlId='inlineUserPassword' className='m-r-1'>
                    <FormControl type='password' placeholder='Password' />
                </FormGroup>
                <Checkbox className='m-x-1'>
                    { ' Remember me' }
                </Checkbox>
                <Button>
                    Sign In
                </Button>
            </Form>
        </Panel>

        <p className={`m-t-2 ${ classes.sectionLabel }`}>
            Example
        </p>
        <Panel>
            <Form inline>
                <FormGroup controlId='amountExample' className='m-r-1'>
                    <InputGroup>
                        <InputGroup.Addon>
                            $
                        </InputGroup.Addon>
                        <FormControl type='text' placeholder='Amount' />
                        <InputGroup.Addon>
                            .00
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Button bsStyle='primary'>
                    Transfer cash
                </Button>
            </Form>
        </Panel>
    </div>
);

const HorizontalExample = () => (
    <div>
        <h5>
            Horizontal Form
        </h5>
        <p>
            Use Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding <kbd>horizontal</kbd> to the <kbd>Form</kbd>.
        </p>
        <p className={`m-t-2 ${ classes.sectionLabel }`}>
            Example
        </p>
        <Panel>
            <Row>
                <Col lg={ 6 }>
                    <Form horizontal className='m-b-0'>
                        <FormGroup controlId="horizontalUserEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={ 10 }>
                                <FormControl type="email" placeholder='Email' />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="horizontalUserPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={ 10 }>
                                <FormControl type="password" placeholder='Password' />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="horizontalRemember">
                            <Col sm={ 10 } smOffset={ 2 }>
                                <Checkbox>
                                    { ' Remember me' }
                                </Checkbox>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="horizontalSubmit" className='m-b-0'>
                            <Col sm={ 10 } smOffset={ 2 }>
                                <Button>
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Panel>
    </div>
);

// ------------------------------------
// Main Container
// ------------------------------------
class FormsLayoutsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className={ classes.mainWrap }>
                <Row>
                    <Col lg={ 12 }>
                        <BasicExample />
                        <InlineExample />
                        <HorizontalExample />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(FormsLayoutsContainer);
