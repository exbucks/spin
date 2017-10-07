import {range} from 'lodash';
import React from 'react';
import {Checkbox} from 'components';

import {Typeahead} from 'react-bootstrap-typeahead';

/* eslint-disable no-console */
class LabelKeyExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paginate: true,
        };
    }

    render() {
        const {paginate} = this.state;

        return (
            <div>
                <Typeahead
                    onPaginate={e => console.log('Results paginated')}
                    options={range(0, 1000).map(o => o.toString())}
                    paginate={paginate}
                    placeholder="Pick a number..."
                />
                <Checkbox
                    checked={paginate}
                    onChange={e => this.setState({paginate: !!e.target.checked})}
                >
                    Paginate results
                </Checkbox>
            </div>
        );
    }
}
/* eslint-disable no-console */

export default LabelKeyExample;
