//src/reducers/index.js

import { combineReducers } from "redux";
import addReducer from "./addReducers";

const rootReducer = combineReducers({
	add: addReducer,
});

export default rootReducer;
