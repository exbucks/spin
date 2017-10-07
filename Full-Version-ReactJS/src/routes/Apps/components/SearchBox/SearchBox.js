import React from 'react';
import _ from 'underscore';
import {
    FormGroup,
    InputGroup,
    FormControl,
    Button
} from 'components';

const SearchBox = (props) => {
    const otherProps = _.omit(props, 'buttonStyle', 'phText');
    const { buttonStyle, phText } = props;

    return (
        <div {...otherProps}>
            <FormGroup>
                <InputGroup>
                    <FormControl type='text' placeholder={ phText } />
                    <InputGroup.Button>
                        <Button bsStyle={ buttonStyle }>
                            <i className='fa fa-search'></i>
                        </Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </div>
    );
};

SearchBox.propTypes = {
    buttonStyle: React.PropTypes.string,
    phText: React.PropTypes.string
};

SearchBox.defaultProps = {
    buttonStyle: 'primary',
    phText: 'Search...'
};

export default SearchBox;
