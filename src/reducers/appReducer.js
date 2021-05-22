import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const myReducer = combineReducers({
  UserReducer,
});

export default myReducer;
