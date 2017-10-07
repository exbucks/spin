import React, { PropTypes } from 'react';
import {
    Button as BootstrapButton
} from 'react-bootstrap';
import _ from 'underscore';
import classNames from 'classnames';

import classes from './Button.scss';

import { Colors } from 'consts';

const BS_STYLES = [
    'default',
    'link',
    'primary',
    'success',
    'warning',
    'danger',
    'info'
];
/*
const colorToClassMap = [
    { key: Colors.brandCerulean, val: 'btn-cerulean' },
    { key: Colors.brandCuriousBlue, val: 'btn-curious-blue' },
    { key: Colors.brandEndaveour, val: 'btn-endaveour' },
    { key: Colors.brandMinsk, val: 'btn-minsk' },
    { key: Colors.brandEminence, val: 'btn-eminence' },
    { key: Colors.brandVioletEggplant, val: 'btn-violet-eggplant' },
    { key: Colors.brandDodgerBlue, val: 'btn-dodger-blue' },
    { key: Colors.brandHeliotrope, val: 'btn-heliotrope' },
    { key: Colors.brandPerfume, val: 'btn-perfume' },

    { key: Colors.grayDarker, val: 'btn-gray-darker' },
    { key: Colors.grayDark, val: 'btn-gray-dark' },
    { key: Colors.gray, val: 'btn-gray' },
    { key: Colors.grayLight, val: 'btn-gray-light' },
    { key: Colors.grayLighter, val: 'btn-gray-lighter' }
];
*/
class Button extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        outline: PropTypes.bool,
        bsStyle: PropTypes.string,
        customColor: PropTypes.string
    }

    static defaultProps = {
        outline: false,
        bsStyle: 'default'
    }

    render() {
        const {
            className,
            children,
            bsStyle,
            outline,
            customColor,
            ...otherProps
        } = this.props;

        const isBsStyle = _.contains(BS_STYLES, bsStyle);

        const buttonClass = classNames({
            [`${classes.outline}`]: outline && !isBsStyle,
            'btn-outline': outline && isBsStyle
        }, className);

        const additionalStyle = {
            color: outline ? customColor : '#fff',
            backgroundColor: customColor,
            borderColor: customColor
        }

        return (
            <BootstrapButton
                { ...otherProps }
                bsStyle={ isBsStyle ? bsStyle : null }
                className={ buttonClass }
                style={ !isBsStyle ? additionalStyle : null }
            >
                { children }
            </BootstrapButton>
        );
    }
}

export default Button;
