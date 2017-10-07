import React from 'react';

import {Typeahead} from 'react-bootstrap-typeahead';
import options from './../exampleData';

const SelectionsExample = props => (
    <Typeahead
        clearButton
        defaultSelected={options.slice(0, 5)}
        labelKey="name"
        multiple
        options={options}
        placeholder="Choose a state..."
    />
);

export default SelectionsExample;
