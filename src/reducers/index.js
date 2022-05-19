import { combineReducers } from "redux";
import useReducer from "./userReducer";

const rootReducers = combineReducers({
    userState: useReducer,
}
);


export default rootReducers;
