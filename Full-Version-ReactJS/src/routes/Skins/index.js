import React from 'react';
import SkinsContainer from './SkinsContainer';
import skinsConfig from './skinConfigs';
import _ from 'underscore';

export default SkinsContainer;

export function getMenuEntries() {
    return _.map(skinsConfig, group => ({
        title: group.title,
        children: _.map(group.items, item => ({
            title: item.title,
            url: `/skins/${item.sidebarSkin}/${item.navbarSkin}/${item.skinColor}`,
            sidebarElement: (
                <small>
                    <i className={`fa fa-circle text-${ item.skinColor }`}></i>
                </small>
            )
        }))
    }));
}
