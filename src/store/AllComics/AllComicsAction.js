// AllComicsAction.js

import * as allType from "./AllComicsTypes";

// Replace action name and update action types
export const actionRequests = (data) => ({
  type: allType.GET_DATA_RECEIVE,
  payload: data,
});

// export const fetchDescriptionsSuccess = (descriptions) => ({
//   type: allType.FETCH_DESCRIPTIONS_SUCCESS,
//   payload: descriptions,
// });
