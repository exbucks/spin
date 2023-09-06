import React from 'react';
import { Link } from 'react-router-dom';

import {
    Panel,
    Form,
    Button,
} from 'components';

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
                <Form.Check>
                    Notify me
                </Form.Check>
            </div>

            <div className='m-t-3'>
                <h5>Private Message</h5>
                <p>
                    Do you want notify you by email whenever contacts send you a message?
                </p>
                <Form.Check type="radio" name='privateMessagesAccept' defaultChecked inline>
                    Yes
                </Form.Check>
                <Form.Check type="radio" name='privateMessagesAccept' inline>
                    No
                </Form.Check>
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
                <Form.Check defaultChecked inline>
                    Someone Comments
                </Form.Check>
                <Form.Check defaultChecked inline>
                    Someone Mentions
                </Form.Check>
                <Form.Check defaultChecked inline>
                    Anyone Follows Me
                </Form.Check>
            </div>
        </Panel>
    </div>
);

export default SettingsEdit;
