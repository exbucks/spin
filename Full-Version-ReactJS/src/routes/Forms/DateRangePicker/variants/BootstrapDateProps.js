import React from 'react';
import moment from 'moment';
import { isInclusivelyAfterDay, isSameDay } from 'react-dates';

import {
    DatePicker,
    Form,
    FormGroup
} from 'components';

const bdrPropsVariants = [
    {
        key: 'bd-default',
        menuTitle: 'Input default',
        component: () => (
            <Form inline>
                <FormGroup controlId='bootstrap-dp'>
                    <DatePicker
                    />
                </FormGroup>
            </Form>
        )
    }
];

export default bdrPropsVariants;
