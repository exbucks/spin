import React from 'react';
import Timeline from 'routes/Pages/Timeline/components/TimelineExample_VerticalInnerDate';

import classes from './RightSidebar.scss';

export default () => (
    <div>
        <h6 className={ classes.sectionTitle }>
            Timeline
        </h6>
        <Timeline />
    </div>
);
