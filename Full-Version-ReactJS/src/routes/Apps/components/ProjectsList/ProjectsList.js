import React from 'react';
import _ from 'underscore';
import uid from 'node-uuid';
import { browserHistory } from 'react-router';

import {
    Nav,
    NavItem,
    Badge
} from 'components';

import classes from './ProjectsList.scss';

const ProjectsList = (props) => {
    const { items, projectSelected } = props;
    const otherProps = _.omit(props, 'items', 'projectSelected');

    return (
        <div { ...otherProps }>
            <Nav
                bsStyle="pills"
                stacked
                className={ classes.projectsNav }
                activeKey={ 0 }
            >
                {
                    _.map(items, (project, index) => (
                        <NavItem
                            eventKey={ index }
                            className={ classes.flexSpaceBetween }
                            key={ index}
                            onClick={ () => { projectSelected() } }
                        >
                            <div>
                                <i className="fa fa-fw fa-star-o
                                    text-gray-lighter m-r-1"></i>
                                { project.Name }
                            </div>
                            <Badge>
                                { project.NotificationsCount }
                            </Badge>
                        </NavItem>
                    ))
                }
                <NavItem>
                    <i className="fa fa-fw fa-plus text-muted m-r-1"></i>
                    <span className='text-muted'>Add New Project</span>
                </NavItem>
            </Nav>
        </div>
    )
}

ProjectsList.propTypes = {
    items: React.PropTypes.array.isRequired,
    projectSelected: React.PropTypes.func
}

ProjectsList.defaultProps = {
    projectSelected: () => { }
}

export default ProjectsList;
