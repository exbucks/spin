import React from 'react';
import Select from 'react-select';
import { Button, Checkbox, Radio } from 'components';
import _ from 'underscore';

const FLAVOURS = [
    { label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' }
];

const WHY_WOULD_YOU = [
	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));

export default class Multiselect extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            options: FLAVOURS,
            disabled: false,
            crazy: false,
            value: []
        }
    }

    toggleState(stateKey) {
        this.setState({
            [`${stateKey}`]: !this.state[stateKey]
        });
    }

    toggleChocolate(e) {
		let crazy = e.target.checked;
		this.setState({
			crazy: crazy,
			options: crazy ? WHY_WOULD_YOU : FLAVOURS,
		});
	}

    render() {
        return (
            <div>
                <Select
                    multi
                    simpleValue
                    { ...(_.pick(this.state, ['options', 'disabled', 'value'])) }
                    name='form-multiselect'
                    onChange={ val => this.setState({ value: val }) }
                />
                <div className='m-t-1'>
                    <Checkbox
                        checked={ this.state.disabled}
                        onChange={ () => this.toggleState('disabled') }
                    >
                        Disable the Control
                    </Checkbox>
                    <Checkbox
                        checked={ this.state.crazy}
                        onChange={ e => this.toggleChocolate(e) }
                    >
                        I don't like Chocolate (disable the option)
                    </Checkbox>
                </div>
            </div>
        )
    }
};
