import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import {BootstrapTable} from 'react-bootstrap-table';

import classes from './customBootstrapTable.scss';

class CustomBootstrapTable extends React.Component {
    refReceived(ref) {
        if(ref && !this.parentElement) {
            this.parentElement = ReactDOM.findDOMNode(ref);

            if(this.parentElement) {
                if(this.props.asPanel) {
                    this.appearAsPanel();
                }

                if(
                    this.props.bsFiltersSize === 'small' ||
                    this.props.bsFiltersSize === 'sm'
                ) {
                    this.parentElement.classList.add('bootstrap-filters-size-sm')
                }
            }
        }
    }

    appearAsPanel() {
        const toolBar = this.parentElement.querySelector('.react-bs-table-tool-bar');
        const title = toolbar ? toolBar.querySelector('h1,h2,h3,h4,h5') : null;
        const paginator = this.parentElement.querySelector('.react-bs-table-pagination');

        this.parentElement.classList.add('panel', 'panel-default', classes.panelNoBg);
        if(toolBar) toolBar.classList.add('panel-heading');
        if(title) title.classList.add('panel-title');
        if(paginator) paginator.classList.add('panel-footer');
    }

    render() {
        const props = _.omit(this.props, ['asPanel', 'bsFiltersSize']);

        return (
            <BootstrapTable {...props} ref={this.refReceived.bind(this)}/>
        )
    }
}

CustomBootstrapTable.propTypes = {
    ...BootstrapTable.propTypes,
    asPanel: PropTypes.bool,
    bsFiltersSize: PropTypes.string
}

export default CustomBootstrapTable;
