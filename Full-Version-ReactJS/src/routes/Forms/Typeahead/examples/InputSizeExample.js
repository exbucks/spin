import React from 'react';
import {Radio, InputGroup} from 'components';

import {Typeahead} from 'react-bootstrap-typeahead';
import options from './../exampleData';

class InputSizeExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bsSize: undefined,
        };
    }

    render() {
        const {bsSize} = this.state;
        const radios = [
            {label: 'Small', value: 'small'},
            {label: 'Default', value: undefined},
            {label: 'Large', value: 'large'},
        ];

        return (
            <div>
                <Typeahead
                    bsSize={bsSize}
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                />
                {radios.map(({label, value}) => (
                    <Radio
                        checked={bsSize === value}
                        key={value || 'default'}
                        onChange={e => this.setState({bsSize: value})}
                        value={value}
                    >
                        {label}
                    </Radio>
                ))}
            </div>
        );
    }
}

export default InputSizeExample;
