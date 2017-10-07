/*
    Note: This plugin is styled with inline css. It was a pain to change it properly,
    so it has some hacks here. Change carefully.
*/

import React from 'react';
import {Treebeard, decorators, theme} from 'react-treebeard';
import classNames from 'classnames';

import classes from './Treebeard.scss';

import Colors from 'consts/colors';

const customDecorators = {
    ...decorators,
    Header: (props) => {
        const style = props.style;
        const iconType = props.node.children ? ( props.node.toggled? 'folder-open-o' : 'folder-o') : 'file-o';
        const iconClass = `fa fa-${iconType} ${classes.icon} fa-fw`;
        const iconStyle = { marginRight: '5px' };

        const headerClasses = classNames(classes.header, {
            [classes.headerActive]: props.node.active
        })
        return (
            <div style={style.base} className={headerClasses}>
                <div style={style.title}>
                    <i className={`${iconClass} ${props.node.active ? 'text-white' : 'text-muted'}`} style={iconStyle}/>
                    <span className={classes.nodeName}>
                        {props.node.name}
                    </span>
                </div>
            </div>
        );
    },
    Toggle: (props) => {
        return (
            <div style={props.style} className={classes.toggle}>
                <i className={`fa fa-angle-right ${classes.icon}`} />
            </div>
        )
    },
    Loading: (props) => {
        return (
            <div style={props.style} className={classes.loading}>
                loading...
            </div>
        );
    }
}

const modifiedTheme = {...theme};
modifiedTheme.tree.node.activeLink.background = Colors.brandPrimary;

class ExtendedTreeBeard extends React.Component {
    render() {
        const extendedProps = Object.assign({}, {
            decorators: customDecorators,
            style: modifiedTheme
        }, this.props);

        return (
            <div className={classes.container}>
                <Treebeard {...extendedProps} />
            </div>
        );
    }
}

ExtendedTreeBeard.propTypes
    = Object.assign({}, Treebeard.propTypes);

export default ExtendedTreeBeard;
