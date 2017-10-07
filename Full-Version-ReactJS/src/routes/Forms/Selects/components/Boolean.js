import React from 'react';
import Select from 'react-select';
import _ from 'underscore';

export default class Boolean extends React.Component {
    constructor() {
        super();

        this.state = {
            options: [
				{ value: true, label: 'Yes' },
				{ value: false, label: 'No' }
			],
			value: null
        }
    }

    render() {
        return (
            <div>
                <Select
                    { ...(_.pick(this.state, ['options', 'value'])) }
                    onChange={ val => this.setState({ value: val }) }
                    simpleValue
                />
            </div>
        )
    }
}
