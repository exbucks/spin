import React from 'react';
import PropTypes from 'prop-types'
import _ from 'underscore';
import { Link } from 'react-router-dom';

import {
    CollapsablePanel
} from 'components';

const Timeline = (props) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title={ props.title }
        footer={
            <p className='text-center m-y-0'>
                <Link to='/pages/timeline'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        onClose={ props.onClose }
    >
        { props.children }
    </CollapsablePanel>
);

Timeline.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func
};

Timeline.defaultProps = {
    onClose: null
};

export default Timeline;
