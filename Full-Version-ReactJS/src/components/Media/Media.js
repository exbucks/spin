import React from 'react';
import {
    Media as ReactBootstrapMedia
} from 'react-bootstrap';
import classNames from 'classnames';

import classes from './Media.scss';

const Media = props => {
    const { children, ...otherProps } = props;
    const childrenWithAdjustedBody = React.Children.map(children, child => {
        if(child && child.type === ReactBootstrapMedia.Body) {
            return React.cloneElement(child, {
                className: classNames(child.props.className, classes.mediaTableFix)
            });
        }

        return child;
    });

    return (
        <ReactBootstrapMedia { ...otherProps }>
            { childrenWithAdjustedBody }
        </ReactBootstrapMedia>
    );
};

Media.Left = ReactBootstrapMedia.Left;
Media.Body = ReactBootstrapMedia.Body;
Media.Right = ReactBootstrapMedia.Right;
Media.Heading = ReactBootstrapMedia.Heading;

export default Media;
