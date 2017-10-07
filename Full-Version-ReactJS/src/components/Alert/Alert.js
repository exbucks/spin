import React, { PropTypes } from 'react';
import {
    Alert as ReactBootstrapAlert
} from 'react-bootstrap';
import classNames from 'classnames';

import { Colors } from './../../consts';

import classes from './Alert.scss';

const styleToColor = {
    ['primary']: Colors.brandPrimary,
    ['success']: Colors.brandSuccess,
    ['info']: Colors.brandInfo,
    ['warning']: Colors.brandWarning,
    ['danger']: Colors.brandDanger
}
/*
    Extended ReactBootstrap Alert. Added a noBackground prop which will create
    a backgroundless alert with an Appropriate border accent on the left side
*/
const Alert = (props) => {
    const {
        noBackground,
        className,
        children,
        rounded,
        ...otherProps
    } = props;

    const alertClass = classNames(className, {
        [`${classes.noBackground}`]: noBackground,
        [`${classes.notRounded}`]: !rounded
    });
    const alertStyle = noBackground ? {
        borderLeft: `2px solid ${styleToColor[props.bsStyle] || Colors.brandSuccess}`
    } : { };

    return (
        <ReactBootstrapAlert
            { ...otherProps }
            className={ alertClass }
            style={ alertStyle }
        >
            { children }
        </ReactBootstrapAlert>
    );
};

Alert.propTypes = {
    noBackground: PropTypes.bool,
    bsStyle: PropTypes.string,
    children: PropTypes.node.isRequired,
    rounded: PropTypes.bool
}

Alert.defaultProps =  {
    noBackground: false,
    bsStyle: 'success',
    rounded: true
}

export default Alert;
