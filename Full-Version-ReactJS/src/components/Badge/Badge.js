import React, { PropTypes } from 'react';
import classNames from 'classnames';
import _ from 'underscore';
import {
    Badge as ReactBootstrapBadge
} from 'react-bootstrap';

/*
    Extended Badge from ReactBootstrap. Adds outline option, color changing by
    bsStyle and withIcon which adjusts the badge position next to an icon element
*/
const Badge = (props) => {
    const {
        className,
        outline,
        bsStyle,
        withIcon,
        children,
        ...otherProps
    } = props;

    const badgeClass = classNames(className, {
        'badge-outline': outline,

        'badge-primary': bsStyle === 'primary',
        'badge-success': bsStyle === 'success',
        'badge-info': bsStyle === 'info',
        'badge-warning': bsStyle === 'warning',
        'badge-danger': bsStyle === 'danger',

        'badge-with-icon': props.withIcon
    });

    return (
        <ReactBootstrapBadge
            { ...otherProps }
            className={ badgeClass }
        >
            { props.children }
        </ReactBootstrapBadge>
    );
}

Badge.propTypes = {
    outline: PropTypes.bool,
    bsStyle: PropTypes.string,
    children: PropTypes.node.isRequired,
    withIcon: PropTypes.bool
};

Badge.defaultProps = {
    outline: false,
    bsStyle: '',
    withIcon: false
};

export default Badge;
