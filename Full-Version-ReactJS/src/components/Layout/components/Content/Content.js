import React from 'react';
import classNames from 'classnames';

import classes from './Content.scss';

const Content = props => {
    const { className, children, ...otherProps } = props;

    const contentClasses = classNames(className, classes.content, 'content');

    return (
        <div className={ contentClasses } { ...otherProps }>
            { children }
        </div>
    );
};

export default Content;
