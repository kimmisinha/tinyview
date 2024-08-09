import { call, put } from "redux-saga/effects";
import API from "./AllComicsApis";
import { fetchCardsRequest,fetchCardsSuccess,fetchCardsFailure } from "./AllComicsAction"; 
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./AllComicsTypes";

// Replace with your sagas
export function* sagasRequestExample() {
  try {
    const response = yield call(API.apiExampleRequest);
    yield put(fetchCardsSuccess(response)); 
  } catch (err) {
    yield put(fetchCardsFailure(err.message));
  }
}

export function* AllComicsSagas1() {
  yield takeLatest(TYPES.FETCH_CARDS_REQUEST, sagasRequestExample);
}




