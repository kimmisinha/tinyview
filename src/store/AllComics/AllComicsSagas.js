import { call, put } from "redux-saga/effects";
import API from "./AllComicsApis";
import { actionRequests,fetchDescriptionsSuccess } from "./AllComicsAction"; 
import { dispatchSnackbarError } from "../../utils/Shared";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./AllComicsTypes";

// Replace with your sagas
export function* sagasRequestExample() {
  try {
    const response = yield call(API.apiExampleRequest);
    yield put(actionRequests(response.data)); // Pass the data to the action
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}

export function* AllComicsSagas1() {
  yield takeLatest(TYPES.GET_DATA_REQUEST, sagasRequestExample);
}


// function* fetchDescriptionsSaga() {
//   try {
//     const response = yield call(API.apiExampleRequest)
//     yield put(fetchDescriptionsSuccess(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// }

// export function* watchSagas() {
//   yield takeEvery(TYPES.FETCH_DESCRIPTIONS_SUCCESS, fetchDescriptionsSaga);
// }