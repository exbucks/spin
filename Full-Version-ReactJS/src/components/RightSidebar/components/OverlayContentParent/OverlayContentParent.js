import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class OverlayContentParent extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { className, children, style, ...otherProps } = this.props;

    //const builtChildren = this.buildChildren(children);
    const rightSidebarClass = classNames(className, 'extra-content-parent');
    const mergedStyle = {
      ...style,
      position: 'relative',
      overflowX: 'hidden'
    };

    return (
      <div
        className={rightSidebarClass}
        {...otherProps}
        //ref='parentElement'
        style={mergedStyle}
      >
        {children}
      </div>
    );
  }
}

export default OverlayContentParent;
