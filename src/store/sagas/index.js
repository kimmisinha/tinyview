import { AllComicsSagas1 } from '../AllComics/AllComicsSagas';
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with 
  console.log("hi")
  yield all([AllComicsSagas1()]);
  // OR
}
