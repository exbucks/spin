import React from 'react';
import _ from 'underscore';
import {
    Nav,
    NavItem
} from 'components';

const FavoriteApps = (props) => (
    <div {...(_.omit(props, 'appSelected'))}>
        <Nav bsStyle="pills" stacked>
            <NavItem
                onClick={ () => props.appSelected('/start/projects') }
            >
                <i className="fa fa-fw fa-line-chart text-muted m-r-1"></i>
                Overview
            </NavItem>
            <NavItem>
                <i className="fa fa-fw fa-calendar-o text-gray-lighter m-r-1"></i>
                Calendar
            </NavItem>
        </Nav>
    </div>
);

FavoriteApps.propTypes = {
    appSelected: React.PropTypes.func
};

export default FavoriteApps;
