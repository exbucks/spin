import React, { PropTypes } from 'react';
import { Popover as ReactBootstrapPopover } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import { Colors } from 'consts';

import bsStyleToColor from './../utils/bsStyleToColor';

/*
    Extended ReactBootstrap Popover. Added bsStyle and customColor which changeges the background in the title bar
*/
const Popover = (props) => {
    const popoverAdjustment = (reference) => {
        const popoverElement = ReactDOM.findDOMNode(reference);

        if(!popoverElement) {
            return;
        }

        const titleElement = popoverElement.querySelector('.popover-title');

        if(titleElement) {
            const background = bsStyleToColor(props);

            titleElement.style.background = background;
            titleElement.style.borderBottomWidth = !!background ? 0 : null;
        }
    };

    const otherProps = _.omit(props, _.keys(Popover.propTypes));

    return (
        <ReactBootstrapPopover ref={ popoverAdjustment } {...otherProps}>
            { props.children }
        </ReactBootstrapPopover>
    );
}

Popover.propTypes = {
    bsStyle: PropTypes.string,
    customColor: PropTypes.string,
    children: PropTypes.node.isRequired
}

Popover.defaultProps = {
    customColor: Colors.brandPrimary,
    bsStyle: ''
}

export default Popover;
