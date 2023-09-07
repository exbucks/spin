import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb as ReactBootstrapBreadcrumb } from 'react-bootstrap'
import classNames from 'classnames'

import classes from './Breadcrumb.scss'

/*
    Extended ReactBootstrap Breadcrumb. Adds noBackground prop.
*/
const Breadcrumb = (props) => {
  const { children, className, noBackground, ...otherProps } = props

  const breadCrumbClass = classNames(className, classes.breadCrumb, {
    [`${classes.noBackground}`]: props.noBackground
  })

  return (
    <ReactBootstrapBreadcrumb {...otherProps} className={breadCrumbClass}>
      {children}
    </ReactBootstrapBreadcrumb>
  )
}

Breadcrumb.propTypes = {
  noBackground: PropTypes.bool
}

Breadcrumb.defaultProps = {
  noBackground: false
}

Breadcrumb.Item = ReactBootstrapBreadcrumb.Item

export default Breadcrumb
