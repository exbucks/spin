import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Media } from 'components';

import classes from './Timeline.scss';

const TimelineItemHeader = (props) => {
  const { avatar, primaryText, secondaryText, className, ...otherProps } = props;

  const timelineItemHeaderClass = classNames(className, classes.timelineItemHeader);

  return (
    <Media className={timelineItemHeaderClass} {...otherProps}>
      {avatar ? <Media.Left>{avatar}</Media.Left> : null}
      <Media.Body>
        {typeof primaryText === 'string' ? (
          <h5 className={classes.timelineItemHeaderTitle}>{primaryText}</h5>
        ) : (
          primaryText
        )}

        {typeof secondaryText === 'string' ? (
          <p className={classes.timelineItemHeaderText}>{secondaryText}</p>
        ) : (
          secondaryText
        )}
      </Media.Body>
    </Media>
  );
};

TimelineItemHeader.propTypes = {
  avatar: PropTypes.node,
  primaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default TimelineItemHeader;
