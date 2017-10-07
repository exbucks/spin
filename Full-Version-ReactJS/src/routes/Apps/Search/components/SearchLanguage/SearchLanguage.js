import React from 'react';
import {
    Checkbox,
    Divider
} from 'components';

const SearchLanguage = () => (
    <div>
        <Divider className='m-b-1'>
            Language
        </Divider>
        <div>
            <Checkbox defaultChecked>
                English
            </Checkbox>
            <Checkbox disabled>
                French
            </Checkbox>
            <Checkbox>
                Spanish
            </Checkbox>
        </div>
    </div>
);

export default SearchLanguage;
