import React from 'react';
import Select from 'react-select';
import { Button, Checkbox, Radio } from 'components';
import _ from 'underscore';

const STATES_AU = [
    { value: 'australian-capital-territory', label: 'Australian Capital Territory' },
    { value: 'new-south-wales', label: 'New South Wales' },
    { value: 'western-australia', label: 'Western Australia'},
    { value: 'south-australia', label: 'South Australia' },
    { value: 'tasmania', label: 'Tasmania' },
    { value: 'northern-territory', label: 'Northern Territory' }
];

const STATES_US = [
    { value: 'AZ', label: 'Arizona' },
    { value: 'CA', label: 'California' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MT', label: 'Montana' },
    { value: 'NY', label: 'New York' },
    { value: 'WA', label: 'Washington' },
];

export default class States extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            options: STATES_AU,
            searchable: false,
            disabled: false,
            clearable: false
        }
    }

    setFocus() {
        if(this.refs.stateSelect) {
            this.refs.stateSelect.focus();
        }
    }

    toggleState(stateKey) {
        this.setState({
            [`${stateKey}`]: !this.state[stateKey]
        });
    }

    render() {
        return (
            <div>
                <Select
                    { ...this.state }
                    name='form-states'
                    onChange={ val => this.setState({ value: val }) }
                    ref='stateSelect'
                />
                <div className='m-t-1'>
                    <Button onClick={ () => this.setFocus() } bsStyle='primary'>Focus</Button>
                    <Checkbox
                        checked={ this.state.searchable}
                        onChange={ () => this.toggleState('searchable') }
                        inline
                        className='m-l-1'
                    >
                        Searchable
                    </Checkbox>
                    <Checkbox
                        checked={ this.state.disabled}
                        onChange={ () => this.toggleState('disabled') }
                        inline
                        className='m-l-1'
                    >
                        Disabled
                    </Checkbox>
                    <Checkbox
                        checked={ this.state.clearable}
                        onChange={ () => this.toggleState('clearable') }
                        inline
                        className='m-l-1'
                    >
                        Clearable
                    </Checkbox>
                </div>
                <div className='m-t-1'>
                    <Radio
                        inline
                        checked={ this.state.options === STATES_AU }
                        onChange={ () => { this.setState({ options: STATES_AU, value: null }) } }
                    >
                        Australia
                    </Radio>
                    <Radio
                        inline
                        checked={ this.state.options === STATES_US }
                        onChange={ () => { this.setState({ options: STATES_US, value: null }) } }
                        className='m-l-1'
                    >
                        United States
                    </Radio>
                </div>
            </div>
        )
    }
};
