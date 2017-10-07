import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Modal as ReactBootstrapModal } from 'react-bootstrap';
import _ from 'underscore';
import classNames from 'classnames';

/*
    Extended React Bootstrap Modal. Adds colored borders to modal accordingly to bsStyle prop
*/
const Modal = props => {
    const { className, bsStyle, ...otherProps } = props;

    const modalClass = classNames(className, {
        'modal-danger': bsStyle === 'danger',
        'modal-primary': bsStyle === 'primary',
        'modal-success': bsStyle === 'success',
        'modal-info': bsStyle === 'info',
        'modal-warning': bsStyle === 'warning'
    });

    return (
        <ReactBootstrapModal { ...otherProps } className={ modalClass } />
    );
}

Modal.propTypes = {
    bsStyle: PropTypes.string
};

Modal.defaultProps = {
    bsStyle: ''
};

Modal.Body = ReactBootstrapModal.Body;
Modal.Footer = ReactBootstrapModal.Footer;
Modal.Header = ReactBootstrapModal.Header;
Modal.Title = ReactBootstrapModal.Title;
Modal.Dialog = ReactBootstrapModal.Dialog;

export default Modal;
