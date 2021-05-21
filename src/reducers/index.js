import { Platform } from 'react-native';


//const API = Platform.OS === 'android' ? 'http://10.0.3.2:3000/v1' : 'http://localhost:3000/v1';
const API = 'https://cinema-nestjs.herokuapp.com'

// Middleware looking for GET_MOVIE_DATA action, and calls the API when dispatched
export const apiMiddleware = store => next => action => {
  // Pass all actions through by default
  next(action);
  switch (action.type) {
    // In case we receive an action to send an API request
    case 'GET_MOVIE_DATA':
      // Dispatch GET_MOVIE_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_MOVIE_DATA_LOADING'});
      // Make API call and dispatch appropriate actions when done
      fetch('https://cinema-nestjs.herokuapp.com/movies')
        .then(response => response.json())
        .then(data => next({
          type: 'GET_MOVIE_DATA_RECIEVED',
          data
        }))
        .catch(error => next({
          type: 'GET_MOVIE_DATA_ERROR',
          error
        }));
      break;
    //Do nothing if the action does not interest us
    case 'GET_SHOWTIME_DATA':
      // Dispatch GET_MOVIE_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_SHOWTIME_DATA_LOADING'});
      // Make API call and dispatch appropriate actions when done
      fetch(`https://cinema-nestjs.herokuapp.com/movies/${action.payload.id}/showtimes`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_SHOWTIME_DATA_RECIEVED',
          data
        }))
        .catch(error => next({
          type: 'GET_SHOWTIME_DATA_ERROR',
          error
        }));
      break;
    case 'GET_THEATER_DATA':
      // Dispatch GET_MOVIE_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_THEATER_DATA_LOADING'});
      // Make API call and dispatch appropriate actions when done
      fetch(`https://cinema-nestjs.herokuapp.com/cinemas`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_THEATER_DATA_RECIEVED',
          data
        }))
        .catch(error => next({
          type: 'GET_THEATER_DATA_ERROR',
          error
        }));
      break;
    default: break;
  }
};

const initialState = {
  movies: [],
  loading: true,
  movie:{},
  theater:[],
  movies_by_theater:[]
}

// Reducer that handles dispatched actions and updates for storage
// When apiMiddleware dispatches GET_MOVIE_DATA_RECIEVED, this reducer is being called
//   and it pulls movie data out of passed response data and stores it in storage.
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_DATA_LOADING':
      return {
        ...state,                       // keep existing state
        loading: true                   // but change loading to true
      };

    case 'GET_MOVIE_DATA_RECIEVED':
        console.log('data1', action.data)
      return {
        loading: false,                 // set loading to false
        movies: action.data.results      // update movies array with response data
      };

    case 'GET_MOVIE_DATA_ERROR':
      return state;

    case 'GET_SHOWTIME_DATA_LOADING':
      return {
        ...state,                       // keep existing state
        loading: true                   // but change loading to true
      };

    case 'GET_SHOWTIME_DATA_RECIEVED':
        console.log('data2', action.data)
      return {
        loading: false,                 // set loading to false
        movieShowtime: action.data      // update movies array with response data
      };

    case 'GET_SHOWTIME_DATA_ERROR':
      return state;
    
      case 'GET_THEATER_DATA_LOADING':
        return {
          ...state,                       // keep existing state
          loading: true                   // but change loading to true
        };
  
      case 'GET_THEATER_DATA_RECIEVED':
          console.log('data2', action.data)
        return {
          loading: false,                 // set loading to false
          theater: action.data     // update movies array with response data
        };
  
      case 'GET_THEATER_DATA_ERROR':
        return state;
  
    default:
      return state;
  }
};
