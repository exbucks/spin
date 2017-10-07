import React from 'react';
import Select from 'react-select';
import { Button, Checkbox, Radio } from 'components';
import _ from 'underscore';

const CONTRIBUTORS = [
    { github: 'jedwatson', name: 'Jed Watson' },
	{ github: 'bruderstein', name: 'Dave Brotherstone' },
	{ github: 'jossmac', name: 'Joss Mackison' },
	{ github: 'jniechcial', name: 'Jakub Niechciał' },
	{ github: 'craigdallimore', name: 'Craig Dallimore' },
	{ github: 'julen', name: 'Julen Ruiz Aizpuru' },
	{ github: 'dcousens', name: 'Daniel Cousens' },
	{ github: 'jgautsch', name: 'Jon Gautsch' },
	{ github: 'dmitry-smirnov', name: 'Dmitry Smirnov' }
];
const MAX_CONTRIBUTORS = 6;
const ASYNC_DELAY = 500;

export default class Contributors extends React.Component {
    constructor() {
        super();

        this.state = {
            multi: true,
            value: [CONTRIBUTORS[0]]
        };
    }

    switchToMulti () {
        if(!this.state.multi) {
            this.setState({
    			multi: true,
    			value: this.state.value ? [this.state.value] : [CONTRIBUTORS[0]],
    		});
        }
	}

	switchToSingle () {
		this.setState({
			multi: false,
			value: this.state.value[0] || CONTRIBUTORS[0],
		});
	}

    getContributors (input, callback) {
		input = input.toLowerCase();
		var options = CONTRIBUTORS.filter(i => {
			return i.github.substr(0, input.length) === input;
		});
		var data = {
			options: options.slice(0, MAX_CONTRIBUTORS),
			complete: options.length <= MAX_CONTRIBUTORS,
		};
		setTimeout(function() {
			callback(null, data);
		}, ASYNC_DELAY);
	}

	gotoContributor (value, event) {
		window.open('https://github.com/' + value.github);
	}

    render() {
        return (
            <div>
                <Select.Async
                    { ...(_.pick(this.state, ['multi', 'value'])) }
                    onChange={ val => this.setState({ value: val }) }
                    onValueClick={ (value, e) => this.gotoContributor(value, e)}
                    valueKey="github"
                    labelKey="name"
                    loadOptions={ (input, cb) => this.getContributors(input, cb) }
                />
                <div className='m-t-1'>
                    <Checkbox checked={ this.state.multi } onChange={ () => this.switchToMulti() }>
                        Multiselect
                    </Checkbox>
                    <Checkbox checked={ !this.state.multi } onChange={ () => this.switchToSingle() }>
                        Single Value
                    </Checkbox>
                </div>
            </div>
        );
    }
}
