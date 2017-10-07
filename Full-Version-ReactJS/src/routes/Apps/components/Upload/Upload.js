import React from 'react';

import {
    Panel
} from 'components';

import classes from './Upload.scss';

const Upload = () => (
    <Panel className={`text-center ${classes.uploadPanel}`}>
        <p>
            <i className="fa fa-3x fa-user text-gray-light m-y-2"></i>
        </p>
        <h5>Upload Your Avatar</h5>
        <p>
            Drag a file here or <a href="javascript:;"> browse</a> for a file to upload.
        </p>
        <p className='small'>
            JPG, GIF, PNG, MOV and AVI. Please choose a files under 2GB to upload. File sizes are 400 x 300px.
        </p>
    </Panel>
);

export default Upload;
