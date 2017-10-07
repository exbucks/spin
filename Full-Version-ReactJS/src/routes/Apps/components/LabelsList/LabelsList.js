import React from 'react';
import _ from 'underscore';
import uid from 'node-uuid';
import {
    Nav,
    NavItem
} from 'components';

import classes from './LabelsList.scss';

const LabelsList = (props) => {
    const { items } = props;
    const otherProps = _.omit(props, 'items');

    return (
        <Nav { ...otherProps } stacked>
            {
                _.map(items, (label, index) => (
                    <NavItem key={ index } className={ classes.navItem }>
                        <i
                            className='fa fa-fw fa-circle-o m-r-1'
                            style={ {color: label.color} }
                        ></i>
                        {` ${label.title}`}
                    </NavItem>
                ))
            }
            <NavItem>
                <span className='text-muted'>
                    <i className="fa fa-fw fa-plus m-r-1"></i>
                    { ' Add New Label' }
                </span>
            </NavItem>
        </Nav>
    );
};

LabelsList.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default LabelsList;
