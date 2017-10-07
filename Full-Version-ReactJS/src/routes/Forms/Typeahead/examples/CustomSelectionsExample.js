import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';

class CustomSelectionsExample extends React.Component {
    render() {
        return (
            <Typeahead
                allowNew
                multiple
                newSelectionPrefix="Add a new item: "
                options={[]}
                placeholder="Type anything..."
            />
        );
    }
}

export default CustomSelectionsExample;
