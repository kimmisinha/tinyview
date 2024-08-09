import * as types from "./AllComicsTypes";

const initialState = {
  allComics: [],
  loading: false,
  error: null,
};
const imageUrl = "https://storage.googleapis.com/tinyview-dev.appspot.com";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CARDS_SUCCESS:
      const data = action.payload.result.data.map((comic) => ({
        title: comic.title || "",
        dateTime: comic.datetime || "",
        image: comic.image ? `${imageUrl}${comic.image}` : "",
        commentCount: comic.commentCount || 0,
      }));
      // console.log("All comics-->", data);

      return {
        ...state,
        loading: false,
        allComics: [...data],
      };

    case types.FETCH_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
