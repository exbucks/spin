import React, { PropTypes } from 'react';
import _ from 'underscore';
import { Link } from 'react-router';

import routes, {
    findSectionBySlug,
    urlMatcher
} from 'routes/routesStructure';

import classes from './MenuSection.scss';

const MenuSection = props => {
    const {
        slug,
        currentPath,
        onNavigation,
        ...otherProps
    } = props;

    const section = findSectionBySlug(routes, slug);

    return (
        <div className={ classes.menuSection } { ...otherProps }>
            <h5 className={ classes.header }>
                { section.title }
            </h5>
            {
                section.children ? (
                    <ul className={ classes.list }>
                        {
                            _.map(section.children, (item, index) => (
                                item.url && (
                                    <li
                                        key={ index }
                                        className={ urlMatcher(item, currentPath) ? classes.active : '' }
                                    >
                                        <Link to={ item.url } onClick={ () => onNavigaiton() }>
                                            { item.title }
                                        </Link>
                                    </li>
                                )
                            ))
                        }
                    </ul>
                ) : (
                    <ul className={ classes.list }>
                        <li className={ `${urlMatcher(section, currentPath) && 'active'}` }>
                            <Link to={ section.url } onClick={ () => onNavigation() }>
                                { section.title }
                            </Link>
                        </li>
                    </ul>
                )
            }
        </div>
    )
};

MenuSection.propTypes = {
    slug: PropTypes.string.isRequired,
    currentPath: PropTypes.string.isRequired,
    onNavigation: PropTypes.func,
}

MenuSection.defaultProps = {
    onNavigation: () => { }
}

export default MenuSection;
