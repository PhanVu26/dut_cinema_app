import * as types from "../constants/actionTypes";
import callApi from "../utils/apiCallerServer";

export const actFetchDataMoviesRequest = () => {
  return (dispatch) => {
    return callApi("movies?relations=actors,genres", "GET", null).then(
      (res) => {
        console.log("data", res.data.results);
        dispatch(actFetchDataMovies(res.data.results));
      }
    );
  };
};

export const actFetchDataMovies = (movies) => {
  return {
    type: types.GET_MOVIE_DATA,
    movies,
  };
};

export const actLogin = (user) => {
  return {
    type: types.GET_USER_DATA,
    user,
  };
};

export const actLoginRequest = (account) => {
  return (dispatch) => {
    return callApi("/auth/login", "POST", account).then((res) => {
      dispatch(actLogin(res.data));
    });
  };
};
