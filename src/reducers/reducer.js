import { combineReducers } from "redux";

import movies from "./MovieReducer"
import cinemas from "./CinemaReducer"
import cinemaShowtime from "./CinemaShowtimeReducer"
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
    movies,
    cinemas,
    cinemaShowtime,
    UserReducer
})

export default rootReducer;