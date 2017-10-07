import React from 'react';
import { Link } from 'react-router';

import {
    Panel,
    Form,
    FormGroup,
    Col,
    Checkbox,
    FormControl,
    ControlLabel,
    Radio,
    Button,
    Divider,
    Label
} from 'components';

import { Colors } from 'consts';

import classes from './../../ProfileEdit.scss';

const SettingsEdit = () => (
    <div>
        <Panel
            header={
                <h4 className='panel-title'>
                    Settings Edit
                </h4>
            }
            footer={
                <div>
                    <i className="fa fa-fw fa-support m-r-1"></i>
                    <span>
                         If you have trouble with the configuration, you can contact us.
                    </span>
                    { ' ' }
                    <Link to='/apps/faq'>
                        We can help.
                    </Link>
                </div>
            }
        >
            <div>
                <h5>Monthly Newsletter</h5>
                <p>
                    Do you want receive our monthly newsletter about new products and offers?
                </p>
                <Checkbox>
                    Notify me
                </Checkbox>
            </div>

            <div className='m-t-3'>
                <h5>Private Message</h5>
                <p>
                    Do you want notify you by email whenever contacts send you a message?
                </p>
                <Radio name='privateMessagesAccept' defaultChecked inline>
                    Yes
                </Radio>
                <Radio name='privateMessagesAccept' inline>
                    No
                </Radio>
            </div>

            <div className='m-t-3'>
                <h5>Publication Email Subscriptions</h5>
                <p>
                    Control the emails that publications send to you.
                </p>
                <Button>
                    Manage Publications
                </Button>
            </div>

            <div className='m-t-3'>
                <h5>Activity Notifications</h5>
                <p>
                    Notify me via email when
                </p>
                <Checkbox defaultChecked inline>
                    Someone Comments
                </Checkbox>
                <Checkbox defaultChecked inline>
                    Someone Mentions
                </Checkbox>
                <Checkbox defaultChecked inline>
                    Anyone Follows Me
                </Checkbox>
            </div>
        </Panel>
    </div>
);

export default SettingsEdit;
