/*
 *
 * HomePage2 reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_GALLERY,
         FETCH_GALLERY_SUCCESS,
         FETCH_GALLERY_FAILURE } from './constants'

const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GALLERY_SUCCESS:
      return action.gallery;
    case FETCH_GALLERY_FAILURE:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
