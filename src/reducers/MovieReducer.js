import * as types from "../constants/actionTypes";
var initialState = []

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_MOVIE_DATA:
            var newState = [...state];
            if(action.movies){
                newState = action.movies
            }
            return newState;       
        default: return state;     
    }
    return state;
}


export default myReducer;