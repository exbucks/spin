import React from 'react';
import _ from 'underscore';
import classNames from 'classnames';

import {
    Row,
    Col,
    InputGroup,
    Button,
    FormControl,
    Treebeard
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './TreeSortable.scss';

import data from './data';
import * as filters from './filter';

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

class NodeViewer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let json = JSON.stringify(this.props.node, null, 4);
        if(!json){ json = HELP_MSG; }
        return (
            <pre className={classes.code}>
                <code>
                    {json}
                </code>
            </pre>
        );
    }
}

NodeViewer.propTypes = {
    node: React.PropTypes.object
};

class TreeSortableContainer extends RoutedComponent {
    constructor(props) {
        super(props);

        this.state = {data};

        this.onToggle = this.onToggle.bind(this);
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    onToggle(node, toggled){
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }

    onFilterKeyUp(e){
        const filter = e.target.value.trim();
        if(!filter){ return this.setState({data}); }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <InputGroup>
                        <InputGroup.Addon>
                            <i className='fa fa-search'></i>
                        </InputGroup.Addon>
                        <FormControl
                            placeholder="Search the tree..."
                            onKeyUp={this.onFilterKeyUp.bind(this)}
                        />
                    </InputGroup>
                </Col>
                <Col lg={ 6 } className='m-t-2'>
                    <div className={classes.container}>
                        <Treebeard
                            data={this.state.data}
                            onToggle={this.onToggle.bind(this)}
                        />
                    </div>
                </Col>
                <Col lg={ 6 } className='m-t-2'>
                    <NodeViewer node={this.state.cursor}/>
                </Col>
            </Row>
        );
    }
}

export default connect()(TreeSortableContainer);
