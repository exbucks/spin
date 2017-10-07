import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import { AvatarImage } from 'components';
import faker from 'faker'

const USERS = [
    { value: 'John Smith', label: 'John Smith', avatarUrl: faker.image.avatar() },
	{ value: 'Merry Jane', label: 'Merry Jane', avatarUrl: faker.image.avatar() },
	{ value: 'Stan Hoper', label: 'Stan Hoper', avatarUrl: faker.image.avatar() }
];

class AvatarOption extends React.Component {
    static propTypes = {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		isDisabled: React.PropTypes.bool,
		isFocused: React.PropTypes.bool,
		isSelected: React.PropTypes.bool,
		onFocus: React.PropTypes.func,
		onSelect: React.PropTypes.func,
		option: React.PropTypes.object.isRequired
    }

    handleMouseDown (e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.onSelect(this.props.option, e);
	}

	handleMouseEnter (e) {
		this.props.onFocus(this.props.option, e);
	}

	handleMouseMove (e) {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, e);
	}

    render() {
        return(
            <div
                className={ this.props.className }
                onMouseDown={ e => this.handleMouseDown(e) }
                onMouseEnter={ e => this.handleMouseEnter(e) }
                onMouseMove={ e => this.handleMouseMove(e) }
                title={this.props.option.title}
            >
                <AvatarImage className='m-r-1' size='small' src={ this.props.option.avatarUrl } />
                { this.props.children }
            </div>
        )
    }
}

const AvatarValue = props => (
    <div className='Select-value' title={ props.value.title }>
        <span className="Select-value-label" style={ { display: 'flex' } }>
            <AvatarImage className='m-r-1' size='small' src={ props.value.avatarUrl } />
            { props.children }
        </span>
    </div>
);
AvatarValue.propTypes = {
    children: React.PropTypes.node,
	placeholder: React.PropTypes.string,
	value: React.PropTypes.object
};

function arrowRenderer () {
	return (
		<span>+</span>
	);
}

export default class CustomComponents extends React.Component {
    constructor() {
        super();

        this.state = {
            value: null
        }
    }

    render() {
        const placeholder = (<span>&#9786; Select User</span>);

        return (
            <div>
                <Select
    				arrowRenderer={arrowRenderer}
    				onChange={ val => this.setState({ value: val })}
    				optionComponent={AvatarOption}
    				options={USERS}
    				placeholder={placeholder}
    				value={this.state.value}
    				valueComponent={AvatarValue}
				/>
            </div>
        )
    }
}
