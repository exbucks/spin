import React from 'react'
import { Divider, Form } from 'components'

const SearchPeriod = () => (
  <div>
    <Divider className="m-b-1">Date</Divider>
    <div>
      <Form.Check type="radio" name="search-period" defaultChecked>
        All
      </Form.Check>
      <Form.Check type="radio" name="search-period">
        Last 24 Hours
      </Form.Check>
      <Form.Check type="radio" name="search-period">
        Last Week
      </Form.Check>
      <Form.Check type="radio" name="search-period">
        Last Month
      </Form.Check>
    </div>
  </div>
)

export default SearchPeriod
