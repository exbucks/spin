import React from 'react';
import {Checkbox} from 'react-bootstrap';

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
                <Checkbox
                    checked={multiple}
                    onChange={e => this.setState({multiple: e.target.checked})}
                >
                    Multi-Select
                </Checkbox>
            </div>
        );
    }
}

export default BasicExample;
