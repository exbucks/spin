import * as actions from 'consts/redux'

const initialState = {
    lyrics: ''
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