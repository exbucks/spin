import React from 'react';
import {
    Label,
    Badge
} from 'components';

import uuid from 'node-uuid';
import _ from 'underscore';

import { getMenuEntries as getSkinMenuEntries } from './Skins';
import { getMenuEntries as getSidebarsMenuEntries } from './Sidebars';

const CONFIG = [
    {
        slug: 'start',
        title: 'Start',
        icon: 'fa fa-home fa-lg',
        children: [
            {
                title: 'Monitor',
                url: '/start/monitor'
            },
            {
                title: 'Exchange & Trading',
                url: '/start/exchange-and-trading'
            },
            {
                title: 'E-Commerce',
                url: '/start/e-commerce'
            },
            {
                title: 'Performance',
                url: '/start/performance'
            },
            {
                title: 'Financial',
                url: '/start/financial'
            },
            {
                title: 'System',
                url: '/start/system'
            },
            {
                title: 'Team Activity',
                url: '/start/team-activity'
            },
            {
                title: 'Stock',
                url: '/start/stock'
            },
            {
                title: 'Analytics',
                url: '/start/analytics'
            },
            {
                title: 'Projects',
                url: '/start/projects'
            }
        ]
    },
    {
        slug: 'widgets',
        title: 'Widgets',
        icon: 'fa fa-th fa-lg',
        children: [
            {
                title: 'Data Widgets',
                url: '/widgets/data-widgets'
            },
            {
                title: 'Graphs Widgets',
                url: '/widgets/graphs-widgets'
            }
        ],
        sidebarElement: (<Label bsStyle='primary' outline className='pull-right'>New</Label>)
    },
    {
        slug: 'layouts',
        title: 'Layouts',
        icon: 'fa fa-columns fa-lg',
        children: [
            {
                title: 'Default Page',
                url: '/layouts/default'
            },
            {
                title: 'Default Fixed',
                url: '/layouts/fixed'
            },
            {
                title: 'Default w/ Navbar',
                url: '/layouts/without-navbar'
            },
            {
                title: 'Default w/ Footer',
                url: '/layouts/without-footer'
            },
            {
                title: 'Default footer fixed',
                url: '/layouts/footer-fixed'
            },
            {
                title: 'Navbar',
                url: '/layouts/navbar'
            },
            {
                title: 'Navbar Fixed',
                url: '/layouts/navbar-fixed'
            },
            {
                title: 'Navbar Container',
                url: '/layouts/navbar-container'
            },
            {
                title: 'Default Full Width',
                url: '/layouts/default-full-width'
            },
            {
                title: 'Empty Page',
                url: '/layouts/empty-page'
            },
            {
                title: 'Boxed',
                url: '/layouts/boxed'
            }
        ]
    },
    {
        slug: 'sidebars',
        title: 'Sidebars',
        icon: 'fa fa-fw fa-lg fa-bars',
        children: getSidebarsMenuEntries()
    },
    {
        slug: 'skins',
        title: 'Skins',
        icon: 'fa fa-google-wallet fa-lg',
        children: getSkinMenuEntries(),
        sidebarElement: (<Badge bsStyle='info' outline className='pull-right'>42</Badge>)
    },
    {
        slug: 'interface',
        title: 'Interface',
        icon: 'fa fa-toggle-on fa-lg',
        children: [
            {
                title: 'Colors',
                url: '/interface/colors'
            },
            {
                title: 'Typography',
                url: '/interface/typography'
            },
            {
                title: 'Buttons',
                url: '/interface/buttons'
            },
            {
                title: 'Paginations & Pager',
                url: '/interface/paginations-and-pager'
            },
            {
                title: 'Images & Thumbs',
                url: '/interface/images-and-thumbs'
            },
            {
                title: 'Avatars',
                url: '/interface/avatars'
            },
            {
                title: 'Navbars',
                url: '/interface/navbars'
            },
            {
                title: 'Alerts',
                url: '/interface/alerts'
            },
            {
                title: 'Modals',
                url: '/interface/modals'
            },
            {
                title: 'Progress Bars',
                url: '/interface/progress-bars'
            },
            {
                title: 'Badges & Labels',
                url: '/interface/badges-and-labels'
            },
            {
                title: 'Breadcrumbs',
                url: '/interface/breadcrumbs'
            },
            {
                title: 'Tabs & Pills',
                url: '/interface/tabs-and-pills'
            },
            {
                title: 'Tooltips & Popovers',
                url: '/interface/tooltips-and-popovers'
            },
            {
                title: 'List Groups',
                url: '/interface/list-groups'
            },
            {
                title: 'Drag And Drop',
                url: '/interface/drag-and-drop'
            },
            {
                title: 'Notifications',
                url: '/interface/notifications'
            },
        ]
    },
    {
        slug: 'graphs',
        title: 'Graphs',
        icon: 'fa fa-pie-chart fa-lg',
        children: [
            {
                title: 'Highcharts',
                url: '/graphs/highcharts'
            },
            {
                title: 'Highstock',
                url: '/graphs/highstock/general',
                matcher: /\/graphs\/highstock(\/.*)?/
            },
            {
                title: 'Sparklines',
                url: '/graphs/sparklines'
            },
            {
                title: 'Chartist',
                url: '/graphs/chartist'
            },
            {
                title: 'Recharts',
                url: '/graphs/recharts'
            }
        ]
    },
    {
        slug: 'tables',
        title: 'Tables',
        icon: 'fa fa-trello fa-lg',
        children: [
            {
                title: 'Pricing Tables',
                url: '/tables/pricing-tables'
            },
            {
                title: 'Tables',
                url: '/tables/tables'
            },
            {
                title: 'React Tables',
                url: '/tables/react-tables'
            }
        ]
    },
    {
        slug: 'forms',
        title: 'Forms',
        icon: 'fa fa-check-square-o fa-lg',
        children: [
            {
                title: 'Forms',
                url: '/forms/forms'
            },
            {
                title: 'Forms Layouts',
                url: '/forms/forms-layouts'
            },
            {
                title: 'Selects',
                url: '/forms/selects'
            },
            {
                title: 'Sliders',
                url: '/forms/sliders'
            },
            /*
            {
                title: 'Date Range Picker',
                url: '/forms/date-range-picker-adv/drp-default',
                matcher: /\/forms\/date-range-picker(\/.*)?/
            },
            */
            {
                title: 'Date Range Picker',
                url: '/forms/date-range-picker'
            },
            {
                title: 'Dual List',
                url: '/forms/dual-list'
            },
            {
                title: 'Typeahead',
                url: '/forms/typeahead'
            },
            {
                title: 'Nestable',
                url: '/forms/nestable'
            },
            {
                title: 'Dropzone Uploader',
                url: '/forms/dropzone-uploader',
            },
            {
                title: 'React Color',
                url: '/forms/react-color'
            }
        ]
    },
    {
        slug: 'grids',
        title: 'Grids',
        icon: 'fa fa-lg fa-th-list fa-fw',
        url: '/grids'
    },
    {
        slug: 'pages',
        title: 'Pages',
        icon: 'fa fa-clone fa-lg fa-fw',
        children: [
            {
                title: 'Register',
                url: '/pages/register'
            },
            {
                title: 'Login',
                url: '/pages/login'
            },
            {
                title: 'Forgot Password',
                url: '/pages/forgot-password'
            },
            {
                title: 'Lock Screen',
                url: '/pages/lock-screen'
            },
            {
                title: 'Error 404',
                url: '/pages/not-found'
            },
            {
                title: 'Invoice',
                url: '/pages/invoice'
            },
            {
                title: 'Timeline',
                url: '/pages/timeline'
            },
            {
                title: 'Editor',
                url: '/pages/editor'
            },
            {
                title: 'Tree Sortable',
                url: '/pages/tree-sortable'
            },
            {
                title: 'Wizard',
                url: '/pages/wizard'
            }
        ]
    },
    {
        slug: 'apps',
        title: 'Apps',
        icon: 'fa fa-suitcase fa-lg fa-fw',
        children: [
            {
                slug: 'projects',
                title: 'Projects',
                children: [
                    {
                        title: 'Projects List',
                        url: '/apps/projects/list'
                    },
                    {
                        title: 'Projects Grid',
                        url: '/apps/projects/grid'
                    }
                ]
            },
            {
                slug: 'tasks',
                title: 'Tasks',
                children: [
                    {
                        title: 'Tasks List',
                        url: '/apps/tasks/list'
                    },
                    {
                        title: 'Tasks Grid',
                        url: '/apps/tasks/grid'
                    },
                    {
                        title: 'Task Details',
                        url: '/apps/task-details'
                    }
                ]
            },
            {
                slug: 'files-manager',
                title: 'Files Manager',
                children: [
                    {
                        title: 'Files List',
                        url: '/apps/files-manager/files-list'
                    },
                    {
                        title: 'Files Grid',
                        url: '/apps/files-manager/files-grid'
                    }
                ]
            },
            {
                slug: 'search',
                title: 'Search',
                children: [
                    {
                        title: 'Search Results',
                        url: '/apps/search/search-results'
                    },
                    {
                        title: 'Image Results',
                        url: '/apps/search/image-results'
                    },
                    {
                        title: 'Video Results',
                        url: '/apps/search/video-results'
                    },
                    {
                        title: 'User Results',
                        url: '/apps/search/user-results'
                    }
                ]
            },
            {
                slug: 'faq',
                title: 'FAQ',
                url: '/apps/faq'
            },
            {
                slug: 'users',
                title: 'Users',
                children: [
                    {
                        title: 'Users List',
                        url: '/apps/users/list'
                    },
                    {
                        title: 'Users Grid',
                        url: '/apps/users/grid'
                    }
                ]
            },
            {
                slug: 'chat',
                title: 'Chat',
                url: '/apps/chat'
            },
            {
                slug: 'mailbox',
                title: 'Mailbox',
                children: [
                    {
                        title: 'Inbox',
                        url: '/apps/inbox'
                    },
                    {
                        title: 'Email Details',
                        url: '/apps/email-details'
                    },
                    {
                        title: 'New Email',
                        url: '/apps/new-email'
                    }
                ]
            },
            {
                title: 'Clients',
                url: '/apps/clients'
            },
            {
                slug: 'user-profile',
                title: 'User Profile',
                children: [
                    {
                        title: 'Profile Details',
                        url: '/apps/profile-details'
                    },
                    {
                        title: 'Profile Edit',
                        url: '/apps/user-profile/edit/profile'
                    },
                    {
                        title: 'Account Edit',
                        url: '/apps/user-profile/edit/account'
                    },
                    {
                        title: 'Billing Edit',
                        url: '/apps/user-profile/edit/billing'
                    },
                    {
                        title: 'Settings Edit',
                        url: '/apps/user-profile/edit/settings'
                    },
                    {
                        title: 'Sessions Edit',
                        url: '/apps/user-profile/edit/sessions'
                    }
                ]
            }
        ]
    },
    {
        slug: 'icons',
        title: 'Icons',
        icon: 'fa fa-star fa-lg fa-fw',
        children: [
            {
                title: 'Font Awesome',
                url: '/icon-set/font-awesome'
            },
            {
                title: 'GlyphIcons',
                url: '/icon-set/glyphicons'
            }
        ]
    },
    {
        slug: 'panels',
        title: 'Panels',
        icon: 'fa fa-columns fa-lg',
        url: '/panels',
        sidebarElement: (<Badge bsStyle='custom' outline className='pull-right'>3</Badge>)
    },
    {
        title: 'Docs',
        external: true,
        newTab: true,
        icon: 'fa fa-file-o fa-lg',
        url: '//spin.webkom.co/docs/docs-react.html'
    },
    {
        title: 'Switch to jQuery',
        external: true,
        icon: 'fa fa-html5 fa-lg',
        url: '//spin.webkom.co'
    }
];

// Add keys to the sidebar definitions
const assignKeys = (input, level = 0) => _.map(input, (def) => {
    const newObj = { key: uuid.v4(), subMenuLevel: level };
    if(def.children) {
        newObj.children = assignKeys(def.children, level + 1);
    }
    return Object.assign({}, def, newObj);
});

export function urlMatcher(node, url) {
    if(node.matcher && !!url.match(node.matcher)) {
        return true;
    }

    return node.url === url;
}

export function findActiveNodes(nodes, url) {
    const activeNodes = [];

    const nodeIterator = (nodes) => {
        let found = false;

        nodes.forEach((node) => {
            if (node.children && nodeIterator(node.children)) {
                activeNodes.push(node);
                found = true;
            } else if (node.url && urlMatcher(node, url)) {
                activeNodes.push(node);
                found = true;
            }
        });

        return found;
    };

    nodeIterator(nodes);

    return activeNodes;
};

export function findSectionBySlug(nodes, slugName) {
    // Returns flatten sections
    const getSections = function*(nodesTree) {
        for(let node of nodesTree) {
            yield node;

            if(node.children) {
                for(let section of getSections(node.children)) {
                    yield section;
                }
            }
        }
    };

    const sections = Array.from(getSections(nodes));

    return _.findWhere(sections, { slug: slugName });
}

export default assignKeys(CONFIG);
