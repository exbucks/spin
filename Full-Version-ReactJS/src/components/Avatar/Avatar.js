import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { Colors } from './../../consts';

import classes from './Avatar.scss';

const Avatar = (props) => {
    const avatarClass = classNames(classes.avatar, {
        [`${classes.avatarCircle}`]: props.type === 'circle',
        [`${classes.avatarRounded}`]: props.type === 'rounded',
        [`${classes.avatarSm}`]: props.size === 'small',
        [`${classes.avatarLg}`]: props.size === 'large'
    }, props.className);

    const statusStyle = {
        borderColor: props.statusBorderColor,
        backgroundColor: props.statusColor
    };

    const statusClass = classNames(classes.avatarStatus, {
        [`${ classes.avatarStatusBottom }`]: props.statusPlacement == 'bottom'
    });

    const avatarStyle = props.info ? {
        marginRight: '5px'
    } : { };

    return (
        <div
            className={ avatarClass }
            style={ avatarStyle }
        >
            { props.children }
            {
                props.showStatus ?
                    <i className={ statusClass } style={ statusStyle }></i> : null
            }
            {
                props.info ?
                    (<div className={ classes.infoWrap }>
                        { props.info }
                    </div>): null
            }
        </div>
    );
};

Avatar.defaultProps = {
    size: 'default',
    type: 'circle',
    showStatus: false,
    statusColor: Colors.brandSuccess,
    statusBorderColor: Colors.grayDarker,
    statusPlacement: 'top',
    info: null
}

Avatar.propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    showStatus: PropTypes.bool,
    statusColor: PropTypes.string,
    statusBorderColor: PropTypes.string,
    statusPlacement: PropTypes.string,
    info: PropTypes.node,
    children: PropTypes.node.isRequired
}

export default Avatar;
