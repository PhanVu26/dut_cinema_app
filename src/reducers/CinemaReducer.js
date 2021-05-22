import * as types from "../constants/actionTypes";
var initialState = []

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_CINEMA_DATA:
            var newState = [...state];
            if(action.cinemas){
                newState = action.cinemas
            }
            return newState;       
        default: return state;     
    }
    return state;
}


export default myReducer;