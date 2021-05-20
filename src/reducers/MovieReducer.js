import * as types from "../constants/actionTypes";
var initialState = []

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_MOVIE_DATA:
            return action.movies;       
        default: return state;     
    }
    return state;
}


export default myReducer;