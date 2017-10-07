import React from 'react';
import moment from 'moment';
import {
    FormControl,
    FormGroup,
    Form,
} from 'components';

import {
    SingleDatePickerWrapper
} from './../components';

const singeDatePickerVariants = [
    {
        key: 'sdp-default',
        menuTitle: 'default',
        component: () => (
            <SingleDatePickerWrapper autofocus />
        )
    },
    {
        key: 'sdp-part-of-form',
        menuTitle: 'as part of a form',
        component: () => (
            <Form style={ { maxWidth: '286px' } }>
                <div className='m-b-2'>
                    <SingleDatePickerWrapper />
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
        key: 'sdp-non-english',
        menuTitle: 'non-english locale',
        component: () => {
            moment.locale('zh-cn');
            return (
                <SingleDatePickerWrapper
                    placeholder="入住日期"
                    monthFormat="YYYY[年]MMMM"
                    phrases={{
                        closeDatePicker: '关闭',
                        clearDate: '清除日期',
                    }}
                />
            );
        }
    }
];

export default singeDatePickerVariants;
