import _ from 'underscore';

// ------------------------------------
// Variables
// ------------------------------------
let currentPageLayoutSettings = {};
const changeCallbacks = [];
// ------------------------------------
// Constants
// ------------------------------------
export const ACTION_OPTIONS_TOGGLE = 'ACTION_OPTIONS_TOGGLE';
export const ACTION_RESTORE_SETTINGS = 'ACTION_RESTORE_SETTINGS';
export const ACTION_SET_LAYOUT_SETTINGS_SAFE = 'ACTION_SET_LAYOUT_SETTINGS_SAFE';
export const ACTION_SET_CURRENT_PAGE_SETTINGS = 'ACTION_SET_CURRENT_PAGE_SETTINGS';
export const ACTION_SET_CURRENT_PAGE_SETTINGS_LITERAL = 'ACTION_SET_CURRENT_PAGE_SETTINGS_LITERAL';
export const ACTION_TOGGLE_NAVBAR = 'ACTION_TOGGLE_NAVBAR';
export const ACTION_TOGGLE_NAVBAR_FIXED = 'ACTION_TOGGLE_NAVBAR_FIXED';
export const ACTION_TOGGLE_NAVBAR_EXPANDED = 'ACTION_TOGGLE_NAVBAR_OPEN';
export const ACTION_CHANGE_SIDEBAR_ADDON = 'ACTION_CHANGE_SIDEBAR_ADDON';
export const ACTION_TOGGLE_SIDEBAR = 'ACTION_TOGGLE_SIDEBAR';
export const ACTION_TOGGLE_SIDEBAR_OPENED = 'ACTION_TOGGLE_SIDEBAR_OPENED';
export const ACTION_TOGGLE_SIDEBAR_FIXED = 'ACTION_TOGGLE_SIDEBAR_FIXED';
export const ACTION_TOGGLE_SIDEBAR_ASIDE = 'ACTION_TOGGLE_SIDEBAR_ASIDE';
export const ACTION_SET_SIDEBAR_STYLE = 'ACTION_SET_SIDEBAR_TYPE';
export const ACTION_TOGGLE_FOOTER = 'ACTION_TOGGLE_FOOTER';
export const ACTION_TOGGLE_FOOTER_FIXED = 'ACTION_TOGGLE_FOOTER_FIXED';
export const ACTION_SET_CONTENT_VIEW = 'ACTION_SET_CONTENT_VIEW';
export const ACTION_TOGGLE_RSIDEBAR = 'ACTION_TOGGLE_RSIDEBAR';
export const ACTION_TOOGLE_HEADER = 'ACTION_TOOGLE_HEADER';
export const ACTION_SET_HEADER_STYLE = 'ACTION_SET_HEADER_STYLE';
export const ACTION_TOGGLE_HEADER_FLUID = 'ACTION_TOGGLE_HEADER_FLUID';
export const ACTION_SET_SCREEN_SIZE = 'ACTION_SET_SCREEN_SIZE';
export const ACTION_SET_SIDEBAR_SKIN = 'ACTION_SET_SIDEBAR_SKIN';
export const ACTION_SET_NAVBAR_SKIN = 'ACTION_SET_NAVBAR_SKIN';
export const ACTION_SET_SKIN_COLOR = 'ACTION_SET_SKIN_COLOR';

export const SIDEBAR_STYLE_DEFAULT = 'default';
export const SIDEBAR_STYLE_SLIM = 'slim';
export const SIDEBAR_STYLE_BIGICONS = 'bigicons';

export const SKIN_DARK = 'dark';
export const SKIN_LIGHT = 'light';
export const SKIN_COLOR = 'color';

export const SKIN_COLOR_PRIMARY = 'primary';
export const SKIN_COLOR_INFO = 'info';
export const SKIN_COLOR_SUCCESS = 'success';
export const SKIN_COLOR_WARNING = 'warning';
export const SKIN_COLOR_DANGER = 'danger';

export const SCREEN_SIZE_LG = 'SCREEN_SIZE_LG';
export const SCREEN_SIZE_MD = 'SCREEN_SIZE_MD';
export const SCREEN_SIZE_SM = 'SCREEN_SIZE_SM';
export const SCREEN_SIZE_XS = 'SCREEN_SIZE_XS';

export const CONTENT_VIEW_STATIC = 'static';
export const CONTENT_VIEW_FLUID = 'fluid';
export const CONTENT_VIEW_BOXED = 'boxed';

export const HEADER_STYLE_SIMPLE = 'simple';
export const HEADER_STYLE_BREADCRUMBS = 'breadcrumbs';

export const SIDEBAR_ADDON_DEFAULT = 'Default';
export const SIDEBAR_ADDON_PROGRESS = 'Progress';
export const SIDEBAR_ADDON_MENU = 'Menu';
export const SIDEBAR_ADDON_BARS = 'Bars';
export const SIDEBAR_ADDON_AVATAR_AND_BARS = 'Avatar & Bars';
export const SIDEBAR_ADDON_AVATAR_AND_NUMBERS = 'Avatar & Numbers';
export const SIDEBAR_ADDON_AVATAR_AND_STATS = 'Avatar & Stats';

export const DEFAULT_SETTINGS = {
    navbarEnabled: true,
    navbarFixed: false,
    navbarExpanded: false,
    navbarSkin: SKIN_DARK,
    sidebarEnabled: true,
    sidebarStyle: SIDEBAR_STYLE_DEFAULT,
    sidebarFixed: false,
    sidebarAside: false,
    sidebarAddon: SIDEBAR_ADDON_DEFAULT,
    sidebarSkin: SKIN_DARK,
    contentView: CONTENT_VIEW_FLUID,
    footerEnabled: true,
    footerFixed: false,
    headerEnabled: true,
    headerStyle: HEADER_STYLE_BREADCRUMBS,
    skinColor: SKIN_COLOR_PRIMARY,
    rawContent: false
};
// ------------------------------------
// Actions
// ------------------------------------
export function toggleOptions(visible = true) {
    return {
        type: ACTION_OPTIONS_TOGGLE,
        visible
    }
}

export function restoreSettings(settings = null) {
    if (!settings) {
        settings = currentPageLayoutSettings;
    } else {
        currentPageLayoutSettings = Object.assign({}, DEFAULT_SETTINGS, settings);
    }

    return {
        type: ACTION_RESTORE_SETTINGS,
        settings: currentPageLayoutSettings
    }
}

export function setLayoutSettingsSafe(settings = null) {
    return {
        type: ACTION_SET_LAYOUT_SETTINGS_SAFE,
        settings
    };
}

export function setCurrentPageSettings(settings = {}) {
    currentPageLayoutSettings = settings;

    return {
        type: ACTION_SET_CURRENT_PAGE_SETTINGS,
        settings: settings
    }
}

export function setCurrentPageSettingsLiteral(settings = {}) {
    currentPageLayoutSettings = settings;

    return {
        type: ACTION_SET_CURRENT_PAGE_SETTINGS_LITERAL,
        settings: settings
    }
}

export function toggleNavbar(enabled = true) {
    return {
        type: ACTION_TOGGLE_NAVBAR,
        enabled
    }
}

export function toggleNavbarFixed(enabled = false) {
    return {
        type: ACTION_TOGGLE_NAVBAR_FIXED,
        enabled
    }
}

export function toggleNavbarExpanded(expanded = false) {
    return {
        type: ACTION_TOGGLE_NAVBAR_EXPANDED,
        expanded
    }
}

export function setNavbarSkin(skin = SKIN_DARK) {
    return {
        type: ACTION_SET_NAVBAR_SKIN,
        skin
    }
}

export function toggleSidebar(enabled = true) {
    return {
        type: ACTION_TOGGLE_SIDEBAR,
        enabled
    }
}

export function toggleSidebarFixed(enabled = false) {
    return {
        type: ACTION_TOGGLE_SIDEBAR_FIXED,
        enabled
    }
}

export function toggleSidebarAside(enabled = false) {
    return {
        type: ACTION_TOGGLE_SIDEBAR_ASIDE,
        enabled
    }
}

export function setSidebarStyle(sidebarStyle = SIDEBAR_STYLE_DEFAULT) {
    return {
        type: ACTION_SET_SIDEBAR_STYLE,
        sidebarStyle
    }
}

export function toggleOverlaySidebarOpen(opened = false) {
    return {
        type: ACTION_TOGGLE_SIDEBAR_OPENED,
        opened,
    }
}

export function changeSidebarAddOn(sidebarAddOn = SIDEBAR_ADDON_DEFAULT) {
    return {
        type: ACTION_CHANGE_SIDEBAR_ADDON,
        sidebarAddOn
    }
}

export function setSidebarSkin(skin = SKIN_DARK) {
    return {
        type: ACTION_SET_SIDEBAR_SKIN,
        skin
    }
}

export function setContentView(contentView = CONTENT_VIEW_FLUID) {
    return {
        type: ACTION_SET_CONTENT_VIEW,
        contentView
    }
}

export function setCurrentScreenSize(screenSize = SCREEN_SIZE_LG) {
    return {
        type: ACTION_SET_SCREEN_SIZE,
        screenSize
    }
}

export function toggleFooter(enabled = true) {
    return {
        type: ACTION_TOGGLE_FOOTER,
        enabled
    }
}

export function toggleFooterFixed(enabled = false) {
    return {
        type: ACTION_TOGGLE_FOOTER_FIXED,
        enabled
    }
}

export function toggleRightSidebar(enabled = false) {
    return {
        type: ACTION_TOGGLE_RSIDEBAR,
        enabled
    }
}

export function toggleHeader(enabled = true) {
    return {
        type: ACTION_TOOGLE_HEADER,
        enabled
    }
}

export function setHeaderStyle(headerStyle = HEADER_STYLE_BREADCRUMBS) {
    return {
        type: ACTION_SET_HEADER_STYLE,
        headerStyle
    }
}

export function setSkinColor(color = SKIN_COLOR_PRIMARY) {
    return {
        type: ACTION_SET_SKIN_COLOR,
        color
    }
}

export const actions = {
    toggleOptions,
    toggleNavbar,
    toggleNavbarFixed,
    toggleNavbarExpanded,
    toggleSidebar,
    changeSidebarAddOn,
    toggleSidebarFixed,
    toggleSidebarAside,
    toggleFooter,
    toggleFooterFixed,
    setSidebarStyle,
    setContentView,
    toggleHeader,
    setHeaderStyle,
    toggleOverlaySidebarOpen,
    setCurrentPageSettingsLiteral,
    setSkinColor
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTION_OPTIONS_TOGGLE]: (state, action) => {
      return Object.assign({}, state, { optionsVisible: action.visible });
  },

  [ACTION_RESTORE_SETTINGS]: (state, action) => {
      return Object.assign({}, state, DEFAULT_SETTINGS, action.settings);
  },

  [ACTION_SET_LAYOUT_SETTINGS_SAFE]: (state, action) => {
      return Object.assign({}, state, _.pick(action.settings, _.keys(action.settings)));
  },

  [ACTION_SET_CURRENT_PAGE_SETTINGS]: (state, action) => {
      // Recover previousOptions and apply the current page options
      const previousOptions = _.pick(DEFAULT_SETTINGS, _.keys(action.settings));

      return Object.assign({}, state, state.previousOptions, action.settings, {
          overlaySidebarOpen: false,
          // Save options state from before navigation
          previousOptions: previousOptions
      });
  },

  [ACTION_SET_CURRENT_PAGE_SETTINGS_LITERAL]: (state, action) => {
      return Object.assign({}, state, DEFAULT_SETTINGS, action.settings, {
          overlaySidebarOpen: false
      });
  },

  [ACTION_TOGGLE_NAVBAR]: (state, action) => {
      return Object.assign({}, state, { navbarEnabled: action.enabled });
  },

  [ACTION_TOGGLE_NAVBAR_FIXED]: (state, action) => {
      return Object.assign({}, state, { navbarFixed: action.enabled });
  },

  [ACTION_TOGGLE_NAVBAR_EXPANDED]: (state, action) => {
      return Object.assign({}, state, { navbarExpanded: action.expanded });
  },

  [ACTION_SET_NAVBAR_SKIN]: (state, action) => {
      return Object.assign({}, state, { navbarSkin: action.skin});
  },

  [ACTION_TOGGLE_SIDEBAR]: (state, action) => {
      return Object.assign({}, state, { sidebarEnabled: action.enabled });
  },

  [ACTION_TOGGLE_SIDEBAR_FIXED]: (state, action) => {
      return Object.assign({}, state, { sidebarFixed: action.enabled});
  },

  [ACTION_TOGGLE_SIDEBAR_ASIDE]: (state, action) => {
      return Object.assign({}, state, { sidebarAside: action.enabled });
  },

  [ACTION_TOGGLE_SIDEBAR_OPENED]: (state, action) => {
      return Object.assign({}, state, { overlaySidebarOpen: action.opened });
  },

  [ACTION_CHANGE_SIDEBAR_ADDON]: (state, action) => {
      return Object.assign({}, state, {
          sidebarStyle: state.sidebarStyle === SIDEBAR_STYLE_SLIM ? SIDEBAR_STYLE_DEFAULT : state.sidebarStyle,
          sidebarAddon: action.sidebarAddOn
      });
  },

  [ACTION_SET_SIDEBAR_SKIN]: (state, action) => {
      return { ...state, sidebarSkin: action.skin };
  },

  [ACTION_TOGGLE_FOOTER]: (state, action) => {
      return Object.assign({}, state, { footerEnabled: action.enabled });
  },

  [ACTION_TOGGLE_FOOTER_FIXED]: (state, action) => {
      return Object.assign({}, state, { footerFixed: action.enabled });
  },

  [ACTION_SET_SIDEBAR_STYLE]: (state, action) => {
      return Object.assign({}, state, { sidebarStyle: action.sidebarStyle});
  },

  [ACTION_SET_CONTENT_VIEW]: (state, action) => {
      return Object.assign({}, state, { contentView: action.contentView});
  },

  [ACTION_SET_SCREEN_SIZE]: (state, action) => {
      let sidebarStyle = state.sidebarStyle;
      let sidebarOverlay = false;

      switch(action.screenSize) {
            case SCREEN_SIZE_XS:
                sidebarOverlay: true;
            case SCREEN_SIZE_LG:
                sidebarStyle = SIDEBAR_STYLE_DEFAULT;
            break;
            case SCREEN_SIZE_MD:
            case SCREEN_SIZE_SM:
                sidebarStyle = SIDEBAR_STYLE_SLIM;
            break;
      }

      return Object.assign({}, state, {
          currentScreenSize: action.screenSize,
          sidebarStyle: sidebarStyle,
          sidebarOverlay: sidebarOverlay
      });
  },

  [ACTION_TOGGLE_RSIDEBAR]: (state, action) => {
      return Object.assign({}, state, { rightSidebarEnabled: !state.rightSidebarEnabled });
  },
  [ACTION_SET_HEADER_STYLE]: (state, action) => {
      return Object.assign({}, state, { headerStyle: action.headerStyle });
  },
  [ACTION_TOOGLE_HEADER]: (state, action) => {
      return Object.assign({}, state, { headerEnabled: !state.headerEnabled })
  },
  [ACTION_SET_SKIN_COLOR]: (state, action) => {
      return { ...state, skinColor: action.color };
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Object.assign({}, DEFAULT_SETTINGS, {
    overlaySidebarOpen: false,
    currentScreenSize: SCREEN_SIZE_LG,
    rightSidebarEnabled: false,
    optionsVisible: false,
    previousOptions: { }
});

export default function layoutReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    const modifiedState = handler ? handler(state, action) : state;

    // Determine the difference between current state, currentPageSettings and default
    // and notify the difference
    const optionsOnly = _.pick(modifiedState, _.keys(DEFAULT_SETTINGS));
    const optionsDiff = (((defaultOptions, currentOptions) => {
        const outputObj = { };
        for(let key of _.keys(defaultOptions)) {
            if(_.has(currentOptions, key) && !_.isEqual(defaultOptions[key], currentOptions[key])) {
                outputObj[key] = currentOptions[key];
            }
        }
        return outputObj;
    })(Object.assign({}, DEFAULT_SETTINGS, currentPageLayoutSettings), optionsOnly));

    executeChangeCallbacks(optionsDiff);

    return modifiedState;
};

// -----------------------------------
// Change Notification
// -----------------------------------
export function registerChangeHandler(changeCallback) {
    changeCallbacks.push(changeCallback);
};

function executeChangeCallbacks(stateDiffFromDefault) {
    for(let callback of changeCallbacks) {
        callback(stateDiffFromDefault);
    }
};
