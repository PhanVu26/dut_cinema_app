import { combineReducers } from "redux";

import movies from "./MovieReducer"
import cinemas from "./CinemaReducer"
import cinemaShowtime from "./CinemaShowtimeReducer"
import UserReducer from "./UserReducer";
import booking from "./MovieBookingReducer";

const rootReducer = combineReducers({
    movies,
    cinemas,
    cinemaShowtime,
    UserReducer,
    booking
})

export default rootReducer;