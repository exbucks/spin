import React, { PropTypes } from 'react';
import classNames from 'classnames';

import {
    Panel,
    Media,
    AvatarImage
} from 'components';

import classes from './../../nestable.scss';

class Person extends React.Component {
    static propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        avatarUrl: PropTypes.string,
        job: PropTypes.string,
        handle: PropTypes.node,
        icon: PropTypes.node,
        className: PropTypes.string
    }

    static defaultProps = {
        handle: (<i className='fa fa-ellipsis-v fa-fw'></i>)
    }

    render() {
        const {
            firstName,
            lastName,
            avatarUrl,
            handle,
            icon,
            job,
            className
        } = this.props;
        return (
            <Panel className={classNames(classes['person'], className)}>
                <div className={classes['person__actions']}>
                    { handle }
                    { icon }
                </div>
                <Media className={classes['person__info']}>
                    <Media.Left align='middle'>
                        <AvatarImage src={ avatarUrl } />
                    </Media.Left>
                    <Media.Body>
                        <p className='m-y-0 text-white'>
                            { `${firstName} ${lastName}`}
                        </p>
                        <p className='m-y-0'>
                            { job }
                        </p>
                    </Media.Body>
                </Media>
            </Panel>
        );
    }
}

export default Person;
