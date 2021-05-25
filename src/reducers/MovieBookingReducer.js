import * as types from "../constants/actionTypes";
var initialState = []

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_BOOKING_SHOWTIME:
            var newState = [...state];
            if(action.booking){
                newState = action.booking
            }
            return newState;
        default: return state;     
    }
}


export default myReducer;