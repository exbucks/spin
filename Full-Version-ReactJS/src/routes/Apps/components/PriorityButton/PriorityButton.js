import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import { Dropdown, DropdownButton } from 'components';

import { Colors } from 'consts';

const priorityToColor = (priority) => {
  switch (priority) {
    case 'Low':
      return Colors.brandSuccess;
    default:
    case 'Normal':
      return Colors.brandPrimary;
    case 'High':
      return Colors.brandWarning;
    case 'Highest':
      return Colors.brandDanger;
  }
};

const PriorityButton = (props) => (
  <DropdownButton
    bsSize={props.size}
    title={
      <span>
        <i
          className="fa fa-fw fa-circle"
          style={{ color: priorityToColor(props.selectedPriority) }}
        ></i>
        <span className="m-x-1">
          {props.selectedPriority} {!props.shortPriority ? 'Priority' : ''}
        </span>
      </span>
    }
    id="dropdown-task-priorities"
  >
    <Dropdown.Item eventKey="1">
      <i className="fa fa-fw fa-circle m-r-1" style={{ color: priorityToColor('Highest') }}></i>
      Highest Priority
    </Dropdown.Item>
    <Dropdown.Item eventKey="2">
      <i className="fa fa-fw fa-circle m-r-1" style={{ color: priorityToColor('High') }}></i>
      High Priority
    </Dropdown.Item>
    <Dropdown.Item eventKey="3">
      <i className="fa fa-fw fa-circle m-r-1" style={{ color: priorityToColor('Normal') }}></i>
      Normal Priority
    </Dropdown.Item>
    <Dropdown.Item eventKey="4">
      <i className="fa fa-fw fa-circle m-r-1" style={{ color: priorityToColor('Low') }}></i>
      Low Priority
    </Dropdown.Item>
  </DropdownButton>
);

PriorityButton.propTypes = {
  size: PropTypes.string,
  shortPriority: PropTypes.bool,
  selectedPriority: PropTypes.string
};

PriorityButton.defaultProps = {
  size: 'medium',
  shortPriority: false,
  selectedPriority: 'Low'
};

export default PriorityButton;
