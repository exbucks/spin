import React, { PropTypes } from 'react';
import _ from 'underscore';
import classNames from 'classnames';

import {
    Col as BootstrapCol
} from 'components';

import classes from './../Float.scss';

class Col extends React.Component {
    static propTypes = {
        active: PropTypes.bool,

        lg: PropTypes.number,
        md: PropTypes.number,
        sm: PropTypes.number,
        xs: PropTypes.number,

        lgH: PropTypes.number,
        mdH: PropTypes.number,
        smH: PropTypes.number,
        xsH: PropTypes.number,

        lgX: PropTypes.number,
        mdX: PropTypes.number,
        smX: PropTypes.number,
        xsX: PropTypes.number,

        lgY: PropTypes.number,
        mdY: PropTypes.number,
        smY: PropTypes.number,
        xsY: PropTypes.number,

        children: PropTypes.node
    }

    static defaultProps = {
        active: true
    }

    render() {
        const { active, children, className } = this.props;
        const bsColumnProps = _.pick(this.props, ['lg', 'md', 'sm', 'xs']);
        const otherProps = _.omit(this.props, [..._.keys(Col.propTypes),
            'minW', 'maxW', 'minH', 'moved', 'static', 'isDraggable', 'isResizable']);

        const floatColClasses = classNames(className, classes.floatCol);

        return (
            active ? (
                <div { ...otherProps } className={ floatColClasses }>
                    { children }
                </div>
            ) : (
                <BootstrapCol { ...(_.extend(bsColumnProps, otherProps)) } className={ className }>
                    { children }
                </BootstrapCol>
            )
        );
    }
}

export default Col;
