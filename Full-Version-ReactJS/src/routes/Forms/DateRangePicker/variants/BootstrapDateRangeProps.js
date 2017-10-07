import React from 'react';
import moment from 'moment';
import { isInclusivelyAfterDay, isSameDay } from 'react-dates';

import {
    DateRangePicker,
    Form,
    FormGroup
} from 'components';

const bdrPropsVariants = [
    {
        key: 'bdr-input-default',
        menuTitle: 'Input default',
        component: () => (
            <Form inline>
                <FormGroup controlId='bootstrap-drp-input'>
                    <DateRangePicker bsSize='lg'/>
                    <DateRangePicker className='m-t-3'/>
                    <DateRangePicker className='m-t-3' bsSize='sm'/>
                </FormGroup>
            </Form>
        )
    },
    {
        key: 'bdr-input-no-addons',
        menuTitle: 'Input No Addons',
        component: () => (
            <Form inline>
                <FormGroup controlId='bootstrap-drp-input-no-addons'>
                    <DateRangePicker
                        prefixAddOn={false}
                        separatorAddOn={false}
                        postfixButton={false}
                        bsSize='lg'
                    />
                    <DateRangePicker
                        prefixAddOn={false}
                        separatorAddOn={false}
                        postfixButton={false}
                        className='m-t-3'
                    />
                    <DateRangePicker
                        prefixAddOn={false}
                        separatorAddOn={false}
                        postfixButton={false}
                        className='m-t-3'
                        bsSize='sm'
                    />
                </FormGroup>
            </Form>
        )
    },
    {
        key: 'bdr-input-seperator-only',
        menuTitle: 'Input Separator Only',
        component: () => (
            <Form inline>
                <FormGroup controlId='bootstrap-drp-input-separator'>
                    <DateRangePicker
                        prefixAddOn={false}
                        postfixButton={false}
                        bsSize='lg'
                    />
                    <DateRangePicker
                        prefixAddOn={false}
                        postfixButton={false}
                        className='m-t-3'
                    />
                    <DateRangePicker
                        prefixAddOn={false}
                        postfixButton={false}
                        bsSize='sm'
                        className='m-t-3'
                    />
                </FormGroup>
            </Form>
        )
    },
    {
        key: 'bdr-buttons',
        menuTitle: 'Buttons',
        component: () => (
            <Form inline>
                <FormGroup controlId='bootstrap-drp-buttons'>
                    <DateRangePicker
                        type='button'
                        bsSize='lg'
                        bsStyle='primary'
                        bsStyleActive='success'
                    />

                    <DateRangePicker
                        type='button'
                        bsStyle='link'
                        bsStyleActive='primary'
                        className='m-t-3'
                    />

                    <DateRangePicker
                        type='button'
                        bsSize='sm'
                        bsStyle='success'
                        bsStyleActive='danger'
                        className='m-t-3'
                    />

                    <DateRangePicker
                        type='button'
                        bsSize='xs'
                        bsStyle='danger'
                        bsStyleActive='warning'
                        className='m-t-3'
                    />
                </FormGroup>
            </Form>
        )
    },
];

export default bdrPropsVariants;
