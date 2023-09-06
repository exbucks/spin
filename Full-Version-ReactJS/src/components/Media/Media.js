import React from 'react';
import classNames from 'classnames';

import classes from './Media.scss';

const Media = props => {
    const { children, ...otherProps } = props;
    const childrenWithAdjustedBody = React.Children.map(children, child => {
        if(child) {
            return React.cloneElement(child, {
                className: classNames(child.props.className, classes.mediaTableFix)
            });
        }

        return child;
    });

    return (
        <div { ...otherProps }>
            { childrenWithAdjustedBody }
        </div>
    );
};

const Left = (props) => {
    const { children, ...otherProps } = props;
    const childrenWithAdjustedBody = React.Children.map(children, child => {
        if(child) {
            return React.cloneElement(child, {
                className: classNames(child.props.className, classes.mediaTableFix)
            });
        }

        return child;
    });

    return (
        <div { ...otherProps }>
            { childrenWithAdjustedBody }
        </div>
    );
}

const Right = (props) => {
    const { children, ...otherProps } = props;
    const childrenWithAdjustedBody = React.Children.map(children, child => {
        if(child) {
            return React.cloneElement(child, {
                className: classNames(child.props.className, classes.mediaTableFix)
            });
        }

        return child;
    });

    return (
        <div { ...otherProps }>
            { childrenWithAdjustedBody }
        </div>
    );
}

const Body = (props) => {
    const { children, ...otherProps } = props;
    const childrenWithAdjustedBody = React.Children.map(children, child => {
        if(child) {
            return React.cloneElement(child, {
                className: classNames(child.props.className, classes.mediaTableFix)
            });
        }

        return child;
    });

    return (
        <div { ...otherProps }>
            { childrenWithAdjustedBody }
        </div>
    );
}

const Heading = (props) => {
    const { children, ...otherProps } = props;
    const childrenWithAdjustedBody = React.Children.map(children, child => {
        if(child) {
            return React.cloneElement(child, {
                className: classNames(child.props.className, classes.mediaTableFix)
            });
        }

        return child;
    });

    return (
        <div { ...otherProps }>
            { childrenWithAdjustedBody }
        </div>
    );
}

Media.Left = Left;
Media.Body = Body;
Media.Right = Right;
Media.Heading = Heading;

export default Media;
