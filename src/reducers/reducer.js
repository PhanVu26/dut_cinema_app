import { combineReducers } from "redux";

import movies from "./MovieReducer"
const rootReducer = combineReducers({
    movies
})

export default rootReducer;