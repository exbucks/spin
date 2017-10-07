import _ from 'underscore';

import SidebarsContainer, { sidebars } from './SidebarsContainer';

export default SidebarsContainer;

export function getMenuEntries() {
    return _.map(sidebars, sidebar => ({
        title: sidebar.name,
        url: `/sidebars/${sidebar.key}`
    }));
}
