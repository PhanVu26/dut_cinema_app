import * as types from "../constants/actionTypes";
import callApi from "../utils/apiCallerServer";

// movies actions
export const actFetchDataMoviesRequest = () => {
  return (dispatch) => {
    return callApi("movies?relations=actors,genres&page=1&perPage=1000", "GET", null).then((res) => {
      //console.log("data", res.data.results)
      dispatch(actFetchDataMovies(res.data.results));
    });
  };
};
  
export const actFetchDataMovies = (movies) => {
  return {
    type: types.GET_MOVIE_DATA,
    movies,
  };
};


// cinemas actions
export const actFetchDataCinemasRequest = () => {
  return (dispatch) => {
    return callApi("cinemas", "GET", null).then((res) => {
      //console.log("data", res.data.results)
      dispatch(actFetchDataCinemas(res.data.results));
    });
  };
};
  
export const actFetchDataCinemas = (cinemas) => {
  return {
    type: types.GET_CINEMA_DATA,
    cinemas,
  };
};


// get movies of cinema actions
export const actFetchCinemaShowtimesRequest = (id) => {
  return (dispatch) => {
    return callApi(`cinemas/${id}/showtimes`, "GET", null).then((res) => {
      //console.log("data", res.data.movies)
      dispatch(actFetchCinemaShowtimes(res.data.movies));
    });
  };
};
  
export const actFetchCinemaShowtimes = (cinemaShowtime) => {
  return {
    type: types.GET_CINEMA_SHOWTIMES,
    cinemaShowtime,
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
