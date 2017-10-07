import React from 'react';
import classes from './RightSidebar.scss';
import { Checkbox } from 'components';

export default () => (
    <div>
        <h6 className={ classes.sectionTitle }>
            Settings
        </h6>
        <div>
            <div className={ `${classes.flexSpaceBetween} m-b-1` }>
                <span className='text-white'>Notifications</span>
                <Checkbox className='m-b-0' />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
        <div>
            <div className={ `${classes.flexSpaceBetween} m-b-1` }>
                <span className='text-white'>Activity</span>
                <Checkbox className='m-b-0' />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
        <div>
            <div className={ `${classes.flexSpaceBetween} m-b-1` }>
                <span className='text-white'>Statisticts</span>
                <Checkbox className='m-b-0' />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
        <div>
            <div className={ `${classes.flexSpaceBetween} m-b-1` }>
                <span className='text-white'>Responsive Settings</span>
                <Checkbox className='m-b-0' />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
    </div>
);
