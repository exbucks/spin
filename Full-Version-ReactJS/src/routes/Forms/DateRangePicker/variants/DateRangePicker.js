import React from 'react';
import moment from 'moment';
import {
    FormControl,
    FormGroup,
    Form,
} from 'components';

import {
    DateRangePickerWrapper
} from './../components';

class TestWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDatePicker: false,
        };
    }

    render() {
        const { showDatePicker } = this.state;
        const display = showDatePicker ? 'block' : 'none';
        return (
            <div>
                <button
                    type="button"
                    onClick={() => this.setState({ showDatePicker: !showDatePicker })}
                >
                    Show me!
                </button>

                <div style={{ display }}>
                    <DateRangePickerWrapper />
                </div>
            </div>
        );
    }
}

const dateRangePickerVariants = [
    {
        key: 'drp-default',
        menuTitle: 'default',
        component: () => (
            <DateRangePickerWrapper autofocus />
        )
    },
    {
        key: 'drp-hidden',
        menuTitle: 'hidden with display:none',
        component: () => (
            <TestWrapper />
        )
    },
    {
        key: 'drp-part-of-form',
        menuTitle: 'as part of a form',
        component: () => (
            <Form style={ { maxWidth: '286px' } }>
                <div className='m-b-2'>
                    <DateRangePickerWrapper />
                </div>
                <FormGroup bsSize='large'>
                    <FormControl placeholder="Input 1" />
                </FormGroup>
                <FormGroup bsSize='large'>
                    <FormControl placeholder="Input 2" />
                </FormGroup>
                <FormGroup bsSize='large'>
                    <FormControl placeholder="Input 3" />
                </FormGroup>
            </Form>
        )
    },
    {
        key: 'drp-non-english',
        menuTitle: 'non-english locale',
        component: () => {
            moment.locale('zh-cn');
            return (
                <DateRangePickerWrapper
                    showClearDates
                    startDatePlaceholderText="入住日期"
                    endDatePlaceholderText="退房日期"
                    monthFormat="YYYY[年]MMMM"
                    phrases={{
                        closeDatePicker: '关闭',
                        clearDates: '清除日期',
                    }}
                />
            );
        }
    }
];

export default dateRangePickerVariants;
