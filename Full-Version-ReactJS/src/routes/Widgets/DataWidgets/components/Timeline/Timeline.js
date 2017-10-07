import React from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';
import { Link } from 'react-router';

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
    children: React.PropTypes.element.isRequired,
    title: React.PropTypes.string.isRequired,
    onClose: React.PropTypes.func
};

Timeline.defaultProps = {
    onClose: null
};

export default Timeline;
