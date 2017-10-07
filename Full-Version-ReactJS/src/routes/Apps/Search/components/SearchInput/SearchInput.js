import React, { PropTypes } from 'react';
import numeral from 'numeral';
import {
    FormGroup,
    FormControl,
    InputGroup,
    Button,
    Divider
} from 'components';

import classes from './../../Search.scss';

const SearchInput = (props) => (
    <div>
        <h3 className={classes.searchHeader}>
            Search Results for <strong>"{ props.query }"</strong>
            <small className='m-l-1'>
                About { !!props.resultCount ? numeral(props.resultCount).format('0,0') : '' } Results
                 ({numeral(props.resultTime).format('0,0.00')} seconds)
            </small>
        </h3>
        <InputGroup className='m-t-2'>
            <FormControl type='text' placeholder='Search again...' />
            <InputGroup.Button>
                <Button bsStyle='primary'>
                    <i className='fa fa-fw fa-search'></i>
                </Button>
            </InputGroup.Button>
        </InputGroup>
    </div>
);

SearchInput.propTypes = {
    query: PropTypes.string,
    resultTime: PropTypes.number,
    resultCount: PropTypes.number
};

SearchInput.defaultProps = {
    query: '',
    resultTime: null,
    resultCount: null
}

export default SearchInput;
