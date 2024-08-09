import * as types from "./AllComicsTypes";

const INITIAL_STATE = {
  allComics: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_RECEIVE:
      return {
        ...state,
        allComics: action.payload.map(comic => ({
          title: comic.title || "",
          dateTime: comic.dateTime || "",
          images: comic.images || [],
          commentCount: comic.commentCount || 0
        }))
      };
    default:
      return state;
  }
};
