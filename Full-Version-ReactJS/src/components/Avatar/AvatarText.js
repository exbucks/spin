import React, { PropTypes } from 'react';
import _ from 'underscore';
import Avatar from './Avatar.js';
import classNames from 'classnames';

import classes from './Avatar.scss';

import { Colors } from './../../consts';

const AvatarText = (props) => {
    const contentStyle = {
        color: props.color,
        backgroundColor: props.backgroundColor
    };

    const contentClass = classNames(classes.avatarContent,
        classes.avatarPlaceholder, classes.avatarText);

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

AvatarText.defaultProps = {
    backgroundColor: Colors.brandPrimary,
    color: Colors.brandWhite
};

AvatarText.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default AvatarText;
