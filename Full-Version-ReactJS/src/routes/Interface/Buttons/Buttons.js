import React from 'react';
import _ from 'underscore';

import {
    Row,
    Col,
    ButtonGroup,
    ButtonToolbar,
    DropdownButton,
    MenuItem,
    SplitButton,
    Button
} from 'components';

import { Colors } from 'consts';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class ButtonsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            firstCheckButtons: [ 0 ],
            secondCheckButtons: [ 0, 1, 2 ],

            firstRadioButtons: 1,
            secondRadioButtons: 0,
            thirdRadioButtons: 0,

            isLoading: false,
            toggled: false
        }
    }

    toggleCheckboxButton(buttonId, checkboxRow) {
        const isSelected = _.contains(this.state[checkboxRow], buttonId);
        this.setState({
            ...this.state,
            [`${checkboxRow}`]: isSelected ? _.without(this.state[checkboxRow], buttonId)
                : [...this.state[checkboxRow], buttonId]
        });
    }

    setRadioValue(buttonId, radioRow) {
        this.setState({
            ...this.state,
            [`${radioRow}`]: buttonId
        });
    }

    toggleButton() {
        this.setState({
            ...this.state,
            toggled: !this.state.toggled
        })
    }

    startLoading() {
        this.setState({
            ...this.state,
            isLoading: true
        });

        setTimeout(() => {
            this.setState({
                ...this.state,
                isLoading: false
            });
        }, 2000);
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    {/*-----------Default-------------*/}
                    <h4>Colors Options</h4>
                    <p>
                        Use the button component to add a button and style it using the <kbd>bsStyle</kbd> property.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Examples Default</strong>
                    </p>
                    <Button bsStyle='primary'>Primary</Button>&nbsp;
                    <Button bsStyle='success'>Success</Button>&nbsp;
                    <Button bsStyle='info'>Info</Button>&nbsp;
                    <Button bsStyle='warning'>Warning</Button>&nbsp;
                    <Button bsStyle='danger'>Danger</Button>&nbsp;
                    <Button bsStyle='default'>Default</Button>&nbsp;
                    <Button bsStyle='link'>Link</Button>&nbsp;

                    <p className="small text-uppercase m-t-2">
                        <strong>Examples Custom Colors</strong>
                    </p>
                    <Button bsStyle='custom' customColor={ Colors.brandCerulean }>Cerulean</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandCuriousBlue }>Curious Blue</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandEndaveour }>Endaveour</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandMinsk }>Minsk</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandEminence }>Eminence</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandVioletEggplant }>Violet Eggplant</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandDodgerBlue }>Dodger Blue</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandHeliotrope }>Heliotrope</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandPerfume }>Perfume</Button>&nbsp;

                    <p className="small text-uppercase m-t-2">
                        <strong>Examples Gray Colors</strong>
                    </p>
                    <Button bsStyle='custom' customColor={ Colors.grayDarker }>Gray Darker</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.grayDark }>Gray Dark</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.gray }>Gray</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.grayLight }>Gray Light</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.grayLighter }>Gray Lighter</Button>&nbsp;

                    {/*-----------Outline-------------*/}
                    <h4 className="m-t-3">Colors Outline Options</h4>
                    <p>To an existing button, add a property called <kbd>outline</kbd></p>

                    <p className="small text-uppercase m-t-2">
                        <strong>Examples Default Outline</strong>
                    </p>
                    <Button bsStyle='primary' outline>Primary</Button>{ ' ' }
                    <Button bsStyle='success' outline>Success</Button>{ ' ' }
                    <Button bsStyle='info' outline>Info</Button>{ ' ' }
                    <Button bsStyle='warning' outline>Warning</Button>{ ' ' }
                    <Button bsStyle='danger' outline>Danger</Button>{ ' ' }

                    <p className="small text-uppercase m-t-2">
                        <strong>Examples Custom Colors Outline</strong>
                    </p>
                    <Button bsStyle='custom' customColor={ Colors.brandCerulean } outline>Cerulean</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandCuriousBlue } outline>Curious Blue</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandEndaveour } outline>Endaveour</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandMinsk } outline>Minsk</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandEminence } outline>Eminence</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandVioletEggplant } outline>Violet Eggplant</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandDodgerBlue } outline>Dodger Blue</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandHeliotrope } outline>Heliotrope</Button>&nbsp;
                    <Button bsStyle='custom' customColor={ Colors.brandPerfume } outline>Perfume</Button>&nbsp;

                    {/*-----------Sizes-------------*/}
                    <h4 className="m-t-3">Sizes</h4>
                    <Row>
                        <Col lg={ 4 }>
                            <p>Fancy larger or smaller buttons? Add property <kbd>size=</kbd> <kbd>'lg'</kbd>, <kbd>'sm'</kbd>, or <kbd>'xs'</kbd> for additional sizes.</p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <p>
                                <Button bsStyle='primary' size='lg'>
                                    Large Button
                                </Button>&nbsp;
                                <Button size='lg'>
                                    Large Button
                                </Button>
                            </p>
                            <p>
                                <Button bsStyle='primary' size='lg'>
                                    Default Button
                                </Button>&nbsp;
                                <Button size='lg'>
                                    Default Button
                                </Button>
                            </p>
                            <p>
                                <Button bsStyle='primary' size='sm'>
                                    Small Button
                                </Button>&nbsp;
                                <Button size='sm'>
                                    Small Button
                                </Button>
                            </p>
                            <p>
                                <Button bsStyle='primary' size='xs'>
                                    Extra Small Button
                                </Button>&nbsp;
                                <Button size='xs'>
                                    Extra Small Button
                                </Button>
                            </p>
                        </Col>
                        <Col lg={ 4 }>
                            <p>
                                Create block level buttons—those that span the full width of a parent— by adding <kbd>block</kbd> property.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <Button bsStyle='primary' block>
                                Block Level Button
                            </Button>
                            <Button block>
                                Block Level Button
                            </Button>
                        </Col>
                    </Row>

                    {/*-----------Active States-------------*/}
                    <h4 className="m-t-3">Active States</h4>
                    <p>
                        Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. To set a buttons active state simply set the components <kbd>active</kbd> prop.
                    </p>
                    <Row>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">
                                Button Component
                            </h5>
                            <p>
                                The <kbd>active</kbd> prop can be added to a <kbd>Button</kbd> componennt so it will have a lighter shade.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <Button bsStyle='primary' active>
                                Primary Button
                            </Button>&nbsp;
                            <Button bsStyle='default' active>
                                Button
                            </Button>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">
                                Disabled State
                            </h5>
                            <p>
                                Add the <kbd>disabled</kbd> prop to make the button darker and uclickable.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <Button bsStyle='primary' disabled>
                                Primary Button
                            </Button>&nbsp;
                            <Button bsStyle='default' disabled>
                                Button
                            </Button>
                        </Col>
                    </Row>

                    <h4 className="m-t-3">Buttons Groups</h4>
                    <p>Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with our buttons plugin.</p>
                    <Row>
                        <Col lg={ 4 }>
                            <h5>Sizing</h5>
                            <p>
                                Instead of adding a <kbd>size</kbd> prop to each button, you can wrap them in a <kbd>ButtonGroup</kbd> component and unify all the child button sizes to one.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <ButtonToolbar>
                                <ButtonGroup bsSize='lg' className='m-b-1'>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </ButtonToolbar>

                            <ButtonToolbar>
                                <ButtonGroup className='m-b-1'>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </ButtonToolbar>

                            <ButtonToolbar>
                                <ButtonGroup bsSize='sm' className='m-b-1'>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </ButtonToolbar>

                            <ButtonToolbar>
                                <ButtonGroup bsSize='xs' className='m-b-1'>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Justified Button Groups</h5>
                            <p>
                                Make a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within the button group.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <ButtonGroup bsSize='lg' justified className='m-b-1'>
                                <Button href="#">Left</Button>
                                <Button href="#">Middle</Button>
                                <Button href="#">Right</Button>
                            </ButtonGroup>
                            <ButtonGroup justified className='m-b-1'>
                                <Button href="#">Left</Button>
                                <Button href="#">Middle</Button>
                                <Button href="#">Right</Button>
                            </ButtonGroup>
                            <ButtonGroup bsSize='sm' justified className='m-b-1'>
                                <Button href="#">Left</Button>
                                <Button href="#">Middle</Button>
                                <Button href="#">Right</Button>
                            </ButtonGroup>
                            <ButtonGroup bsSize='xs' justified className='m-b-1'>
                                <Button href="#">Left</Button>
                                <Button href="#">Middle</Button>
                                <Button href="#">Right</Button>
                            </ButtonGroup>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Vertical Variation</h5>
                            <p>
                                Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <ButtonGroup vertical>
                                <Button>Button</Button>
                                <Button>Button</Button>
                                <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
                                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                                </DropdownButton>
                                <Button>Button</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Basic Example</h5>
                            <p>
                                Wrap a series of buttons with in a <kbd>ButtonGroup</kbd> component.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <ButtonGroup>
                                <Button>Left</Button>
                                <Button>Middle</Button>
                                <Button>Right</Button>
                            </ButtonGroup>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Button Toolbar</h5>
                            <p>
                                Combine sets of <kbd>ButtonGroup</kbd> components in <kbd>ToolbarGroup</kbd> for more complex groups.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <ButtonToolbar>
                                <ButtonGroup>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <Button>3</Button>
                                    <Button>4</Button>
                                </ButtonGroup>

                                <ButtonGroup>
                                    <Button>5</Button>
                                    <Button>6</Button>
                                    <Button>7</Button>
                                </ButtonGroup>

                                <ButtonGroup>
                                    <Button>8</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Nesting</h5>
                            <p>
                                You can place other button types within the <kbd>ButtonGroup</kbd> like <kbd>DropdownButton</kbd>s.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <ButtonGroup>
                                <Button>1</Button>
                                <Button>2</Button>
                                <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                                </DropdownButton>
                            </ButtonGroup>
                        </Col>
                    </Row>


                    <h4 className="m-t-3">Buttons Groups</h4>
                    <p>Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with our buttons plugin.</p>
                    <Row>
                        <Col lg={ 3 }>
                            <h5>Single Button</h5>
                            <p>
                                Turn a button into a dropdown toggle by changing button.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <DropdownButton title='Action' id='dropdown-basic-2'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>&nbsp;
                            <DropdownButton bsStyle='primary' title='Action' id='dropdown-basic-3'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                        </Col>
                        <Col lg={ 3 }>
                            <h5>Single Button</h5>
                            <p>
                                Similarly, create split button dropdowns with <kbd>SplitButton</kbd> component.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <SplitButton title='Action' id='split-basic-1'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </SplitButton>&nbsp;
                            <SplitButton bsStyle='primary' title='Action' id='split-basic-2'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </SplitButton>
                        </Col>
                        <Col lg={ 3 }>
                            <h5>Dropup Variation</h5>
                            <p>
                                Trigger dropdown menus above elements by adding <kbd>dropup</kbd> prop.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <SplitButton title='Dropup' id='split-basic-3'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </SplitButton>&nbsp;
                            <SplitButton bsStyle='primary' title='Dropup' id='split-basic-4'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </SplitButton>
                        </Col>
                        <Col lg={ 3 }>
                            <h5>Sizing</h5>
                            <p>
                                Button dropdowns work with buttons of all sizes.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <DropdownButton title='Large button' id='dropdown-basic-4' bsSize='lg' className='m-b-1'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                            <br/>
                            <DropdownButton title='Small button' id='dropdown-basic-5' bsSize='sm' className='m-b-1'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                            <br/>
                            <DropdownButton title='Extra small button' id='dropdown-basic-6' bsSize='xs'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                        </Col>
                    </Row>

                    <h4 className="m-t-3">Button with Icons</h4>
                    <p>
                        Add <kbd>&lt;i className="fa fa-fw fa-gear"&gt;</kbd> inside of the button.
                    </p>
                    <Row>
                        <Col lg={ 2 }>
                            <h5>Toolbar Only with Icons</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ButtonToolbar>
                                <ButtonGroup>
                                    <Button>
                                        <span className="fa fa-fw fa-align-right"></span>
                                    </Button>
                                    <Button>
                                        <span className="fa fa-fw fa-align-justify"></span>
                                    </Button>
                                    <Button>
                                        <span className="fa fa-fw fa-align-left"></span>
                                    </Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        <Col lg={ 2 }>
                            <h5>Buttons Only Icons</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Button>
                                <span className="fa fa-fw fa-user"></span>
                            </Button>&nbsp;
                            <Button bsStyle='primary'>
                                <span className="fa fa-fw fa-gear"></span>
                            </Button>
                        </Col>
                        <Col lg={ 2 }>
                            <h5>Buttons With Icons</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Button>
                                <span className="fa fa-fw fa-user"></span>
                                User
                            </Button>&nbsp;
                            <Button bsStyle='primary'>
                                <span className="fa fa-fw fa-gear"></span>
                                Settings
                            </Button>
                        </Col>
                    </Row>

                    <h4 className="m-t-3">State Buttons</h4>
                    <p>
                        Do more with buttons. Control button states or create groups of buttons for more components like toolbars.
                    </p>
                    <h5>Checkbox / Radio</h5>
                    <p>You can make the buttons act like checkboxes or radios by attaching React state to them.</p>
                    <Row>
                        <Col md={ 4 }>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples Checkboxes</strong>
                            </p>
                            <ButtonToolbar>
                                <ButtonGroup className='m-b-1'>
                                    <Button
                                        active={ _.contains(this.state.firstCheckButtons, 0) }
                                        onClick={ () => this.toggleCheckboxButton(0, 'firstCheckButtons') }
                                        outline
                                    >Checkbox 1</Button>
                                    <Button
                                        active={ _.contains(this.state.firstCheckButtons, 1) }
                                        onClick={ () => this.toggleCheckboxButton(1, 'firstCheckButtons') }
                                        outline
                                    >Checkbox 2</Button>
                                    <Button
                                        active={ _.contains(this.state.firstCheckButtons, 2) }
                                        onClick={ () => this.toggleCheckboxButton(2, 'firstCheckButtons') }
                                        outline
                                    >Checkbox 3</Button>
                                </ButtonGroup>
                            </ButtonToolbar>

                            <ButtonToolbar>
                                <ButtonGroup className='m-b-1'>
                                    <Button
                                        bsStyle='primary'
                                        active={ _.contains(this.state.secondCheckButtons, 0) }
                                        onClick={ () => this.toggleCheckboxButton(0, 'secondCheckButtons') }
                                        outline
                                    >Checkbox 1</Button>
                                    <Button
                                        bsStyle='primary'
                                        active={ _.contains(this.state.secondCheckButtons, 1) }
                                        onClick={ () => this.toggleCheckboxButton(1, 'secondCheckButtons') }
                                        outline
                                    >Checkbox 2</Button>
                                    <Button
                                        bsStyle='primary'
                                        active={ _.contains(this.state.secondCheckButtons, 2) }
                                        onClick={ () => this.toggleCheckboxButton(2, 'secondCheckButtons') }
                                        outline
                                    >Checkbox 3</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        <Col md={ 4 }>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples Radio</strong>
                            </p>

                            <ButtonToolbar>
                                <ButtonGroup className='m-b-1'>
                                    <Button
                                        active={ this.state.firstRadioButtons === 0 }
                                        onClick={ () => this.setRadioValue(0, 'firstRadioButtons') }
                                    >Checkbox 1</Button>
                                    <Button
                                        active={ this.state.firstRadioButtons === 1 }
                                        onClick={ () => this.setRadioValue(1, 'firstRadioButtons') }
                                    >Checkbox 2</Button>
                                    <Button
                                        active={ this.state.firstRadioButtons === 2 }
                                        onClick={ () => this.setRadioValue(2, 'firstRadioButtons') }
                                    >Checkbox 3</Button>
                                </ButtonGroup>
                            </ButtonToolbar>

                            <ButtonToolbar>
                                <ButtonGroup className='m-b-1'>
                                    <Button
                                        bsStyle='primary'
                                        active={ this.state.secondRadioButtons === 0 }
                                        onClick={ () => this.setRadioValue(0, 'secondRadioButtons') }
                                    >Radio 1</Button>
                                    <Button
                                        bsStyle='primary'
                                        active={ this.state.secondRadioButtons === 1 }
                                        onClick={ () => this.setRadioValue(1, 'secondRadioButtons') }
                                    >Radio 2</Button>
                                    <Button
                                        bsStyle='primary'
                                        active={ this.state.secondRadioButtons === 2 }
                                        onClick={ () => this.setRadioValue(2, 'secondRadioButtons') }
                                    >Radio 3</Button>
                                </ButtonGroup>
                            </ButtonToolbar>

                            <ButtonToolbar>
                                <ButtonGroup>
                                    <Button
                                        active={ this.state.thirdRadioButtons === 0 }
                                        onClick={ () => this.setRadioValue(0, 'thirdRadioButtons') }
                                    ><i className="fa fa-bars fa-fw"></i></Button>
                                    <Button
                                        active={ this.state.thirdRadioButtons === 1 }
                                        onClick={ () => this.setRadioValue(1, 'thirdRadioButtons') }
                                    ><i className="fa fa-th-large fa-fw"></i></Button>
                                    <Button
                                        active={ this.state.thirdRadioButtons === 2 }
                                        onClick={ () => this.setRadioValue(2, 'thirdRadioButtons') }
                                    ><i className="fa fa-th fa-fw"></i></Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Stateful</h5>
                            <p>
                                Attach state to create loading buttons.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Button
                                bsStyle='primary'
                                disabled={ this.state.isLoading }
                                onClick={ () => this.startLoading() }
                            >
                                { this.state.isLoading ? 'Loading...' : 'Loading State' }
                            </Button>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Single Toggle</h5>
                            <p>
                                Create Toggle buttons by attaching React State
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Button
                                bsStyle='primary'
                                active={ this.state.toggled }
                                onClick={ () => this.toggleButton() }
                            >
                                Single Toggle
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(ButtonsContainer);
