import { combineReducers } from "redux";
import courseReducer from "./Course.reducer";
import UserReducer from "./User.reducer";

const rootReducer = combineReducers({
  course: courseReducer,
  user: UserReducer,
});

export default rootReducer;
