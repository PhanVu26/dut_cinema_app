import { combineReducers } from "redux";

import movies from "./MovieReducer"
import cinemas from "./CinemaReducer"
const rootReducer = combineReducers({
    movies,
    cinemas
})

export default rootReducer;