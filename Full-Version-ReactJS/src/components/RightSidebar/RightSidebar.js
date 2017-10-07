import React, { PropTypes } from 'react';
import classNames from 'classnames';
import {
    Grid,
    Row
} from 'react-bootstrap';

import {
    AffixWrap,
    ScrollBarContainer
} from './../';

import classes from './RightSidebar.scss';

class RightSidebar extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        affixOffset: PropTypes.number,
        children: PropTypes.node.isRequired
    }

    static defaultProps = {
        active: false,
        affixOffset: 0
    }

    render() {
        const {
            active,
            affixOffset,
            children,
            className,
            ...otherProps
        } = this.props;

        const parentClasses = classNames({
            active: active
        }, 'right-sidebar', className);

        return (
            <AffixWrap
                offset={ affixOffset }
                affixAdditionalClass={ classes.affixTop }
                affixTopAdditionalClass={ classes.affix }
            >
                <div className={ parentClasses }>
                    <Grid fluid>
                        <Row>
                            <ScrollBarContainer
                                noXScrollBar
                                dynamicChildren
                                className={ classes.contentContainer }
                            >
                                { children }
                            </ScrollBarContainer>
                        </Row>
                    </Grid>
                </div>
            </AffixWrap>
        );
    }
}

export default RightSidebar;
