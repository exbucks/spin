import React from 'react';
import {Checkbox} from 'components';

import {Typeahead} from 'react-bootstrap-typeahead';

const options = [
    'Warsaw',
    'Kraków',
    'Łódź',
    'Wrocław',
    'Poznań',
    'Gdańsk',
    'Szczecin',
    'Bydgoszcz',
    'Lublin',
    'Katowice',
    'Białystok',
    'Gdynia',
    'Częstochowa',
    'Radom',
    'Sosnowiec',
    'Toruń',
    'Kielce',
    'Gliwice',
    'Zabrze',
    'Bytom',
    'Olsztyn',
    'Bielsko-Biała',
    'Rzeszów',
    'Ruda Śląska',
    'Rybnik',
];

class FilteringExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            caseSensitive: false,
            ignoreDiacritics: true,
        };
    }

    render() {
        const {caseSensitive, ignoreDiacritics} = this.state;

        return (
            <div>
                <Typeahead
                    {...this.state}
                    options={options}
                    placeholder="Cities in Poland..."
                />
                <Checkbox
                    checked={caseSensitive}
                    onChange={e => this.setState({caseSensitive: e.target.checked})}
                >
                    Case-sensitive filtering
                </Checkbox>
                <Checkbox
                    checked={!ignoreDiacritics}
                    onChange={e => this.setState({ignoreDiacritics: !e.target.checked})}
                >
                    Don't ignore diacritical marks
                </Checkbox>
            </div>
        );
    }
}

export default FilteringExample;
