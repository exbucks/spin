import React from 'react';
import ReactInterval from 'react-interval';

import { Charts } from 'components';

const generateInitialData = () => {
    let data = [], time = (new Date()).getTime(), i;

    for (i = -999; i <= 0; i += 1) {
        data.push([
            time + i * 1000,
            Math.round(Math.random() * 100)
        ]);
    }

    return data;
};

const getConfig = (data) => ({
    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title : {
        text : ''
    },

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    series : [{
        name : 'Random data',
        data : data
    }]
});

class DynamicallyUpdatedData extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: generateInitialData()
        };
    }

    generateMoreData() {
        this.setState({
            data: [...this.state.data, {
                x: (new Date()).getTime(),
                y: Math.round(Math.random() * 100)
            }]
        })
    }

    render() {
        return (
            <div>
                <Charts.HighStock dynamicUpdate={ true } config={ getConfig(this.state.data) } />
                <ReactInterval
                    timeout={ 1000 }
                    enabled={ true }
                    callback={ () => this.generateMoreData() }
                />
            </div>
        )
    }
}

export default DynamicallyUpdatedData;
