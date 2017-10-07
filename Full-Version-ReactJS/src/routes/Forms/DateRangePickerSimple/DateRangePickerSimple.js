import React from 'react';
import _ from 'underscore';
import moment from 'moment';

import {
    Row,
    Col,
    DateRangePicker,
    DatePicker,
    Form,
    InputGroup,
    FormGroup
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import {
    DayPickerRangeControllerWrapper,
    DayPickerControllerWrapper
} from './components';
//import classes from './Forms.scss';

const action = functionName => {
    console.log(`DayPickerRangeController: triggered action - ${ functionName }`);
}

// ------------------------------------
// Main Container
// ------------------------------------
class DateRangePickerSimple extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className="p-b-3">
                <Row>
                    <Col lg={ 12 }>
                        Below examples are built using wrapper components (<kbd>DatePicker</kbd>, <kbd>DateRangePicker</kbd>) that are not exported by <kbd>react-dates</kbd>. Please see the component documentation for information about props definitions.
                    </Col>
                </Row>
                <Form inline>
                    <Row className='m-t-3'>
                        <Col lg={ 6 }>
                            <h4>Date Range Picker (DRP)</h4>
                            <p className="small text-uppercase">
                                <strong>Example</strong>
                            </p>
                            <DateRangePicker
                                prefixAddOn={false}
                                separatorAddOn={false}
                                postfixButton={false}
                            />
                        </Col>
                        <Col lg={ 6 }>
                            <h4>Date Picker (DP)</h4>
                            <p className="small text-uppercase">
                                <strong>Example</strong>
                            </p>
                            <DatePicker
                                prefixAddOn={false}
                                separatorAddOn={false}
                                postfixButton={false}
                                absolute
                                positionHorizontal='right'
                            />
                        </Col>
                    </Row>
                </Form>
                <Row className='m-t-3'>
                    <Col lg={12}>
                        <h4>Daypicker Range Controller</h4>

                        <p>
                            The DayPickerRangeController component is a fully controlled version of the DayPicker that has built-in rules for selecting a date range. Unlike the DayPicker, which requires the consumer to explicitly define onDayMouseEnter, onDayMouseLeave, and onDayClick handlers, the consumer needs simply to maintain the focusedInput, startDate, and endDate values in state and then pass these down as props along with onFocusChange and onDatesChange callbacks that update them appropriately. You can see an example of this implementation <a href="https://github.com/airbnb/react-dates/blob/master/examples/DayPickerRangeControllerWrapper.jsx" rel="nofollow">here</a>.
                        </p>
                        <p>
                            Note that the focusedInput prop may be null, but if this is the case, dates are not selectable. As a result, in the example wrapper, we always force focusedInput to be truthy in the onFocusChange method.
                        </p>
                        <p>
                            The DayPickerRangeController is particularly useful if you are interested in the DateRangePicker functionality and calendar presentation, but would like to implement your own inputs.
                        </p>

                        <p className="small text-uppercase">
                            <strong>Example</strong>
                        </p>
                        <DayPickerRangeControllerWrapper
                            onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                            onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                            onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                        />
                    </Col>
                </Row>

                <Row className='m-t-3'>
                    <Col lg={12}>
                        <h4>Daypicker Controller</h4>

                        <p>
                            The DayPickerSingleDateController component is a fully controlled version of the DayPicker that has built-in rules for selecting a single date. Unlike the DayPicker, which requires the consumer to explicitly define onDayMouseEnter, onDayMouseLeave, and onDayClick handlers, the consumer needs simply to maintain the focused and date values in state and then pass these down as props along with onFocusChange and onDateChange callbacks that update them appropriately. You can see an example of this implementation <a href="https://github.com/airbnb/react-dates/blob/master/examples/DayPickerSingleDateControllerWrapper.jsx" rel="nofollow">here</a>.
                        </p>
                        <p>
                            Note that the focused prop may be false, but if this is the case, dates are not selectable. As a result, in the example wrapper, we always force focused to be true in the onFocusChange method.
                        </p>
                        <p>
                            The DayPickerSingleDateController is particularly useful if you are interested in the SingleDatePicker functionality and calendar presentation, but would like to implement your own input.
                        </p>
                        <p className="small text-uppercase">
                            <strong>Example</strong>
                        </p>
                        <DayPickerControllerWrapper
                            onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
                            onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
                            onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
                        />
                    </Col>
                </Row>

                <Row className='m-t-3'>
                    <Col lg={4}>
                        <h4>Bootstrap - Input Groups #1</h4>
                        <p className="small text-uppercase">
                            <strong>Example Large (LG)</strong>
                        </p>
                        <DateRangePicker
                            absolute
                            positionVertical='top'
                            bsSize='lg'
                        />

                        <p className="small text-uppercase m-t-2">
                            <strong>Example Default</strong>
                        </p>
                        <DateRangePicker
                            absolute
                            positionVertical='top'
                        />

                        <p className="small text-uppercase m-t-2">
                            <strong>Example Small (SM)</strong>
                        </p>
                        <DateRangePicker
                            absolute
                            positionVertical='top'
                            bsSize='sm'
                        />
                    </Col>

                    <Col lg={4}>
                        <h4>Bootstrap - Input Groups #2</h4>
                        <p className="small text-uppercase">
                            <strong>Example Large (LG)</strong>
                        </p>
                        <DateRangePicker
                            prefixAddOn={false}
                            separatorAddOn={false}
                            postfixButton={false}
                            bsSize='lg'
                            absolute
                            positionVertical='top'
                        />

                        <p className="small text-uppercase m-t-2">
                            <strong>Example Default</strong>
                        </p>
                        <DateRangePicker
                            prefixAddOn={false}
                            separatorAddOn={false}
                            postfixButton={false}
                            absolute
                            positionVertical='top'
                        />

                        <p className="small text-uppercase m-t-2">
                            <strong>Example Small (SM)</strong>
                        </p>
                        <DateRangePicker
                            prefixAddOn={false}
                            separatorAddOn={false}
                            postfixButton={false}
                            bsSize='sm'
                            absolute
                            positionVertical='top'
                        />
                    </Col>

                    <Col lg={4}>
                        <h4>Bootstrap - Button Groups</h4>

                        <p className="small text-uppercase">
                            <strong>Example Large (LG)</strong>
                        </p>
                        <DateRangePicker
                            type='button'
                            bsStyle='link'
                            bsStyleActive='primary'
                            bsSize='lg'
                            absolute
                            positionVertical='top'
                            positionHorizontal='right'
                        />

                        <p className="small text-uppercase m-t-2">
                            <strong>Example Default</strong>
                        </p>
                        <DateRangePicker
                            type='button'
                            bsStyle='link'
                            bsStyleActive='primary'
                            absolute
                            positionVertical='top'
                            positionHorizontal='right'
                        />

                        <p className="small text-uppercase m-t-2">
                            <strong>Example Small (SM)</strong>
                        </p>
                        <DateRangePicker
                            type='button'
                            bsStyle='link'
                            bsStyleActive='primary'
                            bsSize='sm'
                            absolute
                            positionVertical='top'
                            positionHorizontal='right'
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(DateRangePickerSimple);
