import React, { PropTypes } from 'react';
import { Badge } from 'react-bootstrap';
import classNames from 'classnames';

import classes from './Timeline.scss';

const TimelineDate = (props) => {
    const { className, children, ...otherProps } = props;

    const timelineDateClass = classNames(className, classes.timelineDate);

    return (
        <div className={ timelineDateClass } { ...otherProps }>
            {
                (typeof props.children === 'string') ?
                    (
                        <Badge>{ props.children }</Badge>
                    ) : props.children
            }
        </div>
    );
}

TimelineDate.propTypes = {
    children: PropTypes.node.isRequired
}

export default TimelineDate;
