import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import 'whatwg-fetch';
import { FETCH_GALLERY, 
         FETCH_GALLERY_SUCCESS,
         FETCH_GALLERY_FAILURE 
       } from './constants'

import request from 'utils/request';

// worker Saga: will be fired on FETCH_GALLERY actions
function* fetchGalleryAsync(action) {
  const response = yield call(request, 'https://api.imgur.com/3/gallery/hot/viral/0.json');
  if (response)
    yield put({ type: 'FETCH_GALLERY_SUCCESS', gallery: response })
  else
    yield put({ type: 'FETCH_GALLERY_FAILURE', error })
}

// Our watcher Saga: spawn a new fetchGalleryAsync task on each FETCH_GALLERY
function* watchFetchGallery() {
  console.log("hit watchFetchGallery");
  yield* takeEvery(FETCH_GALLERY, fetchGalleryAsync);
}

// All sagas to be loaded
// typically are just the watchers, not the async calls
export default [
  watchFetchGallery
];
