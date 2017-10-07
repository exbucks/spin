import React from 'react';
import Select from 'react-select';
import Highlighter from 'react-highlight-words';
import _ from 'underscore';

export default class DisabledUpsellOptions extends React.Component {
    static propTypes = {
        label: React.PropTypes.string
    }

    constructor() {
        super();

        this.state = {
            value: null
        };

        this.displayName = 'DisabledUpsellOptions'
    }

    renderLink() {
        return (
            <a
                style={{ marginLeft: 5 }}
                href="#"
            >
                Upgrade here!
            </a>
        )
    }

    renderOption(option) {
        return (
            <Highlighter
                searchWords={ [this._inputValue] }
                textToHighlight={ option.label }
            />
        );
    }

    renderValue(option) {
        return <strong style={{ color: option.color }}>{ option.label }</strong>
    }

    render() {
        var options = [
            { label: 'Basic customer support', value: 'basic', color: '#E31864' },
			{ label: 'Premium customer support', value: 'premium', color: '#6216A3' },
			{ label: 'Pro customer support', value: 'pro', disabled: true, link: this.renderLink() },
        ];

        return (
            <div>
                <Select
                    onInputChange={ inputValue => this._inputValue = inputValue }
                    options={ options }
                    optionRenderer={ option => this.renderOption(option) }
                    onChange={ val => this.setState({ value: val }) }
                    value={ this.state.value }
                    valueRenderer={ this.renderValue }
                />
            </div>
        )
    }
}
