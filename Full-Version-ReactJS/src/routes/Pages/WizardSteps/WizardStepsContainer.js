import React from 'react';
import _ from 'underscore';
import classNames from 'classnames';

import {
    Wizard,
    Panel,
    Row,
    Col,
    Button,
    Table,
    Form,
    FormControl,
    ControlLabel,
    FormGroup,
    InputGroup,
    DropdownButton,
    MenuItem,
    ButtonGroup
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

const sequence = ['your-cart', 'shipping', 'payment', 'summary'];

import classes from './wizardSteps.scss';

const items = [
    {
        name: 'Incredible Metal Keyboard',
        quantity: 22,
        price: '$578.00'
    },
    {
        name: 'Incredible Soft Cheese',
        quantity: 3,
        price: '$278.00'
    },
    {
        name: 'Handcrafted Granite Sausages',
        quantity: 29,
        price: '$465.00'
    },
    {
        name: 'Awesome Metal Gloves',
        quantity: 15,
        price: '$501.00'
    }
];

class WizardStepsContainer extends RoutedComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 'your-cart'
        }
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    renderCart() {
        return (
            <Row>
                <Col md={6}>
                    <div className='p-a-3'>
                        <h3 className="font-weight-300">Your Bags are ready to check out!</h3>
                        <p>
                            Discover goods you'll love from brands that inspire.
                            The easiest way to open your own online store.
                            Discover amazing stuff or open your own store for free!
                        </p>
                        <small className="text-muted">
                            Below is a sample page for your cart , Created using pages design UI Elementes
                        </small>
                    </div>
                </Col>
                <Col md={6}>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                _.map(items, (item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <i className="fa fa-close text-danger"></i>
                                        </td>
                                        <td>
                                            { item.name }
                                        </td>
                                        <td>
                                            { item.quantity }
                                        </td>
                                        <td>
                                            { item.price }
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3}></td>
                                <td>
                                    <div className='row'>
                                        <dt className="col-sm-7 text-right">Sub-Total</dt>
                                        <dd className="col-sm-5 text-right">$114.00</dd>

                                        <dt className="col-sm-7 text-right">VAT</dt>
                                        <dd className="col-sm-5 text-right">$876.78</dd>

                                        <dt className="col-sm-7 mt-3 text-right h4 mb-0">Total</dt>
                                        <dd className="col-sm-5 mt-3 h4 mb-0">$986.78</dd>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }

    renderShipping() {
        return (
            <Row>
                <Col md={6}>
                    <div className='p-a-3'>
                        <h3 className="font-weight-300">Your Information is safe with us!</h3>
                        <p>
                            We respect your privacy and protect it with strong encryption, plus strict policies.
                            Two-step verification, which we encourage all our customers to use.
                        </p>
                        <small className="text-muted"> Fields marked as <span className="text-danger">*</span> are required!</small>
                    </div>
                </Col>
                <Col md={6}>
                    <Form>
                        <h5>Name and Email Address</h5>
                        <Row className='m-t-2'>
                            <Col sm={6}>
                                <FormGroup>
                                    <ControlLabel>
                                        First Name <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <FormControl placeholder='First Name...'/>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <ControlLabel>
                                        Last Name <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <FormControl placeholder='Last Name...'/>
                                </FormGroup>
                            </Col>
                            <Col sm={12}>
                                <FormGroup>
                                    <ControlLabel>
                                        Email <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <FormControl placeholder='Email address...'/>
                                </FormGroup>
                            </Col>
                        </Row>

                        <h5>Billing Address</h5>
                        <Row className='m-t-2'>
                            <Col sm={12}>
                                <FormGroup>
                                    <ControlLabel>
                                        Address <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <FormControl placeholder='Current address...'/>
                                </FormGroup>
                            </Col>

                            <Col sm={3}>
                                <FormGroup>
                                    <ControlLabel>
                                        Country <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <div className={classes.ddWrap}>
                                        <DropdownButton title='PL (+48)' id='dropdown-address-country'>
                                            <MenuItem eventKey="1">PL (+48)</MenuItem>
                                            <MenuItem eventKey="2">UK (+44)</MenuItem>
                                        </DropdownButton>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col sm={9}>
                                <FormGroup>
                                    <ControlLabel>
                                        City <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <FormControl placeholder='Enter City...'/>
                                </FormGroup>
                            </Col>

                            <Col sm={9}>
                                <FormGroup>
                                    <ControlLabel>
                                        State/Province <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <FormControl placeholder='Outside US/Canada...'/>
                                </FormGroup>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <ControlLabel>
                                        ZIP Code <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <FormControl placeholder='Email...'/>
                                </FormGroup>
                            </Col>

                            <Col sm={12}>
                                <FormGroup>
                                    <ControlLabel>
                                        Phone Number
                                    </ControlLabel>
                                    <InputGroup>
                                        <InputGroup.Button>
                                            <DropdownButton title='PL (+48)' id='dropdown-phone-prefix' className='btn-block'>
                                                <MenuItem eventKey="1">PL (+48)</MenuItem>
                                                <MenuItem eventKey="2">UK (+44)</MenuItem>
                                            </DropdownButton>
                                        </InputGroup.Button>
                                        <FormControl type="text" placeholder='For Verification Purpose...' />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        )
    }

    renderPayment() {
        return (
            <Row>
                <Col md={6}>
                    <div className='p-a-3'>
                        <h3 className="font-weight-300">We Secured Your Line</h3>
                        <p>
                            Below is a sample page for your cart , Created using pages design UI Elementes.
                        </p>
                        <small className="text-muted">Below is a sample page for your cart , Created using pages design UI Elementes</small>

                        <Table className='m-y-2'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    _.map(items, (item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <i className="fa fa-close text-danger"></i>
                                            </td>
                                            <td>
                                                { item.name }
                                            </td>
                                            <td>
                                                { item.quantity }
                                            </td>
                                            <td>
                                                { item.price }
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td colSpan={4} className='text-right'>
                                        <strong>$986.78</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <small className="text-muted">Invoice are issued on the date of despatch. Payment terms: Pre-orders: within 10 days of invoice date with 4% discount, from the 11th to the 30th day net. Re-orders: non-reduced stock items are payable net after 20 days.</small>
                    </div>
                </Col>
                <Col md={6}>
                    <ButtonGroup>
                        <Button bsStyle='link'>
                            Credit Card
                        </Button>
                        <Button bsStyle='link'>
                            PayPal
                        </Button>
                        <Button bsStyle='link'>
                            Skrill
                        </Button>
                    </ButtonGroup>
                    <Panel className={classes.card}>
                        <div className={classes.flexBetween}>
                            <h3 className="font-weight-300 m-t-0">Credit Card</h3>
                            <div>
                                <i className="fa fa-lg fa-cc-visa text-primary m-r-1"></i>
                                <i className="fa fa-lg fa-cc-mastercard text-black-03 m-r-1"></i>
                                <i className="fa fa-lg fa-cc-jcb text-black-03 m-r-1"></i>
                            </div>
                        </div>
                        <Form>
                            <FormGroup>
                                <ControlLabel>
                                    Card Holder's Name <span className="text-danger">*</span>
                                </ControlLabel>
                                <FormControl placeholder='Name on the card...'/>
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>
                                    Card Number <span className="text-danger">*</span>
                                </ControlLabel>
                                <FormControl placeholder='8888-8888-8888-8888'/>
                            </FormGroup>

                            <div className={classes.flexBetween}>
                                <FormGroup>
                                    <ControlLabel>
                                        Expiriation <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <div>
                                        <DropdownButton title='Jun (06)' id='dropdown-expiriation-month' className='btn-block'>
                                            <MenuItem eventKey="1">Jul (07)</MenuItem>
                                            <MenuItem eventKey="2">Aug (08)</MenuItem>
                                        </DropdownButton>
                                        &nbsp;
                                        <DropdownButton title='PL (+48)' id='dropdown-expiriation-year' className='btn-block'>
                                            <MenuItem eventKey="1">2018</MenuItem>
                                            <MenuItem eventKey="2">2019</MenuItem>
                                            <MenuItem eventKey="2">2020</MenuItem>
                                        </DropdownButton>
                                    </div>
                                </FormGroup>

                                <FormGroup className='text-right'>
                                    <ControlLabel>
                                        CVC Code <span className="text-danger">*</span>
                                    </ControlLabel>
                                    <FormControl placeholder='000'/>
                                </FormGroup>
                            </div>
                        </Form>
                    </Panel>
                </Col>
            </Row>
        )
    }

    renderSummary() {
        return (
            <Row>
                <Col md={6}>
                    <div className='p-a-3'>
                        <h3 className="font-weight-300">Summary</h3>
                        <p>
                            Below is a sample page for your cart , Created using pages design UI Elementes.
                        </p>
                        <small className="text-muted">Below is a sample page for your cart, Created using pages design UI Elements</small>

                        <Table className='m-y-2'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    _.map(items, (item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <i className="fa fa-close text-danger"></i>
                                            </td>
                                            <td>
                                                { item.name }
                                            </td>
                                            <td>
                                                { item.quantity }
                                            </td>
                                            <td>
                                                { item.price }
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td colSpan={4} className='text-right'>
                                        <strong>$986.78</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <small className="text-muted">Invoice are issued on the date of despatch. Payment terms: Pre-orders: within 10 days of invoice date with 4% discount, from the 11th to the 30th day net. Re-orders: non-reduced stock items are payable net after 20 days.</small>
                    </div>
                </Col>
                <Col md={6}>
                    <h5 className="m-b-3 m-t-2">Name and Email Address</h5>

                    <dl className="row m-l-2">
                        <dt className="col-sm-4">First Name</dt>
                        <dd className="col-sm-8">John</dd>

                        <dt className="col-sm-4">Last Name</dt>
                        <dd className="col-sm-8">Novoselic</dd>

                        <dt className="col-sm-4">Email</dt>
                        <dd className="col-sm-8">john@novoselic.com</dd>

                        <dt className="col-sm-4"></dt>
                        <dd className="col-sm-8">
                            <div className={classes.changeBtnWrap}>
                                <Button bsStyle='link'><i className="fa fa-angle-left m-r-1"></i> Change</Button>
                            </div>
                        </dd>
                    </dl>

                    <h5 className="m-b-3 m-t-3">Billing Address</h5>

                    <dl className="row m-l-2">
                        <dt className="col-sm-4">Address</dt>
                        <dd className="col-sm-8">65575 Wintheiser Skyway Einar Pike</dd>

                        <dt className="col-sm-4">Country</dt>
                        <dd className="col-sm-8">United Kingdom</dd>

                        <dt className="col-sm-4">City</dt>
                        <dd className="col-sm-8">London</dd>

                        <dt className="col-sm-4">State/Province</dt>
                        <dd className="col-sm-8">Greater London</dd>

                        <dt className="col-sm-4">ZIP Code</dt>
                        <dd className="col-sm-8">151</dd>

                        <dt className="col-sm-4">Phone</dt>
                        <dd className="col-sm-8">+48 383-747-234</dd>

                        <dt className="col-sm-4"></dt>
                        <dd className="col-sm-8">
                            <div className={classes.changeBtnWrap}>
                                <Button bsStyle='link'><i className="fa fa-angle-left m-r-1"></i> Change</Button>
                            </div>
                        </dd>
                    </dl>

                    <h5 className="m-b-3 m-t-3">Credit Card</h5>

                    <dl className="row m-l-2">
                        <dt className="col-sm-4">Card Name</dt>
                        <dd className="col-sm-8"><i className="fa fa-cc-visa text-primary"></i> Visa </dd>

                        <dt className="col-sm-4">Card Number</dt>
                        <dd className="col-sm-8">**** **** **** 6765</dd>

                        <dt className="col-sm-4"></dt>
                        <dd className="col-sm-8">
                            <div className={classes.changeBtnWrap}>
                                <Button bsStyle='link'><i className="fa fa-angle-left m-r-1"></i> Change</Button>
                            </div>
                        </dd>
                    </dl>
                </Col>
            </Row>
        )
    }

    nextStep() {
        const index = sequence.indexOf(this.state.currentStep);
        this.setState({
            currentStep: sequence[index + 1]
        });
    }

    prevStep() {
        const index = sequence.indexOf(this.state.currentStep);
        this.setState({
            currentStep: sequence[index - 1]
        });
    }

    isComplete(id) {
        const currentIndex = sequence.indexOf(this.state.currentStep);
        const testIndex = sequence.indexOf(id);

        return testIndex < currentIndex;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={ 12 }>
                        <Panel
                            header={(
                                <Wizard
                                    onStepChanged={stepId => this.setState({currentStep: stepId})}
                                    activeStep={this.state.currentStep}
                                >
                                    <Wizard.Step
                                        id='your-cart'
                                        icon={<i className='fa fa-shopping-basket fa-fw'></i>}
                                        complete={this.isComplete('your-cart')}
                                    >
                                        Your Cart
                                    </Wizard.Step>
                                    <Wizard.Step
                                        id='shipping'
                                        icon={<i className='fa fa-cube fa-fw'></i>}
                                        complete={this.isComplete('shipping')}
                                    >
                                        Shipping
                                    </Wizard.Step>
                                    <Wizard.Step
                                        id='payment'
                                        icon={<i className='fa fa-credit-card fa-fw'></i>}
                                        complete={this.isComplete('payment')}
                                    >
                                        Payment
                                    </Wizard.Step>
                                    <Wizard.Step
                                        id='summary'
                                        icon={<i className='fa fa-navicon fa-fw'></i>}
                                        complete={this.isComplete('summary')}
                                    >
                                        Summary
                                    </Wizard.Step>
                                </Wizard>
                            )}
                            footer={
                                <div>
                                    {
                                        this.state.currentStep !== 'your-cart' && (
                                            <Button onClick={() => {this.prevStep()}} className='m-r-1'>
                                                <i className='fa fa-angle-left m-r-1'></i>
                                                Previous
                                            </Button>
                                        )
                                    }
                                    {
                                        this.state.currentStep !== 'summary' && (
                                            <Button bsStyle='primary' onClick={() => this.nextStep()}>
                                                Next
                                                <i className='fa fa-angle-right m-l-1'></i>
                                            </Button>
                                        )
                                    }
                                </div>
                            }
                        >
                            <div>
                                {
                                    (() => {
                                        switch(this.state.currentStep) {
                                            case 'your-cart':
                                                return this.renderCart();
                                            case 'shipping':
                                                return this.renderShipping();
                                            case 'payment':
                                                return this.renderPayment();
                                            case 'summary':
                                                return this.renderSummary();
                                        }
                                    })()
                                }
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(WizardStepsContainer);
