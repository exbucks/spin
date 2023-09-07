import React from 'react'
import PropTypes from 'prop-types'
import _ from 'underscore'
import classNames from 'classnames'

import classes from './GalleryThumbnail.scss'

const GalleryThumbnail = (props) => {
  const { className, active, ...otherProps } = props

  const thumbnailClasses = classNames(
    {
      [`${classes.active}`]: active
    },
    classes.galleryThumbnail,
    className
  )

  return <div {...otherProps} className={thumbnailClasses} />
}

GalleryThumbnail.propTypes = {
  active: PropTypes.bool
}

export default GalleryThumbnail
