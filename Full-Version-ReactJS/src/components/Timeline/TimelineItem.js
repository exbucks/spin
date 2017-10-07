import React, { PropTypes } from 'react';
import uid from 'node-uuid';
import { Row, Col, Timeline } from 'components';
import _ from 'underscore';
import classNames from 'classnames';
import moment from 'moment';

import { Colors } from './../../consts';

import classes from './Timeline.scss';

const findItemOfType = (children, type) => {
    let foundItem = null;

    React.Children.forEach(children, (child) => {
        if(!foundItem &&  !!child && child.type === type) {
            foundItem = child;
        }
    });

    return foundItem;
}

const reformatDate = (date, format) => {
    const formattedDate = moment(date).format(format);
    const dateParts = formattedDate.split('\n');

    return _.map(dateParts, (part, index) => (
        index > 0 ? (<span key={ index }><br/>{ part }</span>) :
            (<span key={ index }>{ part }</span>)
    ));
}

const TimelineItem = (props) => {
    const headerItem = findItemOfType(props.children, Timeline.ItemHeader);
    const bodyItem = findItemOfType(props.children, Timeline.ItemBody);
    const isVertical = (props.itemAlignment === 'vertical' ||
        props.itemAlignment === 'vertical-inner-date');
    const otherProps = _.omit(props, _.keys(TimelineItem.propTypes));
    const timelineItemClass = classNames(props.className, classes.timelineItem);

    return (
        <div className={ timelineItemClass } { ...otherProps }>
            <div className={ classes.timelineIcon } style={ {color: props.color} }>
                { props.icon }
            </div>
            <Row className={ classes.timelineItemInner }>
                <Col lg={ !isVertical ? 4 : 12 }>
                    { headerItem }
                </Col>
                {
                    ( props.itemAlignment === 'vertical-inner-date' ) ?
                        (
                            <Col lg={ 12 } className={ classes.timelineItemTimeVertical }>
                                { reformatDate(props.date, props.dateFormat) }
                            </Col>
                        ) : null
                }
                <Col lg={ !isVertical ? 6 : 12 }>
                    { bodyItem }
                </Col>
                {
                    (() => {
                        if(props.date) {
                            switch(props.itemAlignment) {
                                case 'horizontal':
                                    return (
                                        <Col lg={ 2 } className={ classes.timelineItemTime }>
                                            { reformatDate(props.date, props.dateFormat) }
                                        </Col>
                                    );
                                case 'vertical':
                                    return (
                                        <div className={ classes.timelineItemTime }>
                                            { reformatDate(props.date, props.dateFormat) }
                                        </div>
                                    );
                            }
                        }
                    })()
                }
            </Row>
        </div>

    );
}

TimelineItem.defaultProps = {
    date: '',
    dateFormat: 'DD MMM YYYY[\n]h:mm a',
    color: Colors.brandPrimary,
    icon: (<i className='fa fa-circle-o'></i>),
    itemAlignment: 'horizontal',
    className: ''
}

TimelineItem.propTypes = {
    children: PropTypes.node.isRequired,
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]),
    dateFormat: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.node,
    itemAlignment: PropTypes.string,
    className: PropTypes.string
}

export default TimelineItem;
