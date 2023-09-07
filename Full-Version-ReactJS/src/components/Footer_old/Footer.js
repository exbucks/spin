import React from 'react'
import PropTypes from 'prop-types'

export const Footer = (props) => (
  <footer>
    <div className={props.container || 'container-fluid'}>
      <p className="text-gray-dark">
        <strong className="m-r-1">SPIN Dashboard </strong>{' '}
        <span className="text-gray-dark">
          © 2009 - 2016. Made by <i className="fa fa-fw fa-heart text-danger"></i> New York, US
        </span>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  container: PropTypes.string
}

export default Footer
