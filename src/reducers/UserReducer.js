import * as types from "../constants/actionTypes";

var initialState = {
  user: {},
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_DATA: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
}

export default UserReducer;
