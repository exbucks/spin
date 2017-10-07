import React, { PropTypes } from 'react';
import {
    Tabs as BootstrapTabs
} from 'react-bootstrap';
import classNames from 'classnames';

import classes from './Tabs.scss';

/*
    Extends ReactBootstrap Tabs with style bsStyle prop which can be
    highlght(tabbable-line) or default
*/
const Tabs = (props) => {
    const { className, children, bsStyle, ...otherProps } = props;

    const tabsClass = classNames(className, {
        'tabbable-line': bsStyle === 'highlight',
        'tab-color-panel-bg': bsStyle === 'panel'
    }, classes.tabsRoot);

    return (
        <BootstrapTabs {...otherProps} className={ tabsClass }>
            { children }
        </BootstrapTabs>
    )
}

Tabs.propTypes = {
    bsStyle: PropTypes.string,
    children: PropTypes.node.isRequired
}

Tabs.defaultProps = {
    bsStyle: 'default'
}

export default Tabs;
