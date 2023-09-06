import {all, fork} from 'redux-saga/effects'
import AppSaga from './app'

export default function* rootSaga() {
    yield all([fork(AppSaga)])
}