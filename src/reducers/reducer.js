import { combineReducers } from "redux";

import movies from "./MovieReducer"
import cinemas from "./CinemaReducer"
import cinemaShowtime from "./CinemaShowtimeReducer"
const rootReducer = combineReducers({
    movies,
    cinemas,
    cinemaShowtime
})

export default rootReducer;