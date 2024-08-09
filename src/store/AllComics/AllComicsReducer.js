import * as types from "./AllComicsTypes";

const initialState = {
  allComics: [],
  loading: false,
  error: null,
};
const cusomurl = "https://storage.googleapis.com/tinyview-dev.appspot.com";

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CARDS_SUCCESS:
      const _data = action.payload.result.data.map((comic) => ({
        title: comic.title || "",
        dateTime: comic.datetime || "",
        image: comic.image ? `${cusomurl}/${comic.image}` : "",
        commentCount: comic.commentCount || 0,
      }));
      console.log("All comics-->", _data);

      return {
        ...state,
        loading: false,
        allComics: _data,
        loading: true,
        error: null,
      };

    case types.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        allComics: action.payload,
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

export default cardsReducer;
