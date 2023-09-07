import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Label = (props) => {
  let { className, pill, children, outline, customColor, withIcon, bsStyle, ...otherProps } = props

  const labelClass = classNames(className, {
    'label-outline': outline,
    'label-pill': pill,
    'label-gray-lighter': bsStyle === 'default' || !bsStyle,
    'label-with-icon': withIcon
  })

  let customStyle = {}

  if (bsStyle === 'custom') {
    customStyle = outline
      ? {
          borderColor: props.customColor,
          color: props.customColor
        }
      : {
          backgroundColor: props.customColor
        }
  } else {
    otherProps = { ...otherProps, bsStyle }
  }

  return (
    <div {...otherProps} className={labelClass} style={customStyle}>
      {props.children}
    </div>
  )
}

Label.propTypes = {
  outline: PropTypes.bool,
  pill: PropTypes.bool,
  children: PropTypes.node.isRequired,
  customColor: PropTypes.string,
  withIcon: PropTypes.bool
}

Label.defaultProps = {
  outline: false,
  pill: false,
  customColor: '#fff'
}

export default Label
