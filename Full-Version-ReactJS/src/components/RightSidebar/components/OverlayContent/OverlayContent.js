import React, { PropTypes } from 'react';
import classNames from 'classnames';

const OverlayContent = props => {
    const { active, children, className, style, ...otherProps } = props;

    const contentClass = classNames({
        'active': active
    }, 'right-sidebar-extra-content', className);

    const mergedStyle = {
        ...style,
        zIndex: 100,
        overflowY: 'hidden',
        top: '0px',
        height: '100%'
    };

    return (
        <div
            className={ contentClass }
            style={ mergedStyle }
        >
            { children }
        </div>
    )
};

OverlayContent.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node
};

export default OverlayContent;
