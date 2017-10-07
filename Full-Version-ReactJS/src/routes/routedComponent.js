import * as redux from 'react-redux';
import React from 'react';
import {
    setCurrentPageSettings,
    setCurrentPageSettingsLiteral,
    setLayoutSettingsSafe
} from 'layouts/DefaultLayout/modules/layout';
import _ from 'underscore';
import autocast from 'autocast';

export class RoutedComponent extends React.Component{
    getLayoutOptions() { return {} };

    componentDidMount() {
        const options = this.getLayoutOptions();

        if(this.props.setCurrentPageSettings) {
            this.props.setCurrentPageSettings(options);
        }

        // Apply the layout settings from the ones provided in the URL
        if(this.props.location.query) {
            const urlSettings = _.mapObject(this.props.location.query,
                val => autocast(val));
            this.props.setLayoutSettingsSafe(urlSettings);
        }

        // Go to Top
        window.scrollTo(0, 0);
    }
}

// Attach restoreSettings action to the Component
export function connect(mapStateToProps = () => ({}), mapActionCreators ={}) {
    const extendedActionCreators = Object.assign([], mapActionCreators, {
        setCurrentPageSettings,
        setCurrentPageSettingsLiteral,
        setLayoutSettingsSafe
    });
    return redux.connect(mapStateToProps, extendedActionCreators);
};
