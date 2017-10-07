import React, { PropTypes } from 'react';
import classNames from 'classnames';

import classes from './Timeline.scss';

const TimelineItemBody = (props) => {
    const { className, children, ...otherProps } = props;

    const timelineItemBodyClass = classNames(className, classes.TimelineItemBody);

    return (
        <div className={ timelineItemBodyClass } { ...otherProps }>
            { children }
        </div>
    );
};

TimelineItemBody.propTypes = {
    children: PropTypes.node
}

export default TimelineItemBody;
