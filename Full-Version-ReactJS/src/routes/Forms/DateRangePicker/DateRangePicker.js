import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import moment from 'moment';
import {
    Row,
    Col,
    TreeNavigator
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import {
    DateRangePicker as VariantDateRangePicker,
    DateRangeInputProps as VariantDateRangeInputProps,
    DateRangeCalendarProps as VariantDateRangeCalendarProps,
    DateRangeDayProps as VariantDateRangeDayProps,

    SingleDatePicker as VariantSingleDatePicker,
    SingleDateInputProps as VariantSingleDateInputProps,
    SingleDateCalendarProps as VariantSingleDateCalendarProps,
    SingleDateDayProps as VariantSingleDateDayProps,

    DayPickerRangeController as VariantDayPickerRangeController,
    DayPickerProps as VariantDayPickerProps,

    BootstrapDateRangeProps as VariantBootstrapDateRangeProps,
    BootstrapDateProps as VariantBootstrapDateProps,

    mergedVariants
} from './variants';

const renderNavBranch = (variantsList, name, key) => (
    <TreeNavigator.Branch title={ name } eventKey={ key }>
        {
            _.map(variantsList, (variant, i) => (
                <Link key={ i } to={`/forms/date-range-picker-adv/${ variant.key }`}>
                    { variant.menuTitle }
                </Link>
            ))
        }
    </TreeNavigator.Branch>
);

class DateRangePickerContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        // Reset Moment
        moment.locale('en');

        const { dateRangeOption } = this.props.routeParams;
        const variantToRender = _.findWhere(mergedVariants, { key: dateRangeOption });

        return (
            <Row className='m-t-3'>
                <Col lg={ 8 }>
                    { _.contains(VariantDayPickerRangeController, variantToRender) && (
                        <p className='text-justify m-b-3'>
                            The <kbd>DayPickerRangeController</kbd> component is a
                            fully controlled version of the <kbd>DayPicker</kbd> that has built-in rules for selecting a
                            date range. Unlike the <kbd>DayPicker</kbd>, which requires the consumer to explicitly define
                            <kbd>onDayMouseEnter</kbd>, <kbd>onDayMouseLeave</kbd>, and <kbd>onDayClick</kbd>
                            handlers, the consumer needs simply to maintain the <kbd>focusedInput</kbd>,
                            <kbd>startDate</kbd>, and <kbd>endDate</kbd> values in state and then pass these down as
                            props along with <kbd>onFocusChange</kbd> and <kbd>onDatesChange</kbd> callbacks that
                            update them appropriately. You can see an example of this implementation <a href=
                            "https://github.com/airbnb/react-dates/blob/master/examples/DayPickerRangeControllerWrapper.jsx">
                            here</a>. <br/><br/>
                            Note that the <kbd>focusedInput</kbd> prop may be <kbd>null</kbd>, but if this is the
                            case, dates are not selectable. As a result, in the example wrapper, we always force
                            <kbd>focusedInput</kbd> to be truthy in the <kbd>onFocusChange</kbd>. <br/><br/>
                            The <kbd>DayPickerRangeController</kbd> is particularly useful if you are interested in the
                            <kbd>DateRangePicker</kbd> functionality and calendar presentation, but would like to
                            implement your own inputs.
                        </p>
                    ) }
                    { variantToRender && variantToRender.component() }
                </Col>

                <Col lg={ 4 }>
                    <TreeNavigator currentPath={ this.props.location.pathname }>
                        { renderNavBranch(VariantDateRangePicker, 'Date Range Picker (DRP)', 'drp') }
                        { renderNavBranch(VariantDateRangeInputProps, 'DRP - Input Props', 'drp-inputprops') }
                        { renderNavBranch(VariantDateRangeCalendarProps, 'DRP - Calendar Props', 'drp-calendarprops') }
                        { renderNavBranch(VariantDateRangeDayProps, 'DRP - Day Props', 'drp-dayprops') }
                        { renderNavBranch(VariantSingleDatePicker, 'Single Date Picker (SDP)', 'sdp') }
                        { renderNavBranch(VariantSingleDateInputProps, 'SDP - Input Props', 'sdp-inputprops') }
                        { renderNavBranch(VariantSingleDateCalendarProps, 'SDP - Calendar Props', 'sdp-calendarprops') }
                        { renderNavBranch(VariantSingleDateDayProps, 'SDP - Day Props', 'sdp-dayprops') }
                        { renderNavBranch(VariantDayPickerRangeController, 'DaypickerRangeController', 'dp-dayrangecontroller') }
                        { renderNavBranch(VariantDayPickerProps, 'DayPicker', 'dp-daypicker') }
                        { renderNavBranch(VariantBootstrapDateRangeProps, 'Bootstrap Date Range Picker', 'bdr-default') }
                        { renderNavBranch(VariantBootstrapDateProps, 'Bootstrap Date Picker', 'bdp-default') }
                    </TreeNavigator>
                </Col>
            </Row>
        )
    }
}

export default connect()(DateRangePickerContainer);
