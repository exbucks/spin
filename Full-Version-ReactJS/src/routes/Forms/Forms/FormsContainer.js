import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import truncate from 'truncate';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';

import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import emailMask from 'text-mask-addons/dist/emailMask';

import {
    Row,
    Col,
    Button,
    Table,
    InputGroup,
    FormControl,
    Form,
    FormGroup,
    ControlLabel,
    HelpBlock,
    Checkbox,
    Radio,
    DropdownButton,
    MenuItem,
    SplitButton,
    Glyphicon,
    MaskedTextInput
} from 'components';
import Toggle from 'react-toggle';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';

import { Colors } from 'consts';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './Forms.scss';

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy');
const dolarsMask = createNumberMask({ prefix: '$' });
const dolarsMaskDecimal = createNumberMask({ prefix: '$', allowDecimal: true });
const percentageMask = createNumberMask({ prefix: '', suffix: '%', integerLimit: 3 });
const upperCasePipe = conformedValue => conformedValue.toUpperCase();
// ----------------------------------- -
// Sub Elements
// ------------------------------------
const BasicElements = () => (
    <Row>
        <Col lg={ 6 }>
            <h4 className="m-t-3">
                Basic Elements
            </h4>
            <p className="m-b-2">
                Individual form controls automatically receive some global styling.
            </p>
            <p className={ classes.sectionLabel }>
                Example
            </p>
            <Form horizontal>
                <FormGroup controlId="formBasicNormal">
                    <Col componentClass={ControlLabel} sm={3}>
                        Normal Input
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formBasicText">
                    <Col componentClass={ControlLabel} sm={3}>
                        Help Text
                    </Col>
                    <Col sm={9}>
                        <FormControl type="email" placeholder="Email" />
                        <HelpBlock>
                            A block of help text that breaks onto a new line and may extend beyond one line.
                        </HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formBasicPlaceholder">
                    <Col componentClass={ControlLabel} sm={3}>
                        Placeholder
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder='Placeholder...'/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formBasicDisabled">
                    <Col componentClass={ControlLabel} sm={3}>
                        Disabled Input
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder='Disabled Input here...' disabled/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formBasicTextarea">
                    <Col componentClass={ControlLabel} sm={3}>
                        Textarea
                    </Col>
                    <Col sm={9}>
                        <FormControl componentClass="textarea"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formbBasicStatic">
                    <Col componentClass={ControlLabel} sm={3}>
                        Static Control
                    </Col>
                    <Col sm={9}>
                        <FormControl.Static>
                            email@example.com
                        </FormControl.Static>
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    </Row>
);

const CheckboxesRadios = () => (
    <Row>
        <Col lg={ 6 }>
            <h4 className="m-t-3">
                Checkboxes & Radios
            </h4>
            <p className="m-b-2">
                Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.
            </p>
            <p className={ classes.sectionLabel }>
                Example
            </p>
            <Form horizontal>
                <FormGroup controlId="formCheckRadioBasic">
                    <Col componentClass={ControlLabel} sm={3}>
                        Checkboxes & Radios
                    </Col>
                    <Col sm={9}>
                        <Checkbox>
                            Option one is this and that—be sure to include why it's great
                        </Checkbox>
                        <Checkbox disabled>
                            Option two is disabled
                        </Checkbox>
                        <Radio name='radios-example' defaultChecked>
                            Option one is this and that—be sure to include why it's great
                        </Radio>
                        <Radio name='radios-example'>
                            Option two can be something else and selecting it will deselect option one
                        </Radio>
                        <Radio name='radios-example' disabled>
                            Option three is disabled
                        </Radio>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formCheckRadioInline">
                    <Col componentClass={ControlLabel} sm={3}>
                        Inline Checkboxes & Radios
                    </Col>
                    <Col sm={9}>
                        <p className='m-y-0'>
                            <Checkbox inline>
                                One
                            </Checkbox>
                            <Checkbox inline>
                                Two
                            </Checkbox>
                            <Checkbox inline>
                                Three
                            </Checkbox>
                        </p>
                        <p className='m-y-0'>
                            <Radio name='inline-radios-example' inline defaultChecked>
                                One
                            </Radio>
                            <Radio name='inline-radios-example' inline>
                                Two
                            </Radio>
                            <Radio name='inline-radios-example' inline>
                                Three
                            </Radio>
                        </p>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formCheckRadioSelect">
                    <Col componentClass={ControlLabel} sm={3}>
                        Select
                    </Col>
                    <Col sm={9}>
                        <FormControl componentClass="select" defaultValue='one'>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                            <option value="four">Four</option>
                            <option value="five">Five</option>
                        </FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formCheckRadioMultipleSelect">
                    <Col componentClass={ControlLabel} sm={3}>
                        Multiple Select
                    </Col>
                    <Col sm={9}>
                        <FormControl componentClass="select" defaultValue={ ['one', 'three'] } multiple>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                            <option value="four">Four</option>
                            <option value="five">Five</option>
                        </FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formCheckRadioValidationHelpers">
                    <Col componentClass={ControlLabel} sm={3}>
                        Checkboxes with Validation Helpers
                    </Col>
                    <Col sm={9}>
                        <Checkbox validationState='success'>
                            Checkbox with Success
                        </Checkbox>
                        <Checkbox validationState='warning'>
                            Checkbox with Warning
                        </Checkbox>
                        <Checkbox validationState='error'>
                            Checkbox with Error
                        </Checkbox>
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    </Row>
);

const Sizing = () => (
    <Row>
        <Col lg={ 12 }>
            <h4 className="m-t-3">
                Sizing
            </h4>
            <p>
                Use the <kbd>bsSize</kbd> prop to change the sizing of <kbd>FormControl</kbd> or <kbd>InputGroup</kbd>
            </p>
            <p className={ classes.sectionLabel }>
                Example
            </p>
            <Row>
                <Col lg={ 6 }>
                    <Form horizontal>
                        <FormGroup controlId="formSizingColumn">
                            <Col componentClass={ControlLabel} sm={3}>
                                Column Sizing
                            </Col>
                            <Col sm={9}>
                                <Row>
                                    <Col xs={ 4 }>
                                        <FormControl type="text" placeholder='col-xs-4'/>
                                    </Col>
                                    <Col xs={ 4 }>
                                        <FormControl type="text" placeholder='col-xs-4'/>
                                    </Col>
                                    <Col xs={ 4 }>
                                        <FormControl type="text" placeholder='col-xs-4'/>
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formSizeLarge" bsSize='large'>
                            <Col componentClass={ControlLabel} sm={3}>
                                Large Label
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder='Large Input...'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formSizeDefault">
                            <Col componentClass={ControlLabel} sm={3}>
                                Default Label
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder='Default Input...'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formSizeSmall" bsSize='small'>
                            <Col componentClass={ControlLabel} sm={3}>
                                Small Label
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder='Small Input...'/>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Col>
    </Row>
);

const AdditionalElements = () => (
    <Row>
        <Col lg={ 12 }>
            <h4 className="m-t-3">
                Form Elements Options
            </h4>
            <p>
                Extend form controls by adding text or buttons before, after, or on both sides of any text-based input
            </p>
            <p className={ classes.sectionLabel }>
                Basic Examples
            </p>
            <Row>
                <Col lg={ 6 }>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl type="text" placeholder='UserName...'/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <FormControl type="text" />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col lg={ 6 }>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <input type='radio' />
                            </InputGroup.Addon>
                            <FormControl type="text" placeholder='Radio...'/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <input type='checkbox' />
                            </InputGroup.Addon>
                            <FormControl type="text" placeholder='Checkbox...'/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className='fa fa-dollar'></i>
                            </InputGroup.Addon>
                            <FormControl type="text" placeholder='Icon...'/>
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
        </Col>
        <Col lg={ 12 } className='m-t-3'>
            <Row>
                <Col lg={ 4 }>
                    <p className={ classes.sectionLabel }>
                        Basic Examples
                    </p>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                Go!
                            </InputGroup.Addon>
                            <FormControl type="text" placeholder='Search for...'/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" placeholder='Search for...'/>
                            <InputGroup.Addon>
                                Go!
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col lg={ 4 }>
                    <p className={ classes.sectionLabel }>
                        With Dropdowns
                    </p>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <DropdownButton title='Action' id='input-dropdown-standard-1'>
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3">Active Item</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                </DropdownButton>
                            </InputGroup.Button>
                            <FormControl type="text"/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text"/>
                            <InputGroup.Button>
                                <DropdownButton title='Action' id='input-dropdown-standard-2'>
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3">Active Item</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                </DropdownButton>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col lg={ 4 }>
                    <p className={ classes.sectionLabel }>
                        Segmented Buttons
                    </p>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button>
                                    Action
                                </Button>
                            </InputGroup.Button>
                            <InputGroup.Button>
                                <DropdownButton title='' id='input-dropdown-split-1'>
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3">Active Item</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                </DropdownButton>
                            </InputGroup.Button>
                            <FormControl type="text"/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text"/>
                            <InputGroup.Button>
                                <DropdownButton title='' id='input-dropdown-split-2'>
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3">Active Item</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                </DropdownButton>
                            </InputGroup.Button>
                            <InputGroup.Button>
                                <Button>
                                    Action
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
        </Col>
    </Row>
);

const ValidationStates = () => (
    <Row>
        <Col lg={ 12 }>
            <h4 className="m-t-3">
                Validation States
            </h4>
            <p>
                Use <kbd>validationState</kbd> prop to add validation styles to the inputs
            </p>
            <Row>
                <Col lg={ 6 }>
                    <p className={ classes.sectionLabel }>
                        Basic Examples
                    </p>
                    <FormGroup controlId="formValidationSuccess" validationState="success">
                        <ControlLabel>Input with Success</ControlLabel>
                        <FormControl type="text" />
                    </FormGroup>
                    <FormGroup controlId="formValidationWarning" validationState="warning">
                        <ControlLabel>Input with Warning</ControlLabel>
                        <FormControl type="text" />
                    </FormGroup>
                    <FormGroup controlId="formValidationError" validationState="error">
                        <ControlLabel>Input with Error</ControlLabel>
                        <FormControl type="text" />
                    </FormGroup>
                </Col>
                <Col lg={ 6 }>
                    <p className={ classes.sectionLabel }>
                        Validation States with Icons
                    </p>
                    <FormGroup controlId="formValidationSuccess" validationState="success">
                        <ControlLabel>Input with Success</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                @
                            </InputGroup.Addon>
                            <FormControl type="text" />
                            <FormControl.Feedback>
                                <Glyphicon glyph="ok-sign" />
                            </FormControl.Feedback>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="formValidationWarning" validationState="warning">
                        <ControlLabel>Input with Warning</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                @
                            </InputGroup.Addon>
                            <FormControl type="text" />
                            <FormControl.Feedback>
                                <Glyphicon glyph="exclamation-sign" />
                            </FormControl.Feedback>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="formValidationError" validationState="error">
                        <ControlLabel>Input with Error</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                @
                            </InputGroup.Addon>
                            <FormControl type="text" />
                            <FormControl.Feedback>
                                <Glyphicon glyph="remove-sign" />
                            </FormControl.Feedback>
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>

        </Col>
    </Row>
);

const MaskedInputs = () => (
    <Row>
        <Col lg={ 12 }>
            <h4 className="m-t-3">
                Text Mask
            </h4>
            <p>
                This is a demo of <a href="https://github.com/text-mask/text-mask/tree/master/react/example" target="_blank" rel="nofollow">Text Mask</a>
                &nbsp;Try filling out the masked input field. Try entering bad characters, pasting, deleting ot using auto-fill. Try it on mobile too.
            </p>

            <Row>
                <Col lg={ 4 }>
                    <FormGroup controlId='maskedInputUsPhoneNumber'>
                        <ControlLabel>US Phone Number</ControlLabel>
                        <MaskedTextInput
                            mask={ ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
                            placeholder='(555) 495-3947'
                        />
                    </FormGroup>
                </Col>
                <Col lg={ 4 }>
                    <FormGroup controlId='maskedInputUsPhoneNumberWithCountryCode'>
                        <ControlLabel>US Phone Number With Masked Input</ControlLabel>
                        <MaskedTextInput
                            mask={ ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
                            placeholder='+1 (555) 495-3947'
                        />
                    </FormGroup>
                </Col>
                <Col lg={ 4 }>
                    <FormGroup controlId='maskedInputDate'>
                        <ControlLabel>Date</ControlLabel>
                        <MaskedTextInput
                            mask={ [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] }
                            placeholder='25/09/1970'
                        />
                    </FormGroup>
                </Col>

                <Col lg={ 4 }>
                    <FormGroup controlId='maskedInputDateAutoCorrected'>
                        <ControlLabel>Date (Auto-Corrected)</ControlLabel>
                        <MaskedTextInput
                            mask={ [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] }
                            keepCharPositions={ true }
                            pipe={ autoCorrectedDatePipe }
                            placeholder='Please Enter a Date'
                        />
                    </FormGroup>
                </Col>
                <Col lg={ 4 }>
                    <FormGroup controlId='maskedInputDate'>
                        <ControlLabel>US dollar amount</ControlLabel>
                        <MaskedTextInput
                            mask={ dolarsMask }
                            className='text-right'
                            placeholder='Enter an amount'
                        />
                    </FormGroup>
                </Col>
                <Col lg={ 4 }>
                    <FormGroup controlId='maskedInputDate'>
                        <ControlLabel>US dollar amount (allows decimal)</ControlLabel>
                        <MaskedTextInput
                            mask={ dolarsMaskDecimal }
                            className='text-right'
                            placeholder='Enter an amount'
                        />
                    </FormGroup>
                </Col>

                <Col lg={ 4 }>
                    <FormGroup controlId='maskedPercentageAmount'>
                        <ControlLabel>Percentage Amount</ControlLabel>
                        <MaskedTextInput
                            mask={ percentageMask }
                            className='text-right'
                            placeholder='Enter an amount'
                        />
                    </FormGroup>
                </Col>
                <Col lg={ 4 }>
                    <FormGroup controlId='maskedEmail'>
                        <ControlLabel>Email</ControlLabel>
                        <MaskedTextInput
                            mask={ emailMask }
                            placeholder='john@smith.com'
                        />
                    </FormGroup>
                </Col>
                <Col lg={ 4 }>
                    <FormGroup controlId='maskedUsZipCode'>
                        <ControlLabel>US Zip Code</ControlLabel>
                        <MaskedTextInput
                            mask={ [/[1-9]/, /\d/, /\d/, /\d/, /\d/] }
                            placeholder='94303'
                        />
                    </FormGroup>
                </Col>

                <Col lg={ 4 }>
                    <FormGroup controlId='maskedCanadianPostalCode'>
                        <ControlLabel>Canadian Postal Code</ControlLabel>
                        <MaskedTextInput
                            pipe={ upperCasePipe }
                            mask={ [/[A-Z]/i, /\d/, /[A-Z]/i, ' ', /\d/, /[A-Z]/i, /\d/] }
                            placeholder='K1A 0B2'
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Col>
    </Row>
);

class Switches extends React.Component {
    constructor() {
        super();

        this.state = {
            baconIsReady: true,
            cheeseIsReady: false,
            biscuitIsReady: false,
            eggsAreReady: false,
            milkIsReady: false,
            toastIsReady: false,
            soupIsReady: true,
            tofuIsReady: false
        };
    }
    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <h4 className="m-t-3">
                        Switches
                    </h4>
                    <p>
                        An elegant, accessible toggle component for React. Also a glorified checkbox.
                    </p>
                    <Row>
                        <Col lg={ 6 }>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            Switch Name
                                        </th>
                                        <th>
                                            Switch Example
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Checkbox
                                                checked={ this.state.milkIsReady }
                                                onChange={ () => { this.setState({ milkIsReady: !this.state.milkIsReady }) } }
                                            >
                                                Controlled Component
                                            </Checkbox>
                                        </td>
                                        <td>
                                            <Toggle
                                                checked={ this.state.milkIsReady }
                                                name='milkIsReady'
                                                value='yes'
                                                onChange={ () => { this.setState({ milkIsReady: !this.state.milkIsReady }) } }/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Checkbox
                                                checked={ this.state.toastIsReady }
                                                onChange={ () => { this.setState({ toastIsReady: !this.state.toastIsReady }) } }
                                            >
                                                Controlled Component without onChange
                                            </Checkbox>
                                        </td>
                                        <td>
                                            <Toggle
                                                checked={ this.state.toastIsReady }
                                                name='toastIsReady'
                                                value='yes' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Diabled, Unchecked
                                        </td>
                                        <td>
                                            <Toggle
                                                defaultChecked={false}
                                                disabled={true} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Disabled, Checked
                                        </td>
                                        <td>
                                            <Toggle
                                                defaultChecked={true}
                                                disabled={true} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Custom className
                                        </td>
                                        <td>
                                            <Toggle
                                                defaultChecked={this.state.aubergineIsReady}
                                                className={ classes.switchCustomClass }
                                                onChange={this.handleAubergineChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Custom icons
                                        </td>
                                        <td>
                                            <Toggle
                                                defaultChecked={this.state.soupIsReady}
                                                icons={{
                                                    checked: <i className="fa fa-heart fa-fw text-white" />,
                                                    unchecked: null,
                                                }}
                                                onChange={ () => { this.setState({ soupIsReady: !this.state.soupIsReady }) } } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            No icons
                                        </td>
                                        <td>
                                            <Toggle
                                                defaultChecked={this.state.tofuIsReady}
                                                icons={false}
                                                onChange={() => { this.setState({ tofuIsReady: !this.state.tofuIsReady }) }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col lg={ 6 }>
                            <Table className={ classes.singleTable }>
                                <thead>
                                    <tr>
                                        <th>
                                            Switch Example
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label>
                                                <Toggle
                                                    className="v-a-m"
                                                    defaultChecked={this.state.baconIsReady}
                                                    onChange={() => { this.setState({baconIsReady: !this.state.baconIsReady}) }} />
                                                <span className="v-a-m m-l-1">Wrapper label tag</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Toggle
                                                id='cheese-status'
                                                className="v-a-m"
                                                defaultChecked={this.state.cheeseIsReady}
                                                onChange={ () => { this.setState({cheeseIsReady: !this.state.cheeseIsReady}) } } />
                                            <label htmlFor='cheese-status' className="v-a-m m-l-1">Adjacent label tag</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Toggle
                                                id='biscuit-status'
                                                className="v-a-m"
                                                defaultChecked={this.state.biscuitIsReady}
                                                aria-labelledby='biscuit-label'
                                                onChange={ () => { this.setState({biscuitIsReady: !this.state.biscuitIsReady}) } } />
                                            <span id='biscuit-label' className="v-a-m m-l-1">Adjacent label, but not standard tag</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Toggle
                                                className="v-a-m"
                                                defaultChecked={this.state.eggsAreReady}
                                                aria-label='No label tag'
                                                onChange={ () => { this.setState({eggsAreReady: !this.state.eggsAreReady}) } } />
                                            <span className="v-a-m m-l-1">No label tag</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
// ------------------------------------
// Main Container
// ------------------------------------
class FormsContainer extends RoutedComponent {
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
                        <p>
                            The <kbd>FormControl</kbd> component renders a form control with Bootstrap styling. The <kbd>FormGroup</kbd> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on <kbd>FormGroup</kbd>, and use <kbd>ControlLabel</kbd> for the label.
                        </p>
                        <BasicElements />
                        <CheckboxesRadios />
                        <Sizing />
                        <AdditionalElements />
                        <ValidationStates />
                        <MaskedInputs />
                        <Switches />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(FormsContainer);
