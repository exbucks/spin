import React, { PropTypes } from 'react';
import { Tooltip as ReactBootstrapTooltip } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import { Colors } from './../../consts';

import bsStyleToColor from './../utils/bsStyleToColor';

/*
    Extended ReactBootstrap Tooltip. Adds bsStyle prop which modifies the color
*/
const Tooltip = (props) => {
    const tooltipAdjustment = (reference) => {
        const tooltipElement = ReactDOM.findDOMNode(reference);

        if(!tooltipElement) {
            return;
        }

        const innerElement = tooltipElement.querySelector('.tooltip-inner');
        const arrowElement = tooltipElement.querySelector('.tooltip-arrow');

        if(arrowElement && innerElement) {
            const targetColor = bsStyleToColor(props);

            innerElement.style.backgroundColor = targetColor;
            // Set arrow color
            switch(props.placement) {
                case 'top':
                    arrowElement.style.borderTopColor = targetColor;
                break;
                case 'bottom':
                    arrowElement.style.borderBottomColor = targetColor;
                break;
                case 'left':
                    arrowElement.style.borderLeftColor = targetColor;
                break;
                case 'right':
                    arrowElement.style.borderRightColor = targetColor;
                break;
            }
        }
    };

    const otherProps = _.omit(props, ['bsStyle', 'children']);

    return (
        <ReactBootstrapTooltip ref={ tooltipAdjustment } {...otherProps}>
            { props.children }
        </ReactBootstrapTooltip>
    );
}

Tooltip.propTypes = {
    bsStyle: PropTypes.string,
    children: PropTypes.node.isRequired,
    placement: PropTypes.string
}

Tooltip.defaultProps = {
    bsStyle: '',
    placement: 'right'
}

export default Tooltip;
