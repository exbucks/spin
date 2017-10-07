import React from 'react';
import uid from 'node-uuid';
import faker from 'faker';
import _ from 'underscore';
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
    ProgressBar,
    Media,
    Table,
    OverlayTrigger,
    Tooltip,
    Modal,
    Row,
    Divider,
    Label,
    SlimProgressBar
} from 'components';

import { PricingTableClean } from 'routes/Tables/PricingTables';

import { Colors } from 'consts';

import classes from './../../ProfileEdit.scss';

const pricingData = [
    {
        id: uid.v4(),
        type: 'Basic',
        bsStyle: 'info',
        description: 'Very good to start your business',
        price: 23.00,
        capabilities: [
            { key: 'Android / iOS', value: 'Yes' },
            { key: 'Admin Web Access', value: '85421' },
            { key: 'Appointments', value: 'Yes' },
            { key: 'Import / Export Data', value: 'Yes' },
            { key: 'Data Storage', value: '1GB' },
        ]
    },
    {
        id: uid.v4(),
        type: 'Premium',
        bsStyle: 'primary',
        description: 'Our most popular package',
        price: 48.90,
        capabilities: [
            { key: 'Android / iOS', value: 'Yes' },
            { key: 'Admin Web Access', value: '14931' },
            { key: 'Appointments', value: 'Yes' },
            { key: 'Import / Export Data', value: 'Yes' },
            { key: 'Data Storage', value: '2GB' },
        ],
        active: true
    },
    {
        id: uid.v4(),
        type: 'Pro',
        bsStyle: 'warning',
        description: 'When you have a lot of customers to take care of',
        price: 79.99,
        capabilities: [
            { key: 'Android / iOS', value: 'Yes' },
            { key: 'Admin Web Access', value: '35415' },
            { key: 'Appointments', value: 'Yes' },
            { key: 'Import / Export Data', value: 'Yes' },
            { key: 'Data Storage', value: '3GB' },
        ]
    },
    {
        id: uid.v4(),
        type: 'Advanced',
        bsStyle: 'danger',
        description: 'For the most advanced users and teams',
        price: 123.00,
        capabilities: [
            { key: 'Android / iOS', value: 'Yes' },
            { key: 'Admin Web Access', value: '51738' },
            { key: 'Appointments', value: 'Yes' },
            { key: 'Import / Export Data', value: 'Yes' },
            { key: 'Data Storage', value: '4GB' },
        ]
    }
];

const payPalUserName = faker.internet.email();
const payPalUserName1 = faker.internet.email(),
      payPalUserName2 = faker.internet.email(),
      payPalUserName3 = faker.internet.email();

class BillingEdit extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            planModalOpen: false,
            paymentModalOpen: false,
            paymentModalType: 'credit'
        }
    }
    render() {
        return (
            <div>
                <Panel
                    className='m-b-2'
                    header={
                        <h4 className='panel-title'>
                            Billing Edit
                        </h4>
                    }
                    footer={
                        <div>
                            <i className="fa fa-fw fa-support m-r-1"></i>
                             If you want to personalize the notification settings,
                             { ' ' }
                             <Link to='/apps/user-profile/edit/settings'>
                                 go here.
                             </Link>
                        </div>
                    }
                >
                    <Form horizontal>
                        <Media>
                            <Media.Body>
                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Your Plan
                                    </Col>
                                    <Col sm={6}>
                                        <p>
                                            <span className='text-white'>Premium</span> - You use 37% of the available space
                                        </p>

                                        <SlimProgressBar>
                                            <ProgressBar now={ 60 } key={ 1 }/>
                                            <ProgressBar now={ 10 } bsStyle='info' key={ 2 } />
                                            <ProgressBar now={ 10 } bsStyle='success' key={ 3 } />
                                        </SlimProgressBar>

                                        <dl className='dl-horizontal m-t-1'>
                                            <dt>
                                                Amount of Space
                                            </dt>

                                            <dd className='text-white'>
                                                214,8 GB / 1,03 TB
                                            </dd>

                                            <dt>
                                                Regular Files
                                            </dt>
                                            <dd className='text-white'>
                                                <i className="fa fa-square text-primary m-r-1"></i>
                                                177,8 GB
                                            </dd>

                                            <dt>
                                                Shared Files
                                            </dt>
                                            <dd className='text-white'>
                                                <i className="fa fa-square text-info m-r-1"></i>
                                                37 GB
                                            </dd>

                                            <dt>
                                                Available Space
                                            </dt>
                                            <dd className='text-white'>
                                                <i className="fa fa-square text-success m-r-1"></i>
                                                177,8 GB
                                            </dd>
                                        </dl>
                                    </Col>
                                </FormGroup>
                            </Media.Body>
                            <Media.Right>
                                <Button onClick={ () => { this.setState({ planModalOpen: true }) } }>
                                    Change Plan
                                </Button>
                            </Media.Right>
                        </Media>

                        <Divider>
                            Payment
                        </Divider>

                        <Media>
                            <Media.Body>
                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Payment Method
                                    </Col>
                                    <Col sm={9}>
                                        <p className='m-b-1'>
                                            <i className="fa fa-fw fa-paypal text-primary m-y-0 p-y-1"></i>
                                            <span className='text-white'>PayPal</span> - PayPal Account: { payPalUserName }
                                        </p>
                                        <dl className="dl-horizontal">
                                            <dt>Next Payment Due</dt>
                                            <dd className="text-white"> 2016-05-21 </dd>

                                            <dt>Amount</dt>
                                            <dd className="text-white">$ 13.00</dd>
                                        </dl>
                                    </Col>
                                </FormGroup>
                            </Media.Body>
                            <Media.Right>
                                <Button onClick={ () => { this.setState({ paymentModalOpen: true }) } }>
                                    Change Payment
                                </Button>
                            </Media.Right>
                        </Media>
                    </Form>
                </Panel>

                <Panel
                    header={
                        <h4 className='panel-title'>
                            Payment History
                        </h4>
                    }
                >
                    <Table fill>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Description</th>
                                <th>Payment Method</th>
                                <th>Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id='payment-status-tooltip-1'>
                                                Success
                                            </Tooltip>
                                        }
                                    >
                                        <i className='fa fa-check text-success'></i>
                                    </OverlayTrigger>
                                </td>
                                <td className='text-white'>
                                    26822
                                </td>
                                <td className='text-white'>
                                    2016-04-21
                                </td>
                                <td className='text-white'>
                                    $ 626.00
                                </td>
                                <td>
                                    <Label outline bsStyle='primary'>
                                        Premium
                                    </Label>
                                </td>
                                <td>
                                    <i className='fa fa-fw fa-paypal text-primary m-r-1'></i>
                                    <span className='text-white'>
                                        { payPalUserName1 }
                                    </span>
                                </td>
                                <td>
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id='download-link-1'>
                                                Download
                                            </Tooltip>
                                        }
                                    >
                                        <a href='javascript:;'>
                                            <i className='fa fa-cloud-download'></i>
                                        </a>
                                    </OverlayTrigger>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id='payment-status-tooltip-2'>
                                                Success
                                            </Tooltip>
                                        }
                                    >
                                        <i className='fa fa-check text-success'></i>
                                    </OverlayTrigger>
                                </td>
                                <td className='text-white'>
                                    75314
                                </td>
                                <td className='text-white'>
                                	2011-09-13
                                </td>
                                <td className='text-white'>
                                	$ 379.00
                                </td>
                                <td>
                                    <Label outline bsStyle='info'>
                                        Basic
                                    </Label>
                                </td>
                                <td>
                                    <i className='fa fa-fw fa-credit-card-alt m-r-1'></i>
                                    <span>
                                        Visa 4*** **** **** 9221
                                    </span>
                                </td>
                                <td>
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id='payment-link-tooltip-2'>
                                                Download
                                            </Tooltip>
                                        }
                                    >
                                        <a href='javascript:;'>
                                            <i className='fa fa-cloud-download'></i>
                                        </a>
                                    </OverlayTrigger>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id='payment-status-tooltip-3'>
                                                Failed
                                            </Tooltip>
                                        }
                                    >
                                        <i className='fa fa-close text-danger'></i>
                                    </OverlayTrigger>
                                </td>
                                <td>
                                    38264
                                </td>
                                <td>
                                    2016-04-21
                                </td>
                                <td>
                                    $ 585.00
                                </td>
                                <td>
                                    <Label outline bsStyle='warning'>
                                        Pro
                                    </Label>
                                </td>
                                <td>
                                    <i className='fa fa-fw fa-paypal m-r-1'></i>
                                    <span>
                                        { payPalUserName2 }
                                    </span>
                                </td>
                                <td>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id='payment-status-tooltip-4'>
                                                Failed
                                            </Tooltip>
                                        }
                                    >
                                        <i className='fa fa-close text-danger'></i>
                                    </OverlayTrigger>
                                </td>
                                <td>
                                    38264
                                </td>
                                <td>
                                    2016-04-21
                                </td>
                                <td>
                                    $ 585.00
                                </td>
                                <td>
                                    <Label outline bsStyle='danger'>
                                        Advanced
                                    </Label>
                                </td>
                                <td>
                                    <i className='fa fa-fw fa-credit-card-alt m-r-1'></i>
                                    <span>
                                        Visa 4*** **** **** 9221
                                    </span>
                                </td>
                                <td>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id='payment-status-tooltip-5'>
                                                Success
                                            </Tooltip>
                                        }
                                    >
                                        <i className='fa fa-check text-success'></i>
                                    </OverlayTrigger>
                                </td>
                                <td>
                                    80882
                                </td>
                                <td>
                                	2016-04-21
                                </td>
                                <td>
                                	$ 793.00
                                </td>
                                <td>
                                    <Label outline>
                                        Free
                                    </Label>
                                </td>
                                <td>
                                    <i className='fa fa-fw fa-paypal m-r-1'></i>
                                    <span className='text-white'>
                                        { payPalUserName3 }
                                    </span>
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Panel>

                <Modal
                    show={ this.state.planModalOpen }
                    onHide={ () => this.setState({ planModalOpen: false }) }
                    bsSize='large'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Change Your Plan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            {
                                _.map(pricingData, data => (
                                    <Col md={ 3 } key={ data.id }>
                                        <PricingTableClean {...data}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <p className='m-y-0'>
                            <Label outline className='m-r-1'>
                                Free
                            </Label>
                            Lorem ipsum dolor sit amet, consectetur adipisicing <a href='javascript:;'>Downgrade Now</a>
                        </p>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={ this.state.paymentModalOpen }
                    onHide={ () => this.setState({ paymentModalOpen: false }) }
                    bsSize='small'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Payment Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <h5 className={ classes.paymentOtherLabel }>
                                    Pay With
                                </h5>
                                <Radio
                                    inline
                                    checked={ this.state.paymentModalType === 'credit' }
                                    onChange={ () => { this.setState({ paymentModalType: 'credit' }) } }
                                >
                                    Credit Card
                                </Radio>
                                <Radio
                                    inline
                                    checked={ this.state.paymentModalType === 'paypal' }
                                    onChange={ () => { this.setState({ paymentModalType: 'paypal' }) } }
                                >
                                    PayPal Account
                                </Radio>
                            </FormGroup>
                            {
                                this.state.paymentModalType === 'credit' ? (
                                    <div>
                                        <FormGroup>
                                            <h5 className={ classes.paymentOtherLabel }>
                                                Credit Card Number
                                            </h5>
                                            <FormControl type='text' placeholder='Enter Your Card Number...'/>
                                        </FormGroup>

                                        <FormGroup>
                                            <h5 className={ classes.paymentOtherLabel }>
                                                Accepted Cards
                                            </h5>

                                            <div>
                                                <i className="fa fa-fw fa-cc-visa fa-2x m-r-1 text-white"></i>
                                                <i className="fa fa-fw fa-cc-mastercard fa-2x m-r-1 text-white"></i>
                                                <i className="fa fa-fw fa-cc-discover fa-2x m-r-1 text-white"></i>
                                                <i className="fa fa-fw fa-cc-amex fa-2x m-r-1 text-white"></i>
                                                <i className="fa fa-fw fa-cc-jcb fa-2x m-r-1 text-white"></i>
                                            </div>
                                        </FormGroup>

                                        <Row>
                                            <Col xs={ 7 }>
                                                <FormGroup inline>
                                                    <h5 className={ classes.paymentOtherLabel }>
                                                        Expiriation
                                                    </h5>

                                                    <div className={ classes.inlineInputs }>
                                                        <FormControl componentClass="select" inline>
                                                            {
                                                                _.map(Array.from((function*(){
                                                                        for(let i = 1; i <= 12; i++)
                                                                            yield i;
                                                                    })()), (month, i) => (
                                                                        <option value={ month } key={ i }>{ month }</option>
                                                                    ))
                                                            }
                                                        </FormControl>
                                                        <FormControl componentClass="select" inline>
                                                            {
                                                                _.map(Array.from((function*(){
                                                                        for(let i = 0; i < 10; i++)
                                                                            yield 16 + i;
                                                                    })()), (year, i) => (
                                                                        <option value={ year } key={ i }>{ year }</option>
                                                                    ))
                                                            }
                                                        </FormControl>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col xs={ 5 }>
                                                <FormGroup>
                                                    <h5 className={ classes.paymentOtherLabel }>
                                                        CVV
                                                    </h5>
                                                    <FormControl type='text' placeholder='CVV Code...'/>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <FormGroup>
                                            <ControlLabel>Country</ControlLabel>
                                            <FormControl componentClass="select">
                                                <option value={ 1 }>United Kingdom</option>
                                                <option value={ 2 }>United States</option>
                                                <option value={ 2 }>Australia</option>
                                                <option value={ 3 }>Canada</option>
                                                <option value={ 4 }>New Zeland</option>
                                                <option value={ 5 }>Germany</option>
                                            </FormControl>
                                        </FormGroup>

                                        <FormGroup>
                                            <ControlLabel>Postal Code</ControlLabel>
                                            <FormControl type='text' placeholder='Enter Code...'/>
                                        </FormGroup>

                                        <FormGroup>
                                            <ControlLabel>VAT ID</ControlLabel>
                                            <FormControl type='text' placeholder='Enter ID...'/>
                                        </FormGroup>
                                    </div>
                                ) : (
                                    <div>
                                        <h5 class="m-t-3">Charge to</h5>
                                        <p>
                                            You are currently paying with your PayPal account <strong class="text-white"><span>Alanna.Nicolas@gmail.com</span></strong> Sign in to PayPal to use a different account.
                                        </p>
                                        <Button block className='m-y-2' bsStyle='primary'>
                                            <i className='fa fa-fw fa-paypal'></i>
                                            { ' ' }
                                            PayPal
                                        </Button>
                                    </div>
                                )
                            }
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            className='m-r-1'
                            onClick={ () => this.setState({ paymentModalOpen: false }) }
                        >
                            Cancel
                        </Button>
                        <Button bsStyle='success'>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default BillingEdit;
