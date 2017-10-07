import React from 'react';
import {Button, Checkbox, InputGroup} from 'components';

import {Typeahead} from 'react-bootstrap-typeahead';
import options from './../exampleData';

class FormSubmitExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitFormOnEnter: true,
        };
    }

    render() {
        const {submitFormOnEnter} = this.state;

        return (
            <form onSubmit={e => alert('Form submitted!')}>
                <InputGroup>
                    <Typeahead
                        labelKey="name"
                        options={options}
                        placeholder="Choose a state..."
                        submitFormOnEnter={submitFormOnEnter}
                    />
                    <InputGroup.Button>
                        <Button type="submit">Submit</Button>
                    </InputGroup.Button>
                </InputGroup>
                <Checkbox
                    checked={submitFormOnEnter}
                    onChange={e => this.setState({submitFormOnEnter: e.target.checked})}
                >
                    Allow form submission
                </Checkbox>
            </form>
        );
    }
}

export default FormSubmitExample;
