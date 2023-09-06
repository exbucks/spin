import React from 'react';
import {Form} from 'react-bootstrap';

import {Typeahead} from 'react-bootstrap-typeahead';
import options from './../exampleData';

class BasicExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multiple: false,
        };
    }

    render() {
        const {multiple} = this.state;

        return (
            <div>
                <Typeahead
                    labelKey="name"
                    multiple={multiple}
                    options={options}
                    placeholder="Choose a state..."
                />
                <Form.Check
                    checked={multiple}
                    onChange={e => this.setState({multiple: e.target.checked})}
                >
                    Multi-Select
                </Form.Check>
            </div>
        );
    }
}

export default BasicExample;
