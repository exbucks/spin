import React from 'react'
import { Divider, Form } from 'components'

const SearchLanguage = () => (
  <div>
    <Divider className="m-b-1">Language</Divider>
    <div>
      <Form.Check defaultChecked>English</Form.Check>
      <Form.Check disabled>French</Form.Check>
      <Form.Check>Spanish</Form.Check>
    </div>
  </div>
)

export default SearchLanguage
