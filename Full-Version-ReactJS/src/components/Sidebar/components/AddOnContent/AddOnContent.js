import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';

import classes from './AddOnContent.scss';

import { SIDEBAR_STYLE_DEFAULT } from 'layouts/DefaultLayout/modules/layout';

const AddOnContent = (props) => {
  const { supportedStyle, children, className } = props;

  const stylesNormalized =
    typeof supportedStyle === 'array' ? props.supportedStyle : [supportedStyle];

  const addOnClass = classNames(
    {
      [`${classes.defaultAvatarContainer} sidebar-container-default`]: _.contains(
        stylesNormalized,
        'default'
      ),
      [`${classes.bigIconsAvatarContainer} sidebar-container-big-icons`]: _.contains(
        stylesNormalized,
        'big-icons'
      ),
      [`${classes.slimAvatarContainer} sidebar-container-slim`]: _.contains(
        stylesNormalized,
        'slim'
      )
    },
    'sidebar-section',
    className
  );

  return <div className={addOnClass}>{children}</div>;
};

AddOnContent.propTypes = {
  supportedStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node.isRequired
};

AddOnContent.defaultProps = {
  supportedStyle: SIDEBAR_STYLE_DEFAULT
};

export default AddOnContent;
