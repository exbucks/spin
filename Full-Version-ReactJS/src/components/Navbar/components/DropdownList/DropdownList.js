import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import classNames from 'classnames';

import {
    ListGroup,
    ScrollBarContainer
} from 'components';

import classes from './DropdownList.scss';

const adjustInnerListGroup = listGroup => (
    React.cloneElement(listGroup, {
        className: classNames(classes.adjustedListGroup, listGroup.props.className)
    })
);

const DropdownList = props => {
    const otherProps = _.omit(props, [...(_.keys(DropdownList.propTypes)), 'className']);

    const dropdownListClass = classNames(classes.dropdownList, props.className, {
        'active': props.active
    });

    const child = React.Children.only(props.children);
    const childToRender = (child && child.type === ListGroup) ? adjustInnerListGroup(child) : child;

    return (
        <div
            className={ dropdownListClass }
            style={ { width: `${parseInt(props.width)}px` } }
            { ...otherProps }
        >
            {
                props.header && (
                    <div className={ classes.dropdownListHeader }>
                        { props.header }
                    </div>
                )
            }
            <ScrollBarContainer style={ { maxHeight: `${parseInt(props.listHeight)}px` } } className={ classes.dropdownListContent }>
                { childToRender }
            </ScrollBarContainer>
            {
                props.footer && (
                    <div className={ classes.dropdownListFooter }>
                        {
                            props.footerUrl ? (
                                <Link to={ props.footerUrl } className={ classes.dropdownListFooterLink }>
                                    { props.footer }
                                </Link>
                            ) : (
                                <div>
                                    { props.footer }
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

DropdownList.propTypes = {
    header: PropTypes.node,
    footer: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    footerUrl: PropTypes.string,
    children: PropTypes.node.isRequired,
    listHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    active: PropTypes.bool
};

DropdownList.defaultProps = {
    listHeight: 250,
    width: 350
};

export default DropdownList;
