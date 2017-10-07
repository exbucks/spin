import React from 'react';
import classNames from 'classnames';

import { ProgressBar } from 'components';

import classes from './SlimProgressBar.scss';

const SlimProgressBar = (props) => {
    const { className, ...otherProps } = props;

    const progressBarClass = classNames(className, classes.slimBarWrap);
    const barClass = classNames(classes.slimBar, {
        [`${classes.medium}`]: props.size === 'medium',
        [`${classes.large}`]: props.size === 'large'
    });

    return (
        <div className={ progressBarClass }>
            <ProgressBar { ...otherProps } className={ barClass }/>
        </div>
    );
};

SlimProgressBar.propTypes = {
    size: React.PropTypes.string
};

SlimProgressBar.defaultProps = {
    size: 'small'
};

export default SlimProgressBar;
