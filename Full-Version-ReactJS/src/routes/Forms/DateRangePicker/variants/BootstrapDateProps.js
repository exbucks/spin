import React from 'react'

import { DatePicker, Form, FormGroup } from 'components'

const bdrPropsVariants = [
  {
    key: 'bd-default',
    menuTitle: 'Input default',
    component: () => (
      <Form inline>
        <FormGroup controlId="bootstrap-dp">
          <DatePicker />
        </FormGroup>
      </Form>
    )
  }
]

export default bdrPropsVariants
