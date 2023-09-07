import React from 'react'
import { Form, FormGroup } from 'components'

import { Typeahead } from 'react-bootstrap-typeahead'

import options from './../exampleData'

class BasicBehaviorsExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
      dropup: false,
      minLength: 0
    }
  }

  render() {
    const { disabled, dropup, emptyLabel, minLength } = this.state

    return (
      <div>
        <Typeahead
          {...this.state}
          emptyLabel={emptyLabel ? '' : undefined}
          labelKey="name"
          multiple
          options={options}
          placeholder="Choose a state..."
        />
        <FormGroup>
          <Form.Check checked={disabled} name="disabled" onChange={this._handleChange}>
            Disable
          </Form.Check>
          <Form.Check checked={dropup} name="dropup" onChange={this._handleChange}>
            Dropup menu
          </Form.Check>
          <Form.Check checked={!!minLength} name="minLength" onChange={this._handleChange}>
            Require minimum input before showing results (2 chars)
          </Form.Check>
          <Form.Check checked={emptyLabel} name="emptyLabel" onChange={this._handleChange}>
            Hide the menu when there are no results
          </Form.Check>
        </FormGroup>
      </div>
    )
  }

  _handleChange = (e) => {
    const { checked, name } = e.target
    const newState = { [name]: checked }

    if (name === 'minLength') {
      newState.minLength = checked ? 2 : 0
    }

    this.setState(newState)
  }
}

export default BasicBehaviorsExample
