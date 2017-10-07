import React, { PropTypes } from 'react';
import { ProgressBar as ReactBootstrapProgressBar } from 'react-bootstrap';

import bsStyleToColor from './../utils/bsStyleToColor';

import { Colors } from 'consts';

const ProgressBar = props => {
    const { bsStyle, customColor, style, children, ...otherProps } = props;

    const customStyle = bsStyle === 'custom' ? {
        ...style,
        backgroundColor: bsStyleToColor({ bsStyle, customColor })
    } : style;

    return (
        <ReactBootstrapProgressBar
            { ...otherProps }
            style={ customStyle }
            bsStyle={ bsStyle !== 'custom' ? bsStyle : 'success' }
        >
            { children }
        </ReactBootstrapProgressBar>
    );
}

ProgressBar.props = {
    bsStyle: PropTypes.string,
    customColor: PropTypes.string,
    style: PropTypes.object
};

ProgressBar.defaultProps = {
    bsStyle: null,
    customColor: Colors.brandPrimary,
    style: { }
};

export default ProgressBar;
