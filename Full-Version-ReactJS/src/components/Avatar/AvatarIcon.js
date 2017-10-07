import React, { PropTypes } from 'react';
import _ from 'underscore';
import Avatar from './Avatar.js';
import classNames from 'classnames';

import classes from './Avatar.scss';

import { Colors } from './../../consts';

const AvatarIcon = (props) => {
    const contentStyle = {
        color: props.color,
        backgroundColor: props.backgroundColor
    };

    const contentClass = classNames(classes.avatarContent,
        classes.avatarPlaceholder);

    const otherProps = _.omit(props, [
        'color',
        'backgroundColor',
        'children'
    ]);

    return (
        <Avatar { ...otherProps }>
            <div className={ contentClass } style={ contentStyle }>
                { props.children }
            </div>
        </Avatar>
    );
};

AvatarIcon.defaultProps = {
    backgroundColor: Colors.brandPrimary,
    color: Colors.brandWhite
};

AvatarIcon.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default AvatarIcon;
