import React from 'react';
import _ from 'underscore';
import uid from 'node-uuid';
import classNames from 'classnames';

import {
    Nav,
    NavItem,
    Badge
} from 'components';

import classes from './SideNav.scss';

const SideNav = (props) => {
    const { items, className, folderSelected } = props;
    const otherProps = _.omit(props, 'items', 'className', 'folderSelected');

    const inboxClass = classNames(classes.foldersList, className);

    return (
        <Nav
            stacked
            bsStyle="pills"
            className={ classes.foldersList }
            activeKey={ 0 }
            { ...otherProps }
        >
            {
                _.map(items, (folder, index) => (
                    <NavItem
                        key={ index }
                        className={ classes.flexSpaceBetween }
                        eventKey={ index }
                        onClick={ () => folderSelected() }
                    >
                        <span>
                            {
                                folder.icon && (
                                    <span className={`m-r-1 ${ index > 0 && 'text-muted'}`}>
                                        { folder.icon }
                                    </span>
                                )
                            }
                            <span>{ folder.title }</span>
                        </span>
                        <Badge>{ folder.count }</Badge>
                    </NavItem>
                ))
            }
        </Nav>
    );
};

SideNav.propTypes = {
    items: React.PropTypes.array.isRequired,
    folderSelected: React.PropTypes.func
}

SideNav.defaultProps = {
    folderSelected: () => { }
}

export default SideNav;
