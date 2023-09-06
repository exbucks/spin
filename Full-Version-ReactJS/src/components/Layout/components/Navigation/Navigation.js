import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

const Navigation = props => {
    const { children, className, ...otherProps } = props;
    const navigationClass = classNames(className, 'navigation');

    return (
        <div className={ navigationClass } { ...otherProps }>
            { children }
        </div>
    );
};

Navigation.propTypes = {
    children: PropTypes.node.isRequired
};

export default Navigation;
