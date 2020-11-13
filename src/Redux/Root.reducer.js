import { combineReducers } from "redux";
import courseReducer from "./Course.reducer";

const rootReducer = combineReducers({
  course: courseReducer,
});

export default rootReducer;
