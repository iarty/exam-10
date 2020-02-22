import {
  FETCH_NEWS_SUCCESS,
  POST_NEWS_SUCCESS,
  SET_ERROR_NEWS,
  SET_LOADING_NEWS
} from "../actions/actionsType";

const initialState = {
  news: [],
  oneNews: {},
  loading: false,
  error: null
};

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_NEWS:
      return { ...state, loading: true };
    case SET_ERROR_NEWS:
      return { ...state, loading: false, error: action.payload.error };
    case POST_NEWS_SUCCESS:
      return { ...state, loading: false };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload.news,
        error: null,
        loading: false
      };
    default:
      return state;
  }
}
