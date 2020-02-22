import {
  FETCH_NEWS_SUCCESS,
  POST_NEWS_SUCCESS,
  SET_ERROR_NEWS,
  SET_LOADING_NEWS
} from "./actionsType";
import axios from "axios";

const handleDataToFormData = data => {
  let formData = new FormData();
  for (let key in data) {
    if (key === "image") {
      for (let key in data["image"]) {
        formData.append("image", data["image"][key]);
      }
    } else {
      formData.append(key, data[key]);
    }
  }
  return formData;
};

const setLoading = () => ({ type: SET_LOADING_NEWS });
const setError = error => ({ type: SET_ERROR_NEWS, payload: error });
const addNews = () => ({ type: POST_NEWS_SUCCESS });
const getAllNews = payload => ({ type: FETCH_NEWS_SUCCESS, payload });

export const postNews = data => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      await axios.post("/news", handleDataToFormData(data));
      dispatch(addNews());
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };
};

export const getNews = () => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      const response = await axios.get("/news");
      if (response.data) {
        dispatch(getAllNews(response.data));
      }
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };
};
