import * as actions from 'consts/redux'
import {
  SKIN_DARK,
  SIDEBAR_STYLE_DEFAULT,
  SIDEBAR_ADDON_DEFAULT,
  CONTENT_VIEW_FLUID,
  HEADER_STYLE_BREADCRUMBS,
  SKIN_COLOR_PRIMARY
} from 'consts/app'

const initialState = {
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
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_LYRICS:
    case actions.GET_LYRICS_SUCCESS:
      return {
        lyrics: action.lyrics
      }
    default:
      return state
  }
}
