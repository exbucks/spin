import React, { PropTypes } from 'react';
import Nestable from 'react-nestable';

import classes from './../nestable.scss';

import { people } from './';

import {
    Person
} from './../components';

class SingleContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: Array.from(people(5))
        }
    }

    renderItem({ item, collapseIcon, handler }) {
        return (
            <Person {...item} handle={<i className='fa fa-sort fa-fw'></i>} />
        );
    }

    render() {
        return (
            <div>
                <Nestable
                    group="1"
                    items={this.state.people}
                    collapsed={false}
                    renderItem={this.renderItem}
                    ref={el => this.refNestable = el}
                    maxDepth={1}
                />
            </div>
        )
    }
}

export default SingleContainer;
