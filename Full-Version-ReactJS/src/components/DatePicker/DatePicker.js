// TODO: Need to implement DayPickerController. At this time it is in development
// follow - https://github.com/airbnb/react-dates/issues/524

import React, { PropTypes } from 'react';
import _ from 'underscore';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import classNames from 'classnames';

import {
    DayPickerSingleDateController,
    ScrollableOrientationShape,
} from 'react-dates';

import {
    FormGroup,
    FormControl,
    InputGroup,
    OutsideClick,
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

class DatePicker extends React.Component {
    static propTypes = {
        ...pickerPropTypes,

        prefixAddOn: PropTypes.node,
        postfixButton: PropTypes.node,

        placeholder: PropTypes.string,

        initialDate: momentPropTypes.momentObj,

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
        prefixAddOn: (<i className='fa fa-calendar fa-fw'></i>),
        postfixButton: 'reset',

        placeholder: 'Select date...',

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
            date: props.initialDate || null,
            focused: false
        }

        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDateChange(date) {
        const { onDateSelected } = this.props;

        this.setState({ focused: false, date });

        onDateSelected(date);
    }

    onFocusChange(focused) {
        this.setState({
            focused
        });
    }

    onReset() {
        this.setState({
            date: this.props.initialDate || null
        });
    }

    renderButtons({date, focused}) {
        const {
            placeholder,
            bsSize,
            bsStyle,
            bsStyleActive,
        } = this.props;

        return (
            <Button
                onClick={() => this.onFocusChange(true)}
                bsStyle={focused ? bsStyleActive : bsStyle}
            >
                { date ? moment(date).format(format) : placeholder }
            </Button>
        );
    }

    renderInputs({date, focused}) {
        const {
            prefixAddOn,
            postfixButton,
            placeholder,
            bsSize,
            format
        } = this.props;

        return (prefixAddOn || postfixButton) ? (
                <InputGroup bsSize={ bsSize }>
                    { prefixAddOn && (<InputGroup.Addon>{ prefixAddOn }</InputGroup.Addon>) }
                    <FormControl
                        placeholder={placeholder}
                        value={ date ? moment(date).format(format) : '' }
                        type='text'
                        onFocus={ () => this.onFocusChange(true) }
                        className={ focused && classes.focusedInput }
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
            ) : (
                <FormControl
                    placeholder={placeholder}
                    value={ date ? moment(date).format(format) : '' }
                    type='text'
                    onFocus={ () => this.onFocusChange(true) }
                    className={ focused && classes.focusedInput }
                />
            );
    }

    render() {
        const {
            format,
            type,
            className
        } = this.props;

        const {
            focused,
            date: dateRaw
        } = this.state;
        const pickerProps = _.pick(this.props, _.keys(pickerPropTypes));

        const date = dateRaw && moment(dateRaw);

        const wrapClass = classNames({
            [classes['wrap--absolute']]: this.props.absolute,
            [classes['wrap--left']]: this.props.positionHorizontal === 'left',
            [classes['wrap--right']]: this.props.positionHorizontal === 'right',
            [classes['wrap--top']]: this.props.positionVertical === 'top',
            [classes['wrap--bottom']]: this.props.positionVertical === 'bottom',
        }, className);

        return (
            <OutsideClick onClickOutside={() => {this.onFocusChange(false)}}>
                <div className={wrapClass}>
                    { type === 'input' && this.renderInputs({date, focused}) }
                    { type === 'button' && this.renderButtons({date, focused}) }

                    {
                        this.state.focused && (
                            <div className={classes.pickerWrap}>
                                <DayPickerSingleDateController
                                    {...pickerProps}
                                    onDateChange={this.onDateChange}
                                    //onFocusChange={this.onFocusChange}
                                    date={date}
                                    focused={focused}
                                    keepOpenOnDateSelect={false}
                                    numberOfMonths={1}
                                />
                            </div>
                        )
                    }
                </div>
            </OutsideClick>
        );
    }
}

export default DatePicker;
