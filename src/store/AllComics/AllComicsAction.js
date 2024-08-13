import * as allType from "./AllComicsTypes";

export const fetchCardsRequest = (startAfter) => ({
  type: allType.FETCH_CARDS_REQUEST,
  payload: startAfter,
});
export const fetchCardsSuccess = (data) => ({
  type: allType.FETCH_CARDS_SUCCESS,
  payload: data,
});
export const fetchCardsFailure = (error) => ({
  type: allType.FETCH_CARDS_FAILURE,
  payload: error,
});
