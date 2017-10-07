import React, { PropTypes } from 'react';
import {
    Navbar as ReactBootstrapNavbar
} from 'react-bootstrap';
import { OutsideClick } from 'components';

import classNames from 'classnames';

import classes from './Navbar.scss';

import updateChildElementOfType from './../utils/updateChildElementOfType';

const Navbar = props => {
    const { className, children, ...otherProps } = props;

    const navbarClass = classNames(className, classes.navbar);

    const updatedChildren = updateChildElementOfType(children, [OutsideClick], [
        {
            targetType: Navbar.Collapse,
            props: prevProps => ({
                className: `${ prevProps.className } ${ classes.navbarCollapse }`
            })
        }
    ]);

    return (
        <ReactBootstrapNavbar className={ navbarClass } { ...otherProps }>
            { updatedChildren }
        </ReactBootstrapNavbar>
    );
};

export default Navbar;
