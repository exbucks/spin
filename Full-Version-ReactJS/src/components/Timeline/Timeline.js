import React, { PropTypes } from 'react';
import classNames from 'classnames';
import classes from './Timeline.scss';

const Timeline = (props) => {
    const { className, itemAlignment, children, ...otherProps } = props;

    const timelineItems = React.Children.map(children, (child) => {
        if(child.type === Timeline.Item) {
            const clonedChild = React.cloneElement(child, {
                itemAlignment: itemAlignment
            });
            return clonedChild;
        }
        return child;
    });

    const timelineClasses = classNames(className, classes.timeline, {
        [`${ classes.timeline__dateTime }`]: itemAlignment === 'vertical'
    });

    return (
        <div className={ timelineClasses } { ...otherProps }>
            { timelineItems }
        </div>
    );
}

Timeline.defaultProps = {
    itemAlignment: 'horizontal'
}

Timeline.propTypes = {
    children: PropTypes.node.isRequired,
    itemAlignment: PropTypes.string,
}

export default Timeline;
