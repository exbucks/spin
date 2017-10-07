import React, { PropTypes } from 'react';
import classNames from 'classnames';

import {
    Panel,
    Row,
    Col
} from 'components';

import { Colors } from 'consts';

import classes from './SummaryBox.scss';

const getModifiedIcon = (iconElement, targetColor) =>
    React.cloneElement(iconElement, {
        className: classNames(classes.mainIcon,
            iconElement.props.className, `text-${ targetColor }`),
    });

const SummaryBox = (props) => (
    <Panel
        type='color-border-full'
        bsStyle={ props.color }
        footer={ props.footer || null }
        className={ classes.summaryBox }
    >
        <Row>
            <Col xs={ 3 }>
                { props.icon && getModifiedIcon(props.icon, props.color)  }
            </Col>
            <Col xs={ 9 } className='text-right'>
                <p className='m-b-0'>
                    { props.title }
                </p>
                <p className={ classes.value }>
                    { props.value }
                    { props.unit && (<small className='text-white'>{ ` ${props.unit}` }</small>) }
                </p>
            </Col>
        </Row>
    </Panel>
);

SummaryBox.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    unit: PropTypes.string,
    footer: PropTypes.node,
    icon: PropTypes.node,
    color: PropTypes.string
};

SummaryBox.defaultProps = {
    unit: null,
    footer: null,
    icon: null,
    color: Colors.brandPrimary
};

export default SummaryBox;
