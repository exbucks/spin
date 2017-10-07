import React, { PropTypes } from 'react';
import classNames from 'classnames';
import {
    Label as ReactBootstrapLabel
} from 'react-bootstrap';

/*
    Extended ReactBootstrap Label. Added props: outline, pill, customColor, withIcon
*/
const Label = (props) => {
    let {
        className,
        pill,
        children,
        outline,
        customColor,
        withIcon,
        bsStyle,
        ...otherProps
    } = props;

    const labelClass = classNames(className, {
        'label-outline': outline,
        'label-pill': pill,
        'label-gray-lighter': (bsStyle === 'default' || !bsStyle),
        'label-with-icon': withIcon
    });

    let customStyle = { };

    if (bsStyle === 'custom') {
        customStyle = outline ? {
            borderColor: props.customColor,
            color: props.customColor
        } : {
            backgroundColor: props.customColor
        }
    } else {
        otherProps = { ...otherProps, bsStyle };
    }

    return (
        <ReactBootstrapLabel
            { ...otherProps }
            className={ labelClass }
            style={ customStyle }
        >
            { props.children }
        </ReactBootstrapLabel>
    );
}

Label.propTypes = {
    outline: PropTypes.bool,
    pill: PropTypes.bool,
    children: PropTypes.node.isRequired,
    customColor: PropTypes.string,
    withIcon: PropTypes.bool
};

Label.defaultProps = {
    outline: false,
    pill: false,
    customColor: '#fff'
};

export default Label;
