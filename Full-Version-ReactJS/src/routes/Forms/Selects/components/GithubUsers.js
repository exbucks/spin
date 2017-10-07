import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import { Radio, Checkbox } from 'components';
import fetch from 'isomorphic-fetch';

export default class GithubUsers extends React.Component {
    constructor() {
        super();

        this.state = {
            backspaceRemoves: true,
            multi: true,
            value: []
        };
    }

    switchToMulti () {
		this.setState({
			multi: true,
			value: [this.state.value],
		});
	}

    switchToSingle () {
		this.setState({
			multi: false,
			value: this.state.value ? this.state.value[0] : null
		});
	}

    getUsers (input) {
		if (!input) {
			return Promise.resolve({ options: [] });
		}

		return fetch(`https://api.github.com/search/users?q=${input}`)
    		.then((response) => response.json())
    		.then((json) => {
    			return { options: json.items };
    		});
	}

    gotoUser (value, event) {
		window.open(value.html_url);
	}

    toggleState(stateKey) {
        this.setState({
            [`${stateKey}`]: !this.state[stateKey]
        });
    }

    render() {
        const AsyncComponent = this.state.creatable
			? Select.AsyncCreatable
			: Select.Async;
        return (
            <div>
                <AsyncComponent
                    { ...(_.pick(this.state, ['multi', 'value', 'backspaceRemoves'])) }
                    onChange={ val => this.setState({ value: val }) }
                    onValueClick={ (val, e) => this.gotoUser(val, e) }
                    loadOptions={ input => this.getUsers(input) }
                    valueKey="id"
                    labelKey="login"
                />
                <div className='m-t-2'>
                    <Radio checked={ this.state.multi } onChange={ () => this.switchToMulti() }>
                        Multiselect
                    </Radio>
                    <Radio checked={ !this.state.multi } onChange={ () => this.switchToSingle() }>
                        Single Value
                    </Radio>
                </div>
                <div className='m-t-2'>
                    <Checkbox checked={ this.state.creatable } onChange={ () => this.toggleState('creatable') } >
                        Creatable?
                    </Checkbox>
                    <Checkbox checked={ this.state.backspaceRemoves } onChange={ () => this.toggleState('backspaceRemoves') }>
                        Backspace Removes?
                    </Checkbox>
                </div>
            </div>
        )
    }
}
