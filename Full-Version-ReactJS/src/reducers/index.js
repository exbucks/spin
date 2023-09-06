import {combineReducers} from 'redux'
import appReducer from './app'
import isLoadingReducer from './isLoading'
import errorReducer from './error'

const rootReducer = combineReducers({
    app: appReducer,
    isLoading: isLoadingReducer,
    error: errorReducer
})

export default rootReducer