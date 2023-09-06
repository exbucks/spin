import {put, call, takeEvery, all, fork} from 'redux-saga/effects'

import {fetchLyrics} from 'services/app'
import * as appActions from 'actions/app'
import * as actionTypes from 'consts/redux'

function* onLoadLyrics({artist, song}) {
    try {
        yield put(appActions.getLyricsRequest())
        const {data} = yield call(fetchLyrics, artist, song)
        yield put(appActions.getLyricsSuccess(data.lyrics))
    } catch (error) {
        yield put(appActions.getLyricsFailure(error.response.data.error))
    }
}

function* watchOnLoadLyrics() {
    yield takeEvery(actionTypes.GET_LYRICS, onLoadLyrics)
}

export default function* lyricsSaga() {
    yield all([fork(watchOnLoadLyrics)])
}