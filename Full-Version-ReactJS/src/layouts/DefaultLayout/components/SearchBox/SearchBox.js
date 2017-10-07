import React, { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import {
    InputGroup,
    Button,
    FormGroup,
    FormControl,
    NavItem,
    Navbar
} from 'components';

import classes from './SearchBox.scss';

class SearchBox extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string
    }

    constructor() {
        super();

        this.state = {
            opened: false
        };
    }

    render() {
        const placeholderText = this.props.placeholder || 'Search for...';

        const activeIcon = this.state.opened ?
            <i className="fa fa-close fa-lg icon-active"></i> :
            <i className="fa fa-search fa-lg icon-inactive"></i>;

        return (
            <li className={`hidden-xs spin-search-box ${ this.state.opened ? 'active' : ''   }`}>
                <a href="javascript:void(0)" className="pull-left" onClick={ () => { this.setState({ opened: !this.state.opened }) } }>
                    { activeIcon }
                </a>
                <InputGroup
                    bsSize='sm'
                    className={ `${ classes.searchInput } input-group pull-left` }
                >
                    <FormControl type='text' placeholder={ placeholderText } />
                    <InputGroup.Button>
                        <LinkContainer to='/apps/search/search-results'>
                            <Button bsStyle='primary'>
                                <i className="fa fa-search"></i>
                            </Button>
                        </LinkContainer>
                    </InputGroup.Button>
                </InputGroup>
            </li>
        );
    }
}

export default SearchBox;
