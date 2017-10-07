import React, { PropTypes } from 'react';
import classNames from 'classnames';

import classes from './AddOn.scss';

const AddOn = props => {
    const { className, children, ...otherProps } = props;
    return (
        <div className={ `${classNames(classes.addOnContainer, className)} add-on-container` }>
            { children }
        </div>
    );
};

AddOn.propTypes = {
    children: PropTypes.node
};

export default AddOn;
