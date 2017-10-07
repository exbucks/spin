import React, { PropTypes } from 'react';
import _ from 'underscore';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import classNames from 'classnames';

import {
    DayPickerRangeController,
    ScrollableOrientationShape
} from 'react-dates';

import {
    FormGroup,
    FormControl,
    InputGroup,
    OutsideClick,
    ButtonGroup,
    ButtonToolbar,
    Button
} from 'components';

const pickerPropTypes = {
    enableOutsideDays: PropTypes.bool,
    numberOfMonths: PropTypes.number,
    orientation: ScrollableOrientationShape,
    withPortal: PropTypes.bool,
    initialVisibleMonth: PropTypes.func,

    navPrev: PropTypes.node,
    navNext: PropTypes.node,

    onPrevMonthClick: PropTypes.func,
    onNextMonthClick: PropTypes.func,
    onOutsideClick: PropTypes.func,
    renderDay: PropTypes.func,

    monthFormat: PropTypes.string,
}

import classes from './datePicker.scss';

class DateRangePicker extends React.Component {
    static propTypes = {
        ...pickerPropTypes,

        separatorAddOn: PropTypes.node,
        prefixAddOn: PropTypes.node,
        postfixButton: PropTypes.node,

        placeholderStart: PropTypes.string,
        placeholderEnd: PropTypes.string,

        initialStartDate: momentPropTypes.momentObj,
        initialEndDate: momentPropTypes.momentObj,

        bsSize: PropTypes.string,
        bsStyle: PropTypes.string,
        bsStyleActive: PropTypes.string,
        type: PropTypes.string,
        format: PropTypes.string,

        className: PropTypes.string,

        onDateSelected: PropTypes.func,

        positionHorizontal: PropTypes.string,
        positionVertical: PropTypes.string,

        absolute: PropTypes.bool
    }

    static defaultProps = {
        separatorAddOn: (<i className='fa fa-angle-right fa-fw'></i>),
        prefixAddOn: (<i className='fa fa-calendar-o fa-fw'></i>),
        postfixButton: 'reset',

        placeholderStart: 'Start date...',
        placeholderEnd: 'End date...',

        bsSize: 'md',
        bsStyle: 'link',
        bsStyleActive: 'primary',
        type: 'input',
        format: 'DD-MM-YYYY',

        // Picker Props
        orientation: 'horizontal',
        withPortal: false,
        initialVisibleMonth: () => moment(),
        numberOfMonths: 2,
        onOutsideClick() {},
        keepOpenOnDateSelect: false,

        navPrev: null,
        navNext: null,
        onPrevMonthClick() {},
        onNextMonthClick() {},

        monthFormat: 'MMMM YYYY',

        onDateSelected() {},

        positionHorizontal: 'bottom',
        positionVertical: 'left',

        absolute: true
    }

    constructor(props) {
        super(props);

        this.state = {
            startDate: props.initialStartDate || null,
            endDate: props.initialEndDate || null,
            focusedInput: ''
        }

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDatesChange({ startDate, endDate }) {
        const { onDateSelected } = this.props;

        this.setState({ startDate, endDate });

        onDateSelected({startDate, endDate});
    }

    onFocusChange(focusedInput) {
        this.setState({
            focusedInput
        });
    }

    onReset() {
        this.setState({
            startDate: this.props.initialStartDate || null,
            endDate: this.props.initialEndDate || null
        });
    }

    renderButtons({startDate, endDate, focusedInput}) {
        const {
            prefixAddOn,
            separatorAddOn,
            postfixButton,
            placeholderStart,
            placeholderEnd,
            bsSize,
            bsStyle,
            bsStyleActive,
        } = this.props;

        return (
            <ButtonToolbar bsSize={bsSize}>
                <ButtonGroup bsSize={bsSize}>
                    <Button
                        onClick={() => this.onFocusChange('startDate')}
                        bsStyle={focusedInput === 'startDate' ? bsStyleActive : bsStyle}
                    >
                        { startDate || placeholderStart }
                    </Button>
                </ButtonGroup>

                <ButtonGroup bsSize={bsSize}>
                    <Button bsStyle={bsStyle} className={classes.buttonSepearator}>
                        <i className='fa fa-angle-right'></i>
                    </Button>
                </ButtonGroup>

                <ButtonGroup bsSize={bsSize}>
                    <Button
                        onClick={() => this.onFocusChange('endDate')}
                        bsStyle={focusedInput === 'endDate' ? bsStyleActive : bsStyle}
                    >
                        { endDate || placeholderEnd }
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>
        );
    }

    renderInputs({startDate, endDate, focusedInput}) {
        const {
            prefixAddOn,
            separatorAddOn,
            postfixButton,
            placeholderStart,
            placeholderEnd,
            bsSize
        } = this.props;

        return (
            <InputGroup bsSize={ bsSize }>
                { prefixAddOn && (<InputGroup.Addon>{ prefixAddOn }</InputGroup.Addon>) }
                <FormControl
                    placeholder={placeholderStart}
                    value={ startDate || '' }
                    type='text'
                    onFocus={ () => this.onFocusChange('startDate') }
                    className={ focusedInput === 'startDate' && classes.focusedInput }
                    //onBlur={ () => this.onFocusChange('') }
                />

                <InputGroup.Addon
                    style={ !separatorAddOn ? {
                        padding: 0,
                        border: 0,
                        width: 0
                    } : {} }
                >
                    { separatorAddOn }
                </InputGroup.Addon>

                <FormControl
                    placeholder={placeholderEnd}
                    value={ endDate || '' }
                    type='text'
                    onFocus={ () => this.onFocusChange('endDate') }
                    className={ focusedInput === 'endDate' && classes.focusedInput }
                    //onBlur={ () => this.onFocusChange('') }
                />
                { postfixButton && (
                    <InputGroup.Button>
                        {
                            postfixButton === 'reset' ? (
                                <Button onClick={this.onReset.bind(this)}>
                                    <i className='fa fa-times fa-fw text-danger'></i>
                                </Button>
                            ) : postfixButton
                        }
                    </InputGroup.Button>
                ) }
            </InputGroup>
        );
    }

    render() {
        const {
            format,
            type,
            className
        } = this.props;

        const {
            focusedInput,
            startDate: startDateRaw,
            endDate: endDateRaw
        } = this.state;
        const pickerProps = _.pick(this.props, _.keys(pickerPropTypes));

        const startDate = startDateRaw && moment(startDateRaw).format(format);
        const endDate = endDateRaw && moment(endDateRaw).format(format);

        const wrapClass = classNames({
            [classes['wrap--absolute']]: this.props.absolute,
            [classes['wrap--left']]: this.props.positionHorizontal === 'left',
            [classes['wrap--right']]: this.props.positionHorizontal === 'right',
            [classes['wrap--top']]: this.props.positionVertical === 'top',
            [classes['wrap--bottom']]: this.props.positionVertical === 'bottom',
            [classes['wrap--buttons']]: type === 'button'
        }, className);

        return (
            <OutsideClick onClickOutside={() => {this.onFocusChange('')}}>
                <div className={wrapClass}>
                    { type === 'input' && this.renderInputs({startDate, endDate, focusedInput}) }
                    { type === 'button' && this.renderButtons({startDate, endDate, focusedInput}) }

                    {
                        (this.state.focusedInput || this.state.isInputFocused) && (
                            <div className={classes.pickerWrap}>
                                <DayPickerRangeController
                                    {...pickerProps}
                                    onDatesChange={this.onDatesChange}
                                    onFocusChange={this.onFocusChange}
                                    startDate={startDateRaw}
                                    endDate={endDateRaw}
                                    focusedInput={this.state.focusedInput}
                                    keepOpenOnDateSelect={false}
                                />
                            </div>
                        )
                    }
                </div>
            </OutsideClick>
        );
    }
}

export default DateRangePicker;
