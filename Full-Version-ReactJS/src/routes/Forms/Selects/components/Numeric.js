import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import { Radio, Checkbox } from 'components';

export default class Numeric extends React.Component {
    constructor() {
        super();

        this.state = {
            options: [
				{ value: 10, label: 'Ten' },
				{ value: 11, label: 'Eleven' },
				{ value: 12, label: 'Twelve' },
				{ value: 23, label: 'Twenty-three' },
				{ value: 24, label: 'Twenty-four' }
			],
			matchPos: 'any',
			matchValue: true,
			matchLabel: true,
			value: null,
			multi: false
        };
    }

    onChangeMatchStart(e) {
        this.setState({
            matchPos: e.target.checked ? 'start' : 'any'
        });
    }

    toggleState(stateKey) {
        this.setState({
            [`${stateKey}`]: !this.state[stateKey]
        });
    }

    render() {
        let matchProp = 'any';
        if (this.state.matchLabel && !this.state.matchValue) {
			matchProp = 'label';
		}
		if (!this.state.matchLabel && this.state.matchValue) {
			matchProp = 'value';
		}

        return (
            <div>
                <Select
                    {..._.pick(this.state, ['matchPos', 'matchProp', 'multi', 'options', 'value'])}
                    onChange={ val => { console.log(val); this.setState({ value: val }) } }
                />
                <div className='m-t-2'>
                    <Checkbox checked={ this.state.multi } onChange={ () => this.toggleState('multi') } >
                        Multi-Select
                    </Checkbox>
                    <Checkbox checked={ this.state.matchValue } onChange={ () => this.toggleState('matchValue') } >
                        Match value
                    </Checkbox>
                    <Checkbox checked={ this.state.matchLabel } onChange={ () => this.toggleState('matchLabel') } >
                        Multi label
                    </Checkbox>
                    <Checkbox checked={ this.state.matchPos === 'start' } onChange={ e => this.onChangeMatchStart(e) } >
                        Only include matches from the start of the string
                    </Checkbox>
                </div>
            </div>
        )
    }
}
