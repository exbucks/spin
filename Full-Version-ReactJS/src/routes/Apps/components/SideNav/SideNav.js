import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import { Nav, NavItem, Badge } from 'components';

import classes from './SideNav.scss';

const SideNav = (props) => {
  const { items, folderSelected } = props;
  const otherProps = _.omit(props, 'items', 'className', 'folderSelected');

  return (
    <Nav stacked bsStyle="pills" className={classes.foldersList} activeKey={0} {...otherProps}>
      {_.map(items, (folder, index) => (
        <NavItem
          key={index}
          className={classes.flexSpaceBetween}
          eventKey={index}
          onClick={() => folderSelected()}
        >
          <span>
            {folder.icon && (
              <span className={`m-r-1 ${index > 0 && 'text-muted'}`}>{folder.icon}</span>
            )}
            <span>{folder.title}</span>
          </span>
          <Badge>{folder.count}</Badge>
        </NavItem>
      ))}
    </Nav>
  );
};

SideNav.propTypes = {
  items: PropTypes.array.isRequired,
  folderSelected: PropTypes.func
};

SideNav.defaultProps = {
  folderSelected: () => {}
};

export default SideNav;
