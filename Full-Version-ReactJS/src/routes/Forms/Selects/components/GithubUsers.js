import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import { Form } from 'components';
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
                    <Form.Check type="radio" checked={ this.state.multi } onChange={ () => this.switchToMulti() }>
                        Multiselect
                    </Form.Check>
                    <Form.Check type="radio" checked={ !this.state.multi } onChange={ () => this.switchToSingle() }>
                        Single Value
                    </Form.Check>
                </div>
                <div className='m-t-2'>
                    <Form.Check checked={ this.state.creatable } onChange={ () => this.toggleState('creatable') } >
                        Creatable?
                    </Form.Check>
                    <Form.Check checked={ this.state.backspaceRemoves } onChange={ () => this.toggleState('backspaceRemoves') }>
                        Backspace Removes?
                    </Form.Check>
                </div>
            </div>
        )
    }
}
