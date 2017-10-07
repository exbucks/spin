import React, { PropTypes } from 'react';

import TreeNavigatorBranch from './TreeNavigatorBranch';

import classes from './TreeNavigator.scss';

class TreeNavigator extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        activeEventKey: PropTypes.string,
        currentPath: PropTypes.string
    };

    static defaultProps = {
        currentPath: '',
        activeEventKey: null
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedBranchEventKey: this.props.activeEventKey
        };
    }

    getChildrenWithUpdatedProps() {
        return React.Children.map(this.props.children, (child) => React.cloneElement(child, {
            currentPath: this.props.currentPath,
            onActiveLinkFound: (branchEventKey) => {
                this.setState({
                    selectedBranchEventKey: branchEventKey
                });
            },
            onBranchSelected: (branchEventKey) => {
                this.setState({
                    selectedBranchEventKey: branchEventKey
                });
            },
            collapsed: this.state.selectedBranchEventKey !== child.props.eventKey
        }));
    }

    render() {
        const children = this.getChildrenWithUpdatedProps();

        return (
            <div className={ classes.treeNavigatorRoot }>
                { children }
            </div>
        );
    }
}

export default TreeNavigator;
