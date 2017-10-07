import React, { PropTypes } from 'react';
import classNames from 'classnames';

import {
    OverlayContent
} from './../';

class OverlayContentParent extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }
    
    render() {
        const { className, children, style, ...otherProps } = this.props;

        //const builtChildren = this.buildChildren(children);
        const rightSidebarClass = classNames(className, 'extra-content-parent');
        const mergedStyle = {
            ...style,
            position: 'relative',
            overflowX: 'hidden'
        };

        return (
            <div
                className={ rightSidebarClass }
                { ...otherProps }
                //ref='parentElement'
                style={ mergedStyle }
            >
                { children }
            </div>
        );
    }
}

export default OverlayContentParent;
