import { call, put } from "redux-saga/effects";
import API from "./AllComicsApis";
import {
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,
} from "./AllComicsAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./AllComicsTypes";

export function* sagasRequestExample(action) {
  const startAfter = action.payload;
  // console.log("startAfter", startAfter);
  try {
    const response = yield call(API.apiExampleRequest, startAfter);
    yield put(fetchCardsSuccess(response));
  } catch (err) {
    yield put(fetchCardsFailure(err.message));
  }
}

export function* AllComicsSagas1() {
  yield takeLatest(TYPES.FETCH_CARDS_REQUEST, sagasRequestExample);
}
