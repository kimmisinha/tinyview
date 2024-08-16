import * as types from "./AllComicsTypes";

const initialState = {
  allComics: [],
  loading: false,
  error: null,
};

const imageUrl = "https://storage.googleapis.com/tinyview-dev.appspot.com";
export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CARDS_REQUEST:
      return {
        ...state,
        loading: true, 
      };
    case types.FETCH_CARDS_SUCCESS:
      const data = action.payload.result.data.map((comic) => {
        const date = new Date(comic.datetime);

        // Formatting the date and time
        const optionsDate = {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        };
        const optionsTime = {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        };

        const formattedDate = date.toLocaleDateString("en-US", optionsDate);
        const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

        return {
          title: comic.title || "",
          dateTime: `${formattedDate} • ${formattedTime}`,
          image: comic.image ? `${imageUrl}${comic.image}` : "",
          commentCount: comic.commentCount || 0,
          likeCount: comic.likeCount || 0,
          description:
            comic.description || "descriptionBonus Panel with Premium Comic",
          avatarImage: comic.user.image ? `${imageUrl}${comic.user.image}` : "",
          comment: comic.comment || "Bonus panel testing 2",
          id: comic.storyID,
        };
      });
      // console.log("All comics-->", data);

      return {
        ...state,
        loading: false,
        allComics: [...state.allComics,...data],
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
