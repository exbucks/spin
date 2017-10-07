import React, { PropTypes } from 'react';
import {
    NavDropdown,
    Row,
    Col,
    Navbar,
    Nav
} from 'components';
import classNames from 'classnames';

import updateChildElementOfType from './../../../utils/updateChildElementOfType';

import classes from './Menu.scss';

class Menu extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node.isRequired,
        currentPath: PropTypes.string,
    }

    static defaultProps = {
        title: 'Menu',
        currentPath: ''
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            menuOpen: false
        };
    }

    render() {
        const {
            className,
            children,
            title,
            currentPath,
            ...otherProps
        } = this.props;

        const containerClass = classNames(className, classes.wideMenuContainer);

        const updatedMenuSections = updateChildElementOfType(children, [Row, Col], {
            targetType: Navbar.MenuSection,
            props: {
                currentPath,
                onNavigation: () => { this.setState({ menuOpen: false }) }
            }
        });

        return (
            <Nav className={ containerClass } { ...otherProps }>
                <NavDropdown
                    id='top-menu-dropdown'
                    title={ title }
                    className={ classes.wideMenu }
                    open={ this.state.menuOpen }
                    onToggle={ isOpen => this.setState({ menuOpen: isOpen }) }
                >
                    <li className={ classes.topMenuContent }>
                        { updatedMenuSections }
                    </li>
                </NavDropdown>
            </Nav>
        );
    }
}

export default Menu;
