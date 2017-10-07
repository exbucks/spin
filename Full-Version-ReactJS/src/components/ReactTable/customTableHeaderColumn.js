import React from 'react';
import {TableHeaderColumn} from 'react-bootstrap-table';

class CustomTableHeaderColumn extends React.Component {
    renderCaret(direction) {
        return <i className={`fa fa-fw fa-sort${direction ? '-' + direction:''}`}></i>
    }

    render() {
        var props = !this.props.renderCaret ? {
            ...this.props,
            caretRender: this.props.dataSort ? this.renderCaret : () => ''
        } : this.props;

        return (
            <TableHeaderColumn {...props} />
        );
    }
}

CustomTableHeaderColumn.propTypes = {
    ...TableHeaderColumn.propTypes
}

export default CustomTableHeaderColumn;
