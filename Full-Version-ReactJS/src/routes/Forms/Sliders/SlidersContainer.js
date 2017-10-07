import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import Slider, { Range } from 'rc-slider';
import { RoutedComponent, connect } from 'routes/routedComponent';

import {
    Row,
    Col,
    PageHeader,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from 'components';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import Colors from 'consts/colors';

const marks = {
    '-10': '-10°C',
    0: <strong>0°C</strong>,
    26: '26°C',
    37: '37°C',
    50: '50°C',
    100: {
        style: {
          color: Colors.brandDanger,
        },
        label: <strong>100°C</strong>,
    },
}

class CustomizedRange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lowerBound: 20,
            upperBound: 40,
            value: [20, 40]
        };
    }
    onLowerBoundChange(e) {
        this.setState({ lowerBound: +e.target.value });
    }
    onUpperBoundChange(e) {
        this.setState({ upperBound: +e.target.value });
    }
    onSliderChange(value) {
        this.setState({
            value,
        });
    }
    handleApply() {
        const { lowerBound, upperBound } = this.state;
        this.setState({ value: [lowerBound, upperBound] });
    }
    render() {
        return (
            <div>
                <Form inline className='m-b-1'>
                    <FormGroup bsSize="sm" controlId="customizedRangeLower" className='m-r-3'>
                        <ControlLabel>
                            Lower Bound
                        </ControlLabel>
                        {' '}
                        <FormControl type="number" className={ classes.inlineInput } value={this.state.lowerBound} onChange={this.onLowerBoundChange.bind(this)} />
                    </FormGroup>

                    <FormGroup bsSize="sm" controlId="customizedRangeUpper" className="m-r-1">
                        <ControlLabel>
                            Upper Bound
                        </ControlLabel>
                         {' '}
                        <FormControl type="number" className={ classes.inlineInput } value={this.state.upperBound} onChange={this.onUpperBoundChange.bind(this)} />
                    </FormGroup>

                    <FormGroup bsSize="sm">
                        <Button
                            onClick={this.handleApply.bind(this)}
                            type="button"
                            bsStyle="primary"
                            bsSize="sm"
                            block
                        >
                            Apply
                        </Button>
                    </FormGroup>
                </Form>

                <div className={ classes.sliderWrap }>
                    <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange.bind(this)} />
                </div>
            </div>
        );
    }
};

class DynamicBounds extends React.Component {
    static propTypes = {
        children: React.PropTypes.node.required
    }

    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            max: 100,
        };
    }
    onMinChange(e) {
        this.setState({
            min: +e.target.value || 0,
        });
    }
    onMaxChange(e) {
        this.setState({
            max: +e.target.value || 100,
        });
    }
    render() {
        const { children } = this.props;
        const updatedChild = React.cloneElement(React.Children.only(children), {
            min: this.state.min,
            max: this.state.max
        });

        return (
            <div>
                <Form inline className="m-b-1">
                    <FormGroup bsSize="sm" controlId="dynamicMin" className="m-r-3">
                        <ControlLabel>
                            Min
                        </ControlLabel>
                        { ' ' }
                        <FormControl className={ classes.inlineInput } type="number" value={this.state.min} onChange={this.onMinChange.bind(this)} />
                    </FormGroup>

                    <FormGroup bsSize="sm" controlId="dynamicMax">
                        <ControlLabel>
                            Max
                        </ControlLabel>
                        { ' ' }
                        <FormControl className={ classes.inlineInput } type="number" value={this.state.max} onChange={this.onMaxChange.bind(this)} />
                    </FormGroup>
                </Form>
                <div className={ classes.sliderWrap }>
                    { updatedChild }
                </div>
            </div>
        );
    }
};

class ControlledRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [20, 40, 60, 80],
        };
    }
    handleChange = (value) => {
        this.setState({
            value,
        });
    }
    render() {
        return (
            <Range value={this.state.value} onChange={this.handleChange}/>
        );
    }
}

class CustomizedSlider extends React.Component {
    constructor() {
        super();

        this.state = {
            value: 50
        }
    }

    onSliderChange(value) {
        this.setState({
            value
        });
    }

    render() {
        return(
            <Slider value={this.state.value} onChange={this.onSliderChange.bind(this)} />
        )
    }
}

import classes from './SlidersContainer.scss';

class SlidersContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={ 12 }>
                        {/*
                            ******************************
                                        Marks
                            ******************************
                        */}
                        <h4 className='m-b-2'>
                            Marks
                        </h4>
                        <Row>
                            <Col lg={ 6 }>
                                <p>Slider with marks, <kbd>step=null</kbd></p>
                                <div className={ classes.markedSliderWrap }>
                                    <Slider min={-10} marks={marks} step={null} defaultValue={20} />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Slider with marks, <kbd>included=false</kbd></p>
                                <div className={ classes.markedSliderWrap }>
                                    <Slider min={-10} marks={marks} included={false} defaultValue={20} />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Slider with marks and steps</p>
                                <div className={ classes.markedSliderWrap }>
                                    <Slider dots min={-10} marks={marks} step={10} defaultValue={20} />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Slider with marks and steps, <kbd>included=false</kbd></p>
                                <div className={ classes.markedSliderWrap }>
                                    <Slider min={-10} marks={marks} step={10} included={false} defaultValue={20} />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Range with marks</p>
                                <div className={ classes.markedSliderWrap }>
                                    <Range min={-10} marks={marks} defaultValue={[20, 40]} />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Range with marks and steps</p>
                                <div className={ classes.markedSliderWrap }>
                                    <Range min={-10} marks={marks} step={10} defaultValue={[20, 40]} />
                                </div>
                            </Col>
                        </Row>

                        {/*
                            ******************************
                                        Ranges
                            ******************************
                        */}
                        <h4 className='m-b-2'>
                            Range
                        </h4>
                        <Row>
                            <Col lg={ 6 }>
                                <p>Basic Range，<kbd>allowCross=false</kbd></p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Range allowCross={false} defaultValue={[0, 20]} />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Basic Range，disabled</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Range allowCross={false} defaultValue={[0, 20]} disabled />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Basic Range，<kbd>step=20</kbd> </p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Range step={20} defaultValue={[20, 20]} />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Basic Range，<kbd>step=20, dots</kbd> </p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Range dots step={20} defaultValue={[20, 40]} />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Controlled Range</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <ControlledRange />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Multi Range</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Range count={3} defaultValue={[20, 40, 60, 80]} pushable />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Customized Range</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <CustomizedRange />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Range with dynamic <kbd>max</kbd> <kbd>min</kbd></p>
                                <div className={ classes.rangeSliderWrap }>
                                    <DynamicBounds>
                                        <Range defaultValue={[20, 50]} />
                                    </DynamicBounds>
                                </div>
                            </Col>
                        </Row>

                        {/*
                            ******************************
                                        Sliders
                            ******************************
                        */}
                        <h4 className='m-b-2'>
                            Sliders
                        </h4>
                        <Row>
                            <Col lg={ 6 }>
                                <p>Basic Slider</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Slider tipTransitionName="rc-slider-tooltip-zoom-down" />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Basic Slider, disabled</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Slider tipTransitionName="rc-slider-tooltip-zoom-down" disabled />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Basic Slider，<kbd>step=20</kbd></p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Slider step={20} defaultValue={50} />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Basic Slider，<kbd>step=20, dots</kbd></p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Slider dots step={20} defaultValue={100} />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Controlled Slider</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <Slider value={50} />
                                </div>
                            </Col>
                            <Col lg={ 6 }>
                                <p>Customized Slider</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <CustomizedSlider />
                                </div>
                            </Col>

                            <Col lg={ 6 }>
                                <p>Slider with dynamic `min` `max`</p>
                                <div className={ classes.rangeSliderWrap }>
                                    <DynamicBounds>
                                        <Slider defaultValue={50} />
                                    </DynamicBounds>
                                </div>
                            </Col>
                        </Row>

                        {/*
                            ******************************
                                    Vertical Sliders
                            ******************************
                        */}
                        <h4 className='m-b-2'>
                            Vertical Sliders
                        </h4>
                        <Row>
                            <Col lg={ 3 }>
                                <p>Slider with marks, <kbd>step=null</kbd></p>
                                <div className={ classes.markedSliderVerticalWrap }>
                                    <Slider vertical min={-10} marks={marks} step={null} defaultValue={20} />
                                </div>
                            </Col>
                            <Col lg={ 3 }>
                                <p>Slider with marks and steps</p>
                                <div className={ classes.markedSliderVerticalWrap }>
                                    <Slider vertical dots min={-10} marks={marks} step={10} defaultValue={20} />
                                </div>
                            </Col>

                            <Col lg={ 3 }>
                                <p>Slider with marks, <kbd>included=false</kbd></p>
                                <div className={ classes.markedSliderVerticalWrap }>
                                    <Slider vertical min={-10} marks={marks} included={false} defaultValue={20} />
                                </div>
                            </Col>
                            <Col lg={ 3 }>
                                <p>Slider with marks and steps, <kbd>included=false</kbd></p>
                                <div className={ classes.markedSliderVerticalWrap }>
                                    <Slider vertical min={-10} marks={marks} step={10} included={false} defaultValue={20} />
                                </div>
                            </Col>

                            <Col lg={ 3 }>
                                <p>Range with marks</p>
                                <div className={ classes.markedSliderVerticalWrap }>
                                    <Range vertical min={-10} marks={marks} defaultValue={[20, 40]} />
                                </div>
                            </Col>
                            <Col lg={ 3 }>
                                <p>Range with marks and steps</p>
                                <div className={ classes.markedSliderVerticalWrap }>
                                    <Range vertical min={-10} marks={marks} step={10}
                                        defaultValue={[20, 40]}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(SlidersContainer);
