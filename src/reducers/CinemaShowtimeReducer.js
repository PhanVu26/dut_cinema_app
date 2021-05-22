import * as types from "../constants/actionTypes";
var initialState = []

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_CINEMA_SHOWTIMES:
            var newState = [...state];
            if(action.cinemaShowtime){
                newState = action.cinemaShowtime
            }
            return newState;       
        default: return state;     
    }
    return state;
}


export default myReducer;